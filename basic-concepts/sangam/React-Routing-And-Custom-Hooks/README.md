Saya akan menambahkan dokumentasi untuk main.jsx.

# Dokumentasi main.jsx - Setup Aplikasi React

## Penjelasan Kode

```javascript
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
```

### 1. Import Utama

- `createRoot`: API modern React 18 untuk merender aplikasi
- `BrowserRouter`: Provider untuk React Router
- `QueryClient` & `QueryClientProvider`: Komponen dari React Query untuk state management

### 2. Setup React Query

```javascript
const queryClient = new QueryClient();
```

- Membuat instance QueryClient untuk mengelola cache dan state data
- QueryClient menghandle:
  - Caching data
  - Refetching
  - Error handling
  - Loading states

### 3. Struktur Rendering

```javascript
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>
);
```

#### Hierarki Provider:

1. **BrowserRouter**

   - Provider terluar
   - Mengaktifkan fitur routing di seluruh aplikasi
   - Memberikan akses ke hooks routing (useNavigate, useParams, dll)

2. **QueryClientProvider**

   - Menyediakan QueryClient ke seluruh aplikasi
   - Memungkinkan penggunaan React Query hooks di komponen manapun
   - Mengelola state global untuk data fetching

3. **App Component**
   - Root component aplikasi
   - Menerima fungsionalitas dari kedua provider di atasnya

## Kegunaan dan Manfaat

### 1. React Router Setup

- Memungkinkan navigasi berbasis browser
- Mendukung fitur browser seperti back/forward
- URL synchronization

### 2. React Query Setup

- State management untuk server state
- Automatic background refetching
- Cache management
- Optimistic updates
- Error handling

## Best Practices yang Diterapkan

1. Penggunaan React 18 `createRoot` untuk performa yang lebih baik
2. Provider wrapping yang tepat untuk accessibility di seluruh aplikasi
3. Pemisahan concern antara routing dan state management

## Catatan Pengembangan

- Pastikan selalu menggunakan hooks React Query di dalam `QueryClientProvider`
- Hooks routing hanya bisa digunakan di dalam komponen yang berada di dalam `BrowserRouter`
- QueryClient dapat dikonfigurasi lebih lanjut sesuai kebutuhan (retry logic, caching strategy, dll)

Silakan kirimkan kode lainnya yang ingin didokumentasikan, seperti custom hooks atau komponen lainnya.
