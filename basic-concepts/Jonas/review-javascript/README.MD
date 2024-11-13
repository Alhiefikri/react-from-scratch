## **Rangkuman Materi JavaScript Sebelum Belajar React**

### 1. **Destructuring Objects and Arrays**

Destructuring adalah cara untuk mengekstrak nilai dari objek atau array dan menugaskannya ke variabel dengan cara yang lebih ringkas.

- **Object Destructuring**: Memudahkan kita untuk mengambil nilai dari objek.
  ```javascript
  const person = { name: "John", age: 30 };
  const { name, age } = person; // name = 'John', age = 30
  ```
- **Array Destructuring**: Digunakan untuk mengambil elemen dari array.
  ```javascript
  const numbers = [1, 2, 3];
  const [first, second] = numbers; // first = 1, second = 2
  ```

### 2. **Rest/Spread Operator**

- **Rest Operator (`...`)**: Digunakan untuk mengumpulkan sisa nilai ke dalam array atau objek.

  ```javascript
  const [first, ...rest] = [1, 2, 3, 4]; // first = 1, rest = [2, 3, 4]
  ```

- **Spread Operator (`...`)**: Digunakan untuk menyalin elemen dari array atau objek.
  ```javascript
  const arr1 = [1, 2, 3];
  const arr2 = [...arr1, 4, 5]; // arr2 = [1, 2, 3, 4, 5]
  ```

### 3. **Template Literals**

Template literals memungkinkan kita untuk membuat string yang lebih dinamis dan mudah dibaca, menggunakan `${}` untuk menyisipkan ekspresi.

```javascript
const name = "Alice";
const greeting = `Hello, ${name}!`; // "Hello, Alice!"
```

### 4. **Ternaries Instead of if/else Statements**

Ternary operator adalah cara singkat untuk menulis kondisional. Formatnya: `condition ? expr1 : expr2`.

```javascript
const age = 18;
const result = age >= 18 ? "Adult" : "Minor"; // 'Adult'
```

### 5. **Arrow Functions**

Arrow functions menyediakan cara lebih singkat untuk menulis fungsi, dan tidak memiliki `this` yang terkait dengan objek.

```javascript
const add = (a, b) => a + b; // fungsi penjumlahan
```

### 6. **Short-Circuiting and Logical Operators: `&&`, `||`, `??`**

- **`&&` (AND)**: Mengembalikan nilai pertama yang falsy atau nilai kedua jika keduanya truthy.

  ```javascript
  true && "Hello"; // 'Hello'
  false && "Hello"; // false
  ```

- **`||` (OR)**: Mengembalikan nilai pertama yang truthy atau nilai kedua jika keduanya falsy.

  ```javascript
  true || "Hello"; // true
  false || "Hello"; // 'Hello'
  ```

- **`??` (Nullish Coalescing)**: Mengembalikan nilai pertama yang bukan `null` atau `undefined`.
  ```javascript
  const value = null ?? "Default"; // 'Default'
  ```

### 7. **Optional Chaining**

Optional chaining (`?.`) memungkinkan kita untuk mengakses properti dari objek yang mungkin `null` atau `undefined` tanpa menyebabkan error.

```javascript
const user = { address: { city: "New York" } };
const city = user.address?.city; // 'New York'
```

### 8. **The Array `map` Method**

`map()` digunakan untuk membuat array baru dengan hasil pemetaan dari array yang lama. Sangat berguna untuk mengubah data.

```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2); // [2, 4, 6]
```

### 9. **The Array `filter` Method**

`filter()` digunakan untuk membuat array baru berdasarkan kondisi yang kita tentukan.

```javascript
const numbers = [1, 2, 3, 4, 5];
const even = numbers.filter((num) => num % 2 === 0); // [2, 4]
```

### 10. **The Array `reduce` Method**

`reduce()` digunakan untuk mengurangi array menjadi satu nilai, seperti menjumlahkan atau menggabungkan elemen-elemen dalam array.

```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((total, num) => total + num, 0); // 10
```

### 11. **The Array `sort` Method**

`sort()` digunakan untuk mengurutkan elemen dalam array berdasarkan kriteria yang ditentukan.

```javascript
const numbers = [5, 3, 8, 1];
const sorted = numbers.sort((a, b) => a - b); // [1, 3, 5, 8]
```

### 12. **Working With Immutable Arrays**

Array di JavaScript bersifat **mutable**, yang artinya kita bisa mengubahnya setelah deklarasi. Namun, sering kali lebih baik untuk bekerja dengan array **immutable**, yaitu membuat array baru dari array lama.

```javascript
const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4]; // [1, 2, 3, 4]
```

### 13. **Asynchronous JavaScript: Promises**

Promise adalah objek yang mewakili penyelesaian dari operasi asinkron yang belum selesai. Promise bisa **resolve** (berhasil) atau **reject** (gagal).

```javascript
const fetchData = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Data berhasil diambil!");
  } else {
    reject("Terjadi kesalahan.");
  }
});

fetchData
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
```

### 14. **Asynchronous JavaScript: Async/Await**

`async/await` adalah cara yang lebih bersih dan lebih mudah untuk menangani operasi asinkron dibandingkan dengan menggunakan Promises langsung. `async` digunakan untuk mendeklarasikan fungsi yang mengembalikan Promise, dan `await` digunakan untuk menunggu Promise selesai.

```javascript
async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  console.log(data);
}

fetchData();
```

---

## **Kesimpulan**

Materi-materi di atas adalah konsep dasar dalam JavaScript yang sangat penting sebelum belajar framework seperti React. Memahami dasar-dasar ini akan memberi Anda pondasi yang kuat untuk memahami bagaimana JavaScript bekerja, terutama dalam penanganan data, pengoperasian array, dan pengelolaan asinkron. Jika masih bingung silahkan klik tiap tiap materi pada folder
