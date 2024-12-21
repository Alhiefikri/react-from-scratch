# **Materi: Asynchronous JavaScript - Promises**

## **Pendahuluan**

Di JavaScript, **asynchronous programming** memungkinkan kita untuk melakukan beberapa operasi secara bersamaan tanpa harus menunggu satu operasi selesai sebelum menjalankan operasi berikutnya. Salah satu cara untuk menangani operasi asinkron di JavaScript adalah dengan menggunakan **Promises**.

Promise adalah sebuah objek yang mewakili nilai yang mungkin tersedia sekarang, atau di masa depan, atau bahkan tidak pernah ada (jika terjadi kesalahan atau penolakan).

## **Tujuan**

Tujuan dari materi ini adalah untuk memahami cara kerja **Promise**, bagaimana cara menangani hasil yang berhasil (`resolve`) atau gagal (`reject`), dan bagaimana kita dapat menggunakan Promise dalam operasi asinkron di JavaScript.

---

## **Penjelasan Kode**

Berikut adalah contoh penggunaan **Promise** di JavaScript:

```javascript
// 1. Contoh penggunaan Promise untuk menangani operasi asinkron
const fetchData = new Promise((resolve, reject) => {
  const success = true; // Misalnya ini adalah kondisi operasi asinkron (seperti fetching data)

  if (success) {
    resolve("Data berhasil diambil!"); // Resolusi jika berhasil
  } else {
    reject("Terjadi kesalahan saat mengambil data."); // Penolakan jika gagal
  }
});

fetchData
  .then((data) => {
    console.log(data); // Output: Data berhasil diambil!
  })
  .catch((error) => {
    console.log(error); // Output jika terjadi kesalahan: Terjadi kesalahan saat mengambil data.
  });
```

### Penjelasan:

- **`new Promise()`**: Membuat instance Promise yang menerima dua parameter:
  1. **`resolve()`**: Dipanggil jika operasi berhasil. Mengirimkan data atau hasil yang diinginkan.
  2. **`reject()`**: Dipanggil jika operasi gagal. Mengirimkan error atau pesan kegagalan.
- **`then()`**: Digunakan untuk menangani hasil yang berhasil setelah Promise diresolve.
- **`catch()`**: Digunakan untuk menangani error atau kegagalan setelah Promise ditolak.

### Tujuan Kode:

Kode ini menunjukkan cara membuat Promise untuk operasi asinkron dan bagaimana cara menangani hasil sukses (`resolve`) atau gagal (`reject`) menggunakan `then()` dan `catch()`.

---

### Contoh Lain: Mengambil Data Asinkron (Seperti Fetch API)

```javascript
// 2. Menggunakan Promise dengan Fetch API untuk mengambil data
function getTodos() {
  return fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json()) // Parsing response ke JSON
    .then((data) => {
      console.log(data); // Menampilkan data yang berhasil diambil
    })
    .catch((error) => {
      console.log("Terjadi kesalahan:", error); // Menangani error jika terjadi
    });
}

getTodos(); // Memanggil fungsi untuk mengambil data
```

### Penjelasan:

- **`fetch()`**: Fungsi yang digunakan untuk mengambil data dari API secara asinkron. `fetch()` mengembalikan sebuah **Promise**.
- **`then()`**: Fungsi ini digunakan untuk menangani data yang berhasil diambil dari API.
- **`catch()`**: Digunakan untuk menangani error jika terjadi masalah saat mengambil data.

### Tujuan Kode:

Kode ini menunjukkan penggunaan Promise dengan API `fetch()`, yang memungkinkan kita mengambil data asinkron dari sebuah URL dan memprosesnya.

---

## **Analogi Sederhana**

Bayangkan Anda sedang memesan makanan di restoran. Anda memberi tahu pelayan pesanan Anda, dan pelayan memberi tahu Anda bahwa makanan akan datang dalam beberapa waktu (promise).

- Jika makanan datang dengan baik, pelayan akan memberitahu Anda bahwa pesanan telah selesai (resolve).
- Jika ada masalah (misalnya bahan makanan habis), pelayan akan memberitahu Anda bahwa ada masalah (reject).

**Contoh**:

- Memesan makanan (Promise):

  ```javascript
  const foodOrder = new Promise((resolve, reject) => {
    const isAvailable = true; // Misalnya bahan makanan tersedia

    if (isAvailable) {
      resolve("Makanan sudah siap!"); // Berhasil
    } else {
      reject("Maaf, makanan tidak tersedia."); // Gagal
    }
  });

  foodOrder
    .then((message) => console.log(message)) // Output: Makanan sudah siap!
    .catch((error) => console.log(error)); // Output jika gagal: Maaf, makanan tidak tersedia.
  ```

Dengan menggunakan Promise, kita bisa memastikan bahwa kita akan mendapatkan notifikasi saat pesanan kita berhasil atau gagal, tanpa harus menunggu terus-menerus.

---

## **Kesimpulan**

- **Promises** memungkinkan kita menangani operasi asinkron dengan cara yang lebih terstruktur, menggunakan `resolve` untuk hasil sukses dan `reject` untuk hasil gagal.
- Kita dapat menangani hasil `resolve` dengan **`then()`** dan hasil `reject` dengan **`catch()`**.
- Promises sangat berguna dalam pengambilan data, komunikasi dengan server, atau operasi lain yang membutuhkan waktu, seperti membaca file atau berinteraksi dengan API.
