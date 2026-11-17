# Love Catalogue

Astro + Sanity CMS starter for a content-led publishing website.

## Workspace layout

- `frontend/`: public Astro website
- `studio/`: separate Sanity Studio dashboard

## Requirements

- Node.js 20.19+ or 22.12+
- npm
- A Sanity project ID and dataset

## 1. Install dependencies

```bash
npm install
```

## 2. Configure the frontend

Copy `frontend/.env.example` to `frontend/.env` and set:

- `PUBLIC_SANITY_PROJECT_ID`
- `PUBLIC_SANITY_DATASET`
- `PUBLIC_SANITY_API_VERSION`

The dataset should be `production` unless you have chosen another name.

## 3. Configure Sanity Studio

Copy `studio/.env.example` to `studio/.env` and set:

- `SANITY_STUDIO_PROJECT_ID`
- `SANITY_STUDIO_DATASET`

Use the same project ID and dataset as the frontend.

## 4. Start the public website

```bash
npm run dev
```

## 5. Start Sanity Studio

In another terminal:

```bash
npm run studio:dev
```

The Studio runs separately from the public site. Deploy it to Sanity when ready:

```bash
npm run studio:build
```

Then use the Sanity CLI to deploy the Studio after configuring your Sanity project.

## 6. Build the website

```bash
npm run build
npm run preview
```

The static output is generated in `frontend/dist`.

## Content model

The Studio includes:

- Posts
- Categories
- Authors
- Tags
- Standard pages
- Global site settings

Posts support Portable Text, featured images, categories, tags, authors, publication dates, and SEO metadata.

## Deployment outline

1. Push this repository to GitHub.
2. Create a Cloudflare Pages project connected to the repository.
3. Set the build command to `npm run build`.
4. Set the build output directory to `frontend/dist`.
5. Add the `PUBLIC_SANITY_*` environment variables in Cloudflare Pages.
6. Deploy Sanity Studio separately using the Sanity CLI.

## Important implementation notes

- This is a starter implementation, not a verified pixel-perfect clone.
- Populate the Sanity dataset before expecting article pages to appear.
- Keep Sanity write tokens private. The public Astro site only needs read access to published content.
- Pagefind indexing is not included in this first scaffold. Add it after the core page templates and content are verified.
- Review original WordPress URL patterns before launch and add redirects where required.
