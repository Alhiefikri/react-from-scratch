# README: Penjelasan Komponen `customerSlice` dalam Redux Toolkit

### Pengertian

Kode di atas adalah implementasi menggunakan **Redux Toolkit** untuk membuat `customerSlice` yang mengelola state terkait dengan informasi customer. Redux Toolkit menyediakan cara yang lebih sederhana dan efisien untuk bekerja dengan Redux, dengan mengurangi boilerplate code yang dibutuhkan. Pada kode ini, kita membuat **slices** untuk menyimpan dan mengelola data customer, serta menyediakan fungsi **action** untuk memanipulasi state tersebut.

### Cara Berpikir Redux Toolkit

Redux Toolkit menyediakan **`createSlice`** untuk memudahkan pembuatan slice dari state Redux. Slice ini mencakup:

- **State**: Data yang akan disimpan (misalnya informasi customer).
- **Reducers**: Fungsi yang menangani perubahan state (update data customer).
- **Actions**: Fungsi yang digunakan untuk mengirimkan perubahan state ke Redux store.

### Analogi Sederhana

Bayangkan kita memiliki sebuah **buku catatan** untuk setiap nasabah. Buku ini menyimpan data seperti **nama lengkap**, **nomor identitas**, dan **tanggal pendaftaran** nasabah. Ketika nasabah baru datang, kita akan mencatat data mereka di buku. Ketika nasabah ingin mengganti nama mereka, kita cukup memperbarui bagian tertentu di buku catatan. Redux Toolkit di sini berfungsi sebagai sistem yang mengelola **buku catatan** ini dan menyediakan cara yang efisien untuk memperbarui data.

### Penjelasan Kode Tiap Baris

#### 1. **Mendefinisikan State Awal (`initialState`)**

```javascript
const initialState = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};
```

- **`initialState`** adalah nilai awal dari state yang akan disimpan dalam Redux. Pada contoh ini, kita mendefinisikan tiga properti untuk data customer: `fullName`, `nationalID`, dan `createdAt` (tanggal pendaftaran customer).

#### 2. **Membuat Slice dengan `createSlice`**

```javascript
const customerSlice = createSlice({
  name: "customer",  // Nama slice yang digunakan dalam store
  initialState,      // Nilai awal state yang sudah kita tentukan
  reducers: {        // Reducers berisi logika untuk memanipulasi state
    createCustomer: {
      prepare(fullName, nationalID) {
        return {
          payload: {
            fullName,
            nationalID,
            createdAt: new Date().toISOString(), // Menambahkan tanggal saat customer dibuat
          },
        };
      },
```

- **`name: "customer"`**: Ini adalah nama slice. Nama ini digunakan untuk membedakan antara berbagai slice dalam store Redux.
- **`initialState`**: Merujuk pada state awal yang sudah kita definisikan sebelumnya.
- **`reducers`**: Di dalam objek `reducers`, kita mendefinisikan aksi-aksi yang bisa dilakukan untuk memperbarui state. Ada dua aksi yang kita buat: `createCustomer` dan `updateName`.

#### 3. **Aksi `createCustomer`**

```javascript
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        state.createdAt = action.payload.createdAt;
      },
    },
```

- **`createCustomer`**: Fungsi ini menerima dua parameter (`fullName`, `nationalID`) dan mengembalikan objek yang berisi data customer baru, termasuk **`createdAt`** yang diset ke waktu saat ini menggunakan `new Date().toISOString()`.
- **Reducer**: Ketika aksi ini dipanggil, **`reducer`** akan memodifikasi state. Ini adalah cara Redux Toolkit menangani update state secara otomatis tanpa perlu menulis banyak kode tambahan.

#### 4. **Aksi `updateName`**

```javascript
    updateName(state, action) {
      state.fullName = action.payload;
    },
  },
});
```

- **`updateName`**: Fungsi ini menerima `fullName` dari payload dan memperbarui nilai `fullName` di state. Fungsi ini digunakan untuk memperbarui nama customer setelah mereka berhasil mengganti nama.

#### 5. **Mengekspor Action dan Reducer**

```javascript
export const { createCustomer, updateName } = customerSlice.actions;
export default customerSlice.reducer;
```

- **`createCustomer, updateName`**: Kita mengekspor **action creators** yang dihasilkan oleh `createSlice`. Ini adalah fungsi yang digunakan untuk mendispatch aksi ke Redux store.
- **`customerSlice.reducer`**: Kita mengekspor reducer yang dihasilkan oleh `createSlice`. Reducer ini akan mengelola perubahan state berdasarkan action yang dikirim.

#### 6. **Bagian yang Dihapus**

```javascript
/*
export default function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return {
        ...state,
        fullName: action.payload,
      };

    default:
      return state;
  }
}

export function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}

export function updateName(fullName) {
  return { type: "customer/updateName", payload: fullName };
}
*/
```

- **Bagian yang Dihapus** ini adalah implementasi **Redux standar** menggunakan `action` dan `reducer` biasa, tanpa menggunakan `createSlice`. Dalam `createSlice`, kita tidak perlu menulis action types secara manual dan mengatur reducer secara eksplisit. `createSlice` menangani itu semua untuk kita.

### Kesimpulan

Pada kode ini, kita memanfaatkan **Redux Toolkit** untuk menyederhanakan cara kita bekerja dengan Redux. Kita membuat **slice** bernama `customer`, yang menyimpan informasi tentang customer (nama, ID nasional, dan tanggal pendaftaran). Ada dua aksi utama:

- **`createCustomer`**: Digunakan untuk membuat customer baru dengan menyimpan data mereka (termasuk waktu pendaftaran).
- **`updateName`**: Digunakan untuk memperbarui nama customer yang sudah ada.

Keuntungan menggunakan **Redux Toolkit** adalah kita tidak perlu menulis banyak kode boilerplate seperti pada Redux standar, dan pengelolaan state menjadi lebih mudah dan efisien.

---

# README: Penjelasan Komponen `Customer` dalam React-Redux

### Pengertian

Komponen `Customer` ini adalah tampilan di aplikasi yang memungkinkan pengguna untuk membuat customer baru dengan mengisi nama lengkap (`fullName`) dan ID Nasional (`nationalId`). Setelah data diisi, pengguna bisa mengklik tombol untuk **dispatch action** ke Redux dan menyimpan data tersebut di store Redux. Pada komponen ini, kita menggunakan React hooks (`useState` dan `useDispatch`) serta Redux Toolkit untuk menangani state dan aksi.

### Cara Berpikir React-Redux

Komponen `Customer` mengelola state lokal untuk form input dengan React (`useState`), dan menggunakan Redux untuk mengelola data customer secara global. Ketika form dikirim, kita menggunakan **Redux Dispatch** untuk mengirim data ke Redux store, sehingga data tersebut bisa diakses oleh komponen lain di aplikasi.

### Analogi Sederhana

Bayangkan kita berada di **bank** dan ingin mendaftarkan nasabah baru. Nasabah akan mengisi form dengan nama lengkap dan ID Nasional mereka. Setelah data dimasukkan, data tersebut disimpan di **buku besar** bank (Redux store) sehingga informasi nasabah dapat diakses kapan saja di masa depan.

### Penjelasan Kode Tiap Baris

#### 1. **Mendeklarasikan State Lokal untuk Input Form**

```javascript
const [fullName, setFullName] = useState("");
const [nationalId, setNationalId] = useState("");
```

- **`useState`** adalah hook React yang digunakan untuk mendeklarasikan state lokal dalam komponen.
  - `fullName` dan `nationalId` menyimpan nilai input pengguna.
  - `setFullName` dan `setNationalId` adalah fungsi untuk memperbarui state tersebut.

#### 2. **Mendapatkan `dispatch` dari Redux**

```javascript
const dispatch = useDispatch();
```

- **`useDispatch`** adalah hook dari React-Redux yang digunakan untuk mendapatkan fungsi `dispatch`. Fungsi ini memungkinkan kita untuk mengirimkan aksi ke Redux store. Dalam kasus ini, kita akan mengirim aksi `createCustomer` untuk membuat customer baru.

#### 3. **Fungsi `handleClick` untuk Mengirim Aksi ke Redux**

```javascript
function handleClick() {
  if (!fullName || !nationalId) return;

  dispatch(createCustomer(fullName, nationalId));
}
```

- **`handleClick`** adalah fungsi yang dijalankan ketika tombol **Create new customer** diklik.
  - Fungsi ini pertama-tama memeriksa apakah `fullName` dan `nationalId` sudah diisi. Jika salah satu kosong, maka tidak ada aksi yang terjadi.
  - Jika kedua input terisi, maka kita **dispatch** aksi `createCustomer` dengan data `fullName` dan `nationalId` yang telah diisi.
  - `dispatch(createCustomer(fullName, nationalId))` akan mengirim data ini ke Redux store menggunakan action creator `createCustomer` yang sebelumnya kita buat di `customerSlice`.

#### 4. **Rendering Form Input dan Button**

```javascript
return (
  <div>
    <h2>Create new customer</h2>
    <div className="inputs">
      <div>
        <label>Customer full name</label>
        <input value={fullName} onChange={(e) => setFullName(e.target.value)} />
      </div>
      <div>
        <label>National ID</label>
        <input
          value={nationalId}
          onChange={(e) => setNationalId(e.target.value)}
        />
      </div>
      <button onClick={handleClick}>Create new customer</button>
    </div>
  </div>
);
```

- **Rendering Form**:
  - Kita menampilkan dua input form untuk **nama lengkap** (`fullName`) dan **ID Nasional** (`nationalId`), di mana setiap input terikat ke state lokal menggunakan properti `value`.
  - Fungsi `onChange` pada setiap input mengupdate state lokal dengan nilai input yang dimasukkan pengguna. Misalnya, saat pengguna mengetik di input `fullName`, maka `setFullName(e.target.value)` akan memodifikasi state `fullName`.
- **Tombol "Create new customer"**:
  - Ketika tombol ini diklik, `handleClick` akan dipanggil untuk melakukan validasi dan mengirimkan data customer baru ke Redux store.

### Kesimpulan

Komponen `Customer` adalah form yang memungkinkan pengguna untuk memasukkan data nasabah baru.

1. **State lokal** (`fullName` dan `nationalId`) mengelola input form menggunakan hook `useState`.
2. Setelah form diisi, **dispatch** digunakan untuk mengirimkan aksi ke Redux store dengan data yang dimasukkan oleh pengguna.
3. Aksi `createCustomer` yang dipanggil melalui dispatch akan memperbarui state global yang dikelola oleh Redux, sehingga data customer baru dapat diakses oleh komponen lain.

Hal yang perlu diingat:

- **`useState`** digunakan untuk mengelola state lokal di dalam komponen.
- **`useDispatch`** digunakan untuk mengirimkan aksi ke Redux store.
- **Dispatching Action** seperti `createCustomer` memungkinkan kita untuk memperbarui Redux store dengan data baru.

---

# README: Penjelasan Komponen `Customer` dengan `useSelector` dalam React-Redux

### Pengertian

Pada komponen `Customer` ini, kita menggunakan **`useSelector`** dari React-Redux untuk mengambil data customer (misalnya `fullName`) dari **Redux store** dan menampilkannya di UI. `useSelector` adalah hook yang memungkinkan kita untuk membaca state Redux secara langsung dalam komponen React. Komponen ini digunakan untuk menampilkan nama lengkap customer yang sudah disimpan dalam state global (Redux).

### Cara Berpikir React-Redux

- **React** bertanggung jawab untuk merender tampilan UI, dan setiap perubahan pada state atau props akan menyebabkan UI di-render ulang.
- **Redux** bertugas menyimpan state global yang bisa diakses oleh komponen mana pun di aplikasi.
- **`useSelector`** adalah hook yang memungkinkan kita untuk mengambil data (state) dari Redux store dan menggunakannya dalam komponen React.

### Analogi Sederhana

Bayangkan kita memiliki **buku besar** (Redux store) yang menyimpan semua informasi nasabah, termasuk nama lengkap mereka. Setiap kali kita membuka **buku besar** tersebut, kita bisa melihat informasi yang terbaru. React (komponen `Customer`) adalah **tampilan yang menunjukkan informasi nasabah** kepada kita berdasarkan data yang ada di **buku besar** tersebut.

### Penjelasan Kode Tiap Baris

#### 1. **Mengambil Data dari Redux Store dengan `useSelector`**

```javascript
const customer = useSelector((store) => store.customer.fullName);
```

- **`useSelector`** adalah hook dari React-Redux yang digunakan untuk mengambil data dari Redux store.
- Fungsi `useSelector` menerima satu argumen, yaitu **fungsi selektor** (selector function) yang digunakan untuk menavigasi state Redux.
  - Dalam hal ini, `store` mewakili seluruh state yang ada di Redux.
  - `store.customer` merujuk pada slice `customer` yang kita definisikan sebelumnya di Redux store.
  - `store.customer.fullName` mengakses **nama lengkap** customer yang disimpan di state.
- **`customer`** akan berisi nilai dari `store.customer.fullName`, yang berarti nama lengkap customer.

#### 2. **Mencetak Nilai `customer` ke Console**

```javascript
console.log(customer);
```

- **`console.log(customer)`** digunakan untuk mencetak nama customer ke console (developer tools browser).
- Ini bisa digunakan untuk debugging, memastikan bahwa `customer` berisi data yang benar dari Redux store.

#### 3. **Menampilkan Data di UI**

```javascript
return <h2>👋 Welcome, {customer}</h2>;
```

- Di bagian ini, kita merender elemen `<h2>` yang berisi pesan "Welcome" dan nama lengkap customer yang kita ambil dari Redux store.
- **`{customer}`** menampilkan nama customer yang sudah kita ambil dari state global menggunakan `useSelector`.

### Kesimpulan

Komponen `Customer` ini bertanggung jawab untuk menampilkan nama customer yang tersimpan dalam Redux store.

1. **`useSelector`** digunakan untuk mengambil data (dalam hal ini `fullName`) dari Redux store.
2. Data tersebut kemudian ditampilkan dalam UI dengan tag HTML `<h2>`.
3. **`console.log(customer)`** digunakan untuk memastikan bahwa kita mendapatkan data yang benar dari Redux.

Hal-hal yang perlu diingat:

- **`useSelector`** adalah hook untuk mengambil data dari Redux store.
- **State Redux** bisa diakses di seluruh aplikasi tanpa harus meneruskan props dari komponen ke komponen lain.
- Komponen ini hanya membaca data, tidak mengubahnya. Untuk mengubah data, kita menggunakan **`dispatch`** dengan action yang sesuai.

Komponen ini sederhana namun sangat penting karena menunjukkan bagaimana data yang dikelola oleh Redux dapat digunakan di dalam komponen React dan ditampilkan di UI.
