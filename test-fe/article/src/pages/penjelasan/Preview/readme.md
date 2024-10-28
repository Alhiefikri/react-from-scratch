Berikut adalah penjelasan detail mengenai kode di halaman `Preview`, yang menampilkan artikel yang telah diterbitkan:

````markdown
# Dokumentasi Halaman - `Preview.js`

## Deskripsi

Halaman ini digunakan untuk menampilkan pratinjau semua artikel yang telah diterbitkan. Hanya artikel dengan status "publish" yang akan ditampilkan kepada pengguna.

### Kode: `Preview.js`

```javascript
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";

const Preview = () => {
  const articles = useSelector((state) => {
    return state.articles.data.filter((item) => item.status === "publish");
  });

  return (
    <div className="app">
      <Navbar />
      <div className="layout">
        <div className="new">
          <div className="title mb-20">Preview</div>
          <div className="flex-col gap-16">
            {articles.map((item) => {
              return (
                <div className="flex-1 border-main p-12 flex-col gap-8 bg-white">
                  <div className="title-2 color-primary-main">{item.title}</div>
                  <div className="font-12 bold color-neutral-70">
                    {item.category}
                  </div>
                  <div className="text color-neutral-100">{item.content}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
```
````

### Penjelasan Kode

1. **Import Statements**

   - `import { useSelector } from "react-redux";`: Mengimpor hook `useSelector` untuk mengakses state dari store Redux.
   - `import Navbar from "../components/Navbar";`: Mengimpor komponen `Navbar` yang ditampilkan di atas halaman.

2. **Fungsi Komponen**

```javascript
const Preview = () => {
  const articles = useSelector((state) => {
    return state.articles.data.filter((item) => item.status === "publish");
  });
```

- **`const articles = useSelector(...)`**: Menggunakan `useSelector` untuk mengambil daftar artikel yang memiliki status "publish". Ini dilakukan dengan memfilter `state.articles.data`.

3. **Render UI**

```javascript
return (
  <div className="app">
    <Navbar />
    <div className="layout">
      <div className="new">
        <div className="title mb-20">Preview</div>
        <div className="flex-col gap-16">
          {articles.map((item) => {
            return (
              <div className="flex-1 border-main p-12 flex-col gap-8 bg-white">
                <div className="title-2 color-primary-main">{item.title}</div>
                <div className="font-12 bold color-neutral-70">
                  {item.category}
                </div>
                <div className="text color-neutral-100">{item.content}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
);
```

- UI terdiri dari `Navbar` dan bagian layout yang menampilkan daftar artikel yang telah diterbitkan.
- Setiap artikel ditampilkan dalam card yang mencakup judul, kategori, dan konten artikel.

4. **Styling**

- Kelas-kelas CSS digunakan untuk menata tampilan, seperti `flex-col` untuk tata letak kolom, dan `border-main`, `p-12`, serta `bg-white` untuk memberikan gaya pada kartu artikel.

## Cara Menggunakan

- Pengguna dapat mengakses halaman ini untuk melihat semua artikel yang telah diterbitkan.
- Artikel yang ditampilkan memiliki status "publish", dan informasi yang ditampilkan mencakup judul, kategori, dan konten.

## Catatan Tambahan

- Pastikan artikel yang ingin ditampilkan memiliki status yang sesuai agar muncul di halaman ini.

```

Silakan salin dan gunakan dokumentasi ini untuk memahami lebih baik tentang halaman `Preview`. Jika ada bagian lain yang ingin kamu bahas atau pertanyaan lebih lanjut, beri tahu saya!
```
