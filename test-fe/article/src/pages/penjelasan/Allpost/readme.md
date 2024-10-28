Berikut adalah penjelasan detail mengenai kode di halaman `AllPosts`, yang menampilkan daftar artikel dengan opsi untuk memfilter berdasarkan status:

````markdown
# Dokumentasi Halaman - `AllPosts.js`

## Deskripsi

Halaman ini menampilkan semua artikel yang ada dalam aplikasi. Pengguna dapat memfilter artikel berdasarkan status (semua, diterbitkan, draf, dan dihapus). Juga terdapat opsi untuk menghapus atau mengedit artikel.

### Kode: `AllPosts.js`

```javascript
/* eslint-disable react/jsx-key */
/** @format */

import { useState } from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import Table from "../components/Table";
import Action from "../components/Action";
import DeleteModal from "../components/DeleteModal";
import { createPortal } from "react-dom";

const AllPosts = () => {
  const [tab, setTab] = useState("all");
  const tabs = [
    { title: "All", value: "all" },
    { title: "Published", value: "publish" },
    { title: "Draft", value: "draft" },
    { title: "Trashed", value: "trash" },
  ];

  const { data, modalOpen } = useSelector((state) => {
    if (tab === "all") {
      return { data: state.articles.data, modalOpen: state.deleteModal.open };
    }
    const datas = state.articles.data.filter((item) => item.status === tab);
    return { data: datas, modalOpen: state.deleteModal.open };
  });

  const configs = [
    {
      label: "Title",
      type: "text",
      render: (item) => item.title,
    },
    {
      label: "Category",
      type: "text",
      render: (item) => item.category,
    },
    {
      label: "Status",
      type: "text",
      render: (item) => item.status,
    },
    {
      label: "Action",
      type: "text",
      render: (item, handleDelete, handleEdit) => (
        <Action
          item={item}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ),
    },
  ];

  const keyFn = (item) => {
    return item.id;
  };

  return (
    <div className="app">
      <Navbar />
      <div className="layout">
        <div className="header">
          <div className="flex-row gap-12">
            {tabs.map((item) => {
              return (
                <div
                  onClick={() => setTab(item.value)}
                  className={`tab ${tab === item.value ? "tab-active" : ""}`}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
        </div>
        <div className="dynamicTable">
          <div className="table">
            <div className="tableHeader">
              <div className="title">Article</div>
            </div>
            <div className="tableContent">
              <Table data={data} config={configs} keyFn={keyFn} />
            </div>
          </div>
        </div>
      </div>
      {modalOpen && createPortal(<DeleteModal />, document.body)}
    </div>
  );
};

export default AllPosts;
```
````

### Penjelasan Kode

1. **Import Statements**

   - `import { useState } from "react";`: Mengimpor hook `useState` untuk mengelola state lokal komponen.
   - `import Navbar from "../components/Navbar";`: Mengimpor komponen `Navbar` yang akan ditampilkan di atas halaman.
   - `import { useSelector } from "react-redux";`: Mengimpor hook `useSelector` untuk mengakses state dari store Redux.
   - `import Table from "../components/Table";`: Mengimpor komponen `Table` untuk menampilkan data artikel dalam bentuk tabel.
   - `import Action from "../components/Action";`: Mengimpor komponen `Action` yang menangani aksi untuk setiap artikel (misalnya edit dan delete).
   - `import DeleteModal from "../components/DeleteModal";`: Mengimpor komponen modal untuk konfirmasi penghapusan artikel.
   - `import { createPortal } from "react-dom";`: Mengimpor `createPortal` untuk merender modal di luar hierarki DOM komponen.

2. **Fungsi Komponen**

```javascript
const AllPosts = () => {
  const [tab, setTab] = useState("all");
```

- **`const [tab, setTab] = useState("all");`**: State lokal yang menyimpan tab aktif (default: "all").

3. **Daftar Tab**

```javascript
const tabs = [
  { title: "All", value: "all" },
  { title: "Published", value: "publish" },
  { title: "Draft", value: "draft" },
  { title: "Trashed", value: "trash" },
];
```

- Daftar tab untuk memfilter artikel berdasarkan status.

4. **Mengambil Data dari Redux**

```javascript
const { data, modalOpen } = useSelector((state) => {
  if (tab === "all") {
    return { data: state.articles.data, modalOpen: state.deleteModal.open };
  }
  const datas = state.articles.data.filter((item) => item.status === tab);
  return { data: datas, modalOpen: state.deleteModal.open };
});
```

- Menggunakan `useSelector` untuk mengambil data artikel dan status modal dari Redux.
- Jika tab aktif adalah "all", ambil semua artikel. Jika tidak, filter artikel berdasarkan status tab yang dipilih.

5. **Konfigurasi Tabel**

```javascript
const configs = [
  {
    label: "Title",
    type: "text",
    render: (item) => item.title,
  },
  {
    label: "Category",
    type: "text",
    render: (item) => item.category,
  },
  {
    label: "Status",
    type: "text",
    render: (item) => item.status,
  },
  {
    label: "Action",
    type: "text",
    render: (item, handleDelete, handleEdit) => (
      <Action item={item} handleDelete={handleDelete} handleEdit={handleEdit} />
    ),
  },
];
```

- `configs` adalah array yang mendeskripsikan kolom-kolom dalam tabel, termasuk label dan fungsi untuk merender setiap item.

6. **Fungsi Kunci**

```javascript
const keyFn = (item) => {
  return item.id;
};
```

- `keyFn` digunakan untuk mendapatkan ID unik setiap artikel sebagai kunci untuk merender tabel.

7. **Render UI**

```javascript
return (
  <div className="app">
    <Navbar />
    <div className="layout">
      <div className="header">
        <div className="flex-row gap-12">
          {tabs.map((item) => {
            return (
              <div
                onClick={() => setTab(item.value)}
                className={`tab ${tab === item.value ? "tab-active" : ""}`}
              >
                {item.title}
              </div>
            );
          })}
        </div>
      </div>
      <div className="dynamicTable">
        <div className="table">
          <div className="tableHeader">
            <div className="title">Article</div>
          </div>
          <div className="tableContent">
            <Table data={data} config={configs} keyFn={keyFn} />
          </div>
        </div>
      </div>
    </div>
    {modalOpen && createPortal(<DeleteModal />, document.body)}
  </div>
);
```

- UI terdiri dari `Navbar`, header untuk tab filter, dan tabel untuk menampilkan artikel. Jika modal penghapusan dibuka, modal akan dirender menggunakan `createPortal`.

## Cara Menggunakan

- Pengguna dapat mengklik tab untuk memfilter artikel yang ditampilkan.
- Tabel akan menampilkan artikel sesuai dengan status yang dipilih.
- Pengguna dapat menghapus artikel melalui modal konfirmasi yang muncul ketika opsi hapus dipilih.

## Catatan Tambahan

- Pastikan untuk mengimpor dan menggunakan komponen ini dalam routing aplikasi agar halaman ini dapat diakses.

```

Silakan salin dan gunakan dokumentasi ini untuk memahami lebih baik tentang halaman `AllPosts`. Jika ada bagian lain yang ingin kamu bahas atau pertanyaan lebih lanjut, beri tahu saya!
```
