# Flying Burguer — Site (React + Vite)

Site promocional do jogo Flying Burguer, construído em React com Vite.

## Como correr

```bash
npm install
npm run dev
```

Depois abre o URL que aparece no terminal (normalmente http://localhost:5173).

## Build para produção

```bash
npm run build
npm run preview
```

## Vídeo do trailer

A secção "Vê o jogo em ação" espera dois ficheiros dentro de `public/`:

- `public/trailer.mp4` — o vídeo do trailer
- `public/trailer-poster.jpg` — imagem de capa mostrada antes do play

Cria a pasta `public/` na raiz do projeto e coloca lá os teus ficheiros com esses nomes exatos (ou ajusta os caminhos em `src/App.jsx`, na secção `#trailer`).

## Estrutura

```
flying-burguer/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    └── App.css
```
