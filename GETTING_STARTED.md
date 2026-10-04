# 🎯 Getting Started

Selamat datang! Portfolio website Anda sudah siap. Panduan ini akan memandu Anda langkah demi langkah.

---

## 📋 Yang Sudah Siap

✅ **Website sudah fully built** dengan:
- 6 halaman (Profile, Projects, Education, Skills, Contact, Project Detail)
- 3 reusable components
- Responsive design untuk semua device
- Blue color scheme yang modern
- Contact form & social links
- CV download button (Google Drive)
- 6 placeholder projects

---

## 🚀 Quick Start (5 Menit)

### 1. Buka Terminal

```bash
cd C:\newportofolio
```

### 2. Install Dependencies (Jika belum)

```bash
npm install
```

### 3. Jalankan Development Server

```bash
npm run dev
```

### 4. Buka Browser

Klik link atau buka manual: **http://localhost:3001**

✅ **Website sudah hidup!** (dengan data placeholder)

---

## 📝 Update Data Pribadi (2 Menit)

### File: `data/config.ts`

Cari baris ini dan ubah:

```typescript
export const config = {
  name: "Nama Anda",           // ← UBAH NAMA
  title: "Your Job Title",     // ← UBAH PROFESI
  email: "your@email.com",     // ← UBAH EMAIL
  phone: "+62 8xx xxxx xxxx",  // ← UBAH NO TELP
  location: "Kota, Indonesia", // ← UBAH LOKASI
  cvLink: "https://drive.google.com/file/d/...", // ← UBAH CV LINK
  social: {
    github: "https://github.com/username",       // ← UBAH GITHUB
    linkedin: "https://linkedin.com/in/profile", // ← UBAH LINKEDIN
    email: "your@email.com",                     // ← UBAH EMAIL
  },
};
```

**Simpan file** → Browser otomatis refresh → Lihat perubahan!

---

## 📊 Update 6 Project Anda (10 Menit)

### File: `data/projects.ts`

Update setiap project dengan data asli:

```typescript
{
  id: 1,
  slug: "project-name",  // URL-friendly name
  title: "Nama Project",
  shortDescription: "Deskripsi 1-2 baris",
  fullDescription: "Deskripsi lengkap project",
  technologies: ["React", "Node.js", "PostgreSQL"],
  role: "Full Stack Developer",
  duration: "3 months",
  demoLink: "https://demo.com",
  githubLink: "https://github.com/repo",
  features: [
    "Feature 1",
    "Feature 2",
    "Feature 3",
    // ... 8 features total
  ],
  challenges: ["Challenge 1", "Challenge 2"],
  solution: "Solution yang diimplementasikan",
}
```

**Tips**:
- Ubah 6 project dengan project asli Anda
- Setiap project punya unique slug
- Features harus 8 items
- Challenges 2-3 items

---

## 🖼️ Tambah Gambar (5 Menit - Optional)

### Lokasi Upload

```
public/images/
├── projects/          ← Gambar project
├── education/         ← Logo institusi
└── profile/          ← Foto profil
```

### Cara Upload

1. Buat/compress gambar Anda
2. Copy ke folder yang sesuai
3. Update path di data files:

```typescript
// Contoh di projects.ts
thumbnail: "/images/projects/nama-file.jpg",
images: [
  "/images/projects/screenshot-1.jpg",
  "/images/projects/screenshot-2.jpg",
],

// Contoh di education.ts
logo: "/images/education/university-logo.png",
```

---

## 🎨 Customize Warna (3 Menit - Optional)

### File: `app/globals.css`

Ubah CSS variables di `:root`:

```css
:root {
  --primary-blue: #00B4D8;      /* Warna biru cerah */
  --secondary-blue: #0A4F7A;    /* Warna biru tua */
  --accent-blue: #00D4FF;       /* Warna highlight */
  --light-blue: #F0F7FF;        /* Background terang */
  --text-dark: #1A1A1A;         /* Teks gelap */
  --text-light: #666666;        /* Teks terang */
}
```

**Warna Tool**: https://coolors.co

---

## 📱 Test Responsiveness

### Di Browser

Tekan **F12** → Click device toolbar icon → Test berbagai ukuran

### Apa yang ditest

- ✓ Mobile (375px)
- ✓ Tablet (768px)
- ✓ Desktop (1920px)
- ✓ Navigation hamburger di mobile
- ✓ Text readability
- ✓ Button accessibility

---

## 🏗️ Project Overview

### Routes (Halaman)

```
/                 → Homepage (Profile)
/projects         → Daftar 6 project
/projects/[slug]  → Detail project (dynamic)
/education        → Timeline pendidikan
/skills           → 6 skill categories
/contact          → Contact form
```

### Struktur

```
Homepage
├── Hero Section
├── Featured Projects (3)
└── Stats

Projects List
├── Project 1 (img kiri, text kanan)
├── Project 2 (img kanan, text kiri)
└── ... alternating layout

Project Detail Page
├── Hero image
├── Overview
├── Features
├── Tech stack
├── Challenges & Solutions
├── Screenshots
└── Links (Demo, GitHub)

Education Page
├── Timeline
├── Certifications
└── Achievements

Skills Page
├── 6 Skill Categories
├── Proficiency levels
└── Tech summary

Contact Page
├── Contact info cards
├── Contact form
└── Social media
```

---

## 🔑 Key Files to Know

| File | Fungsi |
|------|--------|
| `data/config.ts` | Info pribadi, CV link, social |
| `data/projects.ts` | 6 project dengan details |
| `data/education.ts` | Education & certifications |
| `data/skills.ts` | Skills dengan 6 categories |
| `app/globals.css` | Global styles & color theme |
| `components/Navbar.tsx` | Navigation bar |
| `components/Footer.tsx` | Footer component |
| `app/page.tsx` | Homepage |
| `app/projects/page.tsx` | Projects list |
| `app/projects/[slug]/page.tsx` | Project detail |

---

## 💡 Common Customizations

### Q: Bagaimana cara change nama website di navbar?
**A**: Buka `components/Navbar.tsx`, ubah text "Portfolio" di logo

### Q: Bagaimana menambah halaman baru?
**A**: Buat folder di `app/` dengan `page.tsx` di dalamnya

### Q: Bagaimana cara ubah footer color?
**A**: Edit class di `components/Footer.tsx` atau update `globals.css`

### Q: Bagaimana contact form berfungsi?
**A**: Form sudah ada client-side, perlu integrate backend email service (SendGrid, Mailgun)

### Q: Bagaimana deploy?
**A**: Lihat `DEPLOYMENT_GUIDE.md` atau `QUICK_START.md`

---

## ✅ Checklist Sebelum Deploy

- [ ] Update `data/config.ts` (nama, email, social)
- [ ] Update 6 project di `data/projects.ts`
- [ ] Update education di `data/education.ts`
- [ ] Update skills di `data/skills.ts`
- [ ] Add images ke `public/images/` (optional)
- [ ] Test website: `npm run dev`
- [ ] Test responsive (F12 → device toolbar)
- [ ] Test semua links berfungsi
- [ ] CV download link berfungsi
- [ ] Build sukses: `npm run build`
- [ ] Tidak ada error di console

---

## 🚀 Next Steps

### Langkah 1: Setup & Customize (30 menit)
1. Update data pribadi
2. Update 6 project
3. Test di browser

### Langkah 2: Add Images (10 menit)
1. Prepare gambar (compress)
2. Upload ke `public/images/`
3. Update paths di data files

### Langkah 3: Final Test (5 menit)
1. Test di desktop
2. Test di mobile (F12)
3. Test semua links

### Langkah 4: Deploy (5 menit)
1. Build: `npm run build`
2. Deploy ke Vercel / Netlify / server
3. Share link portfolio Anda!

---

## 📚 Dokumentasi

Jika butuh help lebih detail:

- **[QUICK_START.md](./QUICK_START.md)** - 5 menit setup
- **[SETUP.md](./SETUP.md)** - Detail customization
- **[README.md](./README.md)** - Overview lengkap
- **[FEATURES.md](./FEATURES.md)** - Semua fitur
- **[PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)** - File details
- **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** - Deploy options
- **[INDEX.md](./INDEX.md)** - Navigation semua docs

---

## 🎯 Timeline Estimate

```
Start (Now)
    ↓
Update Data (2 min)
    ↓
Add Images (5 min) [Optional]
    ↓
Test (5 min)
    ↓
Build (2 min)
    ↓
Deploy (5 min)
    ↓
Live! (Total: 20-30 minutes)
```

---

## 💬 Tips

1. **Save often** - Jangan lupa save file
2. **Refresh browser** - Ctrl+Shift+R untuk hard refresh
3. **Test mobile** - Jangan lupa test di mobile
4. **Back up data** - Backup file `data/` sebagai safety
5. **Use Git** - Jika familiar dengan Git, jangan lupa commit

---

## 🎉 Let's Build!

Anda sudah punya foundation website yang sangat solid. Sekarang tinggal:

1. ✏️ Customize dengan data Anda
2. 🖼️ Add gambar asli
3. 🚀 Deploy ke internet
4. 📢 Share dengan dunia!

---

## 🆘 Stuck?

Jika ada masalah:

1. Baca file docs yang sesuai
2. Check komentar di kode
3. Google error message
4. Check Next.js docs: https://nextjs.org/docs

---

**Ready? Mari mulai! 🚀**

Open `data/config.ts` sekarang dan ganti nama Anda!

---

Last Updated: Oct 4, 2026
Version: 1.0.0
