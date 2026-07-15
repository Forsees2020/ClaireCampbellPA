# Claire Campbell PA — Real Estate Website

A single-page marketing website for **Claire Campbell PA**, a real estate
professional with **Charles Rutenberg Realty** in Orlando, serving Winter Park,
Orlando, and the wider Central Florida market.

The site presents Claire's approach and services, showcases client reviews, and
captures new leads through a contact form powered by Netlify Forms.

## Tech Stack

| Layer     | Technology                          |
| --------- | ----------------------------------- |
| Framework | TanStack Start (React 19)           |
| Routing   | TanStack Router (file-based)        |
| Build     | Vite 7                              |
| Styling   | Tailwind CSS 4                      |
| Icons     | lucide-react                        |
| Forms     | Netlify Forms                       |
| Hosting   | Netlify                            |

## Design

The look draws on a high-end, editorial real estate aesthetic:

- **Palette:** deep forest green (`#244f4a`) with warm cream/sand neutrals and a
  muted gold accent.
- **Type:** the Shippori Mincho serif for display headings, paired with the Jost
  sans-serif for body and UI text (loaded from Google Fonts).

Design tokens live in `src/styles.css` under Tailwind's `@theme` block, so
colors and fonts can be adjusted in one place.

## Project Structure

```
public/
  __forms.html          # Static form skeleton for Netlify build-time detection
src/
  routes/
    __root.tsx          # Document shell: meta tags, fonts
    index.tsx           # The full single-page site (all sections)
  components/
    ContactForm.tsx     # Netlify Forms lead-capture form (AJAX)
  siteConfig.ts         # Business details (name, phone, address, areas)
  styles.css            # Tailwind import + design tokens
```

Business contact details (phone, address, brokerage, service areas) are
centralized in `src/siteConfig.ts` — edit there to update them everywhere.

## Running Locally

```bash
npm install
netlify dev --port 8889
```

Then open http://localhost:8889.

> **Note:** Netlify Forms submissions are only processed on a deployed Netlify
> site (or deploy preview), not in local development.

## Contact Form

The contact form submits to Netlify Forms under the form name `contact`. Because
TanStack Start renders forms client-side, a static skeleton in
`public/__forms.html` mirrors the form fields so Netlify can register the form at
build time. Submissions appear in the site's **Forms** tab in the Netlify
dashboard.
