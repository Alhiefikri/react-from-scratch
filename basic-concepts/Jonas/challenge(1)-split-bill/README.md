# README: Penjelasan Komponen Aplikasi "Split Bill"

Aplikasi ini dirancang untuk membantu pengguna membagi tagihan dengan teman-temannya. Pengguna dapat menambahkan teman baru, memilih teman yang akan dibagi tagihan, dan kemudian menentukan berapa banyak tagihan yang telah dibayar oleh masing-masing pihak. Komponen-komponen dalam aplikasi ini bekerja bersama untuk menangani interaksi pengguna secara dinamis menggunakan **React**.

Berikut adalah penjelasan komponen-komponen dalam aplikasi ini dan bagaimana mereka saling berinteraksi.

---

## 1. **Komponen `App`**

### Pengertian

Komponen `App` adalah komponen utama yang berfungsi sebagai wadah bagi seluruh aplikasi. Di dalamnya terdapat logika untuk mengelola daftar teman dan tampilan form untuk menambah teman, memilih teman, dan membagi tagihan.

### Cara Berpikir React

Komponen `App` mengelola **state** yang mengontrol siapa yang terpilih, apakah form "Tambah Teman" ditampilkan, dan daftar teman yang ada. Komponen ini juga menjadi tempat untuk **lifting state up**, di mana beberapa data yang diperlukan oleh komponen anak dikelola di sini.

### Penjelasan Code

```javascript
import { useState } from "react";
import "./App.css";
import FriendList from "./components/FriendsList";
import initialFriends from "./friend";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
```

- **`useState`** digunakan untuk mengelola state lokal seperti `friends` (daftar teman), `showAddFriend` (status apakah form tambah teman ditampilkan), dan `selectedFriend` (teman yang dipilih untuk membagi tagihan).

```javascript
function handleShoAddFriend() {
  setShowAddFriend((show) => !show);
  setSelectedFriend(null);
}

function handleAddFriend(friend) {
  setFriends((friends) => [...friends, friend]);
  setShowAddFriend(false);
}

function handleSelection(friend) {
  setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
  setShowAddFriend(false);
}

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

- **`handleShoAddFriend`**: Toggle visibility form tambah teman.
- **`handleAddFriend`**: Menambahkan teman baru ke daftar teman.
- **`handleSelection`**: Memilih teman yang ingin dibagi tagihan atau membatalkan pilihan jika teman yang sama dipilih lagi.
- **`handleSplitBill`**: Mengupdate saldo teman yang dipilih setelah pembagian tagihan.

```javascript
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShoAddFriend}>
          {showAddFriend ? "Tutup" : "Tambah Teman"}
        </Button>
      </div>
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

- Komponen `FriendList` menampilkan daftar teman, dan komponen `FormAddFriend` serta `FormSplitBill` ditampilkan berdasarkan keadaan tertentu.

### Kesimpulan

Komponen `App` berfungsi sebagai **root** atau induk dari aplikasi ini, yang mengelola **state** global (daftar teman, teman yang dipilih) dan menyediakan fungsi untuk memanipulasi state tersebut. Komponen-komponen anak menerima data dan fungsi sebagai **props**.

---

## 2. **Komponen `Button`**

### Pengertian

Komponen `Button` adalah komponen yang menampilkan tombol dan menerima aksi yang akan dilakukan ketika tombol ditekan.

### Penjelasan Code

```javascript
function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
```

- **`Button`** menerima `children` (konten yang akan ditampilkan di dalam tombol) dan **`onClick`** (fungsi yang akan dipanggil saat tombol diklik).
- Tombol ini digunakan di beberapa tempat, seperti tombol "Tambah Teman" dan "Bayar Tagihan".

---

## 3. **Komponen `FriendList`**

### Pengertian

Komponen `FriendList` bertugas untuk menampilkan daftar teman yang ada. Setiap item dalam daftar tersebut disertai dengan tombol untuk memilih teman dan melihat detilnya.

### Penjelasan Code

```javascript
function FriendList({ friends, onSelection, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
```

- **`friends.map()`**: Untuk setiap teman di daftar, komponen `Friend` akan dirender.
- **`onSelection` dan `selectedFriend`** adalah fungsi dan state yang diteruskan dari komponen induk (`App`) untuk memilih teman yang akan dibagi tagihan.

---

## 4. **Komponen `Friend`**

### Pengertian

Komponen `Friend` menampilkan informasi tentang teman, seperti nama, gambar, dan status utang/piutang.

### Penjelasan Code

```javascript
function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id == friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Tutup" : "Pilih"}
      </Button>
    </li>
  );
}
```

- **`isSelected`**: Menentukan apakah teman sedang dipilih untuk pembagian tagihan.
- **`Button`**: Tombol yang memungkinkan pengguna untuk memilih atau menutup pilihan teman.

---

## 5. **Komponen `FormAddFriend`**

### Pengertian

Komponen `FormAddFriend` memungkinkan pengguna untuk menambahkan teman baru dengan mengisi nama dan URL gambar.

### Penjelasan Code

```javascript
function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    const id = crypto.randomUUID();
    e.preventDefault();
    if (!name || !image) return;

    const newFriend = { id, name, image, balance: 0 };
    onAddFriend(newFriend);
  }
}
```

- **`handleSubmit`**: Fungsi yang dipanggil saat form disubmit, membuat teman baru dan mengirimkannya ke komponen induk melalui `onAddFriend`.

---

## 6. **Komponen `FormSplitBill`**

### Pengertian

Komponen `FormSplitBill` memungkinkan pengguna untuk membagi tagihan dengan teman yang dipilih. Pengguna dapat memasukkan nilai tagihan, jumlah yang sudah dibayar, dan siapa yang membayar tagihan.

### Penjelasan Code

```javascript
function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";

  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }
}
```

- **`handleSubmit`**: Fungsi yang dipanggil saat form disubmit untuk menghitung dan mengirimkan informasi pembagian tagihan ke komponen induk.

---

## **Lifting State Up**

### Pengertian Lifting State Up

**Lifting state up** adalah teknik dalam React di mana state yang digunakan oleh beberapa komponen dipindahkan ke komponen induk yang lebih tinggi dalam hierarki komponen. Dengan demikian, data atau state yang dibutuhkan oleh beberapa komponen dapat dikelola di satu tempat dan diteruskan ke komponen-komponen anak melalui **props**.

### Kenapa Lifting State Up Perlu?

Lifting state up diperlukan untuk menghindari **state yang terpisah** di berbagai komponen, yang bisa menyebabkan data menjadi tidak konsisten atau sulit dikelola. Dengan menyimpan state di komponen induk, kita bisa memastikan bahwa data yang dibutuhkan oleh beberapa komponen tetap konsisten dan mudah diakses. Misalnya, dalam aplikasi ini:

- Data teman yang ada disimpan di `App` dan diteruskan ke komponen `FriendList`, `Friend`, dan `Form

SplitBill`.

- Ketika ada perubahan dalam data teman (misalnya, saldo teman setelah membagi tagihan), perubahan tersebut akan langsung terlihat di seluruh aplikasi, karena data diambil dari komponen `App`.

Dengan melakukan lifting state up, aplikasi menjadi lebih mudah untuk dikelola, terutama ketika data atau state perlu diakses atau dimodifikasi oleh lebih dari satu komponen.

---

## Kesimpulan

Aplikasi **Split Bill** terdiri dari berbagai komponen yang bekerja sama untuk menangani interaksi pengguna dalam membagi tagihan dengan teman. Setiap komponen memiliki peran spesifik, seperti menampilkan daftar teman, menambahkan teman baru, dan membagi tagihan. Dengan menggunakan teknik **lifting state up**, data yang dibutuhkan oleh beberapa komponen dikelola di satu tempat (komponen `App`), memastikan bahwa aplikasi tetap terorganisir dan konsisten.
