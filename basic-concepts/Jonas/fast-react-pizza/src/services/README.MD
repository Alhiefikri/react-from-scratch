# Penjelasan Kode API untuk Mengelola Menu dan Pesanan

Di sini, kita akan membahas kode JavaScript yang digunakan untuk berinteraksi dengan API eksternal, yang berfungsi untuk mengambil data menu, membuat pesanan, memperbarui pesanan, dan mengambil informasi pesanan berdasarkan ID.

## Pengertian

Kode ini berfungsi untuk melakukan komunikasi dengan sebuah API eksternal yang menyediakan data menu dan pesanan. Ada beberapa fungsi utama dalam kode ini:

1. **`getMenu`**: Mengambil data menu dari API.
2. **`getOrder`**: Mengambil detail pesanan berdasarkan ID.
3. **`createOrder`**: Membuat pesanan baru di API.
4. **`updateOrder`**: Memperbarui status pesanan yang sudah ada.

Fungsi-fungsi ini menggunakan **`fetch`** untuk melakukan permintaan HTTP ke API, dan kemudian menangani respon atau error yang diterima.

---

## Cara Berpikir API dalam Kode Ini

1. **Mengirim Permintaan (Request)**: Ketika kita ingin mengakses atau mengubah data (misalnya menu atau pesanan), kita mengirimkan permintaan HTTP ke server menggunakan metode seperti `GET`, `POST`, atau `PATCH`.
2. **Menangani Respons (Response)**: Setelah permintaan dikirim, server akan memberikan respons. Kita perlu memeriksa apakah respons tersebut berhasil (dengan memeriksa status HTTP), dan jika berhasil, kita memproses data yang diterima.

3. **Menangani Error**: Jika terjadi kesalahan, misalnya jika permintaan gagal atau status HTTP menunjukkan kesalahan (seperti 404 atau 500), kita akan menangani error tersebut dengan melemparkan pesan error yang sesuai.

---

## Penjelasan Kode Tiap Baris

### 1. Deklarasi URL API

```javascript
const API_URL = "https://react-fast-pizza-api.jonas.io/api";
```

- **`API_URL`** adalah URL dasar tempat kita akan mengirimkan permintaan untuk berinteraksi dengan API eksternal. Semua fungsi di bawah ini akan menggunakannya sebagai basis URL untuk membangun URL lengkap.

### 2. Fungsi `getMenu`

```javascript
export async function getMenu() {
  const res = await fetch(`${API_URL}/menu`);

  if (!res.ok) throw Error("Failed getting menu");

  const { data } = await res.json();
  return data;
}
```

- **`fetch(`${API_URL}/menu`)`**: Mengirimkan permintaan HTTP `GET` ke endpoint `/menu` untuk mengambil data menu.
- **`if (!res.ok)`**: Memeriksa apakah status respons menunjukkan kegagalan (status HTTP selain 2xx). Jika gagal, kita melemparkan error dengan pesan "Failed getting menu".
- **`await res.json()`**: Jika respons berhasil, kita mengonversi hasil respons menjadi format JSON.
- **`return data`**: Fungsi mengembalikan data menu yang diterima dari API.

### 3. Fungsi `getOrder`

```javascript
export async function getOrder(id) {
  const res = await fetch(`${API_URL}/order/${id}`);
  if (!res.ok) throw Error(`Couldn't find order #${id}`);

  const { data } = await res.json();
  return data;
}
```

- **`fetch(`${API_URL}/order/${id}`)`**: Mengirimkan permintaan HTTP `GET` ke endpoint `/order/{id}` untuk mengambil informasi pesanan berdasarkan `id` yang diberikan.
- **`if (!res.ok)`**: Memeriksa apakah permintaan berhasil. Jika gagal (misalnya pesanan dengan `id` tersebut tidak ditemukan), kita melemparkan error dengan pesan khusus: `Couldn't find order #${id}`.
- **`await res.json()`**: Mengonversi respons JSON yang diterima dan mengembalikan data pesanan.

### 4. Fungsi `createOrder`

```javascript
export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    const { data } = await res.json();
    return data;
  } catch {
    throw Error("Failed creating your order");
  }
}
```

- **`fetch(`${API_URL}/order`, {...})`**: Mengirimkan permintaan HTTP `POST` untuk membuat pesanan baru. Data pesanan (`newOrder`) dikirimkan dalam tubuh permintaan (`body`) dengan format JSON.
- **`headers: { "Content-Type": "application/json" }`**: Menyatakan bahwa tubuh permintaan adalah JSON.
- **`if (!res.ok)`**: Jika status respons menunjukkan kesalahan, kita melemparkan error.
- **`await res.json()`**: Jika berhasil, mengonversi hasil respons menjadi JSON dan mengembalikan data pesanan yang baru dibuat.
- **`catch`**: Jika terjadi error pada proses pengiriman permintaan atau respons, kita menangkapnya dan melemparkan error dengan pesan "Failed creating your order".

### 5. Fungsi `updateOrder`

```javascript
export async function updateOrder(id, updateObj) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    // We don't need the data, so we don't return anything
  } catch (err) {
    throw Error("Failed updating your order");
  }
}
```

- **`fetch(`${API_URL}/order/${id}`, {...})`**: Mengirimkan permintaan HTTP `PATCH` ke endpoint `/order/{id}` untuk memperbarui pesanan yang ada dengan ID tertentu. Data pembaruan (`updateObj`) dikirim dalam tubuh permintaan (`body`).
- **`headers: { "Content-Type": "application/json" }`**: Menyatakan bahwa data yang dikirimkan dalam permintaan adalah JSON.
- **`if (!res.ok)`**: Memeriksa apakah permintaan berhasil. Jika gagal, kita melemparkan error.
- **Tidak ada respons yang dikembalikan**: Tidak ada data yang perlu dikembalikan setelah pembaruan, jadi fungsi tidak mengembalikan apa-apa.
- **`catch`**: Jika ada kesalahan dalam mengirim permintaan atau memproses respons, kita melemparkan error dengan pesan "Failed updating your order".

---

## Kesimpulan

Fungsi-fungsi yang ada di kode ini mengilustrasikan bagaimana cara berinteraksi dengan API eksternal untuk:

- **Mengambil data** (menu atau pesanan) menggunakan `GET`.
- **Mengirim data baru** (pesanan) menggunakan `POST`.
- **Memperbarui data** (pesanan yang ada) menggunakan `PATCH`.

Penting untuk selalu menangani **error** dengan baik dalam aplikasi ketika melakukan permintaan ke API, karena kegagalan bisa terjadi kapan saja (misalnya, URL salah, server tidak merespons, atau data tidak ditemukan). Kode ini juga menggunakan `async/await` untuk menangani operasi asinkron, yang membuat kode lebih mudah dibaca dan dipahami.

Fungsi ini bisa digunakan dalam berbagai kasus aplikasi React untuk mengelola data dari API eksternal dengan cara yang efisien dan aman.
