# Portfolio Setup Guide

Panduan step-by-step untuk mengkustomisasi portfolio sesuai dengan informasi pribadi Anda.

## 🎯 Step 1: Update Personal Information

Buka file `data/config.ts` dan update informasi berikut:

```typescript
export const config = {
  name: "Nama Lengkap Anda",
  title: "Full Stack Developer & SEO Specialist",
  subtitle: "Data Engineer | ML Engineer | Database Expert",
  bio: "Deskripsi singkat tentang Anda...",
  
  email: "email@anda.com",
  phone: "+62 8xx xxxx xxxx",
  location: "Kota, Indonesia",
  
  cvLink: "https://drive.google.com/file/d/YOUR-CV-ID/view?usp=drive_link",
  
  social: {
    github: "https://github.com/username-anda",
    linkedin: "https://linkedin.com/in/profile-anda",
    email: "email@anda.com",
  },
};
```

**Catatan**: Untuk `cvLink`, buka file CV Anda di Google Drive → Share → Copy link yang berbagi ke publik.

---

## 🛠️ Step 2: Update Proyek

Buka file `data/projects.ts` dan edit setiap proyek:

```typescript
{
  id: 1,
  slug: "nama-project-unik",
  title: "Judul Project",
  shortDescription: "Deskripsi singkat 1-2 baris",
  fullDescription: "Deskripsi lengkap project...",
  thumbnail: "/images/projects/nama-file.jpg",
  images: [
    "/images/projects/screenshot-1.jpg",
    "/images/projects/screenshot-2.jpg",
  ],
  technologies: ["React", "Node.js", "PostgreSQL"],
  role: "Full Stack Developer",
  duration: "3 bulan",
  demoLink: "https://link-demo.com",
  githubLink: "https://github.com/username/repo",
  features: ["Feature 1", "Feature 2", "Feature 3"],
  challenges: ["Challenge 1", "Challenge 2"],
  solution: "Solusi yang diimplementasikan...",
}
```

**Langkah:**
1. Ubah judul, deskripsi, dan teknologi untuk setiap project
2. Ganti link demo dan GitHub
3. Tambahkan fitur, challenges, dan solusi
4. Tambahkan gambar ke folder `public/images/projects/`

---

## 🎓 Step 3: Update Pendidikan

Buka file `data/education.ts`:

```typescript
{
  id: 1,
  institution: "Nama Universitas/Sekolah",
  logo: "/images/education/logo-sekolah.png",
  degree: "Gelar (S1, Sertifikat, dll)",
  field: "Bidang Studi",
  startYear: 2019,
  endYear: 2023,
  description: "Deskripsi singkat pendidikan Anda...",
  achievements: ["Pencapaian 1", "Pencapaian 2", "Pencapaian 3"],
}
```

**Langkah:**
1. Update nama institusi
2. Ganti tahun mulai dan selesai
3. Tambahkan pencapaian (GPA, awards, dll)
4. Upload logo institusi ke `public/images/education/`

---

## 💻 Step 4: Update Skill

Buka file `data/skills.ts` dan edit kategori skill:

```typescript
{
  id: 1,
  category: "Frontend Development",
  description: "Membangun user interface yang responsif dan interaktif",
  skills: [
    { name: "React", proficiency: "Expert" },
    { name: "Next.js", proficiency: "Expert" },
    { name: "TypeScript", proficiency: "Advanced" },
    // Tambahkan skill lainnya...
  ],
}
```

**Opsi Proficiency:**
- `"Expert"` - Pengalaman ekstensif, bisa build dari nol
- `"Advanced"` - Skill yang kuat, minimal guidance
- `"Intermediate"` - Solid understanding, perlu riset

---

## 🖼️ Step 5: Tambahkan Gambar

### Struktur Folder:
```
public/images/
├── projects/
│   ├── ecommerce-thumb.jpg          # Thumbnail project
│   ├── ecommerce-1.jpg              # Screenshot 1
│   ├── ecommerce-2.jpg              # Screenshot 2
│   └── ...
├── education/
│   ├── university-logo.png          # Logo institusi
│   └── ...
└── profile/
    └── your-photo.jpg               # Foto profil Anda
```

### Cara Upload:
1. Buka folder `public/images/` di file explorer
2. Buat subfolder untuk setiap kategori
3. Letakkan gambar Anda
4. Update path di `config.ts`, `projects.ts`, `education.ts`

**Tips Gambar:**
- Ukuran optimal: 1200x600px untuk thumbnails
- Format: JPG atau PNG
- Ukuran file: < 500KB
- Gunakan nama file yang deskriptif

---

## 🎨 Step 6: Customize Warna (Optional)

Buka `app/globals.css` untuk mengubah warna:

```css
:root {
  --primary-blue: #00B4D8;     /* Ubah warna biru cerah */
  --secondary-blue: #0A4F7A;   /* Ubah warna biru tua */
  --accent-blue: #00D4FF;      /* Ubah warna accent */
  --light-blue: #F0F7FF;       /* Ubah background terang */
  --text-dark: #1A1A1A;        /* Ubah warna teks */
  --text-light: #666666;       /* Ubah warna teks sekunder */
}
```

**Tool untuk memilih warna:**
- [Coolors.co](https://coolors.co)
- [Color Hunt](https://colorhunt.co)

---

## 🚀 Step 7: Test & Preview

### Run Development Server:
```bash
npm run dev
```

Buka browser: `http://localhost:3001`

### Cek Halaman:
- ✅ Homepage (Profile) - `/`
- ✅ Projects List - `/projects`
- ✅ Project Detail - `/projects/nama-slug`
- ✅ Education - `/education`
- ✅ Skills - `/skills`
- ✅ Contact - `/contact`

### Test Responsiveness:
1. Buka Developer Tools (F12)
2. Klik device toolbar
3. Test di berbagai ukuran: Mobile, Tablet, Desktop

---

## 📦 Step 8: Build untuk Production

```bash
npm run build
```

Jika tidak ada error, siap untuk deploy!

---

## 🌐 Step 9: Deploy

### Opsi 1: Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Opsi 2: Netlify

1. Jalankan: `npm run build`
2. Upload folder `.next` ke Netlify
3. Set environment: `NODE_VERSION=18`

### Opsi 3: Server Tradisional

```bash
npm run build
npm start
```

---

## ✅ Checklist Final

Sebelum deploy ke production, pastikan:

- [ ] Semua informasi personal sudah update di `config.ts`
- [ ] Semua 6 project sudah diupdate dengan data asli
- [ ] Education sudah diupdate
- [ ] Skills sudah sesuai dengan kemampuan Anda
- [ ] Semua gambar sudah di-upload ke `public/images/`
- [ ] CV link berfungsi (bisa diakses dari browser)
- [ ] Semua halaman berfungsi di development
- [ ] Responsive design sudah ditest di mobile
- [ ] Semua link social media benar (GitHub, LinkedIn, Email)
- [ ] Build berhasil tanpa error: `npm run build`

---

## 🆘 Troubleshooting

### Port 3000 sudah terpakai
```bash
# Gunakan port lain
npm run dev -- -p 3005
```

### Gambar tidak tampil
- Pastikan path file benar di `data/*.ts`
- Nama file harus cocok dengan yang di `public/images/`
- Gunakan lowercase dan tanda hubung untuk nama file

### Build error
```bash
# Clear cache dan rebuild
rm -rf .next
npm run build
```

### Mobile view error
- Test dengan device tools di browser
- Pastikan semua komponen responsive

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

---

## 💡 Tips

1. **Backup** - Jangan lupa backup file `data/` sebelum edit
2. **Commit** - Jika menggunakan Git, commit setelah setiap update
3. **Test** - Selalu test setiap perubahan di development
4. **Optimize** - Kompress gambar sebelum upload
5. **SEO** - Update meta description di `app/layout.tsx`

---

Selamat membuat portfolio Anda! 🎉
