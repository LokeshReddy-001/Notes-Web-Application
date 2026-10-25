# Baby Bullet Notes

Baby Bullet is a React, Vite, Tailwind CSS, and React Router site for browsing course notes.

## Academic catalog

The catalog data lives under `src/data/`:

- `branches.js` defines stable branch IDs and labels.
- `semesters.js` defines stable semester IDs and the branch-to-subject membership relation.
- `subjects.js` defines stable subject IDs and display metadata.
- `resources.js` stores each Google Drive resource once, keyed by a stable resource ID, and maps subject IDs to resource IDs.

Adding a subject requires a subject record and an ID in the relevant branch/semester relation. Adding or changing a link is a data-only update in `resources.js`. Resource type is inferred from the URL. Keep external links on HTTPS and use the supported Google Drive or Google Docs URL forms.

## Routes

The canonical hierarchy is:

`/branches/:branchId/semesters/:semesterId/subjects/:subjectId`

Route definitions are in `src/app/routes.jsx`; URL generation is in `src/utils/academicPaths.js`. The old `/branch/...` and `/subject/...` URLs redirect to canonical routes. Vercel rewrites nested URLs to the app entry point so direct navigation and refresh continue to work.

## Project layout

- `src/app/`: application entry and route definitions.
- `src/components/academic/`: reusable branch, semester, subject, and resource cards/lists.
- `src/components/common/` and `src/components/layout/`: empty/not-found states and breadcrumbs.
- `src/pages/`: landing, catalog, and subject pages.
- `src/utils/`: route generation and resource URL helpers.

The Vanta Birds animation remains scoped to the landing page and uses a static dark background when its scripts or WebGL are unavailable.

## Validation

Run `npm run lint` and `npm run build` from the project root.
