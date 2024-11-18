# README - **Tip Calculator App**

## Deskripsi Singkat Proyek

Proyek ini adalah aplikasi **Tip Calculator** yang memungkinkan pengguna untuk menghitung tip (uang tip) berdasarkan jumlah tagihan dan dua pilihan persentase tip. Pengguna dapat memasukkan jumlah tagihan dan memilih dua persentase tip yang berbeda—satu untuk diri mereka sendiri dan satu lagi untuk teman mereka. Aplikasi kemudian menghitung tip total dan menampilkan jumlah total yang harus dibayar (termasuk tip).

## Fitur Utama Aplikasi

- **Input Tagihan (Bill Input)**: Pengguna dapat memasukkan jumlah tagihan yang akan dihitung.
- **Pilih Persentase Tip (Select Percentage)**: Pengguna dapat memilih persentase tip untuk diri mereka sendiri dan teman mereka.
- **Menampilkan Hasil (Output)**: Aplikasi akan menampilkan jumlah tip yang dihitung dan total tagihan yang harus dibayar.
- **Reset**: Pengguna dapat mereset seluruh input dan hasil perhitungan.

## Penjelasan Setiap Komponen dan Fungsinya

Aplikasi ini dibangun dengan React menggunakan **komponen** yang saling berinteraksi. Berikut adalah penjelasan tentang komponen-komponen utama dalam aplikasi ini:

### 1. **Komponen `App`**

```jsx
function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}
```

- **Fungsi**: `App` adalah komponen utama yang mengandung komponen `TipCalculator`. Komponen ini bertanggung jawab untuk merender seluruh aplikasi.
- **Tujuan**: `App` hanya berfungsi untuk menyertakan dan merender komponen `TipCalculator`, yang menangani logika utama aplikasi.

### 2. **Komponen `TipCalculator`**

```jsx
function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill(0);
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div className="App">
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage1} OnSelect={setPercentage1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} OnSelect={setPercentage2}>
        How did your friend like the service?
      </SelectPercentage>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}
```

- **Fungsi**: `TipCalculator` adalah komponen yang menangani logika aplikasi, seperti menyimpan nilai input (tagihan dan persentase tip) dalam **state** dan menghitung tip berdasarkan input tersebut.
- **State**:
  - `bill`: Menyimpan jumlah tagihan yang dimasukkan pengguna.
  - `percentage1` dan `percentage2`: Menyimpan persentase tip yang dipilih oleh pengguna.
- **Logika**: `tip` dihitung berdasarkan formula:
  ```js
  bill * ((percentage1 + percentage2) / 2 / 100);
  ```
  Ini berarti tip dihitung berdasarkan rata-rata persentase tip yang dipilih dan jumlah tagihan.
- **Handle Reset**: Fungsi `handleReset` akan mengatur kembali semua state (`bill`, `percentage1`, `percentage2`) menjadi `0` saat tombol reset diklik.
- **Pengkondisian**: Hanya menampilkan hasil (`Output`) dan tombol `Reset` jika `bill` lebih besar dari `0`.

### 3. **Komponen `BillInput`**

```jsx
function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>how much was the bill ?</label>
      <input
        type="text"
        placeholder="Bill Value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}
```

- **Fungsi**: Komponen ini memungkinkan pengguna untuk memasukkan jumlah tagihan.
- **Props**:
  - `bill`: Nilai tagihan yang diteruskan dari `TipCalculator`.
  - `onSetBill`: Fungsi untuk memperbarui nilai tagihan di state `TipCalculator`.
- **Interaksi**: Setiap kali pengguna mengubah input, fungsi `onSetBill` dipanggil untuk memperbarui state `bill`.

### 4. **Komponen `SelectPercentage`**

```jsx
function SelectPercentage({ children, percentage, OnSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => OnSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
```

- **Fungsi**: Komponen ini menampilkan dropdown untuk memilih persentase tip.
- **Props**:
  - `percentage`: Nilai persentase yang dipilih (dari state `percentage1` atau `percentage2`).
  - `OnSelect`: Fungsi yang dipanggil untuk memperbarui nilai persentase saat dropdown berubah.
- **Interaksi**: Ketika pengguna memilih nilai baru dari dropdown, fungsi `OnSelect` dipanggil untuk memperbarui state persentase yang sesuai.

### 5. **Komponen `Output`**

```jsx
function Output({ bill, tip }) {
  return (
    <h3>
      You pay {bill + tip} (${bill} + ${tip} tip)
    </h3>
  );
}
```

- **Fungsi**: Komponen ini menampilkan hasil perhitungan jumlah yang harus dibayar, termasuk tip.
- **Props**:
  - `bill`: Nilai tagihan.
  - `tip`: Nilai tip yang dihitung berdasarkan persentase.
- **Interaksi**: Menghitung dan menampilkan total yang harus dibayar, yaitu `bill + tip`.

### 6. **Komponen `Reset`**

```jsx
function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
```

- **Fungsi**: Komponen ini menampilkan tombol "Reset" yang akan mengembalikan semua input ke nilai awal.
- **Props**:
  - `onReset`: Fungsi yang dipanggil untuk mereset nilai-nilai input di aplikasi.

## Cara Kerja Aplikasi Secara Keseluruhan

1. Pengguna memasukkan jumlah tagihan di komponen `BillInput`.
2. Pengguna memilih persentase tip di dua komponen `SelectPercentage` (untuk diri mereka dan teman mereka).
3. Komponen `TipCalculator` menghitung tip berdasarkan jumlah tagihan dan rata-rata persentase tip yang dipilih.
4. Hasil perhitungan ditampilkan dalam komponen `Output`.
5. Pengguna dapat mengklik tombol `Reset` untuk menghapus semua input dan hasil perhitungan.

## Langkah-langkah untuk Menjalankan Aplikasi

1. Pastikan kamu memiliki **Node.js** dan **npm** terinstal di komputermu.
2. Clone repository ini atau salin kode ke dalam folder proyek baru.
3. Instal dependensi dengan menjalankan perintah:
   ```bash
   npm install
   ```
4. Jalankan aplikasi dengan perintah:
   ```bash
   npm start
   ```
5. Aplikasi akan berjalan di browser pada alamat `http://localhost:3000`.

## Kesimpulan

Aplikasi **Tip Calculator** ini adalah contoh sederhana dari bagaimana menggunakan React untuk membuat aplikasi interaktif. Aplikasi ini memperkenalkan konsep dasar seperti **state**, **props**, dan **event handling** dalam React, serta bagaimana komponen-komponen dapat saling berinteraksi untuk menghasilkan hasil yang dinamis.
