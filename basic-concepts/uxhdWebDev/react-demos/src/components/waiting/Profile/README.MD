# Penjelasan Komponen React: Profile Component

## Pengertian

Komponen ini adalah contoh aplikasi React sederhana yang menampilkan dan mengelola data profil pengguna, seperti nama dan usia. Pengguna dapat memasukkan data di input form, dan nilai-nilai tersebut akan ditampilkan di bawah form secara real-time.

Komponen ini menggunakan hook `useState` untuk menyimpan dan mengubah data profil pengguna.

## Cara Berpikir React

Di React, kita bekerja dengan konsep **komponen** yang bisa memiliki **state** dan **props**. Komponen adalah bagian-bagian kecil dari aplikasi yang bisa diubah-ubah secara dinamis.

- **State**: Data yang bisa berubah dari waktu ke waktu dalam komponen.
- **Props**: Data yang diberikan dari komponen lain ke komponen yang sedang bekerja.

Komponen di React bersifat **deklaratif**. Artinya, kita hanya perlu mendeklarasikan bagaimana UI harus terlihat berdasarkan data yang ada, dan React akan secara otomatis merender ulang UI setiap kali data berubah.

## Analogi Sederhana

Bayangkan kita memiliki sebuah form pengisian data, misalnya formulir profil. Ketika kita mengisi kolom nama dan usia, kita ingin perubahan tersebut langsung terlihat tanpa perlu merefresh halaman.

Kita bisa menganggap `useState` seperti sebuah lemari penyimpanan di mana kita menyimpan data (seperti nama dan usia). Setiap kali ada perubahan, kita mengganti isi lemari tersebut dan React akan langsung menampilkan perubahan tersebut di layar.

## Penjelasan Code Tiap Baris

```jsx
import { useState } from "react";
```

- Di sini kita mengimpor **`useState`** dari React. `useState` adalah hook yang digunakan untuk membuat state di dalam komponen fungsi. State digunakan untuk menyimpan data yang bisa berubah seiring waktu.

```jsx
const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
  });
```

- `Profile` adalah komponen fungsi. Di dalamnya, kita mendeklarasikan state dengan `useState`. State yang kita buat disebut `profile`, yang merupakan objek dengan dua properti: `name` (nama) dan `age` (usia), yang keduanya dimulai dengan string kosong.
- `setProfile` adalah fungsi yang digunakan untuk memperbarui state `profile`.

```jsx
const handleChange = (e) => {
  const { name, value } = e.target;

  setProfile((prevProfile) => ({
    ...prevProfile,
    [name]: value,
  }));
};
```

- **`handleChange`** adalah fungsi yang akan dijalankan setiap kali ada perubahan di input form (seperti saat pengguna mengetik di kolom nama atau usia).
- **`e.target`** adalah elemen yang memicu event (dalam hal ini, input field).
- **`name`** dan **`value`** adalah atribut dari elemen input yang berubah. Misalnya, jika pengguna mengetik di kolom "name", `name` akan menjadi `"name"`, dan `value` akan menjadi teks yang diketikkan.
- `setProfile` digunakan untuk memperbarui state. Kita menggunakan spread operator `...prevProfile` untuk memastikan kita mempertahankan nilai-nilai sebelumnya dari profil, dan hanya mengubah nilai yang relevan (misalnya, `name` atau `age`).
- `[name]: value` adalah cara untuk dinamis mengupdate properti objek, di mana nama properti (seperti `name` atau `age`) diambil dari atribut `name` di elemen input.

```jsx
return (
  <div>
    <h2>Profile</h2>
    <div>
      <label>
        Name:{" "}
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
        />
      </label>
    </div>

    <div>
      <label>
        Age:
        <input
          type="number"
          name="age"
          value={profile.age}
          onChange={handleChange}
        />
      </label>
    </div>

    <h3>Profile Information</h3>
    <p>Name : {profile.name}</p>
    <p>Age : {profile.age}</p>
  </div>
);
```

- Di sini kita mengembalikan JSX (markup React) yang mendeskripsikan UI yang akan ditampilkan di browser.
- Ada dua input form: satu untuk nama dan satu untuk usia. Untuk setiap input, kita menggunakan `value` untuk mengikat state ke input. Artinya, nilai input akan selalu disinkronkan dengan state `profile.name` atau `profile.age`.
- `onChange={handleChange}` memastikan bahwa setiap kali pengguna mengetik di input, fungsi `handleChange` dipanggil untuk memperbarui state.
- Setelah form, kita menampilkan nama dan usia yang telah dimasukkan pengguna dalam elemen `<p>`. Nilai-nilai ini akan diperbarui secara otomatis saat state berubah.

```jsx
export default Profile;
```

- Terakhir, kita mengekspor komponen `Profile` sehingga bisa digunakan di file lain dalam aplikasi.

## Kesimpulan

- **`useState`**: Hook yang digunakan untuk membuat dan mengelola state dalam komponen.
- **State**: Digunakan untuk menyimpan data yang dapat berubah (misalnya, nama dan usia).
- **`onChange`**: Event handler yang dijalankan saat input berubah, yang digunakan untuk memperbarui state.
- **Deklaratif**: React akan secara otomatis merender ulang UI setiap kali state berubah, sehingga kita tidak perlu menangani pembaruan UI secara manual.

Dengan memahami cara kerja state dan event handling di React, kamu bisa mulai membangun aplikasi interaktif yang dinamis.
