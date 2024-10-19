Berikut adalah penjelasan lengkap untuk komponen `GroceryList`, termasuk penjelasan kode, fungsi, alur, cara membaca kode, analogi sederhana, dan kesimpulan:

````markdown
## Komponen GroceryList

Komponen `GroceryList` bertanggung jawab untuk menampilkan daftar item belanja yang telah ditambahkan. Pengguna dapat mengurutkan daftar berdasarkan nama atau status ceklis, serta menghapus item atau membersihkan seluruh daftar.

### Kode

```javascript
import { useState } from "react"; // Mengimpor hook useState dari React
import Item from "./Item"; // Mengimpor komponen Item untuk menampilkan setiap item

export default function GroceryList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearItems,
}) {
  const [sortBy, setSortBy] = useState("input"); // State untuk menyimpan kriteria pengurutan

  let sortedItems; // Variabel untuk menyimpan item yang sudah diurutkan

  // Mengurutkan item berdasarkan kriteria yang dipilih
  switch (sortBy) {
    case "name":
      sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "checked":
      sortedItems = items.slice().sort((a, b) => a.checked - b.checked);
      break;
    default:
      sortedItems = items; // Menggunakan urutan input default
      break;
  }

  // Render elemen daftar
  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item
              item={item} // Mengoper item ke komponen Item
              key={item.id} // Memberikan key unik untuk setiap item
              onDeleteItem={onDeleteItem} // Mengoper fungsi untuk menghapus item
              onToggleItem={onToggleItem} // Mengoper fungsi untuk menandai item
            />
          ))}
        </ul>
      </div>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button onClick={onClearItems}>Bersihkan Daftar</button> {/* Tombol untuk membersihkan daftar */}
      </div>
    </>
  );
}
```
````

### Penjelasan Kode

1. **`import { useState } from "react";`**:

   - Mengimpor hook `useState` dari React untuk mengelola state di dalam komponen.

2. **`import Item from "./Item";`**:

   - Mengimpor komponen `Item` yang akan digunakan untuk menampilkan setiap item dalam daftar.

3. **`export default function GroceryList({...})`**:

   - Mendeklarasikan komponen `GroceryList` yang menerima beberapa props: `items`, `onDeleteItem`, `onToggleItem`, dan `onClearItems`.

4. **State Variable**:

   - `const [sortBy, setSortBy] = useState("input");`: Menginisialisasi state `sortBy` untuk menyimpan kriteria pengurutan, mulai dengan urutan input.

5. **Mengurutkan Item**:

   - Menggunakan `switch` untuk menentukan cara mengurutkan item berdasarkan nilai `sortBy`.
   - Jika `sortBy` adalah "name", item diurutkan berdasarkan nama.
   - Jika `sortBy` adalah "checked", item diurutkan berdasarkan status ceklis.
   - Jika tidak ada kriteria yang cocok, item ditampilkan dalam urutan aslinya.

6. **Render Elemen Daftar**:
   - Menggunakan elemen `<ul>` untuk menampilkan daftar item. Setiap item di-render menggunakan komponen `Item`.
   - Menyediakan dropdown untuk memilih kriteria pengurutan dan tombol untuk membersihkan daftar.

### Alur Kode

- Pengguna memilih kriteria pengurutan dari dropdown.
- Komponen menghitung item yang telah diurutkan berdasarkan kriteria yang dipilih.
- Item-item ditampilkan dalam urutan yang sesuai, dan pengguna dapat menghapus atau menandai item.
- Tombol "Bersihkan Daftar" dapat digunakan untuk menghapus semua item dari daftar.

### Cara Membaca Kode

1. **Identifikasi Props**: Lihat bahwa `GroceryList` menerima beberapa props yang berfungsi untuk mengelola item.
2. **Perhatikan State**: State `sortBy` digunakan untuk menyimpan kriteria pengurutan.
3. **Fokus pada Logika Pengurutan**: Bagian `switch` menunjukkan bagaimana item diurutkan.
4. **Lihat Struktur JSX**: Bagian `return` menunjukkan bagaimana elemen daftar dirender.

### Analogi Sederhana

Bayangkan kamu memiliki kotak penyimpanan yang berisi semua barang belanjaanmu. Komponen `GroceryList` adalah seperti sistem pengelolaan kotak tersebut. Kamu dapat memilih untuk melihat barang berdasarkan nama, status ceklis, atau urutan yang kamu masukkan. Selain itu, kamu bisa membuang semua barang yang tidak diperlukan.

### Kesimpulan

Komponen `GroceryList` merupakan elemen penting dalam aplikasi yang memungkinkan pengguna untuk melihat dan mengelola daftar belanja. Dengan fitur pengurutan dan opsi untuk membersihkan daftar, komponen ini meningkatkan fungsionalitas dan pengalaman pengguna secara keseluruhan. Ini menunjukkan bagaimana pengelolaan data dan antarmuka pengguna dapat berjalan bersamaan untuk menciptakan aplikasi yang intuitif dan mudah digunakan.
