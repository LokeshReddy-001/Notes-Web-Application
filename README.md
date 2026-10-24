# Baby Bullet Notes

The notes catalog follows this route structure:

`Landing page → LinkedIn prompt → Branches → Semester selection → Subject selection → Subject notes`

Each branch has its own folder and catalog file in `src/data/branches/` (`cse/index.js`, `csm/index.js`, `ece/index.js`). A catalog's `semesters` object lists the subjects shown under each semester. To add a semester, add a numbered entry with its subject names. The semester page renders every semester found in that branch file automatically.

The landing page uses Trebuchet MS for headings and Arial for body text. Choosing Explore Notes opens the LinkedIn prompt; either following or closing the prompt continues to the branch list. The semester page contains only semester choices, and selecting one opens the subjects page in the same tab.

Semester 3 Google Drive links are in `src/data/semester3Resources.js`; links are listed in Unit 1–5 order. COA's PYQ folder is listed separately. Resource type is inferred from the link (`/folders/` for Drive folders, Google Docs URLs for documents, and other Drive file URLs for PDFs). Add a subject's resource list there and list that subject in only the branch catalogs where it belongs. The subject route displays the matching resources through `src/pages/BranchSubject.jsx` and `src/pages/LinkedSubject.jsx`.

The old Vite starter notes below are retained for reference.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
