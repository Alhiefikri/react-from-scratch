# README: Penjelasan Komponen `App`

## Pengertian

Komponen `App` adalah komponen utama dalam aplikasi ini yang mengatur logika aplikasi secara keseluruhan, termasuk mengelola data teman-teman, menambah teman, dan membagi tagihan di antara teman. Komponen ini menggunakan beberapa fitur React seperti state, event handling, dan conditional rendering untuk menciptakan interaksi yang dinamis dengan pengguna.

## Cara Berpikir React

React berfokus pada komponen dan _state_. Setiap komponen adalah blok bangunan dari antarmuka pengguna (UI), dan _state_ adalah cara untuk menyimpan informasi yang dapat berubah selama aplikasi berjalan.

Berikut adalah cara berpikir dasar dalam React:

1. **Komponen**: UI aplikasi dibangun dari komponen-komponen kecil.
2. **State**: Data yang mengubah tampilan UI.
3. **Event Handling**: Fungsi yang menangani interaksi pengguna seperti klik tombol atau input.
4. **Rendering Ulang (Re-render)**: Ketika state berubah, React akan merender ulang UI untuk mencerminkan perubahan tersebut.

## Analogi Sederhana

Anggap saja aplikasi ini seperti manajemen teman untuk pembagian tagihan. Komponen `App` bertindak sebagai _manajer_ yang mengatur siapa saja yang termasuk dalam daftar teman, apakah kita ingin menambah teman baru atau melakukan pembagian tagihan.

- **State** adalah daftar teman yang kamu kelola, serta informasi apakah kamu ingin menambah teman atau tidak.
- **Komponen lainnya** (seperti `FormAddFriend` atau `FormSplitBill`) adalah alat yang kamu gunakan untuk menambah teman atau membagi tagihan.

## Penjelasan Code Tiap Baris

```javascript
import { useState } from "react";
import "./App.css";
import FriendList from "./components/FriendsList";
import initialFriends from "./friend";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
```

- **`useState`**: Hook dari React yang digunakan untuk menyimpan dan mengelola state.
- **`"./App.css"`**: Mengimpor file CSS untuk styling aplikasi.
- **`FriendList`, `Button`, `FormAddFriend`, `FormSplitBill`**: Mengimpor komponen-komponen yang digunakan dalam `App`.
- **`initialFriends`**: Daftar teman awal yang diimpor dari file `friend.js`.

```javascript
function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
```

- **`useState(initialFriends)`**: Menyimpan daftar teman yang dimulai dengan `initialFriends`.
- **`useState(false)`**: Menyimpan apakah form untuk menambah teman sedang ditampilkan.
- **`useState(null)`**: Menyimpan teman yang sedang dipilih untuk dibagi tagihannya. Dimulai dengan `null` karena tidak ada teman yang dipilih.

```javascript
function handleShoAddFriend() {
  setShowAddFriend((show) => !show);
  setSelectedFriend(null);
}
```

- **`handleShoAddFriend`**: Fungsi yang dibaca untuk membuka atau menutup form "Tambah Teman". Fungsi ini juga mengatur `selectedFriend` menjadi `null` (membatalkan pilihan teman).

```javascript
function handleAddFriend(friend) {
  setFriends((friends) => [...friends, friend]);
  setShowAddFriend(false);
}
```

- **`handleAddFriend`**: Fungsi yang menangani penambahan teman ke dalam daftar `friends`. Teman baru ditambahkan ke dalam array `friends` menggunakan spread operator (`...friends`), lalu menutup form tambah teman (`setShowAddFriend(false)`).

```javascript
function handleSelection(friend) {
  setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
  setShowAddFriend(false);
}
```

- **`handleSelection`**: Fungsi yang menangani pemilihan teman untuk dibagi tagihannya. Jika teman yang dipilih sudah sama, maka pemilihan akan dibatalkan (menjadi `null`). Setelah itu, form tambah teman juga ditutup.

```javascript
function handleSplitBill(value) {
  setFriends((friends) =>
    friends.map((friend) =>
      friend.id === selectedFriend.id
        ? { ...friend, balance: friend.balance + value }
        : friend
    )
  );
  setSelectedFriend(null);
}
```

- **`handleSplitBill`**: Fungsi yang menangani pembagian tagihan. Jika teman yang dipilih (berdasarkan `selectedFriend.id`) ada, maka balance mereka akan bertambah sesuai dengan nilai `value`. Setelah itu, pemilihan teman dibatalkan (`setSelectedFriend(null)`).

```javascript
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />
```

- **`return`**: Merender UI. Pada bagian ini, komponen `FriendList` akan menerima props:
  - **`friends`**: Daftar teman yang akan ditampilkan.
  - **`onSelection`**: Fungsi yang dipanggil ketika teman dipilih.
  - **`selectedFriend`**: Teman yang sedang dipilih, digunakan untuk menandai teman yang aktif.

```javascript
{
  showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />;
}
```

- **`showAddFriend && <FormAddFriend />`**: Jika `showAddFriend` bernilai `true`, maka komponen `FormAddFriend` akan dirender untuk menampilkan form tambah teman.

```javascript
        <Button onClick={handleShoAddFriend}>
          {showAddFriend ? "Tutup" : "Tambah Teman"}
        </Button>
      </div>
```

- **`Button`**: Tombol yang ketika diklik akan memanggil fungsi `handleShoAddFriend` untuk membuka atau menutup form tambah teman. Teks tombol berubah sesuai dengan status `showAddFriend`.

```javascript
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}
```

- **`selectedFriend && <FormSplitBill />`**: Jika ada teman yang dipilih (`selectedFriend` tidak `null`), maka komponen `FormSplitBill` akan dirender untuk menampilkan form pembagian tagihan.

```javascript
export default App;
```

- **`export default App`**: Mengekspor komponen `App` agar bisa digunakan di file lain.

## Kesimpulan

Komponen `App` berfungsi sebagai komponen utama yang mengelola state aplikasi dan merender UI yang dinamis berdasarkan interaksi pengguna. Komponen ini mengatur teman-teman yang ada dalam daftar, memungkinkan penambahan teman baru, pemilihan teman, serta pembagian tagihan di antara teman-teman yang dipilih. React memungkinkan kita untuk dengan mudah mengelola perubahan state dan merender ulang UI dengan efisien, sehingga pengguna dapat berinteraksi dengan aplikasi secara langsung dan real-time.
