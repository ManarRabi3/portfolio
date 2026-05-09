# Manar Rabih — Portfolio Website

A modern, dark-themed React portfolio website.

## 🚀 Setup & Run

```bash
# 1. Install dependencies
npm install

# 2. Add your photo
# Place your profile photo at: public/manar.png
# (The one you sent — صورة_فورمال_3.png)

# 3. Start dev server
npm run dev

# 4. Open in browser
# http://localhost:5173
```

## 📦 Build for Production

```bash
npm run build
```
Then upload the `dist/` folder to Vercel, Netlify, or GitHub Pages.

## 🌐 Deploy to Vercel (Recommended)

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repo
4. Click Deploy ✅

## 📁 Structure

```
manar-portfolio/
├── public/
│   └── manar.png          ← YOUR PHOTO HERE
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── Cursor.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   └── Contact.jsx
│   ├── hooks/
│   │   └── useInView.js
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

## ✨ Features

- Dark elegant design with purple/pink gradient accents
- Smooth scroll animations
- Typewriter effect in Hero
- Animated skill bars
- Project filter (All / Featured)
- Copy-to-clipboard contact cards
- Custom cursor (desktop)
- Fully responsive for mobile
- Fast Vite build
