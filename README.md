# Professional Portfolio Website

A modern, responsive portfolio website built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS 4**. Features a professional design with blue color scheme, multiple pages, and dynamic project showcase.

## 🌟 Features

- ✨ **Modern Design** - Clean, professional, minimalist aesthetic with blue color scheme
- 📱 **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop
- 🎯 **Multi-Page Structure** - Profile, Projects, Education, Skills, and Contact pages
- 📊 **Project Showcase** - Dynamic routing with detailed project pages
- 🎨 **Beautiful UI** - Gradient backgrounds, smooth transitions, hover effects
- 📥 **CV Download** - Direct link to Google Drive CV
- ⚡ **Fast Performance** - Next.js static generation and optimization
- 🔍 **SEO Ready** - Proper metadata and structure
- 📧 **Contact Form** - Built-in contact form with validation

## 📂 Project Structure

```
portfolio/
├── app/
│   ├── page.tsx                    # Home/Profile page
│   ├── layout.tsx                  # Root layout
│   ├── globals.css                 # Global styles with color theme
│   ├── projects/
│   │   ├── page.tsx               # Projects list page
│   │   └── [slug]/page.tsx        # Project detail page (dynamic)
│   ├── education/page.tsx         # Education page
│   ├── skills/page.tsx            # Skills page
│   └── contact/page.tsx           # Contact page
├── components/
│   ├── Navbar.tsx                 # Navigation with mobile menu
│   ├── Footer.tsx                 # Footer component
│   └── ProjectCard.tsx            # Project card component
├── data/
│   ├── config.ts                  # Personal info & links
│   ├── projects.ts                # 6 project data
│   ├── education.ts               # Education & certifications
│   └── skills.ts                  # Skills with proficiency levels
├── public/
│   └── images/
│       ├── projects/              # Project images
│       ├── education/             # Education logos
│       └── profile/               # Profile photos
└── package.json
```

## 🎨 Color Scheme

```
Primary (Biru Cerah):    #00B4D8
Secondary (Biru Tua):    #0A4F7A
Accent (Highlight):      #00D4FF
Light Background:        #F0F7FF
Text Dark:              #1A1A1A
Text Light:             #666666
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone or extract the project
cd newportofolio

# Install dependencies
npm install

# Create .env.local (optional - already set to port 3005)
echo "PORT=3005" > .env.local
```

### Development

```bash
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) (or [http://localhost:3005](http://localhost:3005)) in your browser.

### Production Build

```bash
npm run build
npm start
```

## ✏️ Customization Guide

### 1. Update Personal Information

Edit `data/config.ts`:
```typescript
export const config = {
  name: "Your Name",
  title: "Your Job Title",
  email: "your.email@example.com",
  phone: "+62 8xx xxxx xxxx",
  location: "City, Country",
  cvLink: "https://your-google-drive-link",
  social: {
    github: "https://github.com/yourprofile",
    linkedin: "https://linkedin.com/in/yourprofile",
    email: "your.email@example.com",
  },
};
```

### 2. Update Projects

Edit `data/projects.ts` to add your own projects:
- Modify project data (title, description, technologies)
- Update image paths in `public/images/projects/`
- Add demo and GitHub links

### 3. Update Education

Edit `data/education.ts`:
- Add your school/university
- Add certifications and achievements
- Update logo paths in `public/images/education/`

### 4. Update Skills

Edit `data/skills.ts`:
- Modify skill categories
- Add/remove skills
- Update proficiency levels (Expert, Advanced, Intermediate)

### 5. Add Images

Place images in:
- `public/images/projects/` - Project thumbnails and screenshots
- `public/images/education/` - Institution logos
- `public/images/profile/` - Your profile photo

### 6. Customize Styles

Global styles in `app/globals.css`:
- Modify color variables in `:root`
- Adjust CSS classes and animations
- Customize button, card, and component styles

Tailwind config already supports custom colors through utility classes.

## 📄 Pages Overview

### Home / Profile Page (`/`)
- Hero section with introduction
- Social media links
- Featured projects preview (3 projects)
- Statistics section
- Call-to-action buttons

### Projects Page (`/projects`)
- List of 6 projects
- Alternating layout (image left/right)
- Short descriptions and tech stack
- "View Details" button for each project

### Project Detail Page (`/projects/[slug]`)
- Full project description
- Complete features list
- Technologies used
- Challenges and solutions
- Screenshot gallery
- Links to demo and GitHub repository
- Related projects sidebar

### Education Page (`/education`)
- Timeline of education
- University/school information
- Achievements and accomplishments
- Certifications section

### Skills Page (`/skills`)
- 6 skill categories:
  - Frontend Development
  - Backend Development
  - Data Engineering
  - Machine Learning & AI
  - Database & Storage
  - SEO & Digital Marketing
- Proficiency levels with visual indicators
- Technology summary section

### Contact Page (`/contact`)
- Contact information (email, phone, location)
- Social media links
- Contact form with validation
- Response time expectations

## 🔄 Dynamic Project Routing

Project detail pages are dynamically generated using Next.js `generateStaticParams`:
- Each project slug creates a unique page
- Automatic routing based on slug
- Static generation for performance

Add new projects to `data/projects.ts` and Next.js will automatically generate the routes.

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

**Netlify:**
```bash
npm run build
# Deploy .next folder to Netlify
```

**Docker:**
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

**Traditional Server:**
```bash
npm run build
npm start
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (full width, single column)
- **Tablet**: 640px - 1024px (2 columns)
- **Desktop**: > 1024px (full layout)

All components are fully responsive using Tailwind CSS grid and flex utilities.

## ⚡ Performance Features

- **Static Generation**: Most pages are pre-rendered at build time
- **Dynamic Routes**: Project pages use `generateStaticParams` for optimal performance
- **Image Optimization**: Next.js Image component ready (placeholder emojis used for demo)
- **CSS Optimization**: Tailwind CSS for minimal bundle size
- **Code Splitting**: Automatic by Next.js
- **Caching**: Optimized cache headers for production

## 🔐 Security Considerations

- Form submission is client-side (add backend service for actual email sending)
- CV link uses Google Drive with public sharing
- No sensitive data stored in frontend code

## 🛠️ Tech Stack

- **Framework**: Next.js 16.3.8
- **React**: 19.2.8
- **TypeScript**: 5
- **Styling**: Tailwind CSS 4
- **Font**: Geist (from Vercel)
- **Node Version**: 18+

## 📝 Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm start         # Start production server
npm run lint      # Run ESLint
```

## 🎯 Future Enhancements

- [ ] Add blog section
- [ ] Implement dark mode toggle
- [ ] Add animations library (Framer Motion)
- [ ] Backend email service integration
- [ ] Analytics (Google Analytics, Vercel Analytics)
- [ ] Multi-language support
- [ ] Add testimonials section
- [ ] Implement search functionality

## 📄 License

MIT License - Feel free to use this template for personal or commercial projects.

## 🤝 Support

For issues or questions:
1. Check the code comments
2. Review Next.js documentation
3. Check Tailwind CSS docs for styling help

## ✅ Checklist Before Deployment

- [ ] Update all personal information in `data/config.ts`
- [ ] Add all your project details in `data/projects.ts`
- [ ] Update education in `data/education.ts`
- [ ] Customize skills in `data/skills.ts`
- [ ] Add images to `public/images/` folders
- [ ] Test all pages in development
- [ ] Test responsive design on mobile
- [ ] Verify all links work correctly
- [ ] Update meta title and description in `app/layout.tsx`
- [ ] Build and test: `npm run build && npm start`
- [ ] Deploy to hosting platform

---

**Built with ❤️ using Next.js and Tailwind CSS**
