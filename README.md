# 🌟 IBM SkillsBuild x Hacktiv8 - Project Web Tanya Jawab

Selamat datang di **Project Web Tanya Jawab**, sebuah platform yang saya ciptakan menggunakan **IBM Granite** untuk keperluan **IBM SkillsBuild x Hacktiv8**.  

Web ini dirancang untuk **mendekatkan hubungan antara admin dan mahasiswa**, membuat proses tanya jawab lebih **transparan, terbuka, dan anonim**, sehingga semua siswa memiliki hak yang sama untuk bertanya tanpa harus malu atau takut terjadi konflik.

---
kunjungi web saya : https://ocha-ask.web.app
status : off

## 🖥 Deskripsi Web

Platform ini dibangun dengan konsep **tanya jawab seperti NGL**, namun dengan pendekatan yang lebih **terbuka dan transparan**:  

- **Komentar Mahasiswa:** Mahasiswa dapat bertanya langsung di halaman Home tanpa perlu login. Semua pertanyaan akan diposting secara **anonim**, sehingga mendorong keterbukaan dan mengurangi rasa malu.  
- **Dashboard Admin:** Admin (dalam hal ini saya sebagai asisten lab) memiliki akses terbatas melalui `/admin` dengan username & password. Di sini, admin dapat **menambahkan, mengedit, membalas, dan menghapus** pengumuman atau komentar.  
- **Hubungan Admin & User:**  
  - Komentar dari dashboard admin otomatis muncul sebagai `Admin`.  
  - Komentar dari halaman Home muncul sebagai `Question`.  
  - Balasan admin dapat langsung membimbing mahasiswa, memperkuat komunikasi yang efektif.  
- **Transparansi & Aksesibilitas:** Mahasiswa tidak perlu menghubungi nomor telepon pribadi admin, sehingga informasi dapat diakses secara **merata dan adil**.  

---

## 💡 Fitur Utama

### 📢 Pengumuman & Tugas
- Menampilkan pengumuman terbaru dalam **2 kolom grid**.    
- Admin dapat **edit** atau **hapus** dan **me-replay** pengumuman juga pertanyaan mahasiswa.  
- UI modern dengan tema **ungu & biru**, konsisten di semua halaman.  

### 💬 Komentar & Balasan
- Mahasiswa dapat mengirim pertanyaan/komentar secara **anonim**.  
- Admin dapat membalas komentar langsung dari dashboard admin (**ditandai sebagai Admin**).  
- Semua komentar dan balasan bisa dihapus sesuai kebutuhan.  
- Balasan tampil **indent**, memudahkan membedakan komentar admin & user.  

### 🖥 Dashboard Admin
- **Login restricted:** Akses melalui `/admin` menggunakan username & password.  
- Menambahkan, mengedit, dan menghapus pengumuman serta komentar.  
- Kirim komentar dari dashboard akan tampil sebagai **Admin** di halaman Home.  
- Responsive, mudah digunakan, dan menjaga keamanan data.  

### 📱 Halaman Home
- Mahasiswa dapat bertanya tanpa login, pertanyaan otomatis anonim.  
- Menampilkan komentar dan balasan secara **realtime**.  
- Balasan admin muncul berbeda untuk membedakan **admin vs user**.  
- Scrollable untuk pengumuman dan komentar agar tampilan tetap rapi dan user-friendly.  

---

## ⚙️ Teknologi yang Digunakan

- **React** (Frontend) ⚛️  
- **Firebase Firestore & Storage** (Database & File Hosting) 🔥  
- **Bootstrap** (Styling) 🎨  
- **Vite** (Build Tool) ⚡  
- **IBM Granite** (Platform & Infrastructure) 💼  

---
