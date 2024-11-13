# README untuk Pemula: Mengembangkan Aplikasi Web dengan React

## Deskripsi Umum

Pada proyek ini, kita akan membuat sebuah aplikasi sederhana menggunakan **React** yang menampilkan profil dengan informasi tentang keterampilan seorang developer. Aplikasi ini menampilkan foto profil, deskripsi diri, dan daftar keterampilan yang dimiliki dengan level kompetensinya masing-masing. Aplikasi ini memberikan gambaran bagaimana menggunakan React untuk membangun komponen-komponen yang dapat digunakan kembali dan mengelola data dengan cara deklaratif.

<p align="center">
  <img src="./public/ss.png" alt="Profil Saya">
</p>

## Tujuan Kode

Tujuan utama dari kode ini adalah untuk:

1. Membantu memahami bagaimana **komponen React** bekerja dan bagaimana data dipertukarkan antar komponen.
2. Menunjukkan cara **menggunakan props** untuk mengirim data dari komponen induk ke komponen anak.
3. Membuat tampilan dinamis dengan menggunakan **rendering data** menggunakan `map()` dan **conditional rendering** untuk menampilkan ikon berdasarkan level keterampilan.
4. Memperkenalkan konsep dasar React seperti **JSX**, **props**, dan **state** (meskipun dalam kode ini, kita belum menggunakan state secara langsung).

## Fungsi Kode

Aplikasi ini terdiri dari beberapa bagian yang berfungsi sebagai berikut:

- **Avatar**: Menampilkan gambar profil pengguna.
- **Intro**: Menampilkan nama dan deskripsi singkat tentang pengguna.
- **SkillList**: Menampilkan daftar keterampilan pengguna.
- **Skill**: Menampilkan informasi terkait keterampilan tertentu, seperti nama skill, level, dan warna indikator.

## Penjelasan Kode

Mari kita bahas bagian-bagian utama dari kode ini.

### 1. **Array `skills`**

```javascript
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];
```

Array ini berisi objek-objek yang mewakili keterampilan yang dimiliki oleh pengguna. Setiap objek memiliki tiga properti:

- `skill`: Nama keterampilan.
- `level`: Level keterampilan (beginner, intermediate, advanced).
- `color`: Warna untuk menandai keterampilan tersebut.

### 2. **Komponen `App`**

```javascript
function App() {
  return (
    <div className="card">
      <Avatar nameImage="../public/profile.png" />
      <div className="data">
        <Intro
          title="Moh. Alif Fikri"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit..."
        />
        <SkillList />
      </div>
    </div>
  );
}
```

Komponen `App` adalah komponen utama yang akan merender seluruh aplikasi. Di sini kita memanggil tiga komponen lainnya:

- `Avatar`: Untuk menampilkan gambar profil.
- `Intro`: Untuk menampilkan nama dan deskripsi pengguna.
- `SkillList`: Untuk menampilkan daftar keterampilan.

### 3. **Komponen `Avatar`**

```javascript
function Avatar(props) {
  return <img className="avatar" src={props.nameImage} />;
}
```

Komponen `Avatar` menerima properti `nameImage` yang berisi path gambar dan menampilkannya menggunakan tag `<img>`. Di sini kita menggunakan **props** untuk meneruskan data gambar dari komponen induk (`App`) ke komponen `Avatar`.

### 4. **Komponen `Intro`**

```javascript
function Intro(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}
```

Komponen `Intro` menampilkan nama pengguna dan deskripsi singkat. Properti `title` dan `description` diterima dari komponen induk (`App`), yang kemudian digunakan di dalam JSX untuk merender nama dan deskripsi.

### 5. **Komponen `SkillList`**

```javascript
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}
```

Komponen `SkillList` bertanggung jawab untuk menampilkan daftar keterampilan. Di sini, kita menggunakan fungsi `map()` untuk mengiterasi array `skills` dan merender komponen `Skill` untuk setiap keterampilan yang ada. Setiap objek keterampilan diteruskan sebagai props ke komponen `Skill`.

### 6. **Komponen `Skill`**

```javascript
function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "👨‍💻"}
      </span>
    </div>
  );
}
```

Komponen `Skill` menerima tiga props:

- `skill`: Nama keterampilan.
- `color`: Warna latar belakang untuk keterampilan.
- `level`: Level keterampilan yang akan menentukan ikon yang ditampilkan.

Dengan menggunakan **conditional rendering**, komponen ini akan menampilkan ikon yang berbeda tergantung pada level keterampilan:

- `👶` untuk beginner.
- `👍` untuk intermediate.
- `👨‍💻` untuk advanced.

## Cara Berpikir di React

Berpikir dalam React berarti memecah aplikasi menjadi **komponen-komponen kecil** yang masing-masing memiliki tanggung jawab tertentu. Setiap komponen dapat menerima data melalui **props** dan merender UI berdasarkan data tersebut. Konsep utama dalam React adalah **declarative programming** – kita hanya perlu mendeskripsikan bagaimana UI harus terlihat, dan React yang akan menangani pembaruan UI secara efisien ketika data berubah.

## Analogi Sederhana

Bayangkan React seperti sebuah pabrik pembuatan mainan. Setiap komponen adalah bagian dari pabrik, seperti bagian perakit, pengecatan, atau pengemasan. Komponen-komponen ini bekerja sama untuk menghasilkan produk akhir (UI). **Props** adalah bahan baku yang dibawa ke setiap bagian pabrik, dan setiap bagian bertanggung jawab untuk merakit, melukis, atau mengemas sesuai dengan instruksi yang diberikan. Setelah semuanya selesai, pabrik mengeluarkan mainan (UI) yang siap untuk dilihat dan digunakan.

## Kesimpulan

- **React** membantu kita membangun aplikasi dengan cara yang terstruktur dan modular.
- **Komponen** adalah unit dasar dalam React yang dapat digunakan kembali.
- **Props** memungkinkan kita untuk mengirimkan data dari komponen induk ke komponen anak.
- **Rendering dinamis** dan **conditional rendering** memungkinkan aplikasi untuk menampilkan data yang relevan berdasarkan kondisi tertentu.

Dengan memahami dasar-dasar ini, kamu akan dapat mulai membangun aplikasi web yang lebih kompleks dan dinamis menggunakan React!
