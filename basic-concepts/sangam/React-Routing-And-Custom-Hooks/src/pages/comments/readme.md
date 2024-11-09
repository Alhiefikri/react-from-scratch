Terima kasih telah membagikan kode untuk **`CommentsList`**! Berikut adalah penjelasan yang jelas dan mudah dipahami mengenai kode ini, termasuk cara berpikir di balik penggunaannya, serta penjelasan tentang **custom hook** dan konsep lainnya yang terlibat.

---

### **Penjelasan Kode: `CommentsList`**

#### Kode:

```javascript
import useFetch from "../../hooks/use-fetch";
```

- **Mengimpor Custom Hook `useFetch`**  
  Di sini, kita mengimpor custom hook yang bernama `useFetch` dari file `../../hooks/use-fetch`. Custom hook ini kemungkinan besar bertanggung jawab untuk melakukan **fetching data** dari API dan mengelola status loading, data, dan error.

#### Kode:

```javascript
function CommentsList() {
  const { data, loading, error } = useFetch("https://dummyjson.com/comments");
```

- **Menggunakan `useFetch`**  
  Di dalam komponen `CommentsList`, kita menggunakan custom hook `useFetch` untuk mengambil data komentar dari API yang terletak di URL `"https://dummyjson.com/comments"`. Custom hook ini kemungkinan besar mengembalikan objek yang berisi:
  - **`data`**: Menyimpan data yang diterima dari API (dalam hal ini, komentar).
  - **`loading`**: Menyimpan status apakah data sedang dimuat.
  - **`error`**: Menyimpan status jika terjadi kesalahan saat melakukan fetching data.

#### Kode:

```javascript
if (loading) return <h1>Loading comments! Please wait</h1>;
```

- **Menampilkan Loading**  
  Jika `loading` bernilai `true`, maka komponen ini akan menampilkan teks "Loading comments! Please wait", yang memberi tahu pengguna bahwa data komentar sedang diambil dari API.

#### Kode:

```javascript
  return (
    <div>
      <h1>Comments List Page</h1>
      <ul>
        {data?.comments.length > 0
          ? data?.comments.map((commentItem) => (
              <div key={commentItem.id}>
                <label>{commentItem?.body}</label>
                <p>{commentItem?.likes}</p>
              </div>
            ))
          : null}
      </ul>
    </div>
  );
}
```

- **Menampilkan Daftar Komentar**  
  Setelah data selesai dimuat (ketika `loading` bernilai `false`), komponen ini akan merender tampilan daftar komentar:
  - Menampilkan judul "Comments List Page".
  - Jika ada komentar (data?.comments.length > 0), maka daftar komentar akan ditampilkan menggunakan `map`. Setiap komentar akan menampilkan:
    - **`body`**: Isi komentar.
    - **`likes`**: Jumlah suka (likes) dari komentar tersebut.
  - **Optional Chaining (`?.`)** digunakan untuk memastikan data yang diakses ada (tidak `null` atau `undefined`), menghindari error jika data tersebut belum tersedia.

#### Kode:

```javascript
export default CommentsList;
```

- **Ekspor Komponen**  
  Komponen ini diekspor agar bisa digunakan di bagian lain dari aplikasi.

---

### **Konsep yang Terlibat:**

#### 1. **Custom Hook: `useFetch`**

- **Apa itu Custom Hook?**  
  Custom hook adalah hook yang dibuat oleh kita sendiri untuk menangani logika yang dapat digunakan kembali di berbagai tempat dalam aplikasi. Misalnya, di sini kita membuat custom hook `useFetch` untuk menangani proses pengambilan data (fetching), menangani loading state, serta error handling.

- **Analogi:**
  Pikirkan custom hook seperti sebuah **alat bantu** di dapur. Jika kita sering membutuhkan pisau untuk memotong berbagai bahan, kita bisa membuat pisau yang bisa digunakan di berbagai resep. Demikian juga dengan custom hook—kita menulis kode sekali dan menggunakannya di berbagai komponen lain.

- **Fungsi `useFetch`:**
  Hook ini kemungkinan besar menggunakan `useState` dan `useEffect` di dalamnya untuk mengelola status data, loading, dan error, serta untuk memanggil API.

#### 2. **Rendering Data Secara Dinamis dengan `.map()`**

- **Menampilkan Daftar Komentar**  
  Di dalam JSX, kita menggunakan `.map()` untuk mengiterasi data komentar yang diterima dari API dan merender setiap komentar ke dalam elemen HTML. Dalam hal ini, kita merender setiap komentar dengan elemen `<div>`, dan di dalamnya ada elemen `<label>` untuk teks komentar dan `<p>` untuk menampilkan jumlah likes.

- **Optional Chaining (`?.`)**  
  Optional chaining adalah fitur JavaScript yang memungkinkan kita mengakses properti objek tanpa menyebabkan error jika objek tersebut tidak ada (misalnya `null` atau `undefined`). Dalam kode ini, kita menggunakan `data?.comments` untuk memastikan `data` dan `comments` ada sebelum mengaksesnya, menghindari potensi error.

#### 3. **Handling Loading State**

- **Status `loading`**  
  Menampilkan status loading adalah cara yang baik untuk memberi tahu pengguna bahwa aplikasi sedang mengambil data atau sedang melakukan pemrosesan. Di sini, kita menampilkan pesan "Loading comments! Please wait" ketika data komentar sedang di-fetch.

#### 4. **Conditionally Render Data**

- **Conditional Rendering (Render Berdasarkan Kondisi)**  
  Bagian ini:
  ```javascript
  {
    data?.comments.length > 0
      ? data?.comments.map((commentItem) => (
          <div key={commentItem.id}>
            <label>{commentItem?.body}</label>
            <p>{commentItem?.likes}</p>
          </div>
        ))
      : null;
  }
  ```
  Ini adalah **conditional rendering**. Jika `data?.comments.length` lebih dari 0 (artinya ada komentar), maka kita merender daftar komentar. Jika tidak ada komentar, kita tidak merender apa pun (`null`).

---

### **Kesimpulan:**

- **Custom Hook (`useFetch`)** memungkinkan kita untuk memisahkan logika fetching data dan penggunaan status (loading, error, data) yang bisa digunakan kembali di berbagai komponen.
- **Conditional Rendering** digunakan untuk merender konten hanya jika kondisi tertentu terpenuhi (misalnya jika ada komentar).
- **`.map()`** digunakan untuk mengiterasi data array dan merender elemen secara dinamis di JSX.
- **Optional Chaining (`?.`)** memastikan kita tidak mendapatkan error saat mengakses properti dari objek yang mungkin `null` atau `undefined`.

---

Dengan penjelasan ini, saya harap konsep **custom hook**, **fetching data**, dan **conditional rendering** bisa lebih mudah dimengerti. Jika ada yang masih belum jelas atau kamu ingin bertanya lebih lanjut, silakan!
