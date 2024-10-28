# Dokumentasi Redux - `deleteModalSlice.js`

## Deskripsi

File ini menggunakan Redux Toolkit untuk mengelola state modal penghapusan dalam aplikasi. Ini mencakup pengaturan state awal dan reducer untuk membuka dan menutup modal.

### Kode: `deleteModalSlice.js`

```javascript
/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const deleteModalSlice = createSlice({
  name: "deleteModal",
  initialState: {
    data: null,
    open: false,
  },
  reducers: {
    deleteOpen(state, action) {
      state.open = true;
      state.data = action.payload;
    },
    deleteClose(state, action) {
      state.open = false;
      state.data = null;
    },
  },
});

export const { deleteOpen, deleteClose } = deleteModalSlice.actions;
export const deleteModalReducer = deleteModalSlice.reducer;
```

````

### Penjelasan Kode

1. **Import Statements**

   - `import { createSlice } from "@reduxjs/toolkit";`: Mengimpor fungsi `createSlice` dari Redux Toolkit untuk membuat slice.

2. **Membuat Slice**

```javascript
const deleteModalSlice = createSlice({
  name: "deleteModal",
  initialState: {
    data: null,
    open: false,
  },
  reducers: {
    /* reducer */
  },
});
```

- **`createSlice`**: Digunakan untuk membuat slice Redux dengan nama `deleteModal`.
  - **`name: "deleteModal"`**: Nama slice ini, yang akan digunakan sebagai prefix untuk action types.
  - **`initialState`**: State awal dari slice ini:
    - **`data`**: Menyimpan data terkait item yang akan dihapus (default adalah `null`).
    - **`open`**: Boolean yang menunjukkan apakah modal sedang terbuka atau tidak (default adalah `false`).

3. **Reducers**

   - **`reducers`**: Berisi fungsi-fungsi untuk memperbarui state.
   - **`deleteOpen(state, action)`**: Fungsi untuk membuka modal.

     - `state.open = true;`: Mengubah nilai `open` menjadi `true`, menandakan bahwa modal terbuka.
     - `state.data = action.payload;`: Menyimpan data yang dikirim melalui `action.payload` untuk menunjukkan item yang akan dihapus.

   - **`deleteClose(state, action)`**: Fungsi untuk menutup modal.
     - `state.open = false;`: Mengubah nilai `open` menjadi `false`, menandakan bahwa modal ditutup.
     - `state.data = null;`: Mengatur kembali `data` ke `null` setelah modal ditutup.

4. **Ekspor Aksi dan Reducer**

```javascript
export const { deleteOpen, deleteClose } = deleteModalSlice.actions;
export const deleteModalReducer = deleteModalSlice.reducer;
```

- **`export const {...}`**: Mengekspor aksi yang didefinisikan dalam slice, sehingga dapat digunakan di komponen lain untuk memanggil perubahan state.
- **`export const deleteModalReducer`**: Mengekspor reducer dari slice ini agar dapat digunakan dalam pengaturan store Redux.

## Cara Menggunakan

- **Membuka Modal**: Panggil aksi `deleteOpen` dengan payload yang berisi data item yang akan dihapus.
- **Menutup Modal**: Panggil aksi `deleteClose` untuk menutup modal.

## Catatan Tambahan

- Pastikan untuk mengimpor dan menambahkan `deleteModalReducer` ke dalam store Redux agar dapat menggunakan state modal ini di aplikasi.

````
