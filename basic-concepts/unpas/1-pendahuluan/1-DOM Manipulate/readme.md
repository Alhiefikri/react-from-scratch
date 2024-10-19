# README: Document Object Model (DOM) Example

## Deskripsi

Dokumen ini adalah contoh sederhana yang menunjukkan bagaimana cara menggunakan JavaScript untuk memanipulasi Document Object Model (DOM) di dalam sebuah halaman HTML. Kode ini membuat elemen `h1` baru dan menambahkannya ke dalam div dengan ID `app`.

## Struktur Kode

### 1. HTML Dasar

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document Object Model</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="text/javascript">
      // JavaScript code goes here
    </script>
  </body>
</html>
```

- **`<!DOCTYPE html>`**: Menentukan bahwa ini adalah dokumen HTML5.
- **`<html lang="en">`**: Menandakan bahwa bahasa yang digunakan adalah bahasa Inggris.
- **`<head>`**: Bagian ini berisi metadata, seperti judul halaman.
- **`<title>`**: Menentukan judul halaman yang akan ditampilkan di tab browser.
- **`<body>`**: Bagian utama dari dokumen yang berisi konten yang terlihat oleh pengguna. Di sini kita memiliki:
  - **`<div id="app">`**: Elemen div kosong yang akan menjadi tempat untuk menambahkan elemen baru dengan JavaScript.
  - **`<script type="text/javascript">`**: Tempat untuk menulis kode JavaScript.

### 2. JavaScript

```javascript
// Seleksi elemen div dengan id 'app'
const app = document.getElementById("app");
```

- **`document.getElementById("app")`**: Mengambil elemen div yang memiliki ID `app` dan menyimpannya dalam variabel `app`.

```javascript
// Buat elemen h1 baru
const header = document.createElement("h1");
```

- **`document.createElement("h1")`**: Membuat elemen HTML baru, dalam hal ini, elemen `h1`, dan menyimpannya dalam variabel `header`.

```javascript
// Buat text node untuk elemen h1 tadi
const headerContent = document.createTextNode("Belajar React bareng WPU 🚀");
```

- **`document.createTextNode("Belajar React bareng WPU 🚀")`**: Membuat node teks yang berisi string yang diinginkan, yaitu "Belajar React bareng WPU 🚀".

```javascript
// Append teks ke dalam h1
header.appendChild(headerContent);
```

- **`header.appendChild(headerContent)`**: Menambahkan node teks yang telah dibuat ke dalam elemen `h1`.

```javascript
// simpan elemen h1 di dalam div
app.appendChild(header);
```

- **`app.appendChild(header)`**: Menambahkan elemen `h1` yang sudah berisi teks ke dalam div `app`, sehingga tampil di halaman.

## Kesimpulan

Contoh ini menunjukkan bagaimana kita dapat menggunakan JavaScript untuk membuat elemen HTML secara dinamis dan menambahkannya ke dalam dokumen. Ini adalah dasar yang penting dalam memahami cara bekerja dengan DOM, yang juga menjadi fondasi untuk framework seperti React.
