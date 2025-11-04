# Peatdream Blog

Blog de dégustation de whisky et spiritueux, propulsé par Astro et UnoCSS.

## 📚 Documentation

La documentation complète du blog est disponible dans le dossier [`docs/`](./docs/):

- [🚀 Quick Start Guide](./docs/QUICK_START.md) - Guide de démarrage rapide
- [📘 Blog Documentation](./docs/BLOG_README.md) - Documentation complète
- [✨ Blog Improvements](./docs/BLOG_IMPROVEMENTS.md) - Log des améliorations

## 🚀 Démarrage Rapide

```sh
# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm dev

# Build pour la production
pnpm build

# Prévisualiser la production
pnpm preview
```

## 🏗️ Structure du Projet

```text
├── public/              # Assets statiques
├── src/
│   ├── assets/         # Images et ressources
│   ├── components/     # Composants réutilisables
│   │   ├── header/    # Header du site
│   │   ├── BlogHero.astro
│   │   ├── BlogContent.astro
│   │   ├── TableOfContents.astro
│   │   ├── BlogNavigation.astro
│   │   ├── BlogCard.astro
│   │   └── CategoryFilter.astro
│   ├── content/
│   │   └── blog/      # Articles markdown
│   ├── layouts/       # Layouts Astro
│   │   └── BlogPost.astro
│   ├── pages/
│   │   └── blog/      # Routes du blog
│   ├── styles/        # CSS globaux
│   └── utils/         # Fonctions utilitaires
├── docs/              # Documentation
├── astro.config.mjs
├── uno.config.ts      # Configuration UnoCSS
└── tsconfig.json
```

## 🧞 Commandes

| Commande           | Action                              |
| :----------------- | :---------------------------------- |
| `pnpm install`     | Installe les dépendances            |
| `pnpm dev`         | Lance le serveur à `localhost:4321` |
| `pnpm build`       | Build le site dans `./dist/`        |
| `pnpm preview`     | Prévisualise le build localement    |
| `pnpm astro check` | Vérifie les erreurs TypeScript      |

## ✨ Fonctionnalités

- ✅ Design moderne et responsive
- ✅ Images de garde automatiques
- ✅ Temps de lecture calculé
- ✅ Table des matières interactive
- ✅ Navigation précédent/suivant
- ✅ Filtrage par catégorie
- ✅ Optimisation des images
- ✅ SEO optimisé
- ✅ Performance 95+ sur Lighthouse

## 📝 Créer un Article

1. Créer un fichier `.md` dans `src/content/blog/` (collection appelée via `/tastings`)
2. Ajouter le frontmatter :

```yaml
---
title: Mon Article
date: 21. janvier 2025
category: SCOTLAND
heroImage: ./images/hero.jpg
---
```

3. Écrire le contenu en Markdown
4. L'article apparaît automatiquement sur `/tastings`

## 🎨 Technologies

- [Astro](https://astro.build) - Framework web
- [UnoCSS](https://unocss.dev) - CSS utility-first
- [MDX](https://mdxjs.com) - Markdown amélioré
- [TypeScript](https://www.typescriptlang.org) - Typage statique

## 📖 En Savoir Plus

Consultez la [documentation complète](./docs/) pour plus de détails sur l'architecture, les composants, et la personnalisation.

---

**Version:** 1.0.0  
**Dernière mise à jour:** 4 novembre 2025
