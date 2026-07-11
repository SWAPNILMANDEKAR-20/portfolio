# Swapnil Mandekar — Portfolio

A React + Vite + Tailwind portfolio site.

## Run locally

npm install
npm run dev

## Build for production

npm run build

Output goes to `dist/`. Deploy that folder to Vercel, Netlify, or GitHub Pages.

## Notes

- Add your resume PDF at `public/Swapnil_Mandekar_Resume.pdf` so the "resume" nav link works.
- Update the LinkedIn link in `src/components/Contact.jsx` (currently a placeholder `#`).
- The hero's similarity demo (`src/components/SimilarityDemo.jsx`) is a lightweight
  token-overlap heuristic, not a real embedding model. Swap in an API call if you want it
  to use actual embeddings.
