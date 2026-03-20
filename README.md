# चौधरी प्रॉपर्टी डीलर — Choudhary Property Dealer

A complete React + Vite + Tailwind CSS website for Choudhary Property Dealer.

## 📁 Folder Structure

```
choudhary-properties/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── shree_ji.jpeg       ← Radha Rani image (background removed via CSS)
│   │   ├── my_photo.jpeg       ← Owner photo
│   │   └── business_card.jpeg  ← Reference card image
│   ├── components/
│   │   ├── Navbar.jsx          ← Fixed navbar with mobile menu
│   │   ├── Footer.jsx          ← Full footer with links, services, address
│   │   └── BusinessCard.jsx    ← Reusable owner business card
│   ├── pages/
│   │   ├── Home.jsx            ← Hero, services, locations, stats, card
│   │   ├── About.jsx           ← About us, services details, timeline, CTA
│   │   └── Contact.jsx         ← Contact form, map, office hours
│   ├── App.jsx                 ← Router setup
│   ├── main.jsx                ← Entry point
│   └── index.css               ← Global styles + Tailwind
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🚀 Setup & Run

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## 🛠️ Tech Stack

- **React 18** — UI library
- **Vite 5** — Build tool & dev server
- **Tailwind CSS 3** — Utility-first styling
- **React Router v6** — Client-side routing
- **Google Fonts** — Noto Sans Devanagari + Playfair Display + Lato

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero with Shree Ji, animated house, services, locations, owner card |
| About | `/about` | Company story, services detail, timeline, values |
| Contact | `/contact` | Contact form, Google Map, business card, office hours |

## 📞 Business Info

- **Owner:** भीम चौधरी ब्रजवासी (Bhim Choudhary Brajwasi)
- **Phone:** +91 8433200411
- **Address:** बरसाना रोड, नन्दगाँव (मथुरा), UP
- **Areas Covered:** नन्दगाँव, बरसाना, गोवर्धन, मथुरा, वृन्दावन
