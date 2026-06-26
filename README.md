# 🚀 Portfolio Website — Next.js + Tailwind CSS

Website portofolio personal bergaya dark/cyberpunk dengan tema navy biru dan aksen cyan, terinspirasi dari desain Frontend Developer modern.

## 📦 Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Language**: TypeScript

## 🛠️ Setup & Instalasi

```bash
# 1. Masuk ke folder project
cd portfolio

# 2. Install dependencies
npm install

# 3. Jalankan development server
npm run dev

# 4. Buka browser
# http://localhost:3000
```

## 📁 Struktur File

```
portfolio/
├── app/
│   ├── globals.css        # Global styles + animasi
│   ├── layout.tsx         # Root layout + metadata
│   └── page.tsx           # Halaman utama
├── components/
│   ├── Navbar.tsx         # Navigasi sticky + mobile menu
│   ├── Hero.tsx           # Section hero dengan typing effect
│   ├── About.tsx          # Section tentang + skill icons
│   ├── Projects.tsx       # Grid proyek 3 kolom
│   └── Contact.tsx        # Form kontak + social links
├── public/
│   └── cv.pdf             # (Taruh CV kamu disini)
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

## ✏️ Cara Kustomisasi

### Ganti Nama & Info
- Buka `components/Hero.tsx` → ubah `"NAMA KAMU!"` dan teks deskripsi
- Buka `components/About.tsx` → ubah teks bio
- Buka `components/Contact.tsx` → ubah email dan social links

### Tambah Foto
- Di `Hero.tsx`: ganti `<div>` placeholder dengan:
  ```jsx
  <img src="/foto.jpg" alt="Foto" className="w-full h-full object-cover" />
  ```
- Taruh file `foto.jpg` di folder `public/`

### Tambah/Edit Proyek
- Buka `components/Projects.tsx`
- Edit array `projects` dengan proyek kamu

### Ganti CV
- Taruh file `cv.pdf` di folder `public/`

## 🎨 Warna Tema
- Background: `#0a0f1e` (navy gelap)
- Card: `#0d1529`
- Aksen: `#00e5ff` (cyan/neon)
