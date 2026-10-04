# ⚡ Quick Start Guide

Mulai dengan portfolio Anda dalam 5 menit!

## Step 1: Jalankan Development Server (1 menit)

```bash
cd C:\newportofolio
npm install    # Jika belum install
npm run dev
```

Buka browser: **http://localhost:3001**

✅ Website sudah berfungsi dengan data placeholder!

---

## Step 2: Edit Informasi Pribadi (2 menit)

Buka file: `data/config.ts`

Ubah ini:
```typescript
name: "Your Name",              // Ganti nama Anda
title: "Your Title",            // Ganti job title
email: "your@email.com",        // Ganti email
phone: "+62 8xx xxxx xxxx",     // Ganti no telp
location: "Kota, Indonesia",    // Ganti lokasi
cvLink: "https://drive.google.com/...", // Ganti CV link
```

💾 Save file → Browser akan auto-refresh!

---

## Step 3: Update Project Anda (2 menit)

Buka file: `data/projects.ts`

Ganti 6 project dengan project asli Anda:
```typescript
{
  id: 1,
  slug: "nama-project-1",
  title: "Nama Project",
  shortDescription: "Deskripsi singkat",
  fullDescription: "Deskripsi lengkap",
  technologies: ["React", "Node.js"],
  demoLink: "https://...",
  githubLink: "https://...",
  features: ["Feature 1", "Feature 2"],
  // ... edit fields lainnya
}
```

---

## Step 4: Tambah Gambar (Optional)

```
public/images/
├── projects/          ← Taruh gambar project di sini
├── education/         ← Taruh logo institusi di sini
└── profile/          ← Taruh foto profil di sini
```

Update path di data files:
```typescript
thumbnail: "/images/projects/nama-file.jpg"
```

---

## Step 5: Test Hasil (1 menit)

Klik tombol di website:
- ✅ Navbar links semua berfungsi
- ✅ Projects list tampil dengan benar
- ✅ Project detail pages terbuka
- ✅ Education & Skills terlihat
- ✅ Contact form responsif
- ✅ Download CV link berfungsi
- ✅ Mobile view responsive (F12 → Toggle device toolbar)

---

## 📱 Preview Hasil

### Mobile (Portrait):
```
┌─────────────┐
│   Navbar    │
│  (Hamburger)│
├─────────────┤
│   Hero      │
│   Section   │
├─────────────┤
│  Content    │
│  (Full)     │
├─────────────┤
│   Footer    │
└─────────────┘
```

### Desktop:
```
┌───────────────────────────────┐
│    Navbar (sticky top)        │
├───────────────────────────────┤
│  Hero        │  Image/Content  │
├───────────────────────────────┤
│        Main Content            │
├───────────────────────────────┤
│         Footer                 │
└───────────────────────────────┘
```

---

## 🎨 Jika Ingin Customize Warna

Buka: `app/globals.css`

Ubah warna di `:root`:
```css
:root {
  --primary-blue: #00B4D8;      /* Ubah warna biru cerah */
  --secondary-blue: #0A4F7A;    /* Ubah warna biru tua */
  --accent-blue: #00D4FF;       /* Ubah warna highlight */
  --light-blue: #F0F7FF;        /* Ubah background */
  --text-dark: #1A1A1A;         /* Ubah warna teks */
}
```

---

## 📦 Build untuk Production

Ketika siap deploy:

```bash
npm run build
```

Jika tidak ada error, siap deploy ke Vercel atau hosting lainnya!

```bash
vercel                  # Deploy ke Vercel
npm start              # Atau run locally untuk testing
```

---

## ❓ Common Questions

### Q: Portfolio sudah update tapi website tidak berubah?
**A**: Tekan Ctrl+Shift+R (refresh hard cache)

### Q: Bagaimana caranya perubahan image jika image belum ada?
**A**: Placeholders sudah ada, tambah gambar real ke `public/images/`

### Q: Bisa deploy untuk free?
**A**: Ya! Vercel & Netlify free dengan GitHub repo

### Q: Bagaimana contact form berfungsi?
**A**: Form sudah ada, tinggal integrate dengan backend email service (SendGrid, Mailgun, dll)

---

## 📚 Dokumentasi Lengkap

Jika ingin tahu lebih detail:

- **[README.md](./README.md)** - Overview & fitur lengkap
- **[SETUP.md](./SETUP.md)** - Panduan customization detail
- **[PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)** - Penjelasan setiap file
- **[FEATURES.md](./FEATURES.md)** - Fitur & capabilities

---

## ✨ Checklist

- [ ] `npm run dev` sudah berjalan
- [ ] Website buka di browser
- [ ] Navigasi semua halaman berfungsi
- [ ] Update `data/config.ts` dengan info pribadi
- [ ] Update `data/projects.ts` dengan project asli
- [ ] Update `data/education.ts` dan `data/skills.ts`
- [ ] Download CV link sudah sesuai
- [ ] Test di mobile view
- [ ] Run `npm run build` untuk verifikasi
- [ ] Siap untuk deploy!

---

## 🚀 Deploy

### Opsi 1: Vercel (Recommended - 3 menit)

```bash
npm install -g vercel
vercel
```

Follow prompts → Website live!

### Opsi 2: Netlify

1. Upload `.next` folder ke Netlify
2. Set NODE_VERSION=18
3. Deploy!

### Opsi 3: GitHub Pages

```bash
npm run build
# Push ke GitHub
```

---

## 💡 Tips

1. **Backup** - Backup `data/` folder sebelum edit
2. **Git** - Gunakan Git untuk version control
3. **Test** - Test setiap perubahan di development
4. **Optimize** - Compress gambar sebelum upload
5. **Mobile** - Selalu test di mobile view

---

## 🎉 You're Done!

Portfolio Anda sudah siap! Sekarang tinggal:

1. ✏️ Customize dengan data pribadi Anda
2. 🖼️ Tambah gambar asli
3. 🚀 Deploy ke Vercel
4. 📤 Share link ke orang-orang!

Good luck! 🍀

---

**Need help?** Lihat file dokumentasi lainnya atau check Next.js docs: https://nextjs.org/docs
