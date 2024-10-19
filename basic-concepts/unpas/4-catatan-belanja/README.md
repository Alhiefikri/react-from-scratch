### Penjelasan Kode

Kode yang diberikan adalah aplikasi sederhana untuk daftar belanja menggunakan React. Mari kita bahas bagian-bagian pentingnya satu per satu.

#### 1. Import dan Data Awal

```javascript
import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import GroceryList from "./components/GroceryList";
import Footer from "./components/Footer";
```

- **useState**: Hook dari React yang memungkinkan kita untuk menambahkan state ke komponen fungsional.
- **Header, Form, GroceryList, Footer**: Komponen yang diimpor dari folder `components`. Ini adalah bagian-bagian dari antarmuka pengguna aplikasi.

```javascript
const groceryItems = [
  {
    id: 1,
    name: "Kopi Bubuk",
    quantity: 2,
    checked: true,
  },
  {
    id: 2,
    name: "Gula Pasir",
    quantity: 5,
    checked: false,
  },
  {
    id: 3,
    name: "Air Mineral",
    quantity: 3,
    checked: false,
  },
];
```

- **groceryItems**: Ini adalah array yang berisi objek yang merepresentasikan barang-barang belanja. Setiap objek memiliki `id`, `name`, `quantity`, dan `checked` (status apakah barang sudah dicentang).

#### 2. Komponen Utama: App

```javascript
export default function App() {
  const [items, setItems] = useState(groceryItems);
```

- **App**: Ini adalah komponen utama yang mengelola state untuk daftar belanja.
- **useState**: Digunakan untuk menyimpan `items`, yang diinisialisasi dengan `groceryItems`.

#### 3. Fungsi Penanganan (Handler)

- **handleAddItem**: Menambahkan item baru ke daftar.

  ```javascript
  function handleAddItem(item) {
    setItems([...items, item]);
  }
  ```

- **handleDeleteItem**: Menghapus item berdasarkan `id`.

  ```javascript
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  ```

- **handleToggleItem**: Mengubah status `checked` dari item berdasarkan `id`.

  ```javascript
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }
  ```

- **handleClearItems**: Menghapus semua item dari daftar.

  ```javascript
  function handleClearItems() {
    setItems([]);
  }
  ```

#### 4. Render Antarmuka

```javascript
return (
  <div className="app">
    <Header />
    <Form onAddItem={handleAddItem} />
    <GroceryList
      items={items}
      onDeleteItem={handleDeleteItem}
      onToggleItem={handleToggleItem}
      onClearItems={handleClearItems}
    />
    <Footer items={items} />
  </div>
);
```

- **Header**: Komponen yang menampilkan judul atau navigasi.
- **Form**: Komponen untuk menambahkan item baru, menerima fungsi `handleAddItem` sebagai props.
- **GroceryList**: Komponen yang menampilkan daftar item, menerima `items` dan fungsi untuk menghapus, mengubah status, dan menghapus semua item.
- **Footer**: Komponen yang mungkin menampilkan informasi tambahan, menerima `items` untuk menampilkan jumlah item atau informasi lain.

### README untuk Aplikasi Daftar Belanja

````markdown
# Aplikasi Daftar Belanja

Aplikasi ini adalah daftar belanja sederhana yang dibangun menggunakan React. Pengguna dapat menambahkan, menghapus, dan menandai item sebagai sudah dibeli.

## Fitur

- Menambahkan item ke daftar belanja.
- Menghapus item dari daftar belanja.
- Menandai item sebagai sudah dibeli.
- Menghapus semua item dari daftar belanja.

## Instalasi

1. Pastikan Anda memiliki Node.js terinstal.
2. Clone repositori ini atau unduh kode.
3. Buka terminal dan jalankan perintah berikut:
   ```bash
   npm install
   npm start
   ```
````

## Struktur Proyek

```
/src
  /components
    Header.js
    Form.js
    GroceryList.js
    Footer.js
  App.js
  index.js
```

## Penggunaan

1. Buka aplikasi di browser Anda.
2. Gunakan form untuk menambahkan item ke daftar.
3. Klik pada item untuk menandainya sebagai sudah dibeli.
4. Klik tombol untuk menghapus item atau menghapus semua item dari daftar.

## Kontribusi

Silakan buat pull request untuk kontribusi pada proyek ini.
