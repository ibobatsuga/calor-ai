# CalorAI — Full Project Ecosystem

CalorAI adalah aplikasi pelacak nutrisi, kalori, dan kebugaran komprehensif berbasis **Progressive Web App (PWA)** dan **Capacitor 5 (Android & iOS)** dengan arsitektur **Offline-First**, **Edge Gateway (Cloudflare Workers)**, dan integrasi **Multi-Modal AI Vision**.

---

## 📁 Struktur Direktori & File

```text
CalorAI/
├── index.html              # Aplikasi inti CalorAI (Onboarding, Dashboard, Meal Logger, Barcode, Fit, Profil)
├── exercises.js            # Katalog 302 latihan fitnes + referensi CDN SVG 3 frame
├── foods.js                # Database komposisi pangan Indonesia (TKPI 2019 Kemenkes RI)
├── sw.js                   # Service Worker v3.0 (Offline-first cache & dynamic network-first)
├── manifest.json           # Manifest PWA (Standalone, tema oranye/hitam)
├── server.py               # Local HTTP server ringan untuk pengujian offline
│
├── worker.js               # Cloudflare Workers Edge Gateway (AI Vision proxy, Supabase sync)
├── wrangler.toml           # Konfigurasi deployment Cloudflare Workers
├── functions/              # Serverless edge functions (Cloudflare Pages compatible)
│
├── android/                # Proyek native Android (Capacitor 5 + Gradle)
├── android-release/        # File build APK siap instal & bundle rilis
│   ├── CalorAI.apk         # APK rilis siap instal di smartphone Android
│   ├── CalorAI.aab         # Android App Bundle untuk Google Play Store
│   ├── signing.keystore    # Release keystore untuk signing APK/AAB
│   └── assetlinks.json     # Digital Asset Links untuk verifikasi domain PWA/TWA
├── ios/                    # Proyek native iOS (Capacitor 5 + Xcode workspace)
│
├── www/                    # Web bundle siap pakai tersinkronisasi untuk Capacitor
├── cpanel-dist/            # Distribusi siap upload untuk cPanel / Apache / Nginx (.htaccess included)
│
├── docs/                   # Dokumentasi teknis & arsitektur sistem
│   └── CalorAI_System_Architecture_Flowchart.pdf  # Dokumen Arsitektur & Flowchart untuk CTO (5 Halaman A4)
│
├── package.json            # Node.js dependencies & scripts
├── package-lock.json       # Dependency lockfile
├── capacitor.config.json   # Konfigurasi Capacitor (App ID, App Name, webDir)
└── README.md               # Dokumentasi ringkas proyek
```

---

## 🚀 Cara Menjalankan Aplikasi

### 1. Menjalankan di Komputer Lokal (Development)
Menggunakan server Python bawaan:
```bash
python3 server.py
# Buka browser di http://localhost:8000
```
Atau menggunakan Node.js:
```bash
npx serve www
```

### 2. Deployment ke Cloudflare Workers
```bash
npx wrangler deploy
# Endpoint publik: https://calorai.nalarasa.workers.dev
```

### 3. Deployment ke cPanel / Web Hosting
1. Buka folder `cpanel-dist/`.
2. Upload seluruh isi folder tersebut ke direktori `public_html/` domain/subdomain Anda.
3. Aplikasi otomatis berjalan lengkap dengan file `.htaccess` untuk caching & MIME type.

### 4. Build Native Android (APK)
```bash
npm install
npx cap sync android
cd android
./gradlew assembleRelease
# Output APK: android/app/build/outputs/apk/release/app-release.apk
```
*Catatan: File APK siap instal sudah tersedia langsung di dalam folder `android-release/CalorAI.apk`.*

---

## 🌐 Layanan & Endpoint Aktif
- **Aplikasi Web / PWA:** `https://calorai.nalarasa.workers.dev`
- **Mirror GitHub Pages:** `https://ibobatsuga.github.io/calor-ai/`
- **CDN Aset Gerakan SVG (906 file):** `https://app.fluxy.id/workout-assets/`
- **Dokumentasi CTO:** Buka file `docs/CalorAI_System_Architecture_Flowchart.pdf`
