# README: Penjelasan Komponen `Button`

## Pengertian

Komponen `Button` adalah komponen UI yang merepresentasikan sebuah tombol (button) di aplikasi. Tombol ini menerima teks atau elemen apapun sebagai **children** (konten di dalam tombol), dan menjalankan fungsi **onClick** yang diberikan sebagai prop saat tombol ditekan.

Komponen ini dirancang agar dapat digunakan di berbagai bagian aplikasi dengan berbagai teks dan tindakan yang berbeda.

## Cara Berpikir React

Komponen `Button` merupakan komponen presentasional yang sederhana. Ia hanya menerima props, lalu menampilkan elemen `button` di UI dan menangani event klik (onClick).

## Analogi Sederhana

Bayangkan komponen ini seperti tombol di dunia nyata. Misalnya, kamu memiliki sebuah tombol di dinding yang bisa kamu tekan untuk menyalakan lampu. Teks pada tombol bisa berbeda-beda, misalnya “Hidupkan Lampu” atau “Matikan Lampu”. Saat tombol ditekan, ia akan memicu aksi tertentu (seperti menyalakan atau mematikan lampu). Begitu juga dalam aplikasi, tombol ini akan menjalankan suatu fungsi ketika diklik.

## Penjelasan Code Tiap Baris

```javascript
function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
```

- **`function Button({ children, onClick })`**:

  - Fungsi `Button` adalah komponen fungsional yang menerima dua **props**:
    - **`children`**: Konten yang akan ditampilkan di dalam tombol (misalnya teks "Tambah Teman").
    - **`onClick`**: Fungsi yang akan dijalankan saat tombol diklik.

- **`<button className="button" onClick={onClick}>`**:

  - Elemen HTML `<button>` digunakan untuk membuat tombol.
  - **`className="button"`**: Menambahkan kelas CSS dengan nama `button` untuk memberikan styling pada tombol.
  - **`onClick={onClick}`**: Menambahkan event listener pada tombol. Ketika tombol diklik, fungsi `onClick` yang diterima sebagai prop akan dijalankan.

- **`{children}`**: Menampilkan konten yang diterima oleh komponen `Button`. Ini bisa berupa teks atau elemen lainnya yang diletakkan di dalam tag `<Button></Button>` saat komponen ini digunakan.

```javascript
export default Button;
```

- **`export default Button`**: Mengekspor komponen `Button` agar dapat digunakan di file lain.

## Kesimpulan

Komponen `Button` adalah komponen sederhana yang bertugas menampilkan tombol dengan konten dinamis (tergantung pada apa yang diberikan dalam prop `children`). Ketika tombol diklik, fungsi yang diberikan melalui prop `onClick` akan dipanggil. Komponen ini sangat berguna untuk berbagai interaksi di aplikasi, seperti membuka form, mengubah tampilan, atau menjalankan aksi lainnya.

Komponen `Button` dapat digunakan di berbagai tempat dalam aplikasi dengan berbagai label tombol dan aksi berbeda, membuatnya sangat fleksibel dan dapat dipakai ulang.

# README: Penjelasan Komponen `FriendList`

## Pengertian

Komponen `FriendList` bertugas untuk menampilkan daftar teman-teman dalam bentuk list (`<ul>`). Setiap teman ditampilkan menggunakan komponen `Friend` yang menerima informasi teman tertentu, fungsi untuk menangani seleksi teman, dan status teman yang dipilih.

Komponen ini menerima tiga props utama:

1. **`friends`**: Daftar teman-teman yang akan ditampilkan.
2. **`onSelection`**: Fungsi yang dipanggil saat teman dipilih.
3. **`selectedFriend`**: Teman yang sedang dipilih (digunakan untuk memberikan tanda pada teman yang dipilih).

## Cara Berpikir React

Komponen ini berfungsi untuk menampilkan koleksi item (dalam hal ini teman-teman) menggunakan teknik yang disebut **rendering list**. React akan merender setiap item dalam daftar `friends` menjadi elemen `Friend` dan akan mengupdate tampilan saat ada perubahan pada daftar teman atau teman yang dipilih.

Komponen ini juga menggunakan **props** untuk menyampaikan data ke komponen anak (`Friend`), serta untuk menangani interaksi pengguna, seperti pemilihan teman.

## Analogi Sederhana

Bayangkan kamu sedang melihat daftar teman di sebuah papan pengumuman. Setiap teman akan memiliki informasi seperti nama dan gambar. Kamu bisa memilih teman dari daftar tersebut dengan cara mengklik nama mereka. Komponen `FriendList` bekerja seperti papan pengumuman yang menampilkan teman-teman yang ada di daftar, dan komponen `Friend` menampilkan informasi masing-masing teman.

## Penjelasan Code Tiap Baris

```javascript
import Friend from "./Friend";
```

- Mengimpor komponen `Friend` dari file `Friend.jsx`. Komponen ini digunakan untuk menampilkan setiap teman dalam daftar.

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

- **`function FriendList({ friends, onSelection, selectedFriend })`**:

  - Komponen `FriendList` menerima tiga props:
    - **`friends`**: Daftar teman-teman yang akan ditampilkan.
    - **`onSelection`**: Fungsi yang dipanggil saat seorang teman dipilih.
    - **`selectedFriend`**: Teman yang sedang dipilih (digunakan untuk memberikan tanda pada teman yang dipilih).

- **`<ul>`**: Elemen `ul` (unordered list) digunakan untuk menampung daftar teman dalam bentuk list.

- **`{friends.map((friend) => ( ... ))}`**:

  - **`map`**: Fungsi ini digunakan untuk merender setiap teman dalam daftar `friends` sebagai sebuah komponen `Friend`.
  - Setiap elemen dalam array `friends` akan diteruskan ke komponen `Friend` sebagai prop `friend`.

- **`<Friend ... />`**: Komponen `Friend` digunakan untuk menampilkan informasi mengenai tiap teman.
  - **`friend={friend}`**: Mengirimkan informasi teman sebagai prop `friend` ke komponen `Friend`.
  - **`key={friend.id}`**: Memberikan key unik untuk setiap elemen list, yang sangat penting untuk membantu React dalam melakukan rendering ulang list dengan efisien. `friend.id` dianggap sebagai identifier unik untuk setiap teman.
  - **`onSelection={onSelection}`**: Mengirimkan fungsi `onSelection` yang akan dipanggil ketika teman dipilih.
  - **`selectedFriend={selectedFriend}`**: Mengirimkan teman yang sedang dipilih, untuk digunakan dalam komponen `Friend` (misalnya untuk memberi tanda pada teman yang dipilih).

```javascript
export default FriendList;
```

- **`export default FriendList`**: Mengekspor komponen `FriendList` agar bisa digunakan di file lain, seperti di komponen `App`.

## Kesimpulan

Komponen `FriendList` berfungsi untuk menampilkan daftar teman dalam bentuk list di UI. Setiap teman ditampilkan dengan menggunakan komponen `Friend`, yang menerima data teman dan menangani interaksi pemilihan teman. Komponen ini sangat penting untuk memisahkan logika tampilan daftar teman dan memudahkan pengelolaan tampilan yang lebih modular.

Dengan menggunakan `map()` pada array `friends`, kita dapat dengan mudah merender daftar teman secara dinamis, dan memberikan kemampuan bagi pengguna untuk memilih teman dari daftar tersebut.

Komponen `FriendList` menjadikan aplikasi lebih terstruktur dan dapat dipelihara dengan baik karena memungkinkan kita untuk memisahkan kode untuk setiap bagian UI (dalam hal ini, daftar teman) ke dalam komponen yang lebih kecil dan reusable.

# README: Penjelasan Komponen `Friend`

## Pengertian

Komponen `Friend` adalah komponen yang digunakan untuk menampilkan informasi tentang satu teman dalam daftar teman. Komponen ini menampilkan foto teman, nama, informasi tentang saldo utang atau piutang teman, serta tombol yang memungkinkan pengguna untuk memilih atau membatalkan pilihan teman tersebut.

Komponen ini juga mengelola logika visual untuk menandai teman yang dipilih dengan memberikan kelas CSS tertentu (`selected`) serta menampilkan informasi saldo keuangan antara pengguna dan teman.

## Cara Berpikir React

Komponen `Friend` adalah komponen presentasional yang bertugas untuk menampilkan data teman, memberikan respons terhadap interaksi pengguna, dan merender UI berdasarkan status teman (misalnya apakah teman dipilih atau tidak). React mengelola status teman yang dipilih menggunakan **props** (yaitu `selectedFriend`), dan juga menangani event dengan **callback function** (yaitu `onSelection`).

## Analogi Sederhana

Bayangkan kamu sedang melihat daftar teman di aplikasi pembagian tagihan. Setiap teman memiliki informasi seperti nama, foto, dan jumlah utang/piutang kepada kamu. Komponen `Friend` akan menampilkan informasi teman satu per satu. Jika kamu memilih salah satu teman, maka tampilan tombol akan berubah, misalnya menjadi "Tutup" atau "Pilih" lagi. Ini memudahkan kamu untuk memilih teman yang ingin dibahas urusan tagihannya.

## Penjelasan Code Tiap Baris

```javascript
import Button from "./Button";
```

- Mengimpor komponen `Button` dari file `Button.jsx`. Komponen ini digunakan untuk menampilkan tombol di dalam setiap elemen teman.

```javascript
function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id == friend.id;
```

- **`function Friend({ friend, onSelection, selectedFriend })`**: Komponen ini menerima tiga **props**:

  - **`friend`**: Informasi tentang teman (seperti nama, gambar, dan saldo utang/piutang).
  - **`onSelection`**: Fungsi yang dipanggil ketika pengguna memilih atau membatalkan pilihan terhadap teman.
  - **`selectedFriend`**: Teman yang sedang dipilih, digunakan untuk memberikan tanda pada teman yang aktif dipilih.

- **`const isSelected = selectedFriend?.id == friend.id;`**:
  - Membandingkan ID teman yang sedang dipilih (`selectedFriend.id`) dengan ID teman yang sedang dirender (`friend.id`).
  - `?.` adalah optional chaining, yang memastikan bahwa jika `selectedFriend` adalah `null` atau `undefined`, tidak terjadi error.
  - **`isSelected`** akan bernilai `true` jika teman ini adalah teman yang sedang dipilih.

```javascript
  return (
    <li className={isSelected ? "selected" : ""}>
```

- **`<li className={isSelected ? "selected" : ""}>`**:
  - Menggunakan elemen `<li>` untuk membungkus informasi teman.
  - Jika `isSelected` bernilai `true`, maka kelas CSS `selected` akan diterapkan, yang bisa digunakan untuk memberikan styling khusus pada teman yang sedang dipilih.

```javascript
    <img src={friend.image} alt={friend.name} />
    <h3>{friend.name}</h3>
```

- **`<img src={friend.image} alt={friend.name} />`**: Menampilkan gambar teman menggunakan `src` dari properti `friend.image` dan teks alternatif dari `friend.name`.
- **`<h3>{friend.name}</h3>`**: Menampilkan nama teman dalam elemen `<h3>`.

```javascript
{
  friend.balance < 0 && (
    <p className="red">
      Anda berhutang kepada {friend.name} sebesar Rp {Math.abs(friend.balance)}
    </p>
  );
}
{
  friend.balance > 0 && (
    <p className="green">
      {friend.name} berhutang kepada anda sebesar Rp {Math.abs(friend.balance)}
    </p>
  );
}
{
  friend.balance == 0 && <p>Anda dan {friend.name} tidak berhutang</p>;
}
```

- **`{friend.balance < 0 && (...)}`**:
  - Jika `balance` teman lebih kecil dari 0 (artinya pengguna berhutang kepada teman), maka tampilkan pesan dengan kelas CSS `red` yang menunjukkan jumlah utang.
- **`{friend.balance > 0 && (...)}`**:
  - Jika `balance` teman lebih besar dari 0 (artinya teman berhutang kepada pengguna), maka tampilkan pesan dengan kelas CSS `green` yang menunjukkan jumlah piutang.
- **`{friend.balance == 0 && (...)}`**:
  - Jika `balance` teman sama dengan 0 (artinya tidak ada utang atau piutang antara pengguna dan teman), maka tampilkan pesan yang menyatakan bahwa tidak ada utang di antara keduanya.

```javascript
<Button onClick={() => onSelection(friend)}>
  {isSelected ? "Tutup" : "Pilih"}
</Button>
```

- **`<Button onClick={() => onSelection(friend)}>`**: Menampilkan tombol `Button`. Ketika tombol ini diklik, fungsi `onSelection` akan dipanggil dengan parameter `friend` (teman yang sedang ditampilkan).
- **`{isSelected ? "Tutup" : "Pilih"}`**:
  - Jika `isSelected` bernilai `true` (teman sedang dipilih), tombol akan menampilkan teks "Tutup".
  - Jika `isSelected` bernilai `false`, tombol akan menampilkan teks "Pilih".

```javascript
  </li>
);
```

- Menutup elemen `<li>` yang membungkus seluruh informasi tentang teman.

```javascript
export default Friend;
```

- **`export default Friend`**: Mengekspor komponen `Friend` agar bisa digunakan di file lain, seperti di komponen `FriendList`.

## Kesimpulan

Komponen `Friend` bertanggung jawab untuk menampilkan informasi mengenai teman, termasuk foto, nama, dan status saldo utang/piutang. Komponen ini juga menangani logika interaksi pengguna, seperti memilih teman untuk melihat detail lebih lanjut atau membatalkan pilihan. Dengan menggunakan **props** dan **conditional rendering**, komponen ini bisa merender UI secara dinamis berdasarkan status teman yang dipilih atau informasi saldo utang/piutang.

Komponen `Friend` juga menggunakan **props** untuk berinteraksi dengan komponen induk (seperti `FriendList` atau `App`), khususnya dalam hal pemilihan teman. Tombol yang ada di dalam komponen ini sangat berguna untuk memberikan kontrol kepada pengguna dalam memilih atau membatalkan pilihan terhadap teman.

# README: Penjelasan Komponen `FormAddFriend`

## Pengertian

Komponen `FormAddFriend` adalah form yang memungkinkan pengguna untuk menambahkan teman baru ke dalam daftar teman. Form ini menerima dua input:

1. **Nama Teman**: Untuk memasukkan nama teman.
2. **URL Gambar**: Untuk memasukkan URL gambar teman (sebagai foto profil).

Komponen ini juga mengelola state untuk menangani input pengguna dan kemudian menambahkan teman baru ke dalam daftar dengan memanggil fungsi `onAddFriend` yang diterima dari komponen induk.

## Cara Berpikir React

Komponen `FormAddFriend` adalah komponen yang bertugas untuk menangani interaksi pengguna (dalam hal ini, menambah teman baru) dengan menggunakan **state** untuk mengelola data yang dimasukkan oleh pengguna (nama dan gambar). Setelah form disubmit, data yang telah dimasukkan akan diteruskan ke komponen induk (seperti `App`) melalui **callback function** (`onAddFriend`).

## Analogi Sederhana

Bayangkan kamu sedang menulis di buku alamat untuk menambahkan teman baru. Kamu menulis nama dan gambar teman yang ingin kamu tambahkan. Setelah itu, kamu mengklik tombol "Tambah", dan informasi teman tersebut ditambahkan ke daftar teman yang kamu miliki. Komponen `FormAddFriend` berfungsi seperti halaman di buku alamat untuk menambah teman baru.

## Penjelasan Code Tiap Baris

```javascript
import { useState } from "react";
import Button from "./Button";
```

- **`useState`**: Hook React untuk mengelola state lokal di dalam komponen. Di sini digunakan untuk menyimpan nilai input (nama dan gambar).
- **`Button`**: Mengimpor komponen `Button` yang digunakan untuk menampilkan tombol "Tambah".

```javascript
function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?u=499476");
```

- **`function FormAddFriend({ onAddFriend })`**: Komponen fungsional `FormAddFriend` yang menerima satu prop:
  - **`onAddFriend`**: Fungsi yang akan dipanggil untuk menambahkan teman baru setelah form disubmit.
- **`const [name, setName] = useState("")`**: Menggunakan hook `useState` untuk membuat state `name` yang akan menyimpan nama teman yang dimasukkan oleh pengguna.
- **`const [image, setImage] = useState("https://i.pravatar.cc/48?u=499476")`**: Menggunakan hook `useState` untuk membuat state `image` yang menyimpan URL gambar teman (nilai awal adalah gambar avatar default).

```javascript
  function handleSubmit(e) {
    const id = crypto.randomUUID();
    e.preventDefault();
```

- **`function handleSubmit(e)`**: Fungsi yang dijalankan saat form disubmit. Fungsi ini mencegah reload halaman (menggunakan `e.preventDefault()`) dan membuat ID unik untuk teman baru menggunakan `crypto.randomUUID()`.

```javascript
if (!name || !image) return;
```

- **`if (!name || !image) return;`**: Jika nama atau URL gambar kosong, maka fungsi akan berhenti dan tidak menambahkan teman baru. Ini untuk memastikan bahwa data yang dimasukkan lengkap.

```javascript
const newFriend = {
  id,
  name,
  image: `${image}?=${id}`,
  balance: 0,
};
```

- **`const newFriend = { ... }`**: Membuat objek baru untuk teman dengan informasi yang sudah dimasukkan oleh pengguna:
  - **`id`**: ID unik yang dihasilkan.
  - **`name`**: Nama teman yang dimasukkan oleh pengguna.
  - **`image`**: URL gambar teman yang dimasukkan oleh pengguna, dengan tambahan query string `?=${id}` untuk memastikan gambar selalu dimuat ulang ketika teman baru ditambahkan.
  - **`balance: 0`**: Inisialisasi saldo utang/piutang teman baru dengan nilai 0.

```javascript
onAddFriend(newFriend);
```

- **`onAddFriend(newFriend)`**: Memanggil fungsi `onAddFriend` yang diterima sebagai prop dan mengirimkan objek `newFriend` sebagai parameter. Ini akan menambah teman baru ke daftar teman di komponen induk (seperti `App`).

```javascript
setName("");
setImage("https://i.pravatar.cc/48?u=499476");
```

- **`setName("")`**: Mengatur state `name` menjadi string kosong setelah form disubmit, sehingga input nama direset.
- **`setImage("https://i.pravatar.cc/48?u=499476")`**: Mengatur state `image` menjadi URL gambar default setelah form disubmit, sehingga input gambar direset.

```javascript
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🧑🏻‍🤝‍🧑🏿 Nama Teman</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
```

- **`<form className="form-add-friend" onSubmit={handleSubmit}>`**: Form dengan kelas CSS `form-add-friend` dan event handler `onSubmit` yang memanggil fungsi `handleSubmit`.
- **`<label>🧑🏻‍🤝‍🧑🏿 Nama Teman</label>`**: Label untuk input nama teman.
- **`<input type="text" value={name} onChange={(e) => setName(e.target.value)} />`**:
  - Input untuk nama teman.
  - **`value={name}`**: Nilai input terikat pada state `name`, sehingga input akan menampilkan nilai state.
  - **`onChange={(e) => setName(e.target.value)}`**: Mengubah state `name` ketika pengguna mengetikkan sesuatu di dalam input.

```javascript
      <label>🖼️ URL Gambar</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
```

- **`<label>🖼️ URL Gambar</label>`**: Label untuk input URL gambar.
- **`<input type="text" value={image} onChange={(e) => setImage(e.target.value)} />`**:
  - Input untuk URL gambar teman.
  - **`value={image}`**: Nilai input terikat pada state `image`.
  - **`onChange={(e) => setImage(e.target.value)}`**: Mengubah state `image` ketika pengguna mengetikkan URL gambar.

```javascript
      <Button>Tambah</Button>
    </form>
  );
}
```

- **`<Button>Tambah</Button>`**: Menampilkan tombol "Tambah" dari komponen `Button`. Ketika tombol ini diklik, form akan disubmit dan teman baru akan ditambahkan.

```javascript
export default FormAddFriend;
```

- **`export default FormAddFriend`**: Mengekspor komponen `FormAddFriend` agar bisa digunakan di file lain, seperti di komponen `App`.

## Kesimpulan

Komponen `FormAddFriend` adalah form yang memungkinkan pengguna untuk menambah teman baru dengan mengisi nama dan URL gambar teman. Setelah pengguna mengisi form dan menekan tombol "Tambah", informasi teman baru dikirimkan ke komponen induk melalui fungsi `onAddFriend`. Form ini juga mengelola state lokal untuk input pengguna (nama dan gambar) dan meresetnya setelah teman baru berhasil ditambahkan.

Dengan menggunakan **state** dan **event handler** di React, komponen ini dapat menangani input pengguna secara dinamis dan memastikan bahwa data yang dimasukkan sesuai sebelum menambahkannya ke dalam daftar teman. Komponen ini juga memberikan pengalaman pengguna yang baik dengan mereset form setelah data berhasil diproses.

# README: Penjelasan Komponen `FormSplitBill`

## Pengertian

Komponen `FormSplitBill` digunakan untuk membagi tagihan antara pengguna dan teman yang dipilih. Form ini memungkinkan pengguna untuk memasukkan nilai tagihan, berapa banyak yang sudah dibayar oleh pengguna, dan secara otomatis menghitung sisa tagihan yang harus dibayar oleh teman. Pengguna juga dapat memilih siapa yang membayar tagihan.

Komponen ini mengelola state untuk:

1. Nilai total tagihan.
2. Jumlah yang sudah dibayar oleh pengguna.
3. Sisa yang harus dibayar oleh teman.
4. Siapa yang membayar tagihan (apakah pengguna atau teman).

Setelah pengguna mengisi form dan menekan tombol "Bayar Tagihan", informasi yang relevan akan dikirimkan ke komponen induk melalui fungsi `onSplitBill`.

## Cara Berpikir React

Komponen `FormSplitBill` bertanggung jawab untuk menghitung dan menampilkan informasi pembagian tagihan berdasarkan input yang diberikan oleh pengguna. React mengelola **state** untuk nilai tagihan, pengeluaran pengguna, dan siapa yang membayar. Komponen ini menggunakan **conditional rendering** untuk menghitung dan menampilkan nilai yang relevan secara dinamis, misalnya sisa tagihan yang harus dibayar oleh teman.

## Analogi Sederhana

Bayangkan kamu dan temanmu pergi makan bersama dan harus membagi tagihan. Kamu membayar sebagian tagihan dan ingin tahu berapa banyak yang harus dibayar oleh temanmu. Komponen `FormSplitBill` bertindak seperti kalkulator untuk membantu kamu menghitung berapa banyak temanmu harus membayar, dan kamu bisa memilih siapa yang akan "membayar" tagihan tersebut (apakah kamu atau temanmu).

## Penjelasan Code Tiap Baris

```javascript
import { useState } from "react";
import Button from "./Button";
```

- **`useState`**: Mengimpor hook React `useState` untuk mengelola state di dalam komponen ini, seperti nilai tagihan, pembayaran yang sudah dilakukan, dan siapa yang membayar.
- **`Button`**: Mengimpor komponen `Button` yang digunakan untuk tombol "Bayar Tagihan".

```javascript
function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");
```

- **`function FormSplitBill({ selectedFriend, onSplitBill })`**: Komponen ini menerima dua props:

  - **`selectedFriend`**: Teman yang sedang dipilih, yang akan terlibat dalam pembagian tagihan.
  - **`onSplitBill`**: Fungsi yang dipanggil setelah form disubmit untuk mengupdate data pembagian tagihan di komponen induk.

- **`const [bill, setBill] = useState("")`**: State untuk menyimpan nilai total tagihan yang dimasukkan oleh pengguna.
- **`const [paidByUser, setPaidByUser] = useState("")`**: State untuk menyimpan jumlah uang yang sudah dibayar oleh pengguna.
- **`const paidByFriend = bill ? bill - paidByUser : ""`**: Menghitung berapa banyak teman yang harus bayar. Jika `bill` sudah diisi, maka teman akan membayar sisa dari tagihan (`bill - paidByUser`).
- **`const [whoIsPaying, setWhoIsPaying] = useState("user")`**: State untuk menentukan siapa yang membayar tagihan. Nilai awalnya adalah "user" (artinya pengguna yang membayar).

```javascript
function handleSubmit(e) {
  e.preventDefault();

  if (!bill || !paidByUser) return;

  onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
}
```

- **`function handleSubmit(e)`**: Fungsi yang dipanggil saat form disubmit. Fungsi ini mencegah reload halaman (`e.preventDefault()`), kemudian memeriksa apakah nilai tagihan dan jumlah yang sudah dibayar oleh pengguna sudah diisi.
- **`if (!bill || !paidByUser) return;`**: Jika salah satu dari `bill` atau `paidByUser` kosong, maka fungsi akan berhenti dan tidak melanjutkan ke proses pembagian tagihan.
- **`onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);`**: Fungsi `onSplitBill` dipanggil dengan parameter:
  - Jika pengguna yang membayar tagihan, maka nilai yang dikirimkan adalah jumlah yang harus dibayar oleh teman (`paidByFriend`).
  - Jika teman yang membayar, maka nilai yang dikirimkan adalah jumlah yang sudah dibayar oleh pengguna (`-paidByUser`), yang berarti teman yang berutang kepada pengguna.

```javascript
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Bagikan Tagihan dengan {selectedFriend.name} </h2>
```

- **`<form className="form-split-bill" onSubmit={handleSubmit}>`**: Form dengan kelas `form-split-bill` dan event handler `onSubmit` yang memanggil fungsi `handleSubmit`.

- **`<h2>Bagikan Tagihan dengan {selectedFriend.name}</h2>`**: Menampilkan header yang menyebutkan nama teman yang dipilih, menunjukkan bahwa form ini digunakan untuk membagi tagihan dengan teman tersebut.

```javascript
      <label>💰 Nilai Tagihan</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
```

- **`<label>💰 Nilai Tagihan</label>`**: Label untuk input nilai tagihan.
- **`<input type="text" value={bill} onChange={(e) => setBill(Number(e.target.value))} />`**: Input untuk memasukkan nilai tagihan. Ketika nilai input berubah, `setBill` akan memperbarui state `bill`.

```javascript
      <label>👦 Pengeluaran Anda</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill
              ? paidByFriend
              : Number(e.target.value)
          )
        }
      />
```

- **`<label>👦 Pengeluaran Anda</label>`**: Label untuk input yang menunjukkan pengeluaran yang sudah dibayar oleh pengguna.
- **`<input type="text" value={paidByUser} onChange={(e) => setPaidByUser(...)}`**: Input untuk memasukkan jumlah yang sudah dibayar oleh pengguna. Jika nilai input lebih besar dari nilai tagihan, maka input akan dikembalikan ke nilai yang dihitung untuk sisa pembayaran teman (`paidByFriend`).

```javascript
      <label>👫 Pengeluaran {selectedFriend.name}</label>
      <input type="text" disabled value={paidByFriend} />
```

- **`<label>👫 Pengeluaran {selectedFriend.name}</label>`**: Label untuk menampilkan pengeluaran teman, yang dihitung secara otomatis.
- **`<input type="text" disabled value={paidByFriend} />`**: Input untuk menampilkan nilai pengeluaran teman yang dihitung berdasarkan tagihan dan pembayaran pengguna. Input ini bersifat **disabled**, sehingga pengguna tidak bisa mengeditnya.

```javascript
      <label>🤑 Siapa yang membayar tagihan</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">Anda</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
```

- **`<label>🤑 Siapa yang membayar tagihan</label>`**: Label untuk memilih siapa yang membayar tagihan.
- **`<select value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>`**: Dropdown yang memungkinkan pengguna memilih apakah mereka yang membayar atau teman yang membayar.

```javascript
      <Button>Bayar Tagihan</Button>
    </form>
  );
}
```

- **`<Button>Bayar Tagihan</Button>`**: Tombol untuk mengirimkan form. Ketika tombol ini diklik, fungsi `handleSubmit` dipanggil untuk memproses pembagian tagihan.

```javascript
export default FormSplitBill;
```

- **`export default FormSplitBill`**: Mengekspor komponen `FormSplitBill` agar bisa digunakan di file lain, seperti di komponen `App`.

## Kesimpulan

Komponen `FormSplitBill` memungkinkan pengguna untuk membagi tagihan dengan teman, menghitung berapa banyak teman yang harus bayar berdasarkan pengeluaran pengguna, dan memilih siapa yang membayar tagihan. Komponen ini menggunakan **state** untuk mengelola input pengguna dan menghitung jumlah yang harus dibayar oleh teman secara dinamis. Setelah form disubmit, data pembagian tagihan dikirim ke komponen induk menggunakan fungsi `onSplitBill`.
