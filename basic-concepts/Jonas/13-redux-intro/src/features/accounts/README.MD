# README: Penjelasan Komponen `accountSlice` dalam Redux Toolkit

### Pengertian

Pada kode ini, kita membuat **`accountSlice`** menggunakan **Redux Toolkit** untuk mengelola data terkait dengan **rekening bank**. Di dalamnya terdapat beberapa aksi yang dapat dilakukan terhadap **account** seperti **deposit**, **withdraw**, **requestLoan**, **payLoan**, dan **convertingCurrency**. Setiap aksi ini mengubah state yang ada di **Redux store** sesuai dengan kebutuhan aplikasi.

Redux Toolkit menyederhanakan cara kita mengelola state global di aplikasi. Dengan menggunakan **`createSlice`**, kita dapat mendefinisikan state, reducers, dan action secara lebih terstruktur dan tanpa banyak boilerplate code.

### Cara Berpikir React-Redux

1. **State**: Di sini kita mengelola state yang berkaitan dengan akun bank, seperti saldo (`balance`), pinjaman (`loan`), tujuan pinjaman (`loanPurpose`), dan status loading (`isLoading`).
2. **Reducers**: Fungsi-fungsi yang digunakan untuk memodifikasi state berdasarkan aksi (action) yang dikirimkan.
3. **Actions**: Aksi yang digunakan untuk mengubah data dalam Redux store.

Redux store berfungsi sebagai **penyimpanan data global** yang bisa diakses oleh seluruh komponen dalam aplikasi.

### Analogi Sederhana

Bayangkan kita sedang mengelola rekening bank dalam aplikasi. Setiap kali ada transaksi seperti **menabung uang** (deposit), **penarikan uang** (withdraw), **mengajukan pinjaman** (requestLoan), atau **melunasi pinjaman** (payLoan), kita perlu mencatat perubahan tersebut dalam **buku besar** (Redux store). Semua transaksi ini dilakukan berdasarkan instruksi yang diberikan oleh pengguna atau aplikasi.

### Penjelasan Kode Tiap Baris

#### 1. **State Awal (`initialState`)**

```javascript
const initialState = {
  balance: 0, // Saldo rekening (uang yang dimiliki)
  loan: 0, // Jumlah pinjaman yang dimiliki
  loanPurpose: "", // Tujuan pinjaman
  isLoading: false, // Status apakah sedang memuat data (untuk konversi mata uang)
};
```

- **`initialState`**: Merupakan nilai awal untuk state akun. Di sini, saldo (`balance`) dan pinjaman (`loan`) diinisialisasi dengan nilai 0, tujuan pinjaman (`loanPurpose`) kosong, dan status loading (`isLoading`) diset menjadi `false`.

#### 2. **Membuat Slice dengan `createSlice`**

```javascript
const accountSlice = createSlice({
  name: "account", // Nama slice
  initialState, // State awal
  reducers: {
    // Reducers berisi fungsi untuk mengubah state
    deposit(state, action) {
      state.balance += action.payload;
      state.isLoading = false;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan: {
      prepare(amount, purpose) {
        return {
          payload: { amount, purpose },
        };
      },
      reducer(state, action) {
        if (state.loan > 0) return; // Jika sudah ada pinjaman, tidak bisa meminta pinjaman lagi
        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance += action.payload.amount;
      },
    },
    payLoan(state) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
    convertingCurrency(state) {
      state.isLoading = true; // Menandakan bahwa konversi mata uang sedang diproses
    },
  },
});
```

- **`name: "account"`**: Menandakan nama slice ini adalah `account`. Nama ini digunakan untuk mengenali slice di dalam Redux store.
- **`initialState`**: Menggunakan nilai awal yang sudah didefinisikan sebelumnya.
- **`reducers`**: Di sini kita mendefinisikan fungsi-fungsi yang mengubah state, yaitu:
  - **`deposit`**: Fungsi untuk menambahkan uang ke saldo rekening.
  - **`withdraw`**: Fungsi untuk menarik uang dari rekening.
  - **`requestLoan`**: Fungsi untuk mengajukan pinjaman. Diperiksa apakah sudah ada pinjaman sebelumnya; jika ada, tidak dapat mengajukan pinjaman lagi.
  - **`payLoan`**: Fungsi untuk membayar pinjaman yang ada dan mengatur saldo dan informasi pinjaman kembali ke nilai awal.
  - **`convertingCurrency`**: Fungsi untuk menandakan bahwa proses konversi mata uang sedang dilakukan (misalnya, saat deposit dengan mata uang selain USD).

#### 3. **Mengekspor Actions dan Reducer**

```javascript
export const { withdraw, requestLoan, payLoan } = accountSlice.actions;
export default accountSlice.reducer;
```

- **`accountSlice.actions`**: Ini adalah objek yang berisi action creators yang telah didefinisikan di dalam `createSlice`. Action creators seperti `withdraw`, `requestLoan`, dan `payLoan` diekspor agar bisa digunakan di bagian lain aplikasi.
- **`accountSlice.reducer`**: Mengambil reducer yang dihasilkan oleh `createSlice` dan mengekspornya. Reducer ini akan digunakan untuk memperbarui state dalam Redux store.

#### 4. **Fungsi `deposit` dengan Asynchronous API Call**

```javascript
export function deposit(amount, currency) {
  if (currency === "USD") return { type: "account/deposit", payload: amount };

  return async function (dispatch, getState) {
    // API call untuk konversi mata uang
    dispatch({ type: "account/convertingCurrency" });

    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const converted = data.rates.USD;

    // Mengirim aksi untuk menambah saldo setelah konversi
    dispatch({ type: "account/deposit", payload: converted });
  };
}
```

- **`deposit`** adalah fungsi **asynchronous** yang menangani konversi mata uang (jika tidak dalam USD). Jika mata uang yang digunakan adalah selain USD, maka API **`https://api.frankfurter.app`** digunakan untuk mengonversi jumlah uang ke USD.
- **`dispatch({ type: "account/convertingCurrency" })`** digunakan untuk mengupdate status loading (`isLoading` menjadi `true`) selama proses konversi berlangsung.
- Setelah mendapatkan nilai konversi, fungsi ini mengirimkan aksi untuk memperbarui saldo rekening dalam USD.

### Kesimpulan

Komponen `accountSlice` menggunakan **Redux Toolkit** untuk mengelola data akun bank, seperti saldo, pinjaman, dan status loading untuk konversi mata uang. Beberapa aksi yang diimplementasikan adalah:

- **`deposit`**: Menambahkan saldo ke rekening, bisa disertai konversi mata uang.
- **`withdraw`**: Menarik uang dari saldo rekening.
- **`requestLoan`**: Mengajukan pinjaman.
- **`payLoan`**: Membayar pinjaman yang ada.
- **`convertingCurrency`**: Menandakan status loading saat terjadi konversi mata uang.

Dengan menggunakan **Redux Toolkit**, kita bisa lebih efisien dalam mendefinisikan **reducers** dan **action creators**. Semua fungsi yang berhubungan dengan akun bank dikelola secara terpusat dalam **Redux store**, sehingga memudahkan pengelolaan state di seluruh aplikasi.

### Hal-hal yang perlu diingat:

1. **`createSlice`** menyederhanakan pembuatan slice di Redux dengan menggabungkan reducers dan actions dalam satu tempat.
2. **Asynchronous action** (seperti konversi mata uang) bisa dikelola dengan menggunakan **thunk** atau fungsi async di dalam `createSlice`.
3. Redux store mengelola state secara global, memudahkan komponen untuk mengakses dan memodifikasi data aplikasi.

---

# README: Penjelasan Komponen `AccountOperations` dengan React-Redux

### Pengertian

Komponen `AccountOperations` memungkinkan pengguna untuk melakukan beberapa operasi terkait akun, seperti **menyetor uang** (deposit), **menarik uang** (withdraw), **mengajukan pinjaman** (request loan), dan **melunasi pinjaman** (pay loan). Komponen ini berinteraksi dengan **Redux store** menggunakan hook `useDispatch` dan `useSelector` untuk mengelola state aplikasi secara global.

### Cara Berpikir React-Redux

1. **State**: Di sini, kita mengelola berbagai state lokal untuk setiap operasi (deposit, withdrawal, loan), dan kita juga mengambil data global dari Redux store seperti saldo (`balance`), pinjaman saat ini (`loan`), dan status loading (`isloading`).
2. **Reducers & Actions**: Setiap operasi (seperti deposit, withdraw, dll) akan memanggil aksi tertentu yang telah didefinisikan dalam slice **`accountSlice`** di Redux store.
3. **`useDispatch` dan `useSelector`**:
   - **`useDispatch`**: Hook ini digunakan untuk mengirimkan aksi ke Redux store.
   - **`useSelector`**: Hook ini digunakan untuk mengambil data dari Redux store dan digunakan di dalam komponen.

### Analogi Sederhana

Bayangkan Anda memiliki sebuah aplikasi untuk mengelola **rekening bank**. Setiap kali Anda ingin melakukan transaksi (misalnya menyetor uang, menarik uang, atau mengajukan pinjaman), aplikasi akan mengubah status di **buku besar** (Redux store). Komponen ini bertugas untuk memberi Anda antarmuka untuk melakukan transaksi tersebut dan memperbarui **buku besar** setiap kali Anda melakukan transaksi.

### Penjelasan Kode Tiap Baris

#### 1. **State Lokal di Komponen**

```javascript
const [depositAmount, setDepositAmount] = useState("");
const [withdrawalAmount, setWithdrawalAmount] = useState("");
const [loanAmount, setLoanAmount] = useState("");
const [loanPurpose, setLoanPurpose] = useState("");
const [currency, setCurrency] = useState("USD");
```

- **State Lokal** digunakan untuk menyimpan nilai input dari pengguna (jumlah uang untuk deposit, jumlah pinjaman, tujuan pinjaman, dll.).
- `currency` menyimpan mata uang yang dipilih (misalnya USD, EUR, IDR, GBP).

#### 2. **Mengambil Data dari Redux Store**

```javascript
const {
  loan: currentLoan,
  loanPurpose: currentLoanPurpose,
  balance,
  isloading,
} = useSelector((store) => store.account);
```

- **`useSelector`** digunakan untuk mengambil data dari Redux store, khususnya data yang berkaitan dengan akun bank seperti:
  - **`loan`**: Jumlah pinjaman yang dimiliki saat ini.
  - **`loanPurpose`**: Tujuan pinjaman yang dimiliki.
  - **`balance`**: Saldo rekening saat ini.
  - **`isloading`**: Status loading untuk konversi mata uang (ketika deposit dilakukan dalam mata uang selain USD).

#### 3. **Dispatch Aksi untuk Deposit**

```javascript
function handleDeposit() {
  if (!depositAmount) return;

  dispatch(deposit(depositAmount, currency));
  setDepositAmount("");
  setCurrency("USD");
}
```

- **`handleDeposit`** adalah fungsi yang dipanggil saat pengguna mengklik tombol deposit.
- **`dispatch(deposit(depositAmount, currency))`** mengirimkan aksi **`deposit`** ke Redux store dengan jumlah uang yang akan disetor dan mata uang yang dipilih.
- Setelah deposit berhasil, input untuk jumlah deposit dan mata uang disetel ulang ke nilai awal.

#### 4. **Dispatch Aksi untuk Withdrawal**

```javascript
function handleWithdrawal() {
  if (!withdrawalAmount) return;

  dispatch(withdraw(withdrawalAmount));
  setWithdrawalAmount("");
}
```

- **`handleWithdrawal`** dipanggil ketika pengguna mengklik tombol penarikan uang.
- **`dispatch(withdraw(withdrawalAmount))`** mengirimkan aksi **`withdraw`** ke Redux store untuk mengurangi saldo akun berdasarkan jumlah yang ditarik.
- Setelah penarikan berhasil, input untuk jumlah penarikan disetel ulang ke nilai awal.

#### 5. **Dispatch Aksi untuk Meminta Pinjaman**

```javascript
function handleRequestLoan() {
  if (!loanAmount || !loanPurpose) return;

  dispatch(requestLoan(loanAmount, loanPurpose));
  setLoanAmount("");
  setLoanPurpose("");
}
```

- **`handleRequestLoan`** dipanggil saat pengguna mengklik tombol untuk mengajukan pinjaman.
- **`dispatch(requestLoan(loanAmount, loanPurpose))`** mengirimkan aksi **`requestLoan`** ke Redux store dengan jumlah pinjaman dan tujuan pinjaman.
- Setelah pinjaman berhasil diajukan, input untuk jumlah pinjaman dan tujuan pinjaman disetel ulang ke nilai awal.

#### 6. **Dispatch Aksi untuk Membayar Pinjaman**

```javascript
function handlePayLoan() {
  dispatch(payLoan());
}
```

- **`handlePayLoan`** dipanggil ketika pengguna mengklik tombol untuk melunasi pinjaman.
- **`dispatch(payLoan())`** mengirimkan aksi **`payLoan`** ke Redux store untuk membayar pinjaman yang ada.

#### 7. **Rendering UI dengan Input dan Tombol**

```javascript
return (
  <div>
    <h2>Your account operations</h2>
    <div className="inputs">
      {/* Deposit Section */}
      <div>
        <label>Deposit</label>
        <input
          type="number"
          value={depositAmount}
          onChange={(e) => setDepositAmount(+e.target.value)}
        />
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          <option value="USD">US Dollar</option>
          <option value="EUR">Euro</option>
          <option value="IDR">IDR</option>
          <option value="GBP">British Pound</option>
        </select>
        <button onClick={handleDeposit} disabled={isloading}>
          {isloading ? "Converting..." : `Deposit ${depositAmount}`}
        </button>
      </div>

      {/* Withdrawal Section */}
      <div>
        <label>Withdraw</label>
        <input
          type="number"
          value={withdrawalAmount}
          onChange={(e) => setWithdrawalAmount(+e.target.value)}
        />
        <button onClick={handleWithdrawal}>Withdraw {withdrawalAmount}</button>
      </div>

      {/* Request Loan Section */}
      <div>
        <label>Request loan</label>
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(+e.target.value)}
          placeholder="Loan amount"
        />
        <input
          value={loanPurpose}
          onChange={(e) => setLoanPurpose(e.target.value)}
          placeholder="Loan purpose"
        />
        <button onClick={handleRequestLoan}>Request loan</button>
      </div>

      {/* Pay Loan Section */}
      {currentLoan > 0 && (
        <div>
          <span>
            Pay back {currentLoan} ({currentLoanPurpose})
          </span>
          <button onClick={handlePayLoan}>Pay loan</button>
        </div>
      )}
    </div>
  </div>
);
```

- **Form Input**: Setiap bagian (Deposit, Withdrawal, Request Loan) memiliki input dan tombol untuk memungkinkan pengguna berinteraksi.
  - **`<input type="number">`** digunakan untuk menerima angka (misalnya jumlah uang).
  - **`<select>`** digunakan untuk memilih mata uang saat deposit.
  - Tombol diaktifkan atau dinonaktifkan berdasarkan kondisi (`isloading` menandakan apakah proses konversi sedang berlangsung).

### Kesimpulan

Komponen **`AccountOperations`** adalah antarmuka pengguna yang memungkinkan interaksi dengan akun bank. Komponen ini:

1. Menggunakan **`useState`** untuk mengelola state lokal terkait transaksi (deposit, withdrawal, loan).
2. Menggunakan **`useDispatch`** untuk mengirim aksi ke Redux store (untuk melakukan transaksi).
3. Menggunakan **`useSelector`** untuk mengambil data dari Redux store (seperti saldo, pinjaman, dan status loading).
4. Menyediakan form untuk deposit, withdraw, request loan, dan pay loan.

Dengan menggunakan **React-Redux**, aplikasi ini dapat mengelola state global secara efisien, memungkinkan perubahan data seperti saldo dan pinjaman dapat dikelola dengan mudah di seluruh aplikasi.

---

# README: Penjelasan Komponen `BalanceDisplay` dengan React-Redux

### Pengertian

Komponen **`BalanceDisplay`** digunakan untuk menampilkan saldo akun saat ini dalam format mata uang yang telah diformat dengan menggunakan fungsi `Intl.NumberFormat`. Komponen ini terhubung ke Redux store menggunakan **`connect`** untuk mengambil nilai saldo dari state global aplikasi.

### Cara Berpikir React-Redux

1. **State Global**: Saldo akun (`balance`) diambil dari Redux store, yang merupakan state global aplikasi.
2. **`connect`**: Untuk menghubungkan komponen dengan Redux store, kita menggunakan fungsi **`connect`** yang berasal dari `react-redux`.
3. **Transformasi Data**: Fungsi `formatCurrency` digunakan untuk mengubah angka saldo menjadi format mata uang yang lebih mudah dibaca oleh pengguna (misalnya, dalam format USD).

### Analogi Sederhana

Bayangkan aplikasi ini seperti sebuah **ATM** yang menunjukkan saldo rekening. Ketika Anda ingin melihat saldo Anda, aplikasi ini mengambil saldo dari **server** (Redux store) dan menampilkannya dengan format yang mudah dibaca, seperti "USD 100.00".

### Penjelasan Kode Tiap Baris

#### 1. **Fungsi `formatCurrency`**

```javascript
function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}
```

- Fungsi **`formatCurrency`** digunakan untuk mengubah angka menjadi format mata uang.
  - **`Intl.NumberFormat`** adalah API built-in di JavaScript yang digunakan untuk memformat angka dengan berbagai gaya, termasuk mata uang.
  - **`style: "currency"`** menunjukkan bahwa format yang diinginkan adalah format mata uang.
  - **`currency: "USD"`** menentukan bahwa mata uang yang digunakan adalah **USD**.
  - Fungsi ini akan mengubah nilai seperti `1000` menjadi `$1,000.00`.

#### 2. **Komponen `BalanceDisplay`**

```javascript
function BalanceDisplay({ balance }) {
  return <div className="balance">{formatCurrency(balance)}</div>;
}
```

- Komponen **`BalanceDisplay`** menerima **`balance`** sebagai props.
- **`balance`** adalah saldo akun yang diteruskan dari Redux store (melalui `mapStateToProps`).
- Di dalam komponen, saldo ini diformat menggunakan fungsi `formatCurrency` sebelum ditampilkan di dalam sebuah `div` dengan kelas `balance`.
- Sebagai contoh, jika nilai `balance` adalah `1000`, komponen ini akan menampilkan **"$1,000.00"** di layar.

#### 3. **`mapStateToProps` untuk Mengambil Data dari Redux Store**

```javascript
function mapStateToProps(state) {
  return {
    balance: state.account.balance,
  };
}
```

- **`mapStateToProps`** adalah fungsi yang menghubungkan komponen dengan state di Redux store.
- Fungsi ini mengambil `state.account.balance` dari Redux store dan meneruskannya sebagai **`balance`** ke komponen `BalanceDisplay`.
  - `state.account.balance` berarti kita mengakses `balance` yang ada di dalam slice `account` di Redux store.

#### 4. **`connect` untuk Menghubungkan Komponen dengan Redux Store**

```javascript
export default connect(mapStateToProps)(BalanceDisplay);
```

- **`connect`** adalah fungsi yang digunakan untuk menghubungkan komponen dengan Redux store.
- **`connect(mapStateToProps)`** akan menghubungkan komponen dengan bagian state yang relevan dari Redux store.
  - Di sini, `mapStateToProps` memastikan bahwa komponen `BalanceDisplay` menerima `balance` dari Redux store sebagai props.
- Dengan cara ini, setiap kali nilai `balance` di Redux store berubah, komponen `BalanceDisplay` akan otomatis memperbarui tampilan dengan saldo yang terbaru.

### Kesimpulan

Komponen **`BalanceDisplay`** digunakan untuk menampilkan saldo akun yang terhubung langsung dengan state global aplikasi (Redux store). Beberapa hal yang perlu diperhatikan:

- Menggunakan **`connect`** dari `react-redux` untuk menghubungkan komponen dengan Redux store.
- **`mapStateToProps`** digunakan untuk memilih bagian dari state yang ingin diteruskan sebagai props ke komponen.
- **`formatCurrency`** digunakan untuk mengubah angka saldo menjadi format mata uang yang mudah dibaca.

Dengan pendekatan ini, komponen tetap terpisah dari logika pengelolaan state dan hanya fokus pada **tampilan** dan **penerimaan data** dari store, yang membuat aplikasi lebih mudah dipelihara dan scalable.
