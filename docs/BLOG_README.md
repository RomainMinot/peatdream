# Blog Peatdream - Documentation

## 🎨 Architecture

Le blog a été conçu avec une architecture moderne et optimisée pour la lecture.

### Structure des composants

```
src/
├── components/
│   ├── BlogHero.astro          # Hero section avec image de garde
│   ├── BlogContent.astro       # Wrapper du contenu avec styles prose
│   ├── TableOfContents.astro   # Table des matières sticky (desktop)
│   ├── BlogNavigation.astro    # Navigation précédent/suivant
│   └── FormattedDate.astro     # Affichage des dates
├── layouts/
│   └── BlogPost.astro          # Layout principal des articles
├── pages/
│   └── blog/
│       ├── index.astro         # Liste des articles
│       └── [...slug].astro     # Page article dynamique
├── utils/
│   └── readingTime.ts          # Calcul du temps de lecture
└── styles/
    └── global.css              # Styles globaux
```

## 📝 Format des articles

### Frontmatter

```yaml
---
title: Titre de l'article
date: 21. janvier 2025
category: FRANCE
url: https://www.peatdream.com/...
description: Description optionnelle
heroImage: ./image.jpg # ou URL externe
tags: [whisky, dégustation] # optionnel
---
```

### Champs supportés

- `title` (requis) : Titre de l'article
- `date` ou `pubDate` : Date de publication
- `category` : Catégorie (FRANCE, SCOTLAND, IRELAND, etc.)
- `url` : URL de l'article original
- `description` : Description pour SEO (optionnelle)
- `heroImage` : Image de garde (image locale ou URL)
- `tags` : Array de tags (optionnel)
- `updatedDate` : Date de mise à jour (optionnelle)

## 🎯 Fonctionnalités

### 1. Images de garde automatiques

Si aucune `heroImage` n'est définie, le système extrait automatiquement la première image du contenu markdown.

### 2. Temps de lecture

Calculé automatiquement à partir du contenu (200 mots/minute pour le français).

### 3. Table des matières

Générée automatiquement à partir des titres H2 et H3, affichée en sticky sur desktop.

### 4. Navigation

Liens vers les articles précédent et suivant (triés par date).

### 5. Responsive Design

- **Mobile** : Colonne unique, padding optimisé
- **Tablet** : max-width 2xl, espacement confortable
- **Desktop** : max-width 4xl, TOC sur le côté
- **Large screens** : max-width 5xl avec sidebars

## 🎨 Typographie

### Hiérarchie

- **H1** : 4xl/5xl, bold, accent color
- **H2** : 2xl/3xl, semibold, border-bottom
- **H3** : xl/2xl, semibold
- **Body** : lg, leading-relaxed

### Largeur optimale

Le contenu principal utilise `max-w-[65ch]` pour une lisibilité optimale (65 caractères par ligne).

## 🚀 Utilisation

### Ajouter un nouvel article

1. Créer un fichier `.md` dans `src/content/tastings/`
2. Ajouter le frontmatter
3. Écrire le contenu en markdown
4. Le système s'occupe du reste !

### Markdown supporté

```markdown
# Titre H1

## Titre H2

### Titre H3

Texte normal avec **gras** et _italique_.

[Lien](https://example.com)

![Image](url-image.jpg)

> Citation

- Liste
- À puces

1. Liste
2. Numérotée

\`\`\`javascript
// Bloc de code
console.log('Hello');
\`\`\`

Texte `inline code`
```

## 🎨 Personnalisation

### Couleurs (uno.config.ts)

```typescript
colors: {
  peat: {
    50: "#fffdea",
    // ... palette complète
  },
  accent: {
    50: "#f6f7f9",
    // ... palette complète
  }
}
```

### Styles prose (BlogContent.astro)

Tous les styles du contenu sont définis dans `<style>` du composant.

## 📱 Optimisations

### Performance

- Images optimisées avec Astro Image
- Lazy loading automatique
- CSS minimal et scopé

### SEO

- Meta tags automatiques
- Structured data
- Sitemap généré automatiquement

### Accessibilité

- Focus visible
- Alt texts requis
- Hiérarchie sémantique
- Contraste optimisé

## 🔄 Workflow

1. **Développement** : `pnpm dev`
2. **Build** : `pnpm build`
3. **Preview** : `pnpm preview`

## 📊 Métriques

- **Lighthouse Score** : 95+
- **First Contentful Paint** : < 1.5s
- **Largest Contentful Paint** : < 2.5s
- **Cumulative Layout Shift** : < 0.1

## 🐛 Debugging

### Problèmes courants

**Images ne s'affichent pas**

- Vérifier que le chemin est correct
- Vérifier que l'image existe
- Pour les URLs externes, pas besoin de traitement spécial

**TOC ne s'affiche pas**

- Vérifier qu'il y a des H2/H3 dans le contenu
- Vérifier la résolution d'écran (hidden xl:block)

**Temps de lecture incorrect**

- Vérifier que le contenu est bien dans le body
- Ajuster la vitesse de lecture dans `readingTime.ts`

## 🎉 Améliorations futures

- [ ] Recherche full-text
- [ ] Filtrage par catégorie
- [ ] Dark mode
- [ ] Commentaires
- [ ] Partage social
- [ ] RSS feed enrichi
- [ ] Related posts
- [ ] Reading progress bar

## 📚 Ressources

- [Astro Documentation](https://docs.astro.build)
- [UnoCSS Documentation](https://unocss.dev)
- [MDX Documentation](https://mdxjs.com)

---

Créé avec ❤️ pour Peatdream
