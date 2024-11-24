# **ErrorMessage Component - Penjelasan**

---

## **Pengertian**

Komponen `ErrorMessage` digunakan untuk menampilkan pesan error (kesalahan) kepada pengguna. Pesan ini dapat muncul ketika ada masalah dalam aplikasi, misalnya saat data tidak ditemukan atau ketika ada kesalahan dalam pengambilan data. Komponen ini menerima sebuah prop bernama `message`, yang berisi teks pesan error yang ingin ditampilkan.

---

## **Cara Berpikir React**

Pada React, komponen seperti `ErrorMessage` berfungsi untuk **menyajikan UI** berdasarkan **props** yang diterimanya. Dalam kasus ini, komponen `ErrorMessage` hanya menampilkan sebuah paragraf (`<p>`) yang berisi pesan error yang diberikan sebagai prop `message`. React hanya akan merender ulang komponen ini jika ada perubahan pada nilai `message`.

---

## **Analogi Sederhana**

Bayangkan kamu sedang menggunakan aplikasi dan tiba-tiba ada kesalahan atau masalah. Kamu ingin aplikasi memberi tahu kamu apa yang salah. Komponen `ErrorMessage` berfungsi seperti **pesan pop-up atau notifikasi error** yang muncul ketika ada masalah, memberitahukanmu dengan jelas apa yang salah. Misalnya, jika aplikasi gagal mengambil data, maka `ErrorMessage` akan menampilkan pesan seperti "Gagal mengambil data" agar pengguna tahu apa yang terjadi.

---

## **Penjelasan Code Tiap Baris**

```js
export default function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>🚫</span> {message}
    </p>
  );
}
```

1. **`export default function ErrorMessage({ message }) {`**

   - Baris ini mendefinisikan komponen fungsional `ErrorMessage`.
   - **`{ message }`** adalah **destructuring** dari props yang diterima oleh komponen ini. Artinya, komponen ini mengharapkan sebuah prop yang bernama `message`, yang akan berisi teks pesan error.

2. **`return ( ... )`**

   - Komponen ini merender sebuah elemen JSX. JSX adalah sintaks yang mirip dengan HTML, namun bisa berinteraksi dengan logika JavaScript.

3. **`<p className="error">`**

   - Ini adalah elemen HTML `<p>` yang digunakan untuk menampilkan pesan. Elemen ini diberi **className** "error", yang memungkinkan kita untuk menambahkan style khusus menggunakan CSS. Misalnya, kita bisa memberi warna merah untuk menunjukkan error.

4. **`<span>🚫</span>`**

   - Elemen `<span>` digunakan untuk menampilkan emoji 🚫, yang memberikan petunjuk visual bahwa ini adalah pesan error. Emoji ini bisa diganti dengan simbol lain atau ikon sesuai kebutuhan.

5. **`{message}`**

   - `{message}` adalah ekspresi JavaScript dalam JSX yang menampilkan nilai dari prop `message`. Prop ini adalah teks pesan error yang akan dikirimkan dari komponen induk (parent component).
   - Jika prop `message` berisi teks seperti "Data tidak ditemukan", maka teks tersebut akan ditampilkan di layar.

6. **`</p>`**
   - Menutup elemen `<p>`, menandakan bahwa pesan error selesai ditampilkan.

---

## **Kesimpulan**

Komponen `ErrorMessage` adalah komponen sederhana yang digunakan untuk menampilkan pesan error di antarmuka pengguna. Komponen ini menerima sebuah prop `message`, yang berisi teks yang ingin ditampilkan. Dengan cara ini, aplikasi dapat memberikan umpan balik yang jelas kepada pengguna jika terjadi kesalahan atau masalah, misalnya saat terjadi kesalahan pengambilan data atau operasi lainnya. Komponen ini membuat aplikasi lebih **interaktif** dan **berteman** dengan pengguna, memberikan informasi penting tentang status aplikasi.

---

# **Loader Component - Penjelasan**

---

## **Pengertian**

Komponen `Loader` adalah komponen yang digunakan untuk menampilkan indikasi loading kepada pengguna. Biasanya, komponen ini ditampilkan sementara data atau konten sedang diproses atau dimuat, sehingga pengguna tahu bahwa aplikasi sedang bekerja dan tidak mengalami kegagalan. Pada komponen ini, hanya terdapat teks "Loading..." yang menunjukkan bahwa aplikasi sedang memproses sesuatu.

---

## **Cara Berpikir React**

Di React, komponen ini bersifat **stateless** dan sangat sederhana. Komponen `Loader` hanya bertugas menampilkan teks "Loading..." yang bisa dilihat oleh pengguna ketika aplikasi sedang menunggu respons dari server, memuat data, atau menjalankan proses lain yang memerlukan waktu. React akan merender komponen ini hanya ketika komponen tersebut diminta, misalnya saat state `isLoading` bernilai `true`.

---

## **Analogi Sederhana**

Bayangkan kamu sedang menunggu pesanan makanan di restoran. Kamu mungkin melihat tanda atau papan yang bertuliskan "Sedang Diproses" atau "Sedang Dimasak" di dapur. Itu adalah indikasi bahwa pesananmu sedang diproses. Komponen `Loader` berfungsi seperti papan tanda tersebut, memberi tahu pengguna bahwa aplikasi sedang memuat atau memproses sesuatu, dan meminta mereka untuk menunggu sebentar.

---

## **Penjelasan Code Tiap Baris**

```js
export default function Loader() {
  return <p className="loader">Loading...</p>;
}
```

1. **`export default function Loader() {`**

   - Ini adalah deklarasi dari komponen fungsional `Loader`.
   - Komponen ini tidak menerima props atau state, dan hanya merender sebuah elemen sederhana.

2. **`return <p className="loader">Loading...</p>;`**
   - **`return`**: Menyatakan bahwa komponen akan merender output yang berupa elemen JSX.
   - **`<p className="loader">Loading...</p>`**: Ini adalah elemen `<p>` (paragraf) yang berisi teks "Loading...".
     - **`className="loader"`**: Menambahkan kelas CSS "loader" yang dapat digunakan untuk memberikan style khusus pada elemen ini, seperti memodifikasi font, warna, atau bahkan menambahkan animasi (seperti spinner) untuk menunjukkan bahwa data sedang dimuat.
3. **Teks "Loading..."**
   - Teks ini adalah pesan yang ditampilkan kepada pengguna, memberitahukan mereka bahwa proses loading sedang berlangsung. Ini memberi umpan balik visual yang sederhana kepada pengguna.

---

## **Kesimpulan**

Komponen `Loader` adalah komponen yang sangat sederhana tetapi sangat penting untuk memberikan pengalaman pengguna yang baik. Saat aplikasi sedang memuat data atau proses lainnya, komponen ini menampilkan pesan "Loading..." untuk memberi tahu pengguna bahwa aplikasi sedang bekerja. Penggunaan `Loader` membantu mencegah kebingungannya pengguna, yang mungkin akan merasa aplikasi tidak responsif jika tidak ada indikasi bahwa proses sedang berlangsung.
