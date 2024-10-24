Berikut adalah versi README yang telah diperbarui sesuai dengan skrip terbaru Anda, mengintegrasikan penggunaan `useContext` untuk menghindari props drilling. Silakan tinjau untuk memastikan semuanya sesuai dengan kebutuhan Anda.

# Dokumentasi Komponen App

## Pengertian

Komponen App adalah komponen utama (root component) dalam aplikasi React ini. Ini berfungsi sebagai kontainer untuk seluruh aplikasi dan mengatur state serta logika utama aplikasi. Komponen ini bertanggung jawab untuk mengelola produk, yang merupakan item yang ditawarkan dalam aplikasi "Belanja Mobil".

## Tujuan Komponen

Tujuan utama komponen App adalah:

1. Menggunakan Context API untuk menghindari props drilling.
2. Menyediakan akses ke fungsi untuk mengambil data produk tanpa harus mengoper props secara langsung ke komponen anak.
3. Merender komponen-komponen utama aplikasi (ProductList dan ProductCreate).

## Fungsi Tiap Baris Kode

```jsx
import ProductList from "./components/ProductList";
import ProductCreate from "./components/ProductCreate";
import "./App.css";
import { useContext, useEffect } from "react";
import ProductContext from "./context/products";
```

- Mengimpor file CSS, komponen yang dibutuhkan (ProductList, ProductCreate), dan hook `useContext` dan `useEffect`. Juga mengimpor `ProductContext` untuk mengakses data produk dan fungsi terkait.

```jsx
const App = () => {
  const { fetchProducts } = useContext(ProductContext);
  useEffect(() => {
    fetchProducts();
  }, []);
```

- Mendefinisikan komponen App sebagai functional component.
- Menggunakan `useContext` untuk mengambil fungsi `fetchProducts` dari `ProductContext`.
- `useEffect` memastikan bahwa fungsi `fetchProducts` dijalankan saat komponen pertama kali dimuat.

```jsx
return (
  <>
    <div className="app-title">Belanja Mobil</div>
    <ProductCreate />
    <ProductList />
  </>
);
```

- Merender judul aplikasi, komponen `ProductCreate`, dan komponen `ProductList`.
- Komponen ini tidak lagi menerima props untuk data produk, karena sekarang menggunakan konteks.

## Cara Berpikir React

1. **Component-Based**: App dibagi menjadi komponen-komponen yang lebih kecil dan dapat digunakan kembali (ProductList, ProductCreate).
2. **State Management**: Menggunakan Context API untuk mengelola state produk dan menghindari props drilling.
3. **Unidirectional Data Flow**: Data mengalir dari komponen induk (melalui konteks) ke komponen anak.
4. **Lifting State Up**: Fungsi-fungsi untuk memanipulasi state didefinisikan di dalam konteks dan dapat diakses oleh komponen anak.

## Analogi Sederhana

Bayangkan App sebagai manajer toko. Manajer ini:

- Memiliki akses langsung ke informasi semua produk (melalui konteks).
- Bisa menambah produk baru (melalui komponen ProductCreate).
- Bisa melihat dan mengelola daftar produk (melalui komponen ProductList).

## Kesimpulan

Komponen App berfungsi sebagai pusat kontrol untuk aplikasi "Belanja Mobil". Dengan menggunakan Context API, komponen ini dapat mengelola dan menyediakan akses ke data produk dan fungsi-fungsi terkait tanpa perlu mengoper props secara berlebihan ke komponen anak. Pendekatan ini meningkatkan struktur aplikasi dan membuatnya lebih mudah dikelola serta dipelihara, sambil memastikan aliran data yang konsisten dan terprediksi.
