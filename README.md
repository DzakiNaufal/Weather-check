🌦️ Weather Cek

Aplikasi web sederhana untuk menampilkan informasi cuaca berdasarkan nama kota.
Dibuat dengan HTML, CSS, dan JavaScript menggunakan OpenWeather API.



🧩 Fitur Utama


* Mencari cuaca berdasarkan nama kota
* Menampilkan suhu (°C), deskripsi cuaca, dan ikon kondisi cuaca



📁 Struktur Proyek


weather-check/

├── index.html

├── style.css

├── script.js

└── README.md



⚙️ Cara Menjalankan (Lokal)


1. Clone atau download repo ini:
   git clone https://github.com/username/weather-check.git
   cd weather-check
2. Buka file `index.html` di browser (double-click atau `File > Open` pada browser).
3. Edit `script.js` dan masukkan API key kamu pada baris:

   const apiKey = "Masukkan Token API Anda di sini";
   
4. Ketik nama kota pada kolom input, lalu klik **Cek Cuaca**.



🔑 Cara Mendapatkan API Key dari OpenWeather


1. Buka [https://openweathermap.org/](https://openweathermap.org/) dan klik Sign Up (jika belum punya akun). Buat akun baru.
2. Setelah login, buka bagian API keys di dashboard (biasanya di menu profil atau pada halaman account).
3. Klik Create key atau Generate untuk membuat API key baru.
4. Salin API key yang diberikan, lalu tempelkan ke `script.js` pada variabel `apiKey`.




