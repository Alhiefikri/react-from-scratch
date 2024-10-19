Berikut adalah penjelasan lengkap untuk komponen `Footer`, termasuk penjelasan kode, fungsi, alur, cara membaca kode, cara berpikir React, analogi sederhana, dan kesimpulan:

````markdown
## Komponen Footer

Komponen `Footer` bertugas untuk menampilkan statistik tentang daftar belanjaan, termasuk jumlah total item, jumlah item yang sudah dibeli, dan persentase item yang sudah dibeli.

### Kode

```javascript
export default function Footer({ items }) {
  if (items.length === 0)
    return <footer className="stats">Daftar Belanjaan Masih Kosong!</footer>;

  const totalItems = items.length; // Menghitung total item
  const checkedItems = items.filter((item) => item.checked).length; // Menghitung item yang sudah dibeli
  const percentage = Math.round((checkedItems / totalItems) * 100); // Menghitung persentase

  return (
    <footer className="stats">
      Ada {totalItems} barang di daftar belanjaan, {checkedItems} barang sudah
      dibeli ({percentage}%)
    </footer>
  );
}
```
````

### Penjelasan Kode

1. **`export default function Footer({ items })`**:

   - Mendeklarasikan komponen `Footer` yang menerima props `items`, yang merupakan daftar barang belanjaan.

2. **Cek Daftar Kosong**:

   - **`if (items.length === 0)`**: Memeriksa apakah daftar barang belanjaan kosong. Jika iya, mengembalikan elemen footer dengan pesan bahwa daftar masih kosong.

3. **Menghitung Statistik**:

   - `const totalItems = items.length;`: Menghitung total item dalam daftar.
   - `const checkedItems = items.filter((item) => item.checked).length;`: Menggunakan metode `filter` untuk menghitung item yang sudah ditandai (checked).
   - `const percentage = Math.round((checkedItems / totalItems) * 100);`: Menghitung persentase item yang sudah dibeli dan membulatkannya ke angka bulat.

4. **Render Elemen Footer**:
   - Mengembalikan elemen footer yang menampilkan statistik total item, item yang sudah dibeli, dan persentase.

### Alur Kode

- Komponen memeriksa apakah daftar item kosong.
- Jika tidak kosong, menghitung total item, jumlah item yang sudah dibeli, dan persentase item yang sudah dibeli.
- Menampilkan informasi tersebut di bagian footer.

### Cara Membaca Kode

1. **Identifikasi Props**: Komponen menerima `items`, yang merupakan array dari item belanjaan.
2. **Cek Kondisi**: Memahami logika di balik pemeriksaan apakah daftar kosong.
3. **Statistik**: Fokus pada cara komponen menghitung total dan item yang sudah dibeli.
4. **Render**: Lihat bagaimana informasi tersebut disajikan dalam elemen footer.

### Cara Berpikir React

Dalam React, kita berfokus pada komponen yang bersifat fungsional dan stateful. Komponen ini mengelola tampilan berdasarkan props yang diterima. Dalam hal ini:

- **Stateless vs. Stateful**: `Footer` adalah komponen stateless karena tidak memiliki state internal, tetapi bergantung pada props yang diterima.
- **Reactivity**: Setiap kali `items` berubah (misalnya, ketika item ditambahkan atau dihapus), React secara otomatis memicu render ulang komponen ini. Komponen akan menampilkan informasi yang terbaru, menjadikannya dinamis dan responsif.
- **Komposisi Komponen**: Komponen kecil seperti `Footer`, `Header`, `Form`, dan `GroceryList` dapat digabungkan untuk membentuk aplikasi yang lebih besar. Setiap komponen memiliki tanggung jawabnya sendiri, membuat kode lebih terorganisir dan mudah dipelihara.

### Analogi Sederhana

Bayangkan kamu memiliki papan pengumuman yang menunjukkan statistik pengeluaranmu di supermarket. Komponen `Footer` adalah seperti papan tersebut yang memberikan ringkasan tentang berapa banyak barang yang telah dibeli dan berapa persen dari total yang telah dicatat. Jika tidak ada barang, papan tersebut akan memberitahumu bahwa tidak ada data yang tersedia.

### Kesimpulan

Komponen `Footer` memberikan informasi yang berguna dan ringkas tentang status daftar belanjaan. Dengan menggunakan props dan logika sederhana, komponen ini membantu pengguna untuk memahami seberapa banyak yang telah mereka beli. Ini menunjukkan pentingnya memberikan umpan balik kepada pengguna dalam aplikasi, yang meningkatkan pengalaman pengguna secara keseluruhan.
