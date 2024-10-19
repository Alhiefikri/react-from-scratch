````markdown
## Komponen Header

Komponen `Header` adalah bagian dari aplikasi yang menampilkan judul utama. Ini memberikan konteks kepada pengguna tentang fungsi aplikasi, yaitu untuk mencatat barang belanja.

### Kode

```javascript
export default function Header() {
  return <h1>Catatan Belanjaku 📝</h1>;
}
```
````

### Penjelasan Kode

1. **`export default function Header()`**:

   - **Fungsi**: Mendeklarasikan komponen `Header` sebagai fungsi JavaScript yang dapat digunakan di bagian lain aplikasi. Kata kunci `export default` memungkinkan komponen ini diekspor sebagai default, sehingga bisa diimpor tanpa kurung kurawal.

2. **`return <h1>Catatan Belanjaku 📝</h1>;`**:
   - **Fungsi**: Mengembalikan elemen JSX yang akan dirender di layar. JSX memungkinkan penulisan elemen HTML di dalam JavaScript.
   - **`<h1>`**: Menandakan bahwa ini adalah heading utama. Teks di dalamnya, "Catatan Belanjaku", akan ditampilkan sebagai judul aplikasi.
   - **Emoji 📝**: Menambahkan visual yang menarik dan relevan, memperkuat tema pencatatan.

### Alur Kode

- Ketika aplikasi di-render, fungsi `Header` dipanggil.
- Fungsi ini mengembalikan elemen `<h1>` dengan teks dan emoji.
- Elemen tersebut kemudian ditampilkan di bagian atas aplikasi, memberikan konteks kepada pengguna.

### Cara Membaca Kode

1. **Identifikasi**: Lihat bahwa ini adalah komponen yang diekspor. Ini berarti komponen ini dapat digunakan di tempat lain dalam aplikasi.
2. **Fungsi**: Perhatikan bahwa ini adalah fungsi yang tidak menerima parameter. Artinya, komponen ini statis dan tidak tergantung pada input luar.
3. **Return Statement**: Fokus pada bagian `return`, yang menunjukkan apa yang akan ditampilkan. Semua yang ada di dalam return adalah antarmuka pengguna yang akan terlihat.

### Analogi Sederhana

Bayangkan kamu memiliki sebuah papan pengumuman di sebuah kafe. Papan pengumuman itu adalah komponen `Header`, dan tulisan "Catatan Belanjaku 📝" adalah pengumuman di papan tersebut. Setiap kali orang melihat papan pengumuman, mereka langsung memahami bahwa mereka berada di tempat yang tepat untuk mencatat apa yang mereka butuhkan.

### Kesimpulan

Komponen `Header` adalah elemen sederhana namun penting dalam aplikasi. Ini berfungsi sebagai pengantar, memberikan informasi yang jelas tentang tujuan aplikasi kepada pengguna. Dengan menggunakan elemen heading dan emoji, komponen ini membuat aplikasi lebih menarik dan mudah dipahami. Komponen ini menunjukkan bagaimana bahkan bagian terkecil dari aplikasi dapat memberikan konteks dan meningkatkan pengalaman pengguna.
