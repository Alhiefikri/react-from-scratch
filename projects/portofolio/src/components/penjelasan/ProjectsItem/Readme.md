Berikut adalah README yang menjelaskan komponen `ProjectItem` secara rinci, termasuk penjelasan per bagian dan baris:

### README.md

# ProjectItem Component

## Deskripsi

Komponen `ProjectItem` digunakan untuk menampilkan informasi tentang proyek secara visual. Ini mencakup gambar latar, judul proyek, teknologi yang digunakan, dan tautan ke demo proyek.

## Penggunaan

Komponen ini dapat digunakan dalam daftar proyek, seperti yang ditunjukkan dalam komponen `Projects`.

```jsx
<ProjectItem
  title="Project Title"
  backgroundImg="path/to/image.png"
  tech="Technology Used"
  projectUrl="https://example.com"
/>
```

## Kode Komponen

```javascript
/* eslint-disable react/prop-types */ // Menonaktifkan pemeriksaan prop-types untuk komponen ini

const ProjectItem = ({ title, backgroundImg, tech, projectUrl }) => {
  return (
    <div className="group relative flex h-auto w-full items-center justify-center rounded-xl shadow-xl shadow-slate-600 duration-500 ease-in-out hover:scale-[1.05] hover:bg-white">
      <img
        className="h-500px rounded-xl bg-cover bg-center group-hover:opacity-10"
        src={backgroundImg}
        alt={title}
      />
      <div className="absolute left-[50%] top-[50%] hidden translate-x-[-50%] translate-y-[-50%] group-hover:block">
        <h2 className="text-center text-2xl font-bold tracking-wider text-slate-600">
          {title}
        </h2>
        <p className="pb-4 pt-2 text-center font-bold text-slate-600">{tech}</p>
        <a href={projectUrl} target="_blank" rel="noopener noreferrer">
          <p className="cursor-pointer rounded-lg bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] py-3 text-center font-sora font-bold duration-500 ease-in hover:shadow-md hover:shadow-slate-500">
            Go To Demo
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem; // Mengekspor komponen ProjectItem
```

## Penjelasan Kode

1. **Menonaktifkan Prop-Types**:

   ```javascript
   /* eslint-disable react/prop-types */
   ```

   - Menonaktifkan pemeriksaan `prop-types` untuk komponen ini, mungkin karena pengembang menggunakan TypeScript atau metode lain untuk validasi props.

2. **Definisi Komponen**:

   ```javascript
   const ProjectItem = ({ title, backgroundImg, tech, projectUrl }) => {
   ```

   - Mendefinisikan komponen fungsional `ProjectItem` yang menerima props: `title`, `backgroundImg`, `tech`, dan `projectUrl`.

3. **Elemen Utama**:

   ```javascript
   return (
     <div className="group relative flex h-auto w-full items-center justify-center rounded-xl shadow-xl shadow-slate-600 duration-500 ease-in-out hover:scale-[1.05] hover:bg-white">
   ```

   - Membuat elemen `div` utama dengan beberapa kelas untuk layout dan efek interaktif.
   - `group` memungkinkan penggunaan efek hover pada elemen anak.

4. **Gambar Proyek**:

   ```javascript
   <img
     className="h-500px rounded-xl bg-cover bg-center group-hover:opacity-10"
     src={backgroundImg}
     alt={title}
   />
   ```

   - Menampilkan gambar latar proyek.
   - Menggunakan kelas untuk mengatur ukuran dan efek saat hover (opacity berkurang).

5. **Konten Proyek**:

   ```javascript
   <div className="absolute left-[50%] top-[50%] hidden translate-x-[-50%] translate-y-[-50%] group-hover:block">
   ```

   - Mengatur konten proyek (judul, teknologi, tautan) agar muncul di tengah gambar saat dihover.
   - `hidden` untuk menyembunyikan konten sampai hover aktif.

6. **Judul Proyek**:

   ```javascript
   <h2 className="text-center text-2xl font-bold tracking-wider text-slate-600">
     {title}
   </h2>
   ```

   - Menampilkan judul proyek dengan gaya teks yang ditentukan.

7. **Teknologi yang Digunakan**:

   ```javascript
   <p className="pb-4 pt-2 text-center font-bold text-slate-600">{tech}</p>
   ```

   - Menampilkan teknologi yang digunakan dalam proyek.

8. **Tautan ke Demo Proyek**:

   ```javascript
   <a href={projectUrl} target="_blank" rel="noopener noreferrer">
   ```

   - Membuat tautan ke demo proyek, dibuka di tab baru.
   - `rel="noopener noreferrer"` untuk alasan keamanan saat menggunakan `target="_blank"`.

9. **Tombol Go To Demo**:

   ```javascript
   <p className="cursor-pointer rounded-lg bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] py-3 text-center font-sora font-bold duration-500 ease-in hover:shadow-md hover:shadow-slate-500">
     Go To Demo
   </p>
   ```

   - Menampilkan tombol dengan efek hover yang memberikan bayangan saat kursor melewati tombol.

10. **Ekspor Komponen**:
    ```javascript
    export default ProjectItem;
    ```
    - Mengekspor komponen `ProjectItem` agar dapat digunakan di bagian lain aplikasi.

---

README ini dirancang agar mudah dipahami dan memberikan informasi yang diperlukan untuk memahami komponen `ProjectItem`. Jika ada bagian lain yang ingin ditambahkan atau dijelaskan lebih lanjut, silakan beri tahu!
