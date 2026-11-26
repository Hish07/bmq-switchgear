# PROJECT HANDOFF DOCUMENTATION
**Project**: BMQ Electrical Switchgear LLC — Official Corporate Website  
**Repository**: `bmq-switchgear` (`https://github.com/Hish07/bmq-switchgear.git`)  
**Last Updated**: November 26, 2026 (Updated by Gemini)  
**Current Branch**: `main` (ahead of `origin/main` by 2 commits; working tree clean before this `HANDOFF.md` edit)  

---

## 1. Architectural Patterns & Conventions in Use

### 1.1 Tech Stack & Versions
- **Framework**: Next.js 14.2.35 (App Router, TypeScript 5, React 18, React DOM 18)
- **Styling**: Tailwind CSS 3.4.1 with PostCSS 8
- **Icons**: `lucide-react` (v1.78.0)
- **Forms & Validation**: `react-hook-form` (v7.92.0) with `@hookform/resolvers` (v7.0.8) and `zod` (v4.6.7)
- **Node & NPM Environment**: Node v20.16.0, npm 10.8.2

### 1.2 Design System & Styling Tokens
- **Brand Palette** (configured in `tailwind.config.ts`):
  - **Navy** (Primary/Neutral darks):
    - `navy-700` (`#0d2461` - Brand Navy)
    - `navy-800` (`#0a1e4e` - Deep Navy / Headings / Dark sections)
    - `navy-900` (`#070f27` - Darkest surface / Footers)
    - `navy-50` (`#eef2fb` - Light tint for chips, badges, input focus)
    - `navy-100`, `navy-200`, `navy-300`, `navy-400`, `navy-500`, `navy-600`
  - **Amber** (Accent / CTAs / Conversion points from BMQ logo lightning bolt):
    - `amber-500` (`#f5a623` - Primary CTA button, highlights)
    - `amber-400` (`#fac96b`), `amber-600` (`#d4891a`), `amber-700` (`#b36e12`)
    - `amber-50` (`#fffbeb` / soft tint for cards)
- **Typography**:
  - Primary font: Inter via CSS fallback (`font-family: 'Inter', system-ui, -apple-system, sans-serif;`) loaded via `@import` in `globals.css` with system fallbacks so offline/sandboxed builds work without `next/font/google` fetch errors.
  - Monospace font: JetBrains Mono (`font-mono`) for technical specifications and machine model numbers.
- **Tailwind Component Classes** (defined in `@layer components` in `src/app/globals.css`):
  - `.btn-primary`, `.btn-secondary`, `.btn-outline`, `.section-label`, `.section-title`, `.section-title-white`, `.card`, `.container-custom`
  - `.clip-diagonal-down` / `.clip-diagonal-up`

### 1.3 Current Folder Structure
```
bmq-switchgear/
├── public/
│   └── images/
│       ├── logo/
│       │   └── bmq-logo.jpg                 # Official BMQ logo from user assets
│       ├── shop/
│       │   └── shop-front.jpg               # Workshop façade photo with Arabic/English signage
│       ├── machinery/
│       │   ├── shearing-machine.jpg         # Omega QC12Y-4x2500 CNC Guillotine Shear
│       │   ├── bending-machine.jpg          # Weida Pan & Box Folder
│       │   └── busbar-punching-machine.jpg  # Hydraulic Punch Press
│       └── products/                        # 16 real industrial photographs (one per product)
│           ├── mdb.jpg, smdb.jpg, db.jpg, meter-cabinet.jpg, cut-out.jpg, socket-panel.jpg
│           ├── capacitor-bank.jpg, mcc.jpg, dol-starter.jpg, star-delta-starter.jpg
│           ├── vfd-starter.jpg, pool-control-panel.jpg, ats.jpg, mts.jpg
│           └── synchronizing-panel.jpg, isolator.jpg
├── src/
│   ├── app/
│   │   ├── icon.jpg                         # BMQ logo used as browser tab favicon (replaced favicon.ico)
│   │   ├── layout.tsx                       # Root layout, Header/Footer, metadata, icons, JSON-LD LocalBusiness
│   │   ├── globals.css                      # Base styles, Tailwind utilities, button classes
│   │   ├── page.tsx                         # Homepage (title: "BMQ Electrical Switchgear LLC")
│   │   ├── robots.ts                        # Next.js MetadataRoute robots.txt generator
│   │   ├── sitemap.ts                       # Dynamic sitemap.xml covering all 8 pages + 16 product slugs
│   │   ├── about/page.tsx                   # About Us page
│   │   ├── products/
│   │   │   ├── page.tsx                     # Product catalogue with Next.js <Image> cards
│   │   │   └── [slug]/page.tsx              # Dynamic SSG product detail page (16 products) with hero & related images
│   │   ├── industries/page.tsx              # Industries & applications (9 sectors)
│   │   ├── manufacturing/page.tsx           # 10-step process + real machinery showcase
│   │   ├── quality/page.tsx                 # Quality control steps + IEC standard references
│   │   ├── projects/page.tsx                # Portfolio with clearly marked placeholders
│   │   └── contact/page.tsx                 # Contact details, map/WhatsApp placeholders + RFQ form
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx                   # Sticky responsive navbar, dropdowns, quote button
│   │   │   └── Footer.tsx                   # 4-column footer with links & placeholders
│   │   ├── home/
│   │   │   └── HomeSections.tsx             # Hero, TrustBar, Intro, Categories, Manufacturing, Industries, WhyChoose, RFQBanner
│   │   └── forms/
│   │       └── RFQForm.tsx                  # React Hook Form + Zod validation RFQ inquiry form (demo mode)
│   └── lib/
│       └── products.ts                      # Complete data store for all 16 switchgear products
├── HANDOFF.md
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

### 1.4 Code & Content Conventions
- **No Fictional Credentials**: No fake projects, fake client names, or unverified regulatory approvals (DEWA/SEWA/ADDC) are claimed.
- **Placeholders**: Missing operational details (phone, email, physical address, Google Maps embed, WhatsApp number, verified projects) remain clearly marked with `{/* PLACEHOLDER ... */}` comments and bracketed text.

---

## 2. What Was Completed by Gemini (Commits `6054a00` → `11d727d`)

All items from the previous handoff have been completed and verified:

1. **Fixed Lint & Build Blockers (`6054a00`)**:
   - Removed unused icon imports (`Mail`, `Phone`, `MapPin`, `Zap`) from `src/components/forms/RFQForm.tsx`.
   - Verified `npm run lint` passes with zero warnings or errors.
2. **Added SEO Infrastructure (`6054a00`)**:
   - Created `src/app/sitemap.ts` (all static pages + all 16 `/products/[slug]` routes).
   - Created `src/app/robots.ts` (allows `/` and disallows `/api/`, links to `sitemap.xml`).
   - Added `LocalBusiness` JSON-LD structured data in `src/app/layout.tsx`.
3. **Initialized & Linked Git Remote (`6054a00`)**:
   - Renamed default branch to `main` and added remote `origin` (`https://github.com/Hish07/bmq-switchgear.git`).
   - Initial project commit pushed by user to `origin/main` up to `6054a00`.
4. **Added All 16 Product Catalogue & Detail Images (`3695703`)**:
   - Downloaded 16 distinct industrial electrical switchgear/panel photographs into `public/images/products/`.
   - Updated `src/app/products/page.tsx` to render `<Image src={product.image} ... />` inside product cards instead of text placeholders.
   - Updated `src/app/products/[slug]/page.tsx` to display a featured product image banner and image thumbnails on the Related Products cards.
5. **Updated Browser Tab Title & Favicon (`11d727d`)**:
   - Updated `title.default` in `src/app/layout.tsx` and `metadata.title` in `src/app/page.tsx` to `"BMQ Electrical Switchgear LLC"`.
   - Deleted default `src/app/favicon.ico` and added `src/app/icon.jpg` (copied from `public/images/logo/bmq-logo.jpg`), plus `icons` metadata in `src/app/layout.tsx`.
6. **Build Verification**:
   - Ran clean `npm run build` after `11d727d`: **30/30 static & SSG pages compiled cleanly (exit code 0)**, including `/icon.jpg`, `/robots.txt`, `/sitemap.xml`, and all 16 `/products/[slug]` pages.

---

## 3. Current Project State & What Remains

The website is **feature-complete as a static/client-validated build** and compiles cleanly. The only remaining work depends on user-provided business credentials and backend configuration:

1. **Git Push Pending**:
   - Local `main` is ahead of `origin/main` by 2 commits (`3695703`, `11d727d`) plus this `HANDOFF.md` update once committed.
2. **RFQ Backend & File Upload (`src/components/forms/RFQForm.tsx`)**:
   - Currently runs in **demo/client-validation mode** (simulates a 1.2s submit and shows a notice that backend email delivery is not yet configured).
   - File attachment (`SLD / BOQ / Specs`) is currently a placeholder notice.
   - Needs a `/api/rfq` route handler (e.g., Resend or Nodemailer) + `.env.local` credentials + file upload handling when the user provides their email/provider details.
3. **Missing Real Company Information (Placeholders in Code)**:
   - Physical UAE address, phone number, email address (`Footer.tsx`, `contact/page.tsx`, `layout.tsx` JSON-LD).
   - Google Maps embed (`src/app/contact/page.tsx`).
   - Official WhatsApp Business number/button (`src/app/contact/page.tsx`).
   - Verified completed projects (`src/app/projects/page.tsx`).
   - Real BMQ-manufactured panel photos to replace stock product photos in `public/images/products/` if/when provided.

---

## 4. Next Steps for Claude (When User Requests)

1. Do **not** alter the existing Tailwind `navy-*` / `amber-*` theme, `src/lib/products.ts` structure, or factual-accuracy rules unless asked.
2. If the user asks to wire up the **Request a Quotation** backend:
   - Create `src/app/api/rfq/route.ts` with Zod server-side validation and `FormData` file attachment support (PDF, DWG, XLSX, DOC, PNG, JPG).
   - Connect it to the user's chosen email service (e.g., Resend or Nodemailer) via environment variables in `.env.local`, and update `src/components/forms/RFQForm.tsx` to `POST` to `/api/rfq`.
3. If the user provides real company contact details, WhatsApp number, map embed, or project entries, replace the `{/* PLACEHOLDER ... */}` blocks in `Footer.tsx`, `contact/page.tsx`, `projects/page.tsx`, and `layout.tsx`.
4. Commit and remind the user to run `git push` from their terminal if needed.
