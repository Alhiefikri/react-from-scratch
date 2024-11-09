Saya akan membuat dokumentasi untuk komponen ReactQuery yang mengimplementasikan React Query untuk state management.

# Dokumentasi ReactQuery - Implementasi React Query untuk Manajemen State

## Penjelasan Impor

```javascript
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addNewProduct, fetchListProducts } from "./api";
import { useState } from "react";
```

- `useMutation`: Hook untuk operasi mutasi (POST, PUT, DELETE)
- `useQuery`: Hook untuk fetching data
- `useQueryClient`: Hook untuk mengakses Query Client
- Fungsi API eksternal untuk operasi CRUD

## Struktur Komponen

### 1. State dan Query Client Setup

```javascript
const [productTitle, setProductTitle] = useState("");
const getQueryClient = useQueryClient();
```

- Local state untuk input produk baru
- Query Client untuk manajemen cache dan invalidasi

### 2. Data Fetching dengan useQuery

```javascript
const { data: productList, isLoading } = useQuery({
  queryKey: ["productList"],
  queryFn: () => fetchListProducts(),
});
```

#### Penjelasan:

- `queryKey`: Identifier unik untuk query
- `queryFn`: Fungsi untuk fetching data
- Returns:
  - `data`: Data hasil fetch
  - `isLoading`: Status loading

### 3. Mutasi Data dengan useMutation

```javascript
const { mutateAsync: handleAddNewProductMutation } = useMutation({
  mutationFn: addNewProduct,
  onSuccess: () => {
    getQueryClient.invalidateQueries(["productList"]);
  },
});
```

#### Fitur:

- `mutationFn`: Fungsi untuk menambah produk
- `onSuccess`: Callback setelah mutasi berhasil
- Invalidasi cache untuk memperbarui daftar

### 4. Handler Functions

```javascript
async function handleAddNewProduct() {
  await handleAddNewProductMutation(productTitle);
  setProductTitle("");
}
```

- Menangani penambahan produk baru
- Reset form setelah sukses

### 5. UI Component

```javascript
return (
  <div>
    <h1>React Query Demo</h1>
    <div>
      <input
        type="text"
        value={productTitle}
        onChange={(e) => setProductTitle(e.target.value)}
        placeholder="Enter product name"
      />
      <button
        onClick={handleAddNewProduct}
        disabled={productTitle.trim() === ""}
      >
        Add New Product
      </button>
    </div>
    <ul>
      {productList?.length > 0 ? (
        productList.map((product) => <li key={product.id}>{product.title}</li>)
      ) : (
        <h3>No product found</h3>
      )}
    </ul>
  </div>
);
```

## Fitur React Query yang Diimplementasikan

### 1. Automatic Caching

- Data di-cache berdasarkan query key
- Cache invalidation otomatis setelah mutasi

### 2. Loading States

- Handling loading state otomatis
- UI feedback selama operasi async

### 3. Mutation Management

- Penanganan operasi POST
- Automatic cache updates
- Success callbacks

### 4. Query Client

- Centralized state management
- Cache invalidation
- Query refetching

## Best Practices yang Diterapkan

### 1. Query Keys

```javascript
queryKey: ["productList"];
```

- Unique identifiers untuk queries
- Konsisten dalam penggunaan

### 2. Error Handling

```javascript
// Rekomendasi penambahan
if (error) return <h1>Error: {error.message}</h1>;
```

### 3. Loading States

```javascript
if (isLoading) return <h1>Loading products | Please wait </h1>;
```

### 4. Form Validation

```javascript
disabled={productTitle.trim() === ""}
```

## Rekomendasi Pengembangan

### 1. Error Boundary

```javascript
try {
  await handleAddNewProductMutation(productTitle);
} catch (error) {
  // Handle error
}
```

### 2. Optimistic Updates

```javascript
useMutation({
  onMutate: async (newProduct) => {
    // Update UI optimistically
  },
  onError: (err, newProduct, context) => {
    // Roll back on error
  },
});
```

### 3. Loading UI

```javascript
{
  isMutating && <LoadingSpinner />;
}
```

### 4. Retry Logic

```javascript
useQuery({
  retry: 3,
  retryDelay: 1000,
});
```

## Tips Penggunaan

1. Gunakan query keys yang konsisten
2. Implementasikan proper error handling
3. Manfaatkan automatic background updates
4. Pertimbangkan stale time dan cache time
5. Implementasikan optimistic updates untuk UX yang lebih baik

## Debugging

1. Monitor network requests
2. Gunakan React Query DevTools
3. Log mutation dan query states
4. Validasi cache updates

This documentation provides a comprehensive overview of the ReactQuery component and its implementation of React Query for state management. Feel free to ask if you need any clarification or additional information!
