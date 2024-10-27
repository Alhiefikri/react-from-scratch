Berikut adalah README untuk komponen `Contact`, termasuk penjelasan rinci dan kesimpulan yang jelas:

### README.md

# Contact Component

## Deskripsi

Komponen `Contact` menyediakan antarmuka bagi pengguna untuk menghubungi pengembang. Ini termasuk informasi profil, tautan ke media sosial, dan formulir untuk mengirim pesan.

## Penggunaan

Impor komponen ini dalam aplikasi Anda untuk menampilkan informasi kontak.

```jsx
import Contact from "./Contact";

function App() {
  return (
    <div>
      <Contact />
    </div>
  );
}
```

## Kode Komponen

```javascript
import { AiOutlineMail } from "react-icons/ai"; // Ikon untuk email
import foto from "../assets/photo-2.jpg"; // Mengimpor foto
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Ikon untuk GitHub dan LinkedIn
import { BsFillPersonLinesFill } from "react-icons/bs"; // Ikon untuk kontak

const Contact = () => {
  return (
    <div id="contact" className="w-full text-[#fbfbfb]">
      <div className="flex flex-col">
        <div className="font-sora text-[20px] text-[#fbfbfb] md:text-[40px] md:leading-[72px]">
          Get in Touch {/* Judul seksi */}
        </div>
      </div>
      <div className="m-auto w-full p-4 font-sora">
        <div className="grid gap-8 p-4 lg:grid-cols-5">
          {/* Kiri: Profil Pengembang */}
          <div className="col-span-3 w-full rounded-xl bg-[#323443] p-4 shadow-xl lg:col-span-2">
            <div className="h-full lg:p-4">
              <div>
                <img
                  src={foto} // Menampilkan foto profil
                  className="rounded-xl duration-300 ease-in hover:scale-105"
                  alt=""
                />
              </div>
              <div className="font-poppins">
                <h2 className="py-2 text-2xl font-bold text-white">
                  Alhie Fikri {/* Nama */}
                </h2>
                <p>Junior Front End</p> {/* Jabatan */}
                <p className="py-4">
                  I am available for freelance or full time positions. Contact
                  me and lets talk {/* Deskripsi */}
                </p>
              </div>
              <div>
                <p className="pt-8 font-poppins uppercase">Connect with me</p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/alif-fikri/"
                    target="_blank"
                  >
                    <div className="cursor-pointer rounded-full bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] p-3 shadow-lg duration-300 ease-in hover:scale-110 hover:shadow-white md:p-6">
                      <FaLinkedin />
                    </div>
                  </a>
                  <a href="https://github.com/alhiefikri" target="_blank">
                    <div className="cursor-pointer rounded-full bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] p-3 shadow-lg duration-300 ease-in hover:scale-110 hover:shadow-white md:p-6">
                      <FaGithub />
                    </div>
                  </a>
                  <a href="">
                    <div className="cursor-pointer rounded-full bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] p-3 shadow-lg duration-300 ease-in hover:scale-110 hover:shadow-white md:p-6">
                      <AiOutlineMail />
                    </div>
                  </a>
                  <a href="">
                    <div className="cursor-pointer rounded-full bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] p-3 shadow-lg duration-300 ease-in hover:scale-110 hover:shadow-white md:p-6">
                      <BsFillPersonLinesFill />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Kanan: Formulir Kontak */}
          <div className="col-span-3 h-auto w-full rounded-xl bg-[#323443] shadow-xl lg:p-4">
            <div className="p-4">
              <form
                action="https://getform.io/f/adrrywja" // Endpoint untuk pengiriman formulir
                method="POST"
                encType="multipart/form-data"
                target="_blank"
                className="text-white"
              >
                <div className="grid w-full gap-4 py-2 md:grid-cols-2">
                  <div className="flex flex-col">
                    <label className="py-2 text-sm uppercase">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="outline-bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] flex rounded-lg border-2 border-slate-300 p-3 text-black"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="py-2 text-sm uppercase">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      className="outline-bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] flex rounded-lg border-2 border-slate-300 p-3 text-black"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Email</label>
                  <input
                    type="text"
                    name="email"
                    className="outline-bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] flex rounded-lg border-2 border-slate-300 p-3 text-black"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className="outline-bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] flex rounded-lg border-2 border-slate-300 p-3 text-black"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Message</label>
                  <textarea
                    rows={10}
                    name="message" // Nama untuk field pesan
                    className="outline-bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] flex rounded-lg border-2 border-slate-300 p-3 text-black"
                  />
                </div>
                <button className="mt-4 w-full rounded-xl bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] p-4">
                  Send Message {/* Tombol untuk mengirim pesan */}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; // Mengekspor komponen Contact
```

## Penjelasan Kode

1. **Import Ikon dan Gambar**:

   - Mengimpor ikon untuk email, GitHub, LinkedIn, dan gambar profil dari folder `assets`.

2. **Mendefinisikan Komponen Contact**:

   - Komponen fungsional `Contact` untuk merender tampilan kontak.

3. **Struktur JSX**:

   - Elemen utama `div` dengan ID `contact` untuk penataan.

4. **Bagian Kiri: Profil Pengembang**:

   - Menampilkan foto, nama, jabatan, dan deskripsi singkat tentang ketersediaan untuk pekerjaan.

5. **Tautan Media Sosial**:

   - Menggunakan ikon untuk menghubungkan pengguna dengan profil LinkedIn, GitHub, dan kontak lainnya.

6. **Bagian Kanan: Formulir Kontak**:

   - Formulir untuk mengumpulkan informasi dari pengguna, termasuk nama, nomor telepon, email, subjek, dan pesan.
   - Menggunakan `getform.io` untuk pengiriman formulir.

7. **Tombol Kirim**:
   - Tombol untuk mengirim informasi yang diisi ke endpoint.

## Kesimpulan

Komponen `Contact` menyediakan antarmuka yang ramah pengguna untuk menghubungi pengembang. Pengguna dapat melihat informasi profil, terhubung melalui media sosial, dan mengisi formulir untuk mengirim pesan. Desain responsif memastikan tampilan yang baik di berbagai perangkat.

---

README ini bertujuan memberikan pemahaman yang jelas tentang fungsi dan struktur komponen `Contact`. Jika ada bagian lain yang ingin ditambahkan atau dijelaskan lebih lanjut, silakan beri tahu!
