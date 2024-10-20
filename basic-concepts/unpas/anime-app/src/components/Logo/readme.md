# README: Komponen Logo

## Deskripsi

Komponen `Logo` menampilkan elemen visual berupa ikon dan teks yang merepresentasikan merek atau identitas aplikasi.

## Kode

```javascript
export default function Logo() {
  return (
    <div className="logo">
      <span role="img">🍥</span>
      <h1>WeeBoo</h1>
      <span role="img">🍥</span>
    </div>
  );
}
```

## Penjelasan Kode

1. **Definisi Komponen**:

   - `export default function Logo() { ... }`
     - Mendefinisikan `Logo` sebagai fungsi yang akan merender elemen logo.

2. **Mengembalikan Elemen JSX**:

   - `return ( <div className="logo"> ... </div> );`
     - Mengembalikan elemen `<div>` dengan kelas CSS `logo` untuk penataan.

3. **Elemen Ikon**:

   - `<span role="img">🍥</span>`
     - Menggunakan elemen `<span>` untuk menampilkan emoji 🍥 sebagai ikon. `role="img"` memberikan aksesibilitas dengan memberitahu pembaca layar bahwa ini adalah gambar.

4. **Judul**:

   - `<h1>WeeBoo</h1>`
     - Menampilkan teks "WeeBoo" sebagai nama aplikasi dengan tingkat heading yang tinggi.

5. **Elemen Ikon Tambahan**:
   - `<span role="img">🍥</span>`
     - Menambahkan ikon emoji lainnya di akhir logo untuk konsistensi visual.

## Alur Kode

1. Ketika `Logo` dirender, elemen `<div>` dengan kelas `logo` dibuat.
2. Dua ikon emoji ditampilkan di samping teks "WeeBoo".

## Cara Kode Bekerja

- Komponen `Logo` menyusun elemen visual menggunakan JSX, menggabungkan teks dan ikon untuk menciptakan tampilan yang menarik.

## Cara Berpikir React

- Komponen `Logo` sederhana ini menggambarkan prinsip dasar React, di mana kita menggabungkan elemen UI untuk membangun identitas aplikasi.

## Analogi Sederhana

Bayangkan `Logo` seperti stempel resmi.

- **Ikon** adalah simbol di sekeliling stempel.
- **Teks** adalah nama yang tertera di tengah stempel.

## Kesimpulan

Komponen `Logo` adalah bagian penting dari identitas aplikasi yang menyatukan elemen visual dan teks. Memahami komponen ini membantu dalam menciptakan tampilan yang konsisten dan menarik di seluruh aplikasi.

Jika ada komponen lain yang ingin dijelaskan, silakan beri tahu!
