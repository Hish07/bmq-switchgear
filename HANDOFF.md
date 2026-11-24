# PROJECT HANDOFF DOCUMENTATION
**Project**: BMQ Electrical Switchgear LLC — Official Corporate Website  
**Repository**: `bmq-switchgear`  
**Date**: November 24, 2026  

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
  - Primary font: Inter via CSS fallback (`font-family: 'Inter', system-ui, -apple-system, sans-serif;`) loaded via `@import` in `globals.css` with system fallbacks to ensure local offline builds work without external font fetch errors.
  - Monospace font: JetBrains Mono (`font-mono`) for technical specifications and machine model numbers.
- **Tailwind Component Classes** (defined in `@layer components` in `src/app/globals.css`):
  - `.btn-primary`: Amber button with dark navy text, hover lift, shadow.
  - `.btn-secondary`: White outlined button on dark backgrounds.
  - `.btn-outline`: Navy-700 border button on light backgrounds.
  - `.section-label`: Uppercase tracking-widest text in amber-500.
  - `.section-title`: 3xl/4xl bold heading in navy-800.
  - `.section-title-white`: 3xl/4xl bold heading in pure white.
  - `.card`: White background, subtle border, rounded-xl, hover shadow.
  - `.container-custom`: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
  - `.clip-diagonal-down` / `.clip-diagonal-up`: Polygon clip paths for section transitions.

### 1.3 Folder Structure & File Organization
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
│       └── products/                        # Product placeholders
├── src/
│   ├── app/
│   │   ├── layout.tsx                       # Root layout with Header and Footer
│   │   ├── globals.css                      # Base styles, Tailwind utilities, button classes
│   │   ├── page.tsx                         # Homepage assembling sections from HomeSections.tsx
│   │   ├── about/page.tsx                   # About Us page
│   │   ├── products/
│   │   │   ├── page.tsx                     # Product catalogue (categorized)
│   │   │   └── [slug]/page.tsx              # Dynamic product detail page (16 products, static params)
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
│   │   │   └── HomeSections.tsx             # Modular sections: Hero, TrustBar, Intro, Categories,
│   │   │                                    # Manufacturing, Industries, WhyChoose, RFQBanner
│   │   └── forms/
│   │       └── RFQForm.tsx                  # React Hook Form + Zod validation RFQ inquiry form
│   └── lib/
│       └── products.ts                      # Complete data store for all 16 switchgear products
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

### 1.4 Code & Content Conventions
- **No Fictional Credentials**: As instructed, no fake project lists, fake client testimonials, or unverified regulatory approvals (DEWA/SEWA/ADDC) are claimed. A clear note in `quality/page.tsx` specifies IEC standards are design guidelines.
- **Placeholders**: Missing operational details (phone, email, physical address, map coordinates, WhatsApp link) are consistently marked with comments like `{/* PLACEHOLDER: Replace with actual ... */}` and user-friendly textual placeholders.
- **Product Data Model**: Standardized in `src/lib/products.ts` with typed interfaces:
  `slug`, `name`, `fullForm`, `category`, `categorySlug`, `tagline`, `intro`, `purpose`, `applications[]`, `components[]`, `configurations[]`, `image`, `relatedSlugs[]`.

---

## 2. What Is Already Completed and Working

1. **Scaffolding & Configuration**:
   - Next.js 14 App Router project successfully created and configured with TypeScript and Tailwind CSS.
   - Dependencies installed (`lucide-react`, `react-hook-form`, `@hookform/resolvers`, `zod`).
   - Tailwind color tokens and helper classes fully configured matching the BMQ brand.
   - Next.js image optimization configuration in `next.config.mjs`.

2. **Asset Migration**:
   - All 5 user-provided images copied to `/public/images/` under structured directories (`logo`, `shop`, `machinery`).
   - Machinery models accurately referenced in the UI:
     - Omega QC12Y-4×2500 CNC Guillotine Shear
     - Weida Pan & Box Folder
     - Hydraulic Panel & Busbar Punching Machine

3. **Product Data & Catalog (`src/lib/products.ts`)**:
   - Full technical data objects created for all 16 required products across 5 categories:
     1. MDB – Main Distribution Board
     2. SMDB – Sub-Main Distribution Board
     3. DB / FDB – Distribution Board / Final Distribution Board
     4. Meter Cabinet
     5. Cut-out
     6. Socket Panel
     7. Capacitor Bank / APFC Panel
     8. MCC – Motor Control Centre
     9. DOL Starter
     10. Star-Delta Starter
     11. VFD Starter
     12. Swimming Pool Control Panel
     13. ATS – Automatic Transfer Switch
     14. MTS – Manual Transfer Switch
     15. Synchronizing Panel
     16. Isolator / Disconnecting Switch

4. **All 8 Pages Implemented**:
   - `src/app/page.tsx` (Homepage with Hero, Trust Bar, Company Intro, Categories, Manufacturing Highlight, Industries, Why Choose BMQ, RFQ Banner)
   - `src/app/about/page.tsx` (Company Overview, Vision, Mission, Core Values, Customization Approach)
   - `src/app/products/page.tsx` (Categorized catalog with direct enquiry & detail links)
   - `src/app/products/[slug]/page.tsx` (Dynamic SSG pages with `generateStaticParams` for all 16 products, specifications disclaimer, component chips, related products)
   - `src/app/industries/page.tsx` (9 UAE application sectors mapped to specific switchgear products)
   - `src/app/manufacturing/page.tsx` (10-stage manufacturing sequence + machinery breakdown)
   - `src/app/quality/page.tsx` (6 quality control gates + IEC 61439-1/2, IEC 60947, IEC 60529 notes)
   - `src/app/projects/page.tsx` (Transparent portfolio layout with placeholder notice)
   - `src/app/contact/page.tsx` (Company contacts, Google Maps placeholder, WhatsApp note, and RFQ form)

5. **Navigation & Layout**:
   - `src/components/layout/Header.tsx` (Sticky header, mobile drawer menu, dropdown menus, CTA)
   - `src/components/layout/Footer.tsx` (Brand overview, product links, company links, contact details)

---

## 3. The Exact Unfinished Part Where Work Stopped

Work stopped at **Stage 1 & 2 Build Verification (`npm run build`)**.

The compiler passed webpack compilation (`✓ Compiled successfully`), but failed the linting step during `next build`:

### Error Location:
**File**: `src/components/forms/RFQForm.tsx` (Line 6)

```typescript
// Current line 6:
import { Mail, Phone, MapPin, Zap, Send, CheckCircle2, AlertCircle } from "lucide-react";
```

### Build Error Output:
```
Failed to compile.
./src/components/forms/RFQForm.tsx
6:10  Error: 'Mail' is defined but never used.       @typescript-eslint/no-unused-vars
6:16  Error: 'Phone' is defined but never used.      @typescript-eslint/no-unused-vars
6:23  Error: 'MapPin' is defined but never used.     @typescript-eslint/no-unused-vars
6:31  Error: 'Zap' is defined but never used.        @typescript-eslint/no-unused-vars
```

Because `Mail`, `Phone`, `MapPin`, and `Zap` were imported but not referenced inside `RFQForm.tsx` (they were used in `contact/page.tsx` instead), ESLint fails the production build.

---

## 4. Step-by-Step Instructions to Finish the Remaining Work

When approved, proceed through these exact sequential steps:

### Step 1: Clean Unused Imports in `RFQForm.tsx`
In `src/components/forms/RFQForm.tsx`, update line 6:
```typescript
// Replace:
import { Mail, Phone, MapPin, Zap, Send, CheckCircle2, AlertCircle } from "lucide-react";

// With:
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
```

### Step 2: Verify Production Build
Run:
```bash
npm run build
```
Verify that all 16 static routes for `/products/[slug]` and all static pages compile cleanly with 0 errors.

### Step 3: Run and Validate Local Server
Run:
```bash
npm run dev
```
Probe `http://localhost:3000` to verify:
1. Homepage (`/`) loads with hero image, machinery photos, and navigation.
2. Product Catalogue (`/products`) lists all 16 products properly grouped into 5 categories.
3. Product detail dynamic routes (e.g. `/products/mdb-main-distribution-board`) render with full specifications, components, and related links.
4. Manufacturing page (`/manufacturing`) shows the 10-step process and machinery photos.
5. Contact & RFQ form (`/contact`) validates inputs (name, company, email format, phone, location, message) and renders the confirmation state.
6. Responsive navigation works on mobile and desktop viewports.

### Step 4: SEO & Production Polish (Stage 5 Deliverables)
1. Add `robots.ts` or `public/robots.txt` allowing all legitimate crawlers.
2. Add dynamic `sitemap.ts` in `src/app/sitemap.ts` mapping:
   - Base pages (`/`, `/about`, `/products`, `/industries`, `/manufacturing`, `/quality`, `/projects`, `/contact`)
   - All 16 product URLs (`/products/${product.slug}`)
3. Verify JSON-LD Schema markup for `Organization` and `LocalBusiness` in `layout.tsx`.

### Step 5: Final Review & Git Commit
Stage the completed files and create an initial commit:
```bash
git add .
git commit -m "feat: complete BMQ Electrical Switchgear corporate website with 16 product routes and RFQ flow"
```

---

*Handoff document prepared. Awaiting user approval to proceed with Step 1.*
