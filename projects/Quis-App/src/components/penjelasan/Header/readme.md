Berikut adalah penjelasan untuk komponen `Header` yang Anda berikan:

---

## Komponen Header

### Deskripsi

Komponen `Header` adalah bagian atas dari aplikasi kuis yang menampilkan judul aplikasi. Header ini memberikan konteks kepada pengguna tentang aplikasi yang mereka gunakan.

### Struktur Kode

```javascript
const Header = ({ display }) => {
  return (
    <div className="flex h-[80px] w-full items-center justify-between bg-[#435B66] px-[73px] py-[9px] font-aclonica text-english-lavender">
      {display !== "start" && <div className="text-[55px]">QUIZ APP</div>}
    </div>
  );
};

export default Header;
```

### Penjelasan

1. **Props**:

   - `display`: Variabel yang menentukan tampilan header. Jika nilainya adalah `"start"`, judul aplikasi tidak akan ditampilkan.

2. **Struktur JSX**:

   - Header menggunakan `<div>` untuk membungkus konten dan mengatur tata letak dengan kelas Tailwind CSS.
   - Jika nilai `display` tidak sama dengan `"start"`, maka judul "QUIZ APP" akan ditampilkan dengan ukuran font yang besar.

3. **Styling**:
   - Komponen ini memanfaatkan kelas Tailwind CSS untuk styling, termasuk pengaturan tinggi, lebar, warna latar belakang, padding, dan font. Ini memberikan tampilan yang konsisten dan menarik bagi pengguna.

### Analogi Sederhana

Anggaplah header ini sebagai judul di sampul depan sebuah buku. Ia memberi tahu pembaca (pengguna) tentang apa isi dari buku tersebut (aplikasi).

### Kesimpulan

Komponen `Header` berfungsi untuk memberikan identitas dan konteks kepada aplikasi. Dengan menampilkan judul, pengguna dapat dengan mudah mengenali aplikasi yang mereka gunakan, meningkatkan pengalaman pengguna secara keseluruhan.
