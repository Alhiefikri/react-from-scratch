# **Materi: Working With Immutable Arrays**

## **Pendahuluan**

Prinsip **immutability** dalam pemrograman berarti bahwa data tidak dapat diubah setelah dibuat. Dalam konteks array, "immutable" berarti bahwa kita tidak akan langsung mengubah array asli, melainkan kita akan membuat array baru berdasarkan data yang sudah ada.

Di JavaScript, array dan objek secara default bersifat **mutable**, yang berarti kita dapat memodifikasi array dan objek tersebut setelah mereka dibuat. Namun, sering kali kita ingin menjaga data tetap tidak berubah (immutable), terutama ketika bekerja dengan aplikasi yang memiliki state atau data yang tidak boleh diubah langsung.

## **Tujuan**

Tujuan dari materi ini adalah untuk memahami cara bekerja dengan array yang immutable, yaitu dengan membuat salinan array sebelum memodifikasinya, sehingga array asli tetap tidak berubah.

---

## **Penjelasan Kode**

Berikut adalah contoh penerapan prinsip **immutability** dalam pengelolaan array dengan menggunakan metode-metode JavaScript:

```javascript
// 1. Menambahkan buku baru ke dalam array (Immutable)
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};

const booksAfterAdding = [...books, newBook]; // Membuat salinan array dan menambah buku baru
console.log(booksAfterAdding); // Output: array baru dengan buku tambahan
console.log(books); // Output: array asli tidak berubah
```

### Penjelasan:

- **`...books`**: Operator spread (`...`) digunakan untuk membuat salinan dari array `books` yang sudah ada. Array baru yang dihasilkan akan memiliki semua elemen dari array `books` yang lama.
- **Menambahkan buku baru**: Buku baru ditambahkan ke array baru dengan cara menambahkannya di akhir array.
- **Tidak merubah array asli**: Karena kita membuat salinan array sebelum menambah elemen baru, array asli tidak akan terpengaruh oleh perubahan ini.

### Tujuan Kode:

Kode ini menunjukkan bagaimana cara menambah elemen ke dalam array tanpa mengubah array asli, yang merupakan konsep dasar dari immutability.

---

### Contoh Lain: Menghapus Buku dari Array

```javascript
// 2. Menghapus buku dari array (Immutable)
const booksAfterDelete = booksAfterAdding.filter((book) => book.id !== 3);
console.log(booksAfterDelete); // Output: array baru tanpa buku dengan id 3
console.log(booksAfterAdding); // Output: array baru setelah penambahan buku baru
```

### Penjelasan:

- **`filter()`**: Kita menggunakan metode `filter()` untuk menyaring elemen-elemen dari array `booksAfterAdding` dan menghapus buku yang memiliki `id === 3`.
- **Membuat array baru**: Metode `filter()` akan mengembalikan array baru yang hanya berisi buku yang tidak memiliki `id` 3, sementara array `booksAfterAdding` tetap tidak berubah.

### Tujuan Kode:

Kode ini menunjukkan bagaimana cara menghapus elemen dari array tanpa memodifikasi array asli.

---

### Contoh Lain: Memperbarui Buku dalam Array

```javascript
// 3. Memperbarui buku dalam array (Immutable)
const booksAfterUpdate = booksAfterDelete.map(
  (book) => (book.id === 1 ? { ...book, pages: 1 } : book) // Memperbarui buku dengan id 1 tanpa mengubah array asli
);
console.log(booksAfterUpdate); // Output: array baru dengan buku yang telah diperbarui
console.log(booksAfterDelete); // Output: array asli tanpa perubahan
```

### Penjelasan:

- **`map()`**: Metode `map()` digunakan untuk membuat salinan baru dari array `booksAfterDelete`. Jika elemen buku memiliki `id === 1`, maka kita membuat salinan baru dari buku tersebut dengan mengubah properti `pages` menjadi 1.
- **Tidak merubah array asli**: Array asli (`booksAfterDelete`) tetap tidak berubah, dan array baru (`booksAfterUpdate`) berisi buku dengan pembaruan.

### Tujuan Kode:

Kode ini menunjukkan bagaimana cara memperbarui elemen di dalam array dengan prinsip immutability, yaitu dengan membuat salinan dari elemen yang ingin diperbarui.

---

## **Analogi Sederhana**

Bayangkan Anda memiliki sebuah buku catatan yang berisi daftar tugas harian Anda. Alih-alih langsung mengubah catatan di dalam buku itu, Anda membuat salinan halaman tertentu dan hanya mengubah salinan tersebut. Ini memastikan bahwa halaman asli tetap tidak berubah.

**Contoh**:

- Anda memiliki halaman tugas:

  ```javascript
  const tasks = ["Tugas 1", "Tugas 2", "Tugas 3"];
  ```

- Anda menambahkan tugas baru tanpa merubah halaman asli:
  ```javascript
  const updatedTasks = [...tasks, "Tugas 4"];
  console.log(updatedTasks); // Output: ["Tugas 1", "Tugas 2", "Tugas 3", "Tugas 4"]
  console.log(tasks); // Output: ["Tugas 1", "Tugas 2", "Tugas 3"] (array asli tidak berubah)
  ```

Dengan cara ini, Anda tetap bisa melanjutkan pekerjaan di buku asli tanpa mengubah apapun di dalamnya.

---

## **Kesimpulan**

- **Immutability** adalah prinsip yang mengharuskan kita untuk tidak mengubah data asli secara langsung.
- Untuk bekerja dengan array secara immutable, kita sering menggunakan metode seperti `map()`, `filter()`, dan `spread operator` (`...`) untuk membuat salinan array atau elemen dalam array, sehingga array asli tetap tidak berubah.
- Immutability sangat berguna dalam pengelolaan state pada aplikasi web modern, seperti yang digunakan dalam framework seperti React.
