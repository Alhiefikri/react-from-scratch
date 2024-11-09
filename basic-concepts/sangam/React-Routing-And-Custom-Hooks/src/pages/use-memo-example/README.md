Saya akan membuat dokumentasi untuk komponen UseMemoExample yang mengimplementasikan useMemo.

# Dokumentasi UseMemoExample - Implementasi useMemo Hook

## Penjelasan Impor

```javascript
import { useEffect, useState, useMemo } from "react";
import useFetch from "../../hooks/use-fetch";
import { Link } from "react-router-dom";
```

- `useMemo`: Hook untuk memoisasi nilai
- `useState`: Hook untuk state management
- `useFetch`: Custom hook untuk fetching data
- `Link`: Komponen routing (tidak digunakan dalam kode ini)

## Struktur Komponen

### 1. State dan Data Fetching

```javascript
const { data, loading } = useFetch("https://dummyjson.com/products");
const [flag, setFlag] = useState(false);
```

- Menggunakan custom hook `useFetch` untuk mengambil data produk
- `flag` state untuk toggle warna judul

### 2. Filter Function

```javascript
function filterProductByPrice(getProducts) {
  console.log("this function is getting rendered");
  return getProducts?.length > 0
    ? getProducts.filter((singleProductItem) => singleProductItem.price > 10)
    : [];
}
```

- Fungsi untuk memfilter produk berdasarkan harga
- Mengembalikan produk dengan harga > 10
- Memiliki console.log untuk menunjukkan ketika fungsi dijalankan

### 3. Implementasi useMemo

```javascript
const memorizeVersion = useMemo(
  () => filterProductByPrice(data?.products),
  [data?.products]
);
```

- Memoisasi hasil filter produk
- Hanya dijalankan ulang ketika `data?.products` berubah
- Mencegah perhitungan ulang yang tidak perlu

### 4. Render Component

```javascript
return (
  <div>
    <h1 style={{ color: flag ? "red" : "black" }}>Use Memo</h1>
    <button onClick={() => setFlag(!flag)}>Toggle Flag</button>
    <ul>
      {memorizeVersion.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  </div>
);
```

- Menampilkan judul dengan warna yang bisa diubah
- Button untuk toggle warna judul
- Daftar produk yang telah difilter

## Kegunaan useMemo dalam Kode Ini

### 1. Performance Optimization

- Mencegah perhitungan ulang `filterProductByPrice` yang tidak perlu
- Hasil filtering disimpan dalam cache sampai dependencies berubah

### 2. Dependency Array

- `[data?.products]`: Hanya menghitung ulang ketika data produk berubah
- Perubahan pada `flag` tidak memicu perhitungan ulang

### 3. Use Case yang Tepat

- Filtering data yang membutuhkan komputasi
- Data yang tidak perlu dihitung ulang setiap render

## Contoh Alur Kerja

1. Komponen dimuat, data diambil menggunakan `useFetch`
2. `filterProductByPrice` dijalankan pertama kali dan hasilnya di-cache
3. Ketika toggle button ditekan:
   - `flag` state berubah
   - Komponen re-render
   - Hasil filter tetap menggunakan cache (tidak dihitung ulang)
4. Ketika data produk berubah:
   - Filter dijalankan ulang
   - Hasil baru di-cache

## Best Practices yang Diterapkan

1. Penggunaan useMemo untuk operasi komputasi yang mahal
2. Dependency array yang tepat
3. Loading state handling
4. Defensive programming dengan null checking

## Catatan Pengembangan

- Pastikan untuk menggunakan useMemo hanya ketika diperlukan
- Monitor performa menggunakan React DevTools
- Pertimbangkan trade-off antara memory usage dan CPU computation
