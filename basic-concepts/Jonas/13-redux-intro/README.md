# Penjelasan Aplikasi Menggunakan React dan Redux Toolkit

Aplikasi ini adalah contoh sederhana dari sebuah sistem perbankan yang menggunakan **React** sebagai UI (User Interface) dan **Redux Toolkit** untuk mengelola **state global** (data yang dibagikan antar komponen). Aplikasi ini mencakup fitur pembuatan pelanggan, pengelolaan saldo akun, pengajuan pinjaman, dan menampilkan saldo yang telah diformat.

Tujuan dari aplikasi ini adalah untuk memahami bagaimana mengintegrasikan React dengan Redux Toolkit, serta bagaimana mengelola state di aplikasi React menggunakan Redux.

### **1. Apa itu React dan Redux Toolkit?**

#### **React**

React adalah pustaka JavaScript untuk membangun antarmuka pengguna (UI). Dengan React, kita bisa membangun aplikasi web dengan menggunakan komponen yang terpisah-pisah dan dapat diulang kembali. Komponen ini berfungsi untuk menangani tampilan dan perilaku aplikasi.

#### **Redux Toolkit**

Redux Toolkit adalah pustaka resmi dari Redux yang mempermudah cara kita mengelola state aplikasi. Redux digunakan untuk menyimpan data global aplikasi yang dibutuhkan oleh berbagai komponen. **Redux Toolkit** membuat proses ini lebih efisien dan mengurangi kebutuhan akan banyak boilerplate code yang digunakan pada Redux versi sebelumnya.

### **2. Alur Aplikasi**

Aplikasi ini mensimulasikan proses seperti:

- Menambahkan informasi pelanggan (seperti nama lengkap dan ID Nasional).
- Mengelola saldo akun (deposit, withdraw, dll).
- Mengajukan pinjaman.
- Menampilkan saldo akun dalam format mata uang yang terformat.

Berikut adalah komponen utama dalam aplikasi ini:

### **3. Struktur Aplikasi dan Penjelasan Komponen**

#### **a. `App.js` (Tampilan Utama)**

Ini adalah komponen utama yang menampilkan tampilan berdasarkan apakah data pelanggan sudah ada atau belum.

```javascript
import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";
import { useSelector } from "react-redux";

function App() {
  const fullName = useSelector((state) => state.customer.fullName);
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {fullName === "" ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
```

**Penjelasan**:

- **`useSelector`** digunakan untuk mengambil data dari Redux store. Di sini, kita mengambil **`fullName`** dari state **`customer`** untuk menentukan apakah pelanggan sudah ada atau belum.
- Jika **`fullName`** kosong, komponen `CreateCustomer` ditampilkan untuk meminta pengguna mengisi informasi mereka.
- Jika pelanggan sudah ada, kita menampilkan komponen yang mengelola operasi akun seperti **`AccountOperations`** dan **`BalanceDisplay`**.

#### **b. `CreateCustomer.js` (Pembuatan Data Pelanggan)**

Komponen ini memungkinkan pengguna untuk membuat data pelanggan (nama lengkap dan ID Nasional) dan menyimpannya di Redux store.

```javascript
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "./customerSlice";

function Customer() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");
  const dispatch = useDispatch();

  function handleClick() {
    if (!fullName || !nationalId) return;
    dispatch(createCustomer(fullName, nationalId));
  }

  return (
    <div>
      <h2>Create new customer</h2>
      <div className="inputs">
        <label>Customer full name</label>
        <input value={fullName} onChange={(e) => setFullName(e.target.value)} />
        <label>National ID</label>
        <input
          value={nationalId}
          onChange={(e) => setNationalId(e.target.value)}
        />
        <button onClick={handleClick}>Create new customer</button>
      </div>
    </div>
  );
}

export default Customer;
```

**Penjelasan**:

- Menggunakan **`useState`** untuk menyimpan nilai nama dan ID nasional pelanggan.
- **`dispatch(createCustomer())`** digunakan untuk mengirimkan aksi (action) ke Redux store untuk menyimpan data pelanggan.

#### **c. `AccountOperations.js` (Operasi Akun)**

Komponen ini memungkinkan pengguna untuk melakukan operasi seperti deposit, withdraw, mengajukan pinjaman, dan membayar pinjaman.

```javascript
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw, requestLoan, payLoan } from "./accountSlice";

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");

  const dispatch = useDispatch();
  const {
    balance,
    loan,
    loanPurpose: currentLoanPurpose,
    isLoading,
  } = useSelector((state) => state.account);

  function handleDeposit() {
    if (!depositAmount) return;
    dispatch(deposit(depositAmount, currency));
  }

  function handleWithdrawal() {
    if (!withdrawalAmount) return;
    dispatch(withdraw(withdrawalAmount));
  }

  function handleRequestLoan() {
    if (!loanAmount || !loanPurpose) return;
    dispatch(requestLoan(loanAmount, loanPurpose));
  }

  function handlePayLoan() {
    dispatch(payLoan());
  }

  return (
    <div>
      <h2>Your account operations</h2>
      {/* Form untuk deposit, withdraw, loan, dan pay loan */}
    </div>
  );
}

export default AccountOperations;
```

**Penjelasan**:

- Menggunakan **`useState`** untuk menangani input pengguna seperti jumlah deposit, penarikan, dan pinjaman.
- **`dispatch`** digunakan untuk mengirim aksi ke Redux store (misalnya untuk melakukan deposit, penarikan, dll).
- **`useSelector`** digunakan untuk mengambil status saldo dan pinjaman dari Redux store.

#### **d. `BalanceDisplay.js` (Menampilkan Saldo Akun)**

Komponen ini menampilkan saldo akun yang diformat dalam bentuk mata uang.

```javascript
import { connect } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay({ balance }) {
  return <div className="balance">{formatCurrency(balance)}</div>;
}

function mapStateToProps(state) {
  return {
    balance: state.account.balance,
  };
}

export default connect(mapStateToProps)(BalanceDisplay);
```

**Penjelasan**:

- Menggunakan **`connect`** untuk menghubungkan komponen dengan Redux store. Ini memungkinkan kita mengambil **`balance`** dari state **`account`**.
- **`formatCurrency`** digunakan untuk memformat saldo menjadi bentuk mata uang yang lebih mudah dibaca.

### **4. Redux Store dan Reducer**

#### **`store.js` (Membuat Redux Store)**

```javascript
import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;
```

**Penjelasan**:

- **`configureStore`** adalah cara yang disarankan oleh Redux Toolkit untuk membuat store Redux.
- Store ini mengelola dua bagian state:
  - **`account`**: Dikelola oleh `accountReducer`.
  - **`customer`**: Dikelola oleh `customerReducer`.

### **5. Kesimpulan**

Aplikasi ini menggunakan **React** untuk membangun antarmuka pengguna dan **Redux Toolkit** untuk mengelola state global. Penggunaan Redux Toolkit memungkinkan kita untuk lebih mudah mengelola state dalam aplikasi yang lebih besar dengan mengurangi kebutuhan akan boilerplate code.

**Fitur Utama:**

- **Redux** digunakan untuk menyimpan dan mengelola data seperti informasi pelanggan, saldo akun, dan pinjaman.
- **React** digunakan untuk membangun komponen UI yang responsif dan interaktif.
- Aplikasi ini mencakup berbagai operasi perbankan dasar seperti deposit, penarikan, dan pengajuan pinjaman yang semuanya dikelola melalui state global Redux.

Dengan cara ini, kita dapat memisahkan logika pengelolaan data (Redux) dari tampilan (React), membuat aplikasi lebih modular dan mudah dipelihara.
