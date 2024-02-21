# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

install:
Nodejs (npm)
Git
Vite
-npm install -g create-vite

npx create-vite msaas --template react
npm install
npm run dev

Tailwindcss
-npm install -D tailwindcss
-npx tailwindcss init
https://tailwindcss.com/docs/installation

meu-projeto/
├── node_modules/
├── public/
│ ├── index.html
├── src/
│ ├── components/
│ │ ├── Header.jsx
│ │ └── Footer.jsx
│ ├── pages/
│ │ └── Blog.jsx
│ ├── App.jsx
│ └── index.jsx
├── package.json
└── vite.config.js
