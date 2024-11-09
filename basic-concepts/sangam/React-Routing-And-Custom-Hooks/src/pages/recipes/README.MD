Saya akan membuat dokumentasi untuk komponen RecipeList yang menggunakan custom hooks dan routing.

# Dokumentasi RecipeList - Halaman Daftar Resep

## Penjelasan Impor

```javascript
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/use-fetch";
import UseWindowResize from "../../hooks/use-window-resize";
```

- `useLocation`: Hook dari React Router untuk mendapatkan informasi lokasi
- `useFetch`: Custom hook untuk fetching data
- `UseWindowResize`: Custom hook untuk memantau ukuran window

## Struktur Komponen

### 1. Hooks Implementation

```javascript
const location = useLocation;
const { data, loading, error } = useFetch("https://dummyjson.com/recipes");
const windowSize = UseWindowResize();
```

#### Penjelasan setiap hook:

1. **useLocation**

   - Mengakses informasi routing saat ini
   - (Catatan: Ada kesalahan implementasi, seharusnya `useLocation()`)

2. **useFetch**

   - Mengambil data resep dari API
   - Mengelola state loading dan error
   - Endpoint: "https://dummyjson.com/recipes"

3. **UseWindowResize**
   - Memantau dimensi window browser
   - Memberikan informasi width dan height

### 2. Loading State

```javascript
if (loading) return <h1>Fetching recipes! Please wait</h1>;
```

- Menampilkan pesan loading saat data sedang diambil
- Implementasi sederhana untuk user feedback

### 3. Render Component

```javascript
return (
  <div>
    <h1 style={{ color: windowSize.width < 768 ? "red" : "black" }}>
      Recipe List Page
    </h1>
    <h3>
      Current window width is {windowSize.width} and Current height is{" "}
      {windowSize.height}
    </h3>
    <ul>
      {data?.recipes.length > 0
        ? data?.recipes.map((recipeItem) => (
            <div>
              <img src={recipeItem.image} alt={recipeItem?.title} />
              <label>{recipeItem?.name}</label>
            </div>
          ))
        : null}
    </ul>
  </div>
);
```

#### Fitur-fitur UI:

1. **Responsive Header**

   - Warna berubah berdasarkan lebar layar
   - Merah untuk mobile (<768px)
   - Hitam untuk desktop (≥768px)

2. **Window Size Display**

   - Menampilkan dimensi window saat ini
   - Updated secara real-time saat window diubah ukurannya

3. **Recipe List**
   - Menampilkan daftar resep dalam bentuk grid
   - Setiap resep memiliki gambar dan nama
   - Menggunakan conditional rendering

## Penggunaan Custom Hooks

### 1. useFetch

- Menangani data fetching
- Menyediakan state loading dan error
- Menggunakan optional chaining untuk data safety

### 2. UseWindowResize

- Memonitor perubahan ukuran window
- Memberikan dimensi window secara real-time
- Digunakan untuk styling responsif

## Best Practices yang Diterapkan

1. Loading state handling
2. Defensive programming dengan optional chaining
3. Responsive design dengan window size detection
4. Modular code dengan custom hooks

## Perbaikan yang Direkomendasikan

1. Perbaiki implementasi useLocation (tambahkan parentheses)
2. Tambahkan key untuk mapping resep
3. Tambahkan error handling
4. Implementasikan loading skeleton
5. Tambahkan styling yang lebih baik
6. Implementasikan lazy loading untuk gambar

## Contoh Pengembangan Lanjutan

```javascript
// Tambahkan error handling
if (error) return <h1>Error: {error.message}</h1>;

// Tambahkan key untuk mapping
{
  data?.recipes.map((recipeItem) => <div key={recipeItem.id}>...</div>);
}

// Implementasi lazy loading gambar
<img loading="lazy" src={recipeItem.image} alt={recipeItem?.title} />;
```

## Tips Penggunaan

1. Pantau performa dengan React DevTools
2. Implementasikan error boundaries
3. Tambahkan pagination untuk daftar panjang
4. Optimalkan loading gambar
5. Tambahkan animasi transisi untuk perubahan warna responsif
