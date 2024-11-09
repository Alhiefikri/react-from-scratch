Saya akan membuat dokumentasi untuk komponen UseCallbackExample yang mengimplementasikan useCallback.

# Dokumentasi UseCallbackExample - Implementasi useCallback Hook

## Penjelasan Impor

```javascript
import { useState, useCallback, memo } from "react";
import Counter from "./counter";
```

- `useState`: Hook untuk state management
- `useCallback`: Hook untuk memoisasi fungsi
- `memo`: HOC untuk memoisasi komponen (diimpor tapi tidak digunakan dalam file ini)
- `Counter`: Komponen child yang menerima props

## Struktur Komponen

### 1. State Management

```javascript
const [countOne, setCountOne] = useState(0);
const [countTwo, setCountTwo] = useState(0);
```

- Dua state terpisah untuk mengelola dua counter berbeda
- Masing-masing counter memiliki state dan fungsi setter sendiri

### 2. Implementasi useCallback

```javascript
const memoriseSetCountOnefunc = useCallback(
  () => setCountOne(countOne + 1),
  [countOne]
);

const memoriseSetCountTwofunc = useCallback(
  () => setCountTwo(countTwo + 1),
  [countTwo]
);
```

#### Penjelasan untuk setiap fungsi:

1. **memoriseSetCountOnefunc**

   - Memoisasi fungsi increment untuk counter pertama
   - Dependency: [countOne]
   - Hanya dibuat ulang ketika countOne berubah

2. **memoriseSetCountTwofunc**
   - Memoisasi fungsi increment untuk counter kedua
   - Dependency: [countTwo]
   - Hanya dibuat ulang ketika countTwo berubah

### 3. Render Component

```javascript
return (
  <div>
    <h1>Use Callback Example</h1>
    <Counter countValue={countOne} onClick={memoriseSetCountOnefunc} />
    <Counter countValue={countTwo} onClick={memoriseSetCountTwofunc} />
  </div>
);
```

- Menampilkan dua komponen Counter
- Masing-masing Counter menerima:
  - `countValue`: Nilai counter saat ini
  - `onClick`: Fungsi yang telah di-memoize untuk increment

## Kegunaan useCallback dalam Kode Ini

### 1. Performance Optimization

- Mencegah pembuatan fungsi baru pada setiap render
- Penting khususnya ketika bekerja dengan komponen yang di-memo
- Membantu mencegah render yang tidak perlu pada child components

### 2. Dependency Array

- `[countOne]`: Fungsi pertama hanya dibuat ulang ketika countOne berubah
- `[countTwo]`: Fungsi kedua hanya dibuat ulang ketika countTwo berubah
- Perubahan pada counter yang satu tidak mempengaruhi fungsi counter lainnya

### 3. Use Case yang Tepat

- Passing callbacks ke komponen child yang di-optimize
- Mencegah re-render yang tidak perlu pada komponen child
- Mempertahankan referential equality dari fungsi

## Alur Kerja

1. Komponen parent (UseCallbackExample) di-render
2. Dua fungsi increment di-memoize dengan useCallback
3. Fungsi yang di-memoize diteruskan ke komponen Counter
4. Ketika counter di-klik:
   - Fungsi yang sesuai dijalankan
   - State diperbarui
   - Hanya fungsi dan counter yang berkaitan yang dibuat ulang

## Best Practices yang Diterapkan

1. Penggunaan useCallback untuk callbacks yang diteruskan ke child components
2. Dependency array yang tepat untuk setiap callback
3. Pemisahan state untuk counter yang berbeda
4. Komponen yang modular dan reusable

## Catatan Pengembangan

- Pastikan komponen Counter menggunakan React.memo untuk memaksimalkan optimasi
- Monitor performa menggunakan React DevTools
- Pertimbangkan apakah optimasi ini diperlukan untuk use case Anda
- useCallback paling efektif ketika digunakan bersama React.memo

## Tips Tambahan

1. Gunakan useCallback hanya ketika diperlukan (misal: passing ke komponen memo)
2. Pastikan dependency array selalu mencakup semua nilai yang digunakan dalam callback
3. Pertimbangkan trade-off antara memory usage dan re-rendering
4. Kombinasikan dengan React.memo untuk optimasi maksimal
