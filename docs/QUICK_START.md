# 🚀 Guide de Démarrage Rapide - Blog Peatdream

## Installation

```bash
# Démarrer le serveur de développement
pnpm dev

# Builder pour la production
pnpm build

# Prévisualiser la production
pnpm preview
```

## Créer un Nouvel Article

### 1. Créer le fichier

```bash
# Format: YYYY-MM-DD-titre-de-larticle.md
touch src/content/tastings/2025-01-21-mon-nouvel-article.md
```

### 2. Ajouter le frontmatter

```yaml
---
title: Mon Nouvel Article
date: 21. janvier 2025
category: SCOTLAND
heroImage: ./images/mon-image.jpg  # ou URL externe
description: Une description pour le SEO (optionnelle)
---
```

### 3. Écrire le contenu

```markdown
# Mon Nouvel Article

![Image de garde](https://example.com/image.jpg)

Votre introduction ici...

## Section 1

Contenu de la section 1...

### Sous-section

Plus de détails...

## Section 2

Autre contenu...
```

### 4. Voir le résultat

Ouvrez http://localhost:4321/tastings

## Formats Supportés

### Frontmatter Complet

```yaml
---
title: Titre de l'Article                    # Requis
date: 21. janvier 2025                       # Ou pubDate
category: FRANCE                             # Optionnel
heroImage: ./images/hero.jpg                 # Optionnel
description: Description SEO                 # Optionnel
url: https://peatdream.com/article/         # Optionnel
tags: [whisky, dégustation, tourbe]         # Optionnel
updatedDate: 2025-01-22                      # Optionnel
---
```

### Catégories Disponibles

- SCOTLAND
- IRELAND
- FRANCE
- JAPAN
- USA
- FINLAND
- MAURICE
- ... (toute catégorie que vous voulez)

## Markdown Avancé

### Images

```markdown
![Alt text](https://example.com/image.jpg)

# Ou avec une image locale
![](./images/mon-image.jpg)
```

### Liens

```markdown
[Texte du lien](https://example.com)

# Lien interne
[Autre article](/tastings/autre-article/)
```

### Citations

```markdown
> Ceci est une citation
> sur plusieurs lignes.
```

### Code

```markdown
# Inline code
Utilisez `npm install` pour installer.

# Bloc de code
\`\`\`javascript
const hello = 'world';
console.log(hello);
\`\`\`
```

### Listes

```markdown
# Non ordonnée
- Item 1
- Item 2
  - Sous-item

# Ordonnée
1. Premier
2. Deuxième
3. Troisième
```

### Tables

```markdown
| Colonne 1 | Colonne 2 |
|-----------|-----------|
| Donnée 1  | Donnée 2  |
| Donnée 3  | Donnée 4  |
```

## Fonctionnalités Automatiques

### ✅ Ce qui est automatique

- **Temps de lecture**: Calculé automatiquement
- **Image de garde**: Extraite de la première image si non définie
- **Table des matières**: Générée depuis les H2 et H3
- **Navigation**: Liens prev/next automatiques
- **Optimisation images**: WebP, lazy loading
- **SEO**: Meta tags, sitemap

### ⚠️ Ce qui est optionnel

- Image de garde dans frontmatter
- Description pour SEO
- Catégorie
- Tags
- URL canonique

## Structure Recommandée

```markdown
---
title: Titre de l'Article
date: 21. janvier 2025
category: SCOTLAND
heroImage: ./images/hero.jpg
---

# Titre Principal

![Image d'introduction](url)

Paragraphe d'introduction captivant...

## Histoire

Contexte et histoire...

## Dégustation

### Nom du Whisky 1

Description de la dégustation...

**Le nez** : notes aromatiques...

**En bouche** : saveurs...

**La finale** : persistance...

### Nom du Whisky 2

Même structure...

## Conclusion

Conclusion et liens...

[Autres articles](/tastings)
```

## Filtrage par Catégorie

### Dans le code

```astro
// Filtrer les articles par catégorie
const scotchPosts = posts.filter(post => 
  post.data.category === 'SCOTLAND'
);
```

### Via URL

```
/tastings?category=FRANCE
/tastings?category=SCOTLAND
```

## Personnalisation

### Couleurs (uno.config.ts)

```typescript
peat: {
  DEFAULT: "#ffaf00",  // Couleur principale
  600: "#e28500",      // Hover states
}
```

### Temps de lecture (readingTime.ts)

```typescript
// Changer la vitesse de lecture
const minutes = Math.ceil(words / 200); // 200 mots/min
```

### Styles prose (BlogContent.astro)

```css
.prose :global(h2) {
  @apply text-2xl md:text-3xl font-semibold;
}
```

## Commandes Utiles

```bash
# Développement
pnpm dev

# Build
pnpm build

# Preview
pnpm preview

# Linter
pnpm astro check

# Format
pnpm format
```

## Troubleshooting

### Images ne s'affichent pas

**Problème**: Les images locales ne se chargent pas  
**Solution**: Utilisez le bon chemin relatif ou des URLs absolues

```markdown
# ✅ Bon
![](../../assets/image.jpg)
![](https://example.com/image.jpg)

# ❌ Mauvais
![](./image.jpg)  # Si l'image n'est pas au bon endroit
```

### TOC ne s'affiche pas

**Problème**: La table des matières est invisible  
**Solution**: 
- Elle n'apparaît que sur desktop (xl:block)
- Vérifiez qu'il y a des H2/H3 dans l'article

### Temps de lecture à 0

**Problème**: Le temps de lecture affiche 0 min  
**Solution**: Vérifiez que l'article a du contenu dans le body

### Erreurs de build

**Problème**: Le build échoue  
**Solution**:
```bash
# Vérifier les erreurs TypeScript
pnpm astro check

# Nettoyer le cache
rm -rf .astro node_modules/.vite
pnpm install
pnpm build
```

## Ressources

- [Documentation Astro](https://docs.astro.build)
- [Markdown Guide](https://www.markdownguide.org)
- [UnoCSS](https://unocss.dev)
- [Blog README](./BLOG_README.md)
- [Improvements Log](./BLOG_IMPROVEMENTS.md)

## Support

Pour toute question, consultez la documentation complète dans `BLOG_README.md`.

---

**Happy Blogging! 🥃✨**

