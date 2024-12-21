# Penjelasan Komponen `Progress`

Komponen **Progress** ini bertanggung jawab untuk menampilkan informasi tentang progres permainan kuis yang sedang berlangsung. Komponen ini memberikan gambaran tentang soal yang sedang dijawab, total soal, serta skor yang sudah diperoleh dibandingkan dengan skor maksimal yang bisa didapatkan.

Berikut adalah penjelasan lengkap tentang kode komponen `Progress` ini.

---

## **Pengertian**

Komponen `Progress` menampilkan:

- **Progres soal**: Menunjukkan soal ke berapa yang sedang dijawab dari total soal.
- **Skor**: Menampilkan skor yang sudah dikumpulkan dan skor maksimal yang bisa didapatkan.

Komponen ini berfungsi untuk memberi pengguna gambaran yang jelas tentang status progres mereka dalam permainan kuis.

---

## **Cara Berpikir Komponen Ini**

Komponen `Progress` diharapkan hanya untuk menampilkan informasi yang bersifat **statistik** dan **progres** selama permainan:

1. **Progres Soal**: Indikator berupa bar yang menunjukkan soal ke berapa yang sedang dijawab.
2. **Poin**: Menampilkan skor yang sudah terkumpul dan total skor yang dapat dicapai jika menjawab semua soal dengan benar.

---

## **Analogi Sederhana**

Bayangkan kamu sedang mengikuti sebuah lomba lari, dan ada papan yang menunjukkan:

- **Berapa lap yang sudah kamu lari** dibandingkan dengan total lap yang harus ditempuh.
- **Berapa detik waktu yang sudah kamu habiskan** dibandingkan dengan waktu yang bisa kamu capai.

Di sini, komponen `Progress` bekerja seperti papan informasi tersebut, memberi tahu pengguna tentang progres mereka dalam permainan.

---

## **Penjelasan Code Tiap Baris**

```javascript
/* eslint-disable react/prop-types */
```

- **`/* eslint-disable react/prop-types */`**: Ini adalah aturan ESLint yang digunakan untuk menonaktifkan peringatan terkait validasi `prop-types` di React. Biasanya digunakan untuk pengembangan atau jika kita yakin tipe props yang diterima sudah jelas.

### **Bagian 1: Fungsi Utama Komponen**

```javascript
function Progress({ index, numQuestions, points, maxPoissiblePoints, answer }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPoissiblePoints}
      </p>
    </header>
  );
}
```

- **Function Component**: `Progress` adalah komponen berbasis fungsi yang menerima beberapa properti (props):
  - **`index`**: Indeks soal yang sedang dijawab. Misalnya, jika soal pertama, `index` adalah 0.
  - **`numQuestions`**: Jumlah total soal dalam kuis.
  - **`points`**: Jumlah poin yang sudah didapatkan pengguna.
  - **`maxPoissiblePoints`**: Skor maksimal yang dapat diperoleh.
  - **`answer`**: Menyimpan jawaban yang dipilih untuk soal saat ini (dapat bernilai `null` jika belum ada jawaban).

Komponen ini mengembalikan sebuah elemen `<header>` yang berisi:

1. **Bar Progres** (menggunakan elemen `<progress>`)
2. **Informasi Soal yang Sedang Dikerjakan**
3. **Informasi Skor yang Diperoleh**

### **Bagian 2: Elemen `<progress>`**

```javascript
<progress max={numQuestions} value={index + Number(answer !== null)} />
```

- **`<progress>`**: Ini adalah elemen HTML untuk menampilkan bar progres.
  - **`max={numQuestions}`**: Nilai maksimum dari bar progres adalah jumlah total soal (`numQuestions`).
  - **`value={index + Number(answer !== null)}`**: Nilai progres adalah `index` soal yang sedang dijawab ditambah 1 jika soal sudah terjawab (karena `answer !== null` akan bernilai `true` atau `false`, dan `Number(true)` menghasilkan 1, sedangkan `Number(false)` menghasilkan 0). Dengan cara ini, jika soal telah dijawab, nilai progres akan bertambah 1.

Misalnya, jika soal pertama (`index = 0`) sudah dijawab (`answer !== null`), maka nilai progres akan menjadi 1, menandakan bahwa pengguna sudah menyelesaikan soal pertama.

### **Bagian 3: Informasi Nomor Soal**

```javascript
<p>
  Question <strong>{index + 1}</strong> / {numQuestions}
</p>
```

- **`<p>`**: Menampilkan teks yang memberitahukan pengguna soal ke berapa yang sedang mereka jawab.
  - **`{index + 1}`**: Menampilkan soal keberapa (misalnya, soal pertama ditampilkan sebagai "1", meskipun `index` dimulai dari 0).
  - **`{numQuestions}`**: Menampilkan jumlah total soal.

### **Bagian 4: Informasi Skor**

```javascript
<p>
  <strong>{points}</strong> / {maxPoissiblePoints}
</p>
```

- **`<p>`**: Menampilkan teks dengan skor yang sudah dikumpulkan dan skor maksimal yang mungkin didapatkan.
  - **`{points}`**: Skor yang telah dikumpulkan oleh pengguna sejauh ini.
  - **`{maxPoissiblePoints}`**: Skor maksimal yang bisa didapatkan jika semua soal dijawab dengan benar.

---

## **Kesimpulan**

Komponen `Progress` ini berguna untuk memberikan pengguna gambaran tentang progres permainan kuis, baik dari sisi soal yang sedang dijawab maupun skor yang telah terkumpul. Dengan menggunakan elemen HTML seperti `<progress>`, komponen ini memberikan visualisasi yang jelas tentang progres, membuat pengguna lebih mudah untuk mengikuti permainan.

- **`<progress>`** menunjukkan progres soal yang sudah dijawab.
- **Informasi soal** memberikan pengguna konteks soal yang sedang dijawab dan berapa soal yang tersisa.
- **Skor** menunjukkan berapa poin yang sudah dikumpulkan dibandingkan dengan total poin yang mungkin.

Ini adalah contoh yang baik tentang bagaimana React bisa digunakan untuk membuat aplikasi dengan antarmuka yang dinamis dan responsif berdasarkan perubahan state.
