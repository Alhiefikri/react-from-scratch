# README: Bank Account App with `useReducer` in React

## Pengertian

Pada aplikasi ini, kita akan belajar bagaimana menggunakan `useReducer` untuk mengelola state dalam aplikasi React. `useReducer` adalah salah satu hook di React yang lebih berguna saat kita memiliki state yang kompleks atau banyak aksi yang perlu mengubah state tersebut. Dalam aplikasi ini, kita akan mengelola state yang berhubungan dengan sebuah akun bank, seperti saldo (`balance`), pinjaman (`loan`), dan status apakah akun tersebut aktif atau tidak.

## Cara Berpikir React

React bekerja dengan cara mengubah tampilan (UI) berdasarkan perubahan pada **state** aplikasi. Setiap perubahan state akan memicu React untuk merender ulang komponen yang bergantung pada state tersebut. Dalam aplikasi ini, `useReducer` akan mengelola perubahan state yang terjadi melalui **actions**, yaitu perintah-perintah seperti deposit, withdraw, atau openAccount.

## Analogi Sederhana

Bayangkan kita memiliki sebuah **buku catatan** yang menyimpan informasi tentang akun bank kita:

- **Saldo** (balance) adalah jumlah uang yang kita punya di akun.
- **Pinjaman** (loan) adalah jumlah uang yang kita pinjam dari bank.
- **Status aktif** (isActive) menunjukkan apakah akun bank kita sedang aktif atau tidak.

Setiap kali kita melakukan aksi tertentu (misalnya, membuka akun, menyetor uang, atau menarik uang), kita akan menulis perubahan tersebut dalam buku catatan, dan React akan memperbarui tampilan berdasarkan perubahan tersebut.

## Penjelasan Code Tiap Baris

### 1. **Inisialisasi State**

```js
const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};
```

- `initialState` adalah nilai awal dari state aplikasi.
  - `balance` dimulai dari 0 (belum ada uang di akun).
  - `loan` juga dimulai dari 0 (belum ada pinjaman).
  - `isActive` diset `false`, yang berarti akun belum dibuka.

### 2. **Reducer Function**

```js
function reducer(state, action) {
  if (!state.isActive && action.type !== "openAccount") return state;
```

- Fungsi `reducer` adalah tempat semua logika perubahan state terjadi. `reducer` menerima dua parameter:
  - `state`: kondisi saat ini dari aplikasi (misalnya saldo, pinjaman, dll).
  - `action`: objek yang berisi informasi tentang aksi yang ingin dilakukan.
- Jika akun belum dibuka (`!state.isActive`), maka aksi selain `openAccount` akan diabaikan.

### 3. **Handling Action Types**

```js
switch (action.type) {
  case "openAccount":
    return {
      ...state,
      balance: 500,
      isActive: true,
    };
  case "deposit":
    return {
      ...state,
      balance: state.balance + action.payload,
    };
  case "withdraw":
    return {
      ...state,
      balance: state.balance - action.payload,
    };
  case "requestLoan":
    if (state.loan > 0) return state;
    return {
      ...state,
      loan: action.payload,
      balance: state.balance + action.payload,
    };
  case "payLoan":
    return { ...state, loan: 0, balance: state.balance - state.loan };
  case "closeAccount":
    if (state.loan > 0 || state.balance !== 0) return state;
    return initialState;
  default:
    throw new Error("Unknown action");
}
```

- **`switch (action.type)`**: Berdasarkan jenis aksi (`action.type`), kita akan memutuskan apa yang akan dilakukan untuk mengubah state:
  - `openAccount`: Membuka akun dan mengatur saldo awal 500.
  - `deposit`: Menambahkan sejumlah uang ke saldo berdasarkan `action.payload`.
  - `withdraw`: Mengurangi saldo berdasarkan `action.payload`.
  - `requestLoan`: Meminta pinjaman jika belum ada pinjaman.
  - `payLoan`: Membayar pinjaman dan mengurangi saldo dengan jumlah pinjaman.
  - `closeAccount`: Menutup akun jika saldo dan pinjaman sudah 0.

### 4. **Menggunakan `useReducer` di dalam Komponen**

```js
const [{ balance, loan, isActive }, dispatch] = useReducer(
  reducer,
  initialState
);
```

- `useReducer` digunakan untuk menghubungkan state dengan reducer yang sudah kita buat.
- Fungsi ini mengembalikan dua hal:
  - State saat ini (yang disarikan menjadi `balance`, `loan`, dan `isActive`).
  - Fungsi `dispatch` yang digunakan untuk mengirimkan aksi (`action`) ke reducer.

### 5. **Render UI dan Interaksi dengan Pengguna**

```js
return (
  <div className="App">
    <h1>useReducer Bank Account</h1>
    <p>Balance: {balance}</p>
    <p>Loan: {loan}</p>
    <p>
      <button
        onClick={() => dispatch({ type: "openAccount" })}
        disabled={isActive}
      >
        Open account
      </button>
    </p>
    <p>
      <button
        onClick={() => dispatch({ type: "deposit", payload: 150 })}
        disabled={!isActive}
      >
        Deposit 150
      </button>
    </p>
    <p>
      <button
        onClick={() => dispatch({ type: "withdraw", payload: 50 })}
        disabled={!isActive}
      >
        Withdraw 50
      </button>
    </p>
    <p>
      <button
        onClick={() => dispatch({ type: "requestLoan", payload: 5000 })}
        disabled={!isActive}
      >
        Request a loan of 5000
      </button>
    </p>
    <p>
      <button
        onClick={() => dispatch({ type: "payLoan" })}
        disabled={!isActive}
      >
        Pay loan
      </button>
    </p>
    <p>
      <button
        onClick={() => dispatch({ type: "closeAccount" })}
        disabled={!isActive}
      >
        Close account
      </button>
    </p>
  </div>
);
```

- Di sini, kita merender elemen UI, menampilkan saldo dan pinjaman, dan memberikan tombol-tombol untuk melakukan aksi tertentu (seperti membuka akun, menyetor uang, menarik uang, dll).
- Setiap tombol menggunakan `onClick` untuk mengirimkan aksi ke reducer melalui fungsi `dispatch`. Misalnya, saat tombol "Open account" diklik, `dispatch({ type: "openAccount" })` akan dipanggil, yang kemudian akan memicu perubahan state melalui reducer.

## Kesimpulan

Dengan menggunakan `useReducer`, kita dapat mengelola state yang kompleks dengan lebih terstruktur dan efisien. Aksi yang dikirimkan akan diproses oleh reducer, yang kemudian mengubah state dan merender ulang UI sesuai perubahan tersebut. Pada aplikasi bank ini, kita menggunakan `useReducer` untuk menangani berbagai operasi pada akun bank, seperti membuka akun, menyetor, menarik uang, meminta pinjaman, membayar pinjaman, dan menutup akun.
