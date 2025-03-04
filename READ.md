# Image to GIF Converter

Image to GIF Converter adalah aplikasi berbasis web untuk mengonversi berbagai format gambar (PNG, JPG, JPEG) menjadi GIF dengan fitur drag & drop dan pengaturan urutan frame.

## 🎨 Fitur

- 🚀 Konversi gambar ke GIF dengan durasi yang dapat disesuaikan.
- 🎞️ Dukungan format PNG, JPG, dan JPEG.
- 🖱️ Drag & Drop untuk mempermudah pengaturan gambar.
- 🔄 Sorting gambar secara manual sebelum dikonversi.
- 🌐 Tampilan bertema retro.

## 📦 Instalasi

1. Clone repository ini:
   ```sh
   git clone https://github.com/username/image-to-gif-converter.git
   cd image-to-gif-converter
   ```
2. Buat virtual environment dan install dependencies:
   ```sh
   python -m venv venv
   source venv/bin/activate  # Untuk MacOS/Linux
   venv\Scripts\activate     # Untuk Windows
   pip install -r requirements.txt
   ```
3. Jalankan aplikasi:
   ```sh
   python app.py
   ```
4. Buka browser dan akses `http://127.0.0.1:5000/`

## 🚀 Deploy ke Render

1. Push project ke GitHub.
2. Buat akun di [Render](https://render.com/).
3. Tambahkan layanan baru (New Web Service) dan hubungkan dengan repository GitHub.
4. Gunakan command berikut sebagai Start Command:
   ```sh
   gunicorn app:app
   ```
5. Tunggu deployment selesai dan akses aplikasi melalui URL yang diberikan Render.

## 💖 Dukung Proyek Ini

Jika kamu merasa proyek ini bermanfaat, dukung dengan donasi:

[☕ Donasi via Saweria](https://saweria.co/otkhodylinz)

atau melalui PayPal:

[💰 Donasi via PayPal](https://paypal.me/rizkywahyuhaqiqi07)

---

Dibuat dengan ❤️ oleh [@rizkywhaqiqi](https://www.instagram.com/rizkywhaqiqi/)

