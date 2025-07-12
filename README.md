# 🚀 ChatSeller Landing Page

Landing page officielle de **ChatSeller** - L'Agent IA Commercial pour E-commerce.

> Transformez votre page produit en vendeur IA autonome qui guide vos visiteurs jusqu'à la commande.

## 🌟 Fonctionnalités

- ✅ **Design Modern** - Interface élégante et responsive
- ✅ **Mobile-First** - Optimisé pour l'Afrique (80%+ mobile)
- ✅ **Chat Interactif** - Démo fonctionnelle avec IA
- ✅ **Multilingue** - Français/Anglais avec détection automatique
- ✅ **Entrée Vocale** - Support vocal dans le chat
- ✅ **SEO Optimisé** - Meta tags, Open Graph, Schema.org
- ✅ **Performance** - Vite + React + Tailwind CSS

## 🏗 Architecture Technique

- **Frontend** : React 18 + TypeScript + Vite
- **UI** : Tailwind CSS + Radix UI + Lucide Icons
- **State** : React Query + Context API
- **Router** : React Router v6
- **Build** : Vite (ultra-rapide)
- **Deploy** : Vercel (auto-deploy)

## 🚀 Déploiement sur Vercel

### Option 1 : Import depuis GitHub

1. **Transférer le repo vers getdukka** (recommandé)
   ```bash
   # Sur GitHub : Settings → Transfer ownership → getdukka
   ```

2. **Importer sur Vercel**
   ```bash
   Vercel Dashboard → Import Project → getdukka/chatseller-landing
   ```

3. **Configuration automatique**
   - Framework: Vite ✅
   - Build Command: `npm run build` ✅
   - Output Directory: `dist` ✅

### Option 2 : Déploiement local

```bash
# Installer Vercel CLI
npm i -g vercel

# Dans le dossier du projet
vercel

# Suivre les instructions
```

## 🛠 Développement Local

```bash
# Cloner le repo
git clone https://github.com/getdukka/chatseller-landing.git
cd chatseller-landing

# Installer les dépendances
npm install

# Lancer le serveur de dev
npm run dev

# Build pour production
npm run build

# Preview du build
npm run preview
```

## 🔗 Liens Importantes

- **🌐 Landing Page** : [chatseller.app](https://chatseller.app)
- **📊 Dashboard** : [dashboard.chatseller.app](https://dashboard.chatseller.app)
- **🤖 Widget Demo** : [widget.chatseller.app](https://widget.chatseller.app)
- **📖 Documentation** : [docs.chatseller.app](https://docs.chatseller.app)
- **⚡ API** : [api.chatseller.app](https://api.chatseller.app)

## 📁 Structure du Projet

```
chatseller-landing/
├── public/           # Assets statiques
├── src/
│   ├── components/   # Composants React
│   │   ├── ui/       # Composants UI réutilisables
│   │   ├── Hero.tsx      # Section hero
│   │   ├── Features.tsx  # Section fonctionnalités
│   │   ├── DemoSection.tsx  # Démo interactive
│   │   └── Footer.tsx    # Footer
│   ├── contexts/     # Contextes React (Language)
│   ├── hooks/        # Hooks personnalisés
│   ├── pages/        # Pages principales
│   └── lib/          # Utilitaires
├── index.html        # Template HTML
├── package.json      # Dépendances
├── vercel.json       # Config Vercel
├── tailwind.config.js # Config Tailwind
└── vite.config.ts    # Config Vite
```

## 🎨 Améliorations Apportées

### SEO & Performance
- ✅ Meta tags optimisés pour ChatSeller
- ✅ Open Graph + Twitter Cards
- ✅ Schema.org structured data
- ✅ Preload des ressources critiques
- ✅ Lazy loading des images

### UX & Design
- ✅ Hero section améliorée avec social proof
- ✅ Vraies URLs vers dashboard, widget, docs
- ✅ Footer complet avec contact info
- ✅ Trust indicators africains
- ✅ CTAs optimisés pour conversion

### Technique
- ✅ Configuration Vercel optimisée
- ✅ Redirections automatiques
- ✅ Headers de sécurité
- ✅ Cache optimisé
- ✅ TypeScript strict

## 🌍 Spécificités Africaines

- **Mobile-First** : 80%+ du trafic mobile en Afrique
- **Multilingue** : Français/Anglais avec détection automatique
- **Performance** : Optimisé pour connexions lentes
- **Local** : Développé à Dakar, Sénégal
- **Contact** : Support en français et anglais

## 📊 Métriques de Performance

- **Lighthouse Score** : 95+ (objectif)
- **First Contentful Paint** : < 1.5s
- **Largest Contentful Paint** : < 2.5s
- **Cumulative Layout Shift** : < 0.1
- **Time to Interactive** : < 3s

## 👨‍💻 Développeur

**Ibuka Ndjoli**
- 🌐 Website: [ibukasharing.com](https://ibukasharing.com)
- 🐦 Twitter: [@ibukandjoli](https://twitter.com/ibukandjoli)
- 💼 LinkedIn: [ibukandjoli](https://linkedin.com/in/ibukandjoli)
- ✉️ Email: ibuka@chatseller.app

## 📄 License

MIT License - Voir [LICENSE](LICENSE) pour plus de détails.

---

**🚀 Prêt pour le lancement !** Cette landing page est optimisée pour convertir vos visiteurs en clients ChatSeller.

Développé avec ❤️ en Afrique de l'Ouest pour l'e-commerce africain.