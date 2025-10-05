Tanya Jawab Web App for IBM SkillsBuild X Hacktiv8
Deskripsi
Repositori ini berisi web aplikasi tanya jawab yang saya buat menggunakan IBM Granite. Web ini dibuat khusus untuk program IBM SkillsBuild X Hacktiv8 dengan tema tanya jawab yang lebih transparan dan interaktif. Tujuannya adalah untuk memudahkan komunikasi antara admin dan user, serta mengurangi ketergantungan pada nomor telepon pribadi. Dengan fitur-fitur yang dirancang secara cermat, web ini bertujuan untuk menciptakan lingkungan belajar yang lebih inklusif dan efisien.

Teknologi yang Digunakan
Frontend: React.js
Backend: Node.js (Express.js)
Database: Firebase Realtime Database
Hosting: Firebase Hosting
Aksesibilitas: Kompatibel dengan semua browser modern
Fitur Utama
1. Tanya Jawab
Fitur utama dari web ini adalah kolom tanya jawab yang dirancang untuk memudahkan mahasiswa dalam bertanya dan berbagi informasi. Kolom ini mirip dengan NGL, tetapi dengan tampilan yang lebih transparan dan user-friendly. Setiap pertanyaan dan jawaban dapat dengan mudah diakses oleh semua pengguna, sehingga informasi dapat tersebar luas dan cepat.

2. Anonimitas
Untuk mengurangi rasa malu atau konflik antar mahasiswa, setiap komentar atau pertanyaan di-post secara anonim. Hal ini memungkinkan mahasiswa untuk bertanya tanpa takut diidentifikasi, sehingga mereka merasa lebih nyaman untuk mengungkapkan pertanyaan atau pendapat mereka.

3. Dashboard Admin
Admin memiliki akses ke dashboard khusus yang dapat diakses melalui URL /admin. Untuk masuk, admin harus memasukkan username dan password yang telah disediakan. Dari dashboard ini, admin dapat melakukan berbagai aktivitas penting, seperti:

Menambahkan Pertanyaan: Admin dapat menambahkan pertanyaan baru ke dalam sistem.
Mengedit Pertanyaan: Admin dapat mengedit pertanyaan yang sudah ada untuk memperbaiki kesalahan atau menambahkan informasi tambahan.
Menghapus Pertanyaan: Admin dapat menghapus pertanyaan yang tidak relevan atau tidak pantas.
Mengelola Jawaban: Admin dapat menambah, mengedit, atau menghapus jawaban yang diberikan oleh pengguna.
4. Dashboard Home
Dashboard home adalah tampilan utama yang dapat diakses oleh semua pengguna. Di sini, pengguna dapat melihat semua pertanyaan dan jawaban yang telah di-post. Fitur ini dirancang untuk memudahkan pengguna dalam mencari informasi yang mereka butuhkan. Selain itu, dashboard ini juga menampilkan status pengguna, yaitu "admin" jika pengguna login melalui dashboard admin, atau "user" jika login melalui dashboard home.

5. Identifikasi User
Untuk membedakan antara admin dan user, web ini menggunakan sistem identifikasi yang jelas. Jika pengguna login melalui dashboard admin, status "admin" akan muncul di dashboard home. Begitu pula jika pengguna bertanya atau mengomentari dari dashboard home (user), pertanyaan akan terpost dengan format yang jelas dan teridentifikasi sebagai pertanyaan dari user.

6. Transparansi dan Akses Terbuka
Web ini sangat transparan dan terbuka untuk semua pengguna. User tidak perlu login untuk bertanya atau mengomentari, sehingga mereka dapat dengan mudah mendapatkan informasi yang mereka butuhkan. Hal ini bertujuan untuk menciptakan lingkungan belajar yang lebih inklusif dan efisien.

Instalasi
1. Clone Repository
Pertama, clone repository ini ke komputer Anda dengan perintah berikut:

git clone https://github.com/username/repo-name.git

2. Install Dependencies
Setelah repository berhasil di-clone, masuk ke direktori project dan install semua dependencies yang diperlukan:

cd repo-name
npm install

3. Konfigurasi
Buat file .env di root direktori project dan tambahkan konfigurasi yang diperlukan. Berikut adalah contoh konfigurasi yang mungkin diperlukan:

FIREBASE_API_KEY=your-firebase-api-key
FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
FIREBASE_PROJECT_ID=your-firebase-project-id
FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
FIREBASE_APP_ID=your-firebase-app-id
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123

Pastikan untuk mengganti nilai-nilai di atas sesuai dengan konfigurasi Firebase Anda.

4. Jalankan Aplikasi
Setelah semua dependencies terinstall dan konfigurasi sudah sesuai, Anda dapat menjalankan aplikasi dengan perintah berikut:

npm start

Aplikasi akan mulai berjalan dan dapat diakses melalui browser pada URL http://localhost:5173.

Penggunaan
Dashboard Admin
Untuk mengakses dashboard admin, buka browser dan kunjungi URL /admin. Masukkan username dan password yang telah disediakan. Setelah login, Anda akan diarahkan ke dashboard admin di mana Anda dapat mengelola pertanyaan dan jawaban.

Dashboard Home
Dashboard home adalah tampilan utama yang dapat diakses oleh semua pengguna. Di sini, pengguna dapat melihat semua pertanyaan dan jawaban yang telah di-post. User dapat menanyakan sesuatu tanpa login karena web ini sangat transparan dan terbuka. Untuk bertanya atau mengomentari, cukup klik tombol "Tanya" atau "Komentar" dan isi formulir yang tersedia.
