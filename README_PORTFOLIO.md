# Modern IT Developer Portfolio

A professional, modern dark-themed portfolio website for **Felix Ryan**, Backend Developer & Data Engineer.

## 🎨 Design Overview

### Color Scheme (Dark Blue Tech)
- **Background**: `#0B1220` (Midnight Navy)
- **Secondary Background**: `#101D32`
- **Card Background**: `#14243D`
- **Primary Blue**: `#3B82F6`
- **Light Blue**: `#60A5FA`
- **Accent Cyan**: `#38BDF8`
- **Text Primary**: `#F8FAFC`
- **Text Secondary**: `#94A3B8`
- **Border**: `#263B59`

### Key Features

✨ **Hero Section**
- 2-column layout (text + animated 3D visuals)
- Animated SVG with geometric shapes, network nodes, floating panels
- Smooth floating animations
- Call-to-action buttons
- Social media links

📊 **Quick Statistics**
- Projects Built counter
- Core Technologies count
- Continuous Learning badge

🎯 **About Section**
- Intro text
- 3 highlight cards (Backend, Data Engineering, ML)
- Hover effects with color transitions

🚀 **Featured Projects**
- 3 main projects showcase (SeismoCluster, Smart Parking AI, Analytics Engineering)
- Project cards with thumbnails, descriptions, tech stack
- GitHub and demo links
- Responsive grid layout

🛠️ **Skills & Technologies**
- 7 skill categories (Programming Languages, Backend, Data Engineering, ML, Databases, Frontend, DevOps)
- Proficiency indicators (●●● Expert, ●●○ Advanced, ●○○ Intermediate)
- Hover tooltips
- Organized in responsive grid

📅 **Experience & Education Timeline**
- Timeline visualization with animated nodes
- Alternating left/right layout on desktop
- Education and experience items
- Highlights/bullet points for each item

💬 **Contact Section**
- Contact methods (Email, GitHub, LinkedIn)
- Call-to-action buttons
- Direct contact information

🧭 **Navigation**
- Sticky navbar with transparent blur effect
- Logo monogram "FR"
- Active section indicator
- Smooth scroll anchors
- Mobile hamburger menu with hamburger animation
- "Let's Talk" CTA button

## 📁 Project Structure

```
app/
├── layout.tsx              # Root layout with dark theme
├── page.tsx                # Main homepage
├── globals.css             # Global styles & dark theme variables
├── projects/               # Projects detail pages
└── [other pages]/

components/
├── Navbar.tsx              # Sticky navbar with smooth scroll
├── Hero.tsx                # Hero section with CTA
├── HeroVisuals.tsx         # SVG animations (3D shapes, nodes)
├── Statistics.tsx          # 3-stat counters
├── About.tsx               # About section with 3 highlights
├── Projects.tsx            # Featured projects grid
├── Skills.tsx              # Skills organized by category
├── Experience.tsx          # Timeline (education & experience)
├── Contact.tsx             # Contact methods & CTA
├── BackToTop.tsx           # Back-to-top button
├── Footer.tsx              # Footer with links
└── Icons.tsx               # SVG icons library

data/
├── config.ts               # Personal info, links, CV
├── projects.ts             # Projects data (3 featured + more)
├── skills.ts               # Skills organized by 7 categories
├── experience.ts           # Education & work experience
├── about.ts                # About intro & 3 highlights
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone repository
git clone <your-repo>
cd newportofolio

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The site will be available at `http://localhost:3000` (or `3002` if port 3000 is busy)

## 🎨 Customization

### Update Your Information

Edit `data/config.ts`:
```typescript
export const config = {
  name: "Felix Ryan",
  title: "Backend Developer & Data Engineer",
  email: "your-email@example.com",
  social: {
    github: "https://github.com/yourprofile",
    linkedin: "https://linkedin.com/in/yourprofile",
  },
  cvLink: "https://drive.google.com/...", // Your CV link
};
```

### Update Projects

Edit `data/projects.ts` to add/modify projects:
```typescript
{
  id: 1,
  slug: "project-slug",
  title: "Project Title",
  shortDescription: "Brief description",
  fullDescription: "Detailed description",
  thumbnail: "/images/projects/your-image.jpg",
  technologies: ["Tech1", "Tech2"],
  githubLink: "https://github.com/...",
  demoLink: "https://demo-link.com",
  // ... more fields
}
```

### Update Skills

Edit `data/skills.ts` to customize skill categories:
```typescript
{
  id: 1,
  category: "Programming Languages",
  description: "Core programming languages",
  skills: [
    { name: "Python", proficiency: "Expert" },
    // ...
  ],
}
```

### Update Experience & Education

Edit `data/experience.ts`:
```typescript
{
  id: 1,
  type: "education",
  institution: "University Name",
  position: "Degree",
  period: "2021 - 2025",
  description: "...",
  highlights: ["Highlight 1", "Highlight 2"],
}
```

### Update About Section

Edit `data/about.ts`:
```typescript
export const aboutIntro = {
  title: "Your title here",
  description: "Your bio/description",
};

export const highlights = [
  {
    title: "Highlight 1",
    description: "Description",
    icon: "server", // or "database", "brain"
  },
];
```

## 🎯 Key Sections

### 1. Navbar
- **File**: `components/Navbar.tsx`
- Sticky, transparent with blur effect
- Active section indicator
- Smooth scroll navigation
- Mobile hamburger menu

### 2. Hero
- **File**: `components/Hero.tsx` & `components/HeroVisuals.tsx`
- 2-column layout
- Animated SVG visuals
- Hero headline with gradient text
- CTA buttons
- Social links

### 3. Projects
- **File**: `components/Projects.tsx`
- Featured 3 projects
- Cards with icons, descriptions, tech stack
- GitHub & demo links
- "View All Projects" button

### 4. Skills
- **File**: `components/Skills.tsx`
- 7 categories
- Proficiency indicators
- Responsive grid

### 5. Experience
- **File**: `components/Experience.tsx`
- Timeline with animated nodes
- Education & work experience
- Alternating layout
- Highlights

### 6. Contact
- **File**: `components/Contact.tsx`
- Contact methods
- CTA buttons

## 🎨 Styling

### Dark Theme Variables (CSS)
Located in `app/globals.css`:
```css
--bg-primary: #0B1220
--bg-secondary: #101D32
--bg-card: #14243D
--blue-primary: #3B82F6
--blue-light: #60A5FA
--cyan-accent: #38BDF8
--text-primary: #F8FAFC
--text-secondary: #94A3B8
--border-color: #263B59
```

### Tailwind Extensions
`tailwind.config.ts` extends colors with custom dark palette

### Animations
- Floating elements (Hero visuals)
- Gradient shifts
- Hover transitions
- Scroll reveal (can add Framer Motion if needed)

## 📱 Responsive Design

- **Desktop**: Full 2-column layout, 3-column grids
- **Tablet**: Adjusted spacing, 2-column grids
- **Mobile**: Single column, hamburger menu, optimized touch targets

## ⚡ Performance

- Server-side rendering (SSR) with Next.js
- Optimized images
- Smooth CSS animations (no heavy libraries by default)
- Minimal dependencies

## 🔧 Technologies Used

- **Framework**: Next.js 16.3.8 with App Router
- **UI Framework**: React 19
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Fonts**: Geist (Google Fonts)
- **Icons**: Custom SVG icons
- **Build Tool**: Turbopack

## 📝 Customization Checklist

- [ ] Update `data/config.ts` with your info
- [ ] Add project thumbnails to `public/images/projects/`
- [ ] Update project links in `data/projects.ts`
- [ ] Customize skills in `data/skills.ts`
- [ ] Update experience in `data/experience.ts`
- [ ] Modify about content in `data/about.ts`
- [ ] Update CV link in config
- [ ] Add your GitHub profile link
- [ ] Add your LinkedIn profile link
- [ ] Add your email
- [ ] Update project demo/GitHub links
- [ ] Test on mobile/tablet
- [ ] Deploy to Vercel or hosting platform

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
- Netlify
- GitHub Pages (with static export)
- Self-hosted (Node.js server)

## 📄 SEO

- Metadata configured in `layout.tsx`
- Open Graph tags included
- Semantic HTML structure
- Mobile-responsive design

## 🐛 Troubleshooting

### Port already in use
```bash
# Use different port
npm run dev -- -p 3001
```

### Build errors
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Styling not applying
- Ensure Tailwind CSS configuration is correct
- Check `tailwind.config.ts` and `globals.css`
- Rebuild: `npm run build`

## 📞 Support

For issues, refer to:
- Next.js docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- React docs: https://react.dev

## 📄 License

This project is open source and available under the MIT License.

---

**Last Updated**: October 2024
**Built with** ❤️ **using React, Next.js & Tailwind CSS**
