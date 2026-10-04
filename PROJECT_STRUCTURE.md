# Project Structure & File Overview

Penjelasan lengkap struktur folder dan file-file penting dalam project portfolio.

## 📁 Folder Structure

```
newportofolio/
│
├── app/                                    # Next.js App Router
│   ├── layout.tsx                         # Root layout dengan Navbar & styling
│   ├── page.tsx                           # Homepage / Profile page
│   ├── globals.css                        # Global styles & color theme
│   ├── favicon.ico                        # Website icon
│   │
│   ├── projects/                          # Projects section
│   │   ├── page.tsx                       # Projects list page (alternating layout)
│   │   └── [slug]/                        # Dynamic project detail pages
│   │       └── page.tsx                   # Individual project page
│   │
│   ├── education/                         # Education section
│   │   └── page.tsx                       # Education & certifications page
│   │
│   ├── skills/                            # Skills section
│   │   └── page.tsx                       # Skills display by categories
│   │
│   └── contact/                           # Contact section
│       └── page.tsx                       # Contact form & info page
│
├── components/                             # React Components
│   ├── Navbar.tsx                         # Top navigation (responsive)
│   ├── Footer.tsx                         # Footer component
│   └── ProjectCard.tsx                    # Project list card component
│
├── data/                                   # Data & Configuration
│   ├── config.ts                          # Personal info & CV link
│   ├── projects.ts                        # 6 project data + types
│   ├── education.ts                       # Education & certification data
│   └── skills.ts                          # Skills by category with proficiency
│
├── public/                                 # Static assets
│   └── images/                            
│       ├── projects/                      # Project thumbnails & screenshots
│       ├── education/                     # Institution logos
│       └── profile/                       # Profile photos
│
├── .env.local                             # Environment variables (PORT=3005)
├── package.json                           # Dependencies & scripts
├── tsconfig.json                          # TypeScript configuration
├── next.config.ts                         # Next.js configuration
├── postcss.config.mjs                     # PostCSS config (Tailwind)
├── tailwind.config.js                     # Tailwind CSS theme
├── eslint.config.mjs                      # ESLint rules
│
├── README.md                              # Main documentation
├── SETUP.md                               # Setup & customization guide
└── PROJECT_STRUCTURE.md                   # File ini
```

---

## 📄 File Details

### Core Files

#### `app/layout.tsx`
**Fungsi**: Root layout untuk seluruh aplikasi
- Setup meta data (title, description, SEO)
- Wrapper HTML dan Body
- Apply global styling
- Setup fonts (Geist)

**Kustomisasi**: Update title dan description di metadata

---

#### `app/page.tsx`
**Fungsi**: Homepage / Profile page
- Hero section dengan foto circular
- Intro dan bio singkat
- Social media links (GitHub, LinkedIn, Email)
- CTA buttons (View Work, Download CV)
- Featured projects preview (3 projects)
- Statistics section

**Features**:
- Link ke `/projects`, `/contact`
- Download CV langsung ke Google Drive
- Responsive grid layout

---

#### `app/globals.css`
**Fungsi**: Global styling dan color theme
- CSS Variables untuk warna biru theme
- Custom button styles (btn-primary, btn-secondary)
- Card hover effects
- Gradient backgrounds
- Custom scrollbar styling
- Responsive utilities

**Edit untuk**: Mengubah warna, font, atau global styling

---

### Projects Files

#### `app/projects/page.tsx`
**Fungsi**: Projects list page dengan alternating layout
- List semua 6 projects
- Image kiri-text kanan, lalu alternating
- Preview fitur dan tech stack
- "View Full Project" button ke detail page

---

#### `app/projects/[slug]/page.tsx`
**Fungsi**: Dynamic project detail page
- `generateStaticParams()` untuk static generation
- Full project description
- All features list
- Technologies dengan styling
- Challenges & Solutions
- Screenshot gallery placeholder
- Related projects sidebar
- Links ke Demo & GitHub

**Dynamic Routing**: Setiap project di `projects.ts` otomatis generate route

---

#### `components/ProjectCard.tsx`
**Fungsi**: Reusable project card component
- Alternating image left/right based on index
- Project title, description, role, duration
- Tech stack tags
- Features preview (3 items)
- "View Full Project" button

**Props**: `project` (Project type), `index` (number)

---

### Education Files

#### `app/education/page.tsx`
**Fungsi**: Education & certifications page
- Timeline display dengan vertical line
- Institusi cards dengan achievement list
- Certifications section (grid 3 columns)
- CTA untuk contact

**Features**:
- Education card hover effects
- Achievement badges
- Proficiency summary

---

### Skills Files

#### `app/skills/page.tsx`
**Fungsi**: Skills display page
- 6 skill categories (grid 2 columns)
- Skills list dengan proficiency level
- Proficiency colors (Green=Expert, Blue=Advanced, Yellow=Intermediate)
- Proficiency legend section
- Technology summary (6 groups)

**Features**:
- Proficiency badge system
- Skill count per category
- Technology grouped by type

---

### Contact Files

#### `app/contact/page.tsx`
**Fungsi**: Contact page dengan form
- Contact info cards (email, phone, location, social)
- Contact form (name, email, subject, message)
- Form validation & submission feedback
- Response time info section
- Professional contact layout

**Features**:
- Client-side form state management
- Success message feedback
- Multiple contact methods

---

### Data Files

#### `data/config.ts`
**Fungsi**: Centralized personal configuration
```typescript
export const config = {
  name,           // Nama lengkap
  title,          // Job title
  subtitle,       // Subtitle
  bio,           // Bio pendek
  email,         // Email address
  phone,         // Nomor telp
  location,      // Lokasi
  cvLink,        // Google Drive CV link
  social,        // Social media links
  colors,        // Color palette
}
```

**Digunakan di**: Navbar, Footer, Home, Contact pages

---

#### `data/projects.ts`
**Fungsi**: Project data dengan 6 projects
```typescript
interface Project {
  id: number
  slug: string                   // URL-friendly identifier
  title: string
  shortDescription: string       // 1-2 lines
  fullDescription: string        // Paragraf lengkap
  thumbnail: string             // Path gambar
  images: string[]              // Array gambar
  technologies: string[]        // Tech stack
  role: string                  // Role Anda
  duration: string              // "3 months"
  demoLink?: string             // Link demo
  githubLink?: string           // Link GitHub
  features: string[]            // List fitur (8 items)
  challenges: string[]          // Challenges (3-4 items)
  solution: string              // Solution paragraph
}
```

**Kustomisasi**: Edit setiap project dengan data asli

---

#### `data/education.ts`
**Fungsi**: Education data dengan 1-2 entries
```typescript
interface Education {
  id: number
  institution: string          // Nama sekolah/univ
  logo: string                // Path logo
  degree: string              // Gelar (S1, Sertifikat)
  field: string               // Bidang studi
  startYear: number
  endYear: number
  description: string         // Deskripsi
  achievements: string[]      // Array pencapaian
}
```

---

#### `data/skills.ts`
**Fungsi**: Skills dengan 6 kategori
```typescript
interface Skill {
  name: string
  proficiency: "Expert" | "Advanced" | "Intermediate"
  icon?: string               // Optional
}

interface SkillCategory {
  id: number
  category: string            // Category name
  description: string
  skills: Skill[]            // Array skills
}

export const skills: SkillCategory[] // 6 kategori
```

**Categories**:
1. Frontend Development
2. Backend Development
3. Data Engineering
4. Machine Learning & AI
5. Database & Storage
6. SEO & Digital Marketing

---

### Component Files

#### `components/Navbar.tsx`
**Fungsi**: Navigation bar (fixed top)
- Logo
- Nav links (Profile, Projects, Education, Skills, Contact)
- Download CV button (primary)
- Mobile hamburger menu
- Responsive layout

**Features**:
- Sticky positioning
- Mobile responsive
- Gradient styling
- Link highlighting

---

#### `components/Footer.tsx`
**Fungsi**: Footer component
- Brand info
- Quick links (navigation)
- Resources (CV, GitHub, LinkedIn)
- Contact info (email, location)
- Copyright info
- Gradient blue background

**Features**:
- Grid 4 columns
- Social links
- Year auto-update

---

## 🎨 Styling System

### Tailwind CSS
- Utility-first approach
- Responsive prefixes (md:, lg:, etc)
- Custom color scheme via CSS variables
- Pre-built button classes (.btn-primary, .btn-secondary)

### CSS Variables
Located in `app/globals.css`:
```css
--primary-blue: #00B4D8
--secondary-blue: #0A4F7A
--accent-blue: #00D4FF
--light-blue: #F0F7FF
--text-dark: #1A1A1A
--text-light: #666666
```

### Utility Classes
- `.section-container` - Max-width container with padding
- `.gradient-text` - Gradient text effect
- `.card` - Card styling dengan hover effects
- `.btn-primary`, `.btn-secondary` - Button styles

---

## 🔄 Data Flow

```
app/layout.tsx (Root)
    ├── Navbar (global)
    ├── Page content (varies)
    └── Footer (global)

Home Page (/)
    ├── Hero section (config)
    ├── Featured projects (projects.ts - first 3)
    └── Stats section

Projects List (/projects)
    ├── ProjectCard component (looped)
    └── Each using projects.ts data

Project Detail (/projects/[slug])
    └── Single project from projects.ts

Education (/education)
    └── Mapped from education.ts

Skills (/skills)
    └── Mapped from skills.ts (6 categories)

Contact (/contact)
    └── Uses config.ts for links
```

---

## 📦 Dependencies

```json
{
  "next": "16.3.8",
  "react": "19.2.8",
  "react-dom": "19.2.8",
  "tailwindcss": "^4",
  "@tailwindcss/postcss": "^4"
}
```

**Development**:
- TypeScript 5
- ESLint 9
- PostCSS 4

---

## 🌐 Routing Map

```
/                          Home / Profile
/projects                  Projects list
/projects/[slug]           Project detail (dynamic)
  /projects/ecommerce-platform
  /projects/social-media-analytics
  /projects/ml-customer-churn
  /projects/data-warehouse-etl
  /projects/seo-optimization-tool
  /projects/microservices-platform

/education                 Education page
/skills                    Skills page
/contact                   Contact page
```

---

## 🔧 Build & Deploy

### Local Development
```bash
npm run dev        # Start dev server (port 3001 or 3005)
```

### Production Build
```bash
npm run build      # Build optimized production version
npm start          # Start production server
```

### Key Build Features
- Static generation untuk most pages
- SSG untuk dynamic project pages via `generateStaticParams()`
- Automatic image optimization (Next.js Image)
- CSS minification via Tailwind
- JavaScript bundling & minification

---

## 📊 Performance Optimizations

1. **Static Generation** - Pre-render pages at build time
2. **Dynamic Routes** - Use `generateStaticParams()` for project pages
3. **Tailwind CSS** - Only include used CSS
4. **Next.js Image** - Automatic image optimization (ready for real images)
5. **Code Splitting** - Automatic by Next.js
6. **Responsive Design** - CSS-based, no extra JavaScript

---

## 🎯 Key Features Summary

| Feature | Location | Status |
|---------|----------|--------|
| Navigation | Navbar.tsx | ✅ Complete |
| Hero Section | app/page.tsx | ✅ Complete |
| Projects List | app/projects/page.tsx | ✅ Complete |
| Project Detail | app/projects/[slug]/page.tsx | ✅ Complete |
| Education | app/education/page.tsx | ✅ Complete |
| Skills | app/skills/page.tsx | ✅ Complete |
| Contact Form | app/contact/page.tsx | ✅ Complete |
| Responsive Design | All pages | ✅ Complete |
| Dark/Light Mode | CSS ready | ⏳ Optional |
| Analytics | Not included | ⏳ Optional |

---

**Last Updated**: Oct 4, 2026
**Next.js Version**: 16.3.8
**Node Version**: 18+
