# Penjelasan Kode Komponen `Order`

Komponen `Order` ini bertugas untuk menampilkan detail pesanan berdasarkan ID yang diterima melalui URL. Komponen ini juga menggunakan beberapa fungsi pembantu (`helpers`) dan mengambil data pesanan melalui **React Router's loader**. Fungsi `loader` mengakses API untuk mendapatkan informasi pesanan dan kemudian menampilkan informasi tersebut di halaman.

---

## Pengertian

Komponen ini menampilkan informasi pesanan, termasuk status pesanan, waktu estimasi pengiriman, harga, dan rincian lainnya. Data pesanan diambil menggunakan **React Router's `useLoaderData`** dan ditampilkan dengan beberapa format yang lebih mudah dibaca, seperti waktu tersisa hingga pengiriman dan harga yang diformat dengan mata uang.

Fungsi `loader` digunakan untuk mendapatkan data pesanan dari API menggunakan ID pesanan yang diteruskan sebagai parameter dalam URL.

---

## Cara Berpikir React dan React Router di Kode Ini

1. **Loader Function**:
   - **React Router** memungkinkan kita untuk memuat data sebelum komponen dirender menggunakan fungsi loader. Di sini, `loader` akan mengambil data pesanan berdasarkan `orderId` dari URL.
2. **Data diakses menggunakan `useLoaderData`**:
   - Setelah data pesanan dimuat oleh fungsi loader, data tersebut akan tersedia di komponen melalui hook `useLoaderData`. Data ini dapat digunakan untuk menampilkan detail pesanan di UI.
3. **Fungsi Pembantu**:
   - **`calcMinutesLeft`**: Menghitung berapa menit yang tersisa hingga pengiriman berdasarkan waktu estimasi pengiriman.
   - **`formatCurrency`**: Memformat angka menjadi format mata uang yang sesuai.
   - **`formatDate`**: Mengonversi timestamp tanggal menjadi format tanggal yang lebih mudah dibaca.

---

## Analogi Sederhana

Bayangkan kamu adalah seorang pelanggan yang ingin melihat status pesanan pizza kamu. Kamu bisa memasukkan **ID pesanan** (seperti nomor resi) untuk melihat rincian pesanan kamu. Komponen `Order` bertindak seperti sistem pelacakan pesanan, menampilkan status pesanan, waktu pengiriman yang tersisa, harga, dan informasi terkait lainnya.

---

## Penjelasan Kode Tiap Baris

### 1. Mengimpor Modul dan Fungsi

```javascript
import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
```

- **`useLoaderData`**: Hook dari React Router untuk mendapatkan data yang sudah dimuat melalui loader.
- **`getOrder`**: Fungsi dari layanan API yang digunakan untuk mengambil detail pesanan berdasarkan ID.
- **`calcMinutesLeft`**: Fungsi untuk menghitung waktu tersisa hingga pengiriman.
- **`formatCurrency`**: Fungsi untuk memformat harga menjadi format mata uang.
- **`formatDate`**: Fungsi untuk memformat tanggal menjadi format yang lebih mudah dibaca.

### 2. Komponen `Order`

```javascript
function Order() {
  const order = useLoaderData();
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);
```

- **`const order = useLoaderData();`**: Mengambil data pesanan yang sudah dimuat sebelumnya menggunakan fungsi `loader`. Data ini akan berisi informasi seperti status pesanan, harga, dan waktu pengiriman.
- **Destructuring data pesanan**: Variabel `order` yang didapat dari `useLoaderData` didekonstruksi menjadi beberapa properti seperti `id`, `status`, `priority`, `priorityPrice`, dll. Ini mempermudah akses ke data pesanan.
- **`calcMinutesLeft(estimatedDelivery)`**: Menghitung berapa menit lagi pesanan akan sampai berdasarkan `estimatedDelivery` (waktu estimasi pengiriman).

### 3. Menampilkan Status Pesanan dan Informasi Lainnya

```javascript
  return (
    <div>
      <div>
        <h2>Status</h2>
        <div>
          {priority && <span>Priority</span>}
          <span>{status} order</span>
        </div>
      </div>

      <div>
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>
```

- **Status Pesanan**: Menampilkan status pesanan. Jika pesanan memiliki prioritas, maka kata "Priority" akan ditampilkan. Status pesanan diambil dari data pesanan.
- **Waktu Pengiriman**: Menampilkan waktu tersisa untuk pengiriman, atau memberi tahu bahwa pesanan sudah harus tiba jika sudah melewati waktu estimasi pengiriman.
- **`formatDate(estimatedDelivery)`**: Menampilkan tanggal estimasi pengiriman dalam format yang lebih mudah dibaca.

### 4. Menampilkan Harga Pesanan

```javascript
      <div>
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}
```

- **Harga Pesanan**: Menampilkan harga pesanan pizza menggunakan `formatCurrency`.
- **Harga Prioritas**: Jika pesanan memiliki prioritas, harga tambahan untuk prioritas akan ditampilkan.
- **Total yang Harus Dibayar**: Menampilkan total harga yang harus dibayar saat pengiriman, yaitu harga pizza ditambah harga prioritas (jika ada).

### 5. Fungsi `loader` untuk Mengambil Data

```javascript
export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}
```

- **`loader`**: Fungsi yang digunakan oleh React Router untuk memuat data sebelum komponen dirender. Fungsi ini menerima objek `params`, yang berisi parameter URL, seperti `orderId`. Kemudian, fungsi ini memanggil API `getOrder` untuk mengambil data pesanan berdasarkan `orderId`.
- **`getOrder(params.orderId)`**: Mengambil data pesanan dari API menggunakan ID yang diteruskan dalam URL.

### 6. Ekspor Komponen

```javascript
export default Order;
```

- **`export default Order;`**: Menyediakan komponen `Order` untuk digunakan di luar file ini, misalnya di dalam file yang menangani routing.

---

## Kesimpulan

Komponen `Order` digunakan untuk menampilkan detail pesanan berdasarkan `orderId` yang diteruskan dalam URL. Beberapa fitur penting dalam komponen ini:

- **Loader** untuk memuat data pesanan sebelum komponen dirender.
- **Status pesanan** ditampilkan, termasuk informasi seperti status, prioritas, dan waktu pengiriman.
- **Harga pesanan** dan informasi terkait pembayaran juga ditampilkan dengan format yang mudah dibaca.
- **Fungsi pembantu** digunakan untuk menghitung waktu tersisa hingga pengiriman dan memformat harga serta tanggal.

Dengan menggunakan React Router dan loader, aplikasi dapat memuat data dengan lebih efisien sebelum komponen ditampilkan kepada pengguna.

---

# Penjelasan Kode Komponen `CreateOrder`

Komponen `CreateOrder` bertanggung jawab untuk menangani pembuatan pesanan baru, termasuk pengumpulan data dari pengguna melalui form, validasi input, dan pengiriman data pesanan ke server untuk diproses. Komponen ini memanfaatkan fitur-fitur dari React Router, seperti `Form`, `useNavigation`, dan `useActionData`, untuk menangani pengiriman data dan menampilkan status pengiriman.

---

## Pengertian

Komponen ini adalah form untuk **membuat pesanan baru**, yang mencakup informasi pelanggan seperti nama, nomor telepon, alamat, dan pilihan prioritas pengiriman. Setelah pengguna mengisi form, data akan dikirimkan ke server melalui metode POST, dan jika pesanan berhasil dibuat, pengguna akan diarahkan ke halaman detail pesanan menggunakan `redirect`.

---

## Cara Berpikir React dan React Router di Kode Ini

1. **Form Handling**:
   - Menggunakan **`Form`** dari React Router untuk menangani pengiriman data ke server. Ini adalah cara yang terintegrasi dengan baik untuk menangani form dalam aplikasi yang menggunakan React Router, termasuk pengelolaan status form (misalnya, ketika form sedang disubmit).
2. **Action Function**:
   - Fungsi **`action`** akan menangani pengolahan data dari form yang disubmit. Data dari form diambil menggunakan `request.formData()` dan dikonversi menjadi objek JavaScript dengan `Object.fromEntries()`.
3. **Validasi Form**:
   - Sebelum mengirim data pesanan ke server, kode ini melakukan validasi pada input pengguna, seperti memastikan nomor telepon sesuai dengan format yang benar menggunakan regular expression (`isValidPhone`).
4. **Pengelolaan Status Pengiriman (Submission State)**:
   - Status pengiriman form dikelola menggunakan **`useNavigation`** dari React Router untuk menampilkan tombol dengan teks yang sesuai ("Placing order..." saat data sedang diproses).

---

## Analogi Sederhana

Bayangkan kamu sedang berada di restoran dan ingin memesan makanan. Kamu mengisi form pesanan yang mencakup nama, nomor telepon, alamat, dan apakah kamu ingin pesananmu diprioritaskan. Setelah mengisi form, kamu menekan tombol "Order Now". Begitu pesananmu diterima, restoran memprosesnya, dan kamu diberitahu bahwa pesananmu berhasil diproses dan akan segera dikirimkan.

---

## Penjelasan Kode Tiap Baris

### 1. Mengimpor Modul dan Fungsi

```javascript
import { useState } from "react";
import { Form, redirect } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import { useNavigation } from "react-router-dom";
import { useActionData } from "react-router-dom";
```

- **`useState`**: Hook untuk mengelola state lokal, meskipun dalam kode ini tidak digunakan (komentar dalam kode).
- **`Form`**: Komponen dari React Router untuk menangani pengiriman form.
- **`redirect`**: Fungsi dari React Router yang digunakan untuk mengarahkan pengguna ke halaman lain setelah aksi tertentu berhasil dilakukan.
- **`createOrder`**: Fungsi yang digunakan untuk mengirim data pesanan ke server dan membuat pesanan baru.
- **`useNavigation`**: Hook yang digunakan untuk memeriksa status navigasi saat ini, untuk mengetahui apakah form sedang disubmit atau tidak.
- **`useActionData`**: Hook yang digunakan untuk mengambil data yang dikirimkan kembali dari aksi (seperti pesan kesalahan validasi).

### 2. Komponen `CreateOrder`

```javascript
function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData();
  const cart = fakeCart;
```

- **`const navigation = useNavigation();`**: Mengambil informasi status navigasi, apakah form sedang dalam status "submitting".
- **`const isSubmitting = navigation.state === "submitting";`**: Menggunakan status navigasi untuk menentukan apakah form sedang dalam proses pengiriman.
- **`const formErrors = useActionData();`**: Mengambil data yang dikirimkan kembali dari fungsi `action` (misalnya, kesalahan validasi) untuk ditampilkan dalam form.
- **`const cart = fakeCart;`**: Sebuah daftar fiktif untuk keranjang belanja, yang dihardcode dalam kode ini. Keranjang ini berisi item yang akan dipesan oleh pengguna.

### 3. Struktur Formulir

```javascript
  return (
    <div>
      <h2>Ready to order? Let's go!</h2>
      <Form method="POST">
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required />
          </div>
          {formErrors?.phone && <p>{formErrors.phone}</p>}
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required />
          </div>
        </div>

        <div>
          <input type="checkbox" name="priority" id="priority" />
          <label htmlFor="priority">Want to give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button disabled={isSubmitting}>
            {isSubmitting ? "Placing order..." : "Order now"}
          </button>
        </div>
      </Form>
    </div>
  );
}
```

- **Form Input Fields**:
  - **First Name**: Input field untuk nama depan pelanggan, wajib diisi.
  - **Phone number**: Input untuk nomor telepon. Menampilkan pesan kesalahan jika validasi nomor telepon gagal (diperiksa menggunakan `formErrors.phone`).
  - **Address**: Input untuk alamat pengiriman.
  - **Priority checkbox**: Checkbox untuk menentukan apakah pesanan akan diprioritaskan atau tidak.
  - **Hidden Cart**: Cart disertakan dalam form menggunakan input tipe `hidden`, yang menyimpan daftar produk yang dipesan dalam format JSON.
  - **Submit Button**: Tombol untuk mengirim form. Tombol ini akan menampilkan "Placing order..." saat form sedang diproses.

### 4. Fungsi `action` untuk Menangani Pengiriman Form

```javascript
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      "Please give us your correct phone number. We might need it to contact you.";

  if (Object.keys(errors).length > 0) return errors;

  // if everything is okay, create new order and redirect
  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}
```

- **`action`**: Fungsi yang dijalankan ketika form disubmit. Fungsi ini mengakses data dari form, memvalidasi input, dan mengirimkan data pesanan ke server.
- **`formData`**: Data form diambil menggunakan `request.formData()` dan dikonversi menjadi objek menggunakan `Object.fromEntries()`.
- **Validasi Nomor Telepon**: Jika nomor telepon tidak valid, maka akan menambahkan pesan kesalahan untuk nomor telepon.
- **Pembuatan Pesanan**: Jika tidak ada kesalahan, data pesanan disertakan dalam objek `order` dan dikirim ke server menggunakan `createOrder()`. Setelah pesanan berhasil dibuat, pengguna akan diarahkan ke halaman detail pesanan dengan `redirect()`.

### 5. Ekspor Komponen

```javascript
export default CreateOrder;
```

- **`export default CreateOrder;`**: Menyediakan komponen `CreateOrder` untuk digunakan di tempat lain dalam aplikasi (misalnya, dalam routing).

---

## Kesimpulan

Komponen `CreateOrder` adalah form untuk membuat pesanan baru, yang mencakup input untuk nama, nomor telepon, alamat, dan pilihan prioritas pengiriman. Form ini memanfaatkan React Router's `Form` untuk pengiriman data dan `useNavigation` untuk menangani status pengiriman. Fungsi `action` digunakan untuk memvalidasi input dan mengirimkan pesanan ke server.

Dengan menggunakan teknik seperti validasi form, pengelolaan status navigasi, dan pengiriman data menggunakan React Router, aplikasi dapat memberikan pengalaman pengguna yang lebih baik saat melakukan pemesanan.

---

# README: Memahami `useFetcher` di React Router

## Pengertian

Di dalam ekosistem React, **React Router** adalah pustaka yang digunakan untuk mengelola routing atau navigasi antar halaman dalam aplikasi berbasis React. Salah satu fitur penting dari React Router adalah `useFetcher`, yang memungkinkan kita untuk melakukan **fetching data** atau melakukan aksi seperti **mengirimkan data ke server** tanpa perlu memuat ulang halaman secara keseluruhan. Fitur ini berguna untuk melakukan request ke server secara "terisolasi" dan memperbarui bagian-bagian tertentu dari halaman sesuai dengan hasilnya.

Pada contoh kode ini, kita akan menggunakan `useFetcher` untuk mengirimkan permintaan PATCH ke server untuk mengupdate status pesanan menjadi "priority".

## Cara Berpikir React

React bekerja dengan konsep **komponen** yang dapat dikombinasikan untuk membentuk UI. Di dalam aplikasi React, kita bisa melakukan **state management** dan **side-effects** untuk berinteraksi dengan data eksternal seperti API. React Router memberikan cara untuk melakukan **navigasi** di dalam aplikasi tanpa perlu memuat ulang halaman.

React berfokus pada pemisahan UI menjadi komponen-komponen kecil yang dapat digunakan kembali. Ketika ada perubahan data atau interaksi pengguna, React akan memperbarui tampilan UI secara efisien menggunakan sistem **reconciliation**.

Pada dasarnya, di React kita akan berpikir seperti ini:

1. **Membuat komponen**: Setiap bagian UI adalah komponen.
2. **State management**: Data yang digunakan oleh komponen dikelola melalui state.
3. **Event handling**: Ketika terjadi interaksi dengan pengguna, kita mengubah state atau memanggil API untuk mendapatkan atau mengubah data.
4. **Rendering**: React akan merender ulang UI setiap kali state atau data berubah.

## Analogi Sederhana

Bayangkan aplikasi React seperti sebuah restoran. Komponen-komponen adalah seperti meja-meja di restoran. Masing-masing meja memiliki pesanan (state), dan pelayan (React) akan mengambil dan mengantarkan pesanan tersebut sesuai dengan permintaan pelanggan.

**`useFetcher`** di sini berfungsi seperti pelayan yang menerima pesanan (request), pergi ke dapur (API), dan kemudian membawa hasilnya kembali tanpa harus mengubah suasana restoran (halaman) secara keseluruhan.

## Penjelasan Kode Tiap Baris

Berikut adalah penjelasan kode yang diberikan:

### Kode Komponen `UpdateOrder`

```js
import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";
```

- `useFetcher`: Mengimpor hook `useFetcher` dari React Router untuk memungkinkan pengiriman data (request) ke server tanpa perlu me-refresh halaman.
- `Button`: Komponen untuk tombol yang digunakan dalam UI. Ini adalah komponen UI yang telah dibuat sebelumnya.
- `updateOrder`: Fungsi yang digunakan untuk mengirimkan request ke API untuk memperbarui data pesanan di server.

```js
function UpdateOrder({ order }) {
  const fetcher = useFetcher();
```

- `UpdateOrder`: Ini adalah sebuah komponen React yang menerima props `order`. Props ini berisi informasi tentang pesanan yang akan diperbarui.
- `fetcher`: Hook `useFetcher` digunakan untuk mendapatkan objek fetcher yang memungkinkan kita untuk mengirimkan permintaan ke server.

```js
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}
```

- `<fetcher.Form>`: Komponen ini adalah bagian dari React Router yang digunakan untuk membungkus form dan menangani pengiriman data menggunakan `fetcher`. Ini adalah cara untuk mengirimkan data ke server tanpa memuat ulang halaman. Di sini, kita menggunakan metode `PATCH` yang biasanya digunakan untuk memperbarui data yang sudah ada.
- `<Button>`: Komponen tombol yang akan ditampilkan kepada pengguna. Ketika tombol ini diklik, form akan dikirim menggunakan `fetcher.Form` dan memperbarui status pesanan.

```js
export default UpdateOrder;
```

- `export default UpdateOrder`: Menandakan bahwa komponen `UpdateOrder` ini akan diekspor sehingga bisa digunakan di tempat lain dalam aplikasi.

### Kode `action` (Fungsi Aksi)

```js
export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
```

- `action`: Fungsi ini dipanggil saat form di atas dikirim. Fungsi ini menerima dua parameter:
  - `request`: Menyimpan informasi tentang permintaan yang dikirimkan.
  - `params`: Menyimpan parameter dari URL (misalnya, ID pesanan).
- `const data = { priority: true }`: Di sini kita membuat objek `data` yang akan dikirimkan ke server untuk mengupdate pesanan menjadi prioritas (`priority: true`).

- `await updateOrder(params.orderId, data)`: Fungsi `updateOrder` akan dipanggil untuk memperbarui pesanan di server dengan ID yang ada di `params.orderId` dan mengirimkan data `priority: true`.

- `return null`: Fungsi `action` biasanya mengembalikan data yang akan digunakan untuk memperbarui aplikasi setelah aksi berhasil. Di sini kita hanya mengembalikan `null` karena kita tidak perlu melakukan apa-apa setelah permintaan berhasil.

## Kesimpulan

- `useFetcher` adalah hook dari React Router yang memungkinkan kita untuk mengirimkan data ke server atau API tanpa memuat ulang halaman.
- Fungsi `fetcher.Form` digunakan untuk membungkus form yang mengirimkan data menggunakan `fetcher` dan bisa menentukan metode HTTP (seperti `PATCH`, `POST`, atau `GET`).
- Dalam contoh ini, kita menggunakan `useFetcher` untuk mengupdate pesanan dan menandai pesanan tersebut sebagai prioritas.
- Fungsi `action` digunakan untuk menangani aksi ketika form dikirim, mengirimkan permintaan ke server, dan memperbarui status pesanan.

Dengan pemahaman ini, Anda bisa mulai melihat bagaimana **komponen**, **state**, dan **fetching data** bekerja bersama dalam aplikasi React untuk memberikan pengalaman pengguna yang dinamis dan interaktif.
