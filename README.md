# Dexter Paul Morales — Portfolio

A modern, production-ready portfolio website built with React, TypeScript, and Tailwind CSS. Designed to showcase full-stack development skills and convert visitors into recruiter engagement.

## Features

- **Modern 2026 Design** — Clean layout, professional color palette, subtle animations
- **Dark Mode** — System preference detection with manual toggle
- **Fully Responsive** — Optimized for desktop, tablet, and mobile
- **AI Chatbot Assistant** — Knowledge-base powered portfolio assistant
- **SEO Optimized** — Meta tags, semantic HTML, accessibility best practices
- **Performance Focused** — Vite build, lazy loading, minimal dependencies

## Tech Stack

- React 19 + TypeScript
- Tailwind CSS 4
- Framer Motion (animations)
- Lucide React (icons)
- Vite (build tool)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── chatbot/       # AI portfolio assistant
│   ├── layout/        # Header, Footer, ThemeToggle
│   ├── sections/      # Page sections (Hero, About, etc.)
│   └── ui/            # Reusable UI components
├── data/
│   ├── portfolio.ts   # All portfolio content
│   └── chatbot-knowledge.ts  # Chatbot Q&A knowledge base
├── hooks/             # Custom React hooks
├── lib/               # Utilities (chatbot engine)
└── types/             # TypeScript interfaces
```

## Customization

### Update Your Content

Edit `src/data/portfolio.ts` to update:
- Personal information
- Skills and experience
- Projects and services
- Navigation links

### Update Chatbot Knowledge

Edit `src/data/chatbot-knowledge.ts` to add or modify Q&A entries the chatbot can answer.

### Add Testimonials

Add objects to the `testimonials` array in `portfolio.ts`:

```typescript
{
  id: '1',
  name: 'Jane Doe',
  role: 'Engineering Manager',
  company: 'Tech Corp',
  quote: 'Dexter delivered exceptional work...',
}
```

### Add Resume

Place your resume PDF at `public/resume/morales-dexter-cv.pdf`.

## Deployment

### Replace https://dexter-morales.github.io/

This project is ready for **GitHub Pages** as a user site. Your live URL will be:

**https://dexter-morales.github.io/**

#### Requirements

- GitHub account: `dexter-morales`
- Repository name must be exactly: **`dexter-morales.github.io`**
- Vite `base` is already set to `/` (correct for user sites)

#### First-time setup

1. **Create or use the repo** on GitHub:
   - [github.com/dexter-morales/dexter-morales.github.io](https://github.com/dexter-morales/dexter-morales.github.io)
   - If the old portfolio is there, you will replace it with this new build

2. **Push this project** from your machine:

```bash
git init
git add .
git commit -m "Replace portfolio with modern React build"
git branch -M main
git remote add origin https://github.com/dexter-morales/dexter-morales.github.io.git
git push -u origin main
```

If the remote already exists and has history, either:

```bash
# Option A: force replace (overwrites old site completely)
git push -u origin main --force
```

Or merge/replace files manually via GitHub if you prefer.

3. **Enable GitHub Pages** in the repo:
   - Go to **Settings → Pages**
   - **Source:** GitHub Actions
   - (Not "Deploy from branch" — the workflow handles deployment)

4. **Wait for the workflow** — after push, open the **Actions** tab. When "Deploy to GitHub Pages" succeeds, the new site goes live (may take 1–3 minutes).

5. **Verify** at [https://dexter-morales.github.io/](https://dexter-morales.github.io/)

#### Future updates

Every push to `main` automatically rebuilds and redeploys:

```bash
git add .
git commit -m "Update portfolio content"
git push
```

#### Project repo instead of user site?

If you use a different repo name (e.g. `online-portfolio`), set the base path in `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/online-portfolio/',
  plugins: [react(), tailwindcss()],
})
```

Then the URL becomes `https://dexter-morales.github.io/online-portfolio/`.

### Vercel / Netlify

1. Connect your repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy

## Chatbot

The portfolio includes a client-side AI assistant powered by a keyword-matching knowledge base. It answers questions about:

- Background and experience
- Skills and technologies
- Projects and achievements
- Contact information
- Services offered

To extend with a real LLM API, replace the logic in `src/lib/chatbot-engine.ts`.

## License

MIT
