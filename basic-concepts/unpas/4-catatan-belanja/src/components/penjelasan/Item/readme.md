Berikut adalah penjelasan lengkap untuk komponen `Item`, termasuk penjelasan kode, fungsi, alur, cara membaca kode, analogi sederhana, dan kesimpulan:

````markdown
## Komponen Item

Komponen `Item` bertanggung jawab untuk menampilkan setiap item dalam daftar belanja. Komponen ini memungkinkan pengguna untuk menandai item sebagai sudah dibeli atau menghapusnya dari daftar.

### Kode

```javascript
export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li key={item.id}>
      <input
        type="checkbox"
        checked={item.checked} // Status ceklis item
        onChange={() => onToggleItem(item.id)} // Mengubah status ceklis saat checkbox diklik
      />
      <span style={item.checked ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.name} {/* Menampilkan jumlah dan nama item */}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>&times;</button>{" "}
      {/* Tombol untuk menghapus item */}
    </li>
  );
}
```
````

### Penjelasan Kode

1. **`export default function Item({...})`**:

   - Mendeklarasikan komponen `Item` yang menerima props `item`, `onDeleteItem`, dan `onToggleItem`.

2. **`<li key={item.id}>`**:

   - Menggunakan elemen list item (`<li>`) untuk menampung setiap item. Memberikan key unik (`item.id`) untuk membantu React mengenali item yang telah berubah, ditambahkan, atau dihapus.

3. **Checkbox Input**:

   - **`<input type="checkbox" checked={item.checked} onChange={() => onToggleItem(item.id)} />`**:
     - Menampilkan checkbox yang statusnya tergantung pada `item.checked`.
     - Saat checkbox diklik, fungsi `onToggleItem` dipanggil dengan ID item untuk mengganti status ceklis.

4. **Menampilkan Nama dan Jumlah Item**:

   - **`<span style={item.checked ? { textDecoration: "line-through" } : {}}>`**:
     - Menampilkan jumlah dan nama item. Jika item sudah ditandai (checked), teksnya diberi garis tengah (line-through) untuk menunjukkan bahwa item telah dibeli.

5. **Tombol Hapus**:
   - **`<button onClick={() => onDeleteItem(item.id)}>&times;</button>`**:
     - Tombol ini akan memanggil `onDeleteItem` dengan ID item saat diklik, menghapus item dari daftar.

### Alur Kode

- Komponen `Item` menerima data item dan fungsi untuk menghapus atau menandai item.
- Checkbox memungkinkan pengguna untuk menandai item sebagai sudah dibeli.
- Nama dan jumlah item ditampilkan dengan gaya yang sesuai.
- Pengguna dapat menghapus item dengan mengklik tombol.

### Cara Membaca Kode

1. **Identifikasi Props**: Lihat bahwa komponen menerima `item`, `onDeleteItem`, dan `onToggleItem`.
2. **Perhatikan Struktur JSX**: Memahami bagaimana elemen list item dibangun dengan checkbox, teks, dan tombol.
3. **Fokus pada Interaksi**: Mengamati bagaimana checkbox dan tombol terhubung dengan fungsi yang diberikan sebagai props.

### Analogi Sederhana

Bayangkan kamu memiliki sebuah daftar belanjaan di kertas. Komponen `Item` adalah seperti setiap entri di daftar itu. Checkbox di samping setiap entri memungkinkan kamu menandai item yang sudah kamu beli, sedangkan tombol di sampingnya berfungsi untuk menghapus item dari daftar jika kamu tidak lagi membutuhkannya.

### Kesimpulan

Komponen `Item` adalah elemen inti dalam aplikasi yang menampilkan dan mengelola setiap item dalam daftar belanja. Dengan fungsionalitas untuk menandai dan menghapus item, komponen ini memberikan pengguna kontrol yang mudah atas daftar belanja mereka. Desain yang sederhana namun efektif membuat interaksi dengan aplikasi menjadi intuitif dan menyenangkan.
