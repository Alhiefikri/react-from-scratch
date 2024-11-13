# **Materi: Asynchronous JavaScript - Async/Await**

## **Pendahuluan**

Di JavaScript, menangani operasi asinkron seperti mengambil data dari API atau membaca file bisa menjadi cukup rumit dengan menggunakan **Promises**. Untungnya, JavaScript menyediakan cara yang lebih bersih dan lebih mudah dibaca untuk menangani operasi asinkron, yaitu dengan menggunakan **`async`** dan **`await`**.

**`async`** dan **`await`** adalah fitur yang diperkenalkan di ES2017 (ES8) yang menyederhanakan penggunaan **Promises**. Dengan **`async/await`**, kita bisa menulis kode asinkron seperti kode sinkron, membuatnya lebih mudah dipahami dan dikelola.

## **Tujuan**

Tujuan dari materi ini adalah untuk memahami cara menggunakan **`async`** dan **`await`** untuk menangani operasi asinkron dengan cara yang lebih sederhana dan mudah dibaca.

---

## **Penjelasan Kode**

### **1. Apa Itu `async` dan `await`?**

- **`async`**: Kata kunci yang digunakan untuk mendeklarasikan sebuah fungsi sebagai fungsi **asinkron**. Fungsi yang dideklarasikan dengan `async` secara otomatis mengembalikan **Promise**.
- **`await`**: Kata kunci yang digunakan di dalam fungsi **async** untuk menunggu hasil dari Promise. `await` hanya dapat digunakan di dalam fungsi yang dideklarasikan dengan `async`.

Berikut adalah contoh penggunaan **`async`** dan **`await`**:

```javascript
// 1. Fungsi Asinkron dengan Async/Await
async function getTodos() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    console.log(data); // Output: data yang berhasil diambil dari API
  } catch (error) {
    console.log("Terjadi kesalahan:", error); // Output jika terjadi error
  }
}

getTodos(); // Memanggil fungsi asinkron
```

### Penjelasan:

- **`async function getTodos()`**: Fungsi `getTodos` dideklarasikan sebagai fungsi asinkron dengan kata kunci `async`.
- **`await fetch()`**: Di dalam fungsi asinkron, kita menunggu hasil dari operasi asinkron (`fetch()` dalam hal ini) dengan menggunakan `await`. Ini membuat eksekusi fungsi berhenti sejenak sampai data selesai diambil dari server.
- **`await response.json()`**: Setelah respons diterima, kita menunggu lagi untuk mengubah respons tersebut menjadi format JSON.
- **`try/catch`**: Kita menggunakan blok `try/catch` untuk menangani kemungkinan error yang mungkin terjadi selama proses asinkron.

### Tujuan Kode:

Kode ini menunjukkan bagaimana **`async/await`** digunakan untuk menangani operasi asinkron dengan cara yang lebih sederhana dan mudah dibaca. Kita menunggu data dari API dan menanganinya dengan cara yang mirip dengan kode sinkron biasa.

---

### **2. Menunggu Beberapa Operasi Asinkron (Parallel Execution)**

Jika Anda ingin menunggu beberapa operasi asinkron yang berbeda secara bersamaan, Anda bisa menggunakan `Promise.all()` bersama dengan **`async/await`**.

```javascript
// 2. Menunggu Beberapa Operasi Asinkron
async function fetchMultipleData() {
  try {
    const [todos, users] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
        res.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
        res.json()
      ),
    ]);

    console.log("Todos:", todos); // Output: data todos
    console.log("Users:", users); // Output: data users
  } catch (error) {
    console.log("Terjadi kesalahan:", error);
  }
}

fetchMultipleData(); // Memanggil fungsi untuk mengambil data secara bersamaan
```

### Penjelasan:

- **`Promise.all()`**: Fungsi ini memungkinkan kita untuk mengeksekusi beberapa Promise secara bersamaan dan menunggu semuanya selesai sebelum melanjutkan.
- **`await Promise.all([...])`**: Kita menunggu hasil dari beberapa operasi asinkron (seperti mengambil data todos dan users) secara bersamaan.
- **Dekonstruksi array**: Dengan menggunakan destrukturisasi array (`[todos, users]`), kita bisa mengakses data dari masing-masing Promise yang diselesaikan.

### Tujuan Kode:

Kode ini menunjukkan cara menunggu beberapa operasi asinkron secara paralel menggunakan **`Promise.all()`** dengan **`async/await`** untuk mengurangi waktu tunggu.

---

## **Analogi Sederhana**

Bayangkan Anda sedang menunggu dua teman untuk datang ke acara Anda. Anda bisa meminta mereka berdua untuk datang pada waktu yang sama (paralel), dan Anda hanya akan melanjutkan acara ketika kedua teman Anda sudah sampai.

**Contoh**:

- Menunggu dua teman yang datang:

  ```javascript
  async function waitingForFriends() {
    try {
      const [friend1, friend2] = await Promise.all([
        waitingForFriend("Alice"),
        waitingForFriend("Bob"),
      ]);
      console.log(`${friend1} dan ${friend2} sudah datang!`);
    } catch (error) {
      console.log("Ada masalah:", error);
    }
  }

  async function waitingForFriend(name) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`${name} datang`);
      }, Math.random() * 3000); // Waktu tunggu acak
    });
  }

  waitingForFriends(); // Menunggu teman-teman datang
  ```

Dalam contoh di atas, kita menunggu kedua teman datang tanpa menunggu satu per satu. Begitu kedua teman datang, kita melanjutkan ke langkah berikutnya.

---

## **Kesimpulan**

- **`async`** mendeklarasikan fungsi sebagai asinkron dan secara otomatis mengembalikan sebuah **Promise**.
- **`await`** digunakan untuk menunggu hasil dari sebuah **Promise** dalam fungsi asinkron.
- **`async/await`** membuat kode asinkron lebih mudah dibaca dan dikelola, karena kode yang menunggu hasil asinkron dapat ditulis seperti kode sinkron biasa.
- **`Promise.all()`** memungkinkan kita untuk menunggu beberapa operasi asinkron secara bersamaan, yang dapat mengoptimalkan waktu eksekusi.
