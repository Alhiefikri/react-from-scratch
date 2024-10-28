Berikut adalah dokumentasi untuk komponen `Navbar`, yang berfungsi sebagai navigasi utama aplikasi Anda:

````markdown
# Dokumentasi Komponen - `Navbar.js`

## Deskripsi

Komponen `Navbar` menyediakan navigasi utama untuk aplikasi, memungkinkan pengguna untuk mengakses berbagai halaman terkait artikel, seperti melihat semua pos, menambahkan artikel baru, dan melihat pratinjau artikel.

### Kode: `Navbar.js`

```javascript
import { NavLink } from "react-router-dom"; // Pastikan ini diimpor

const Navbar = () => {
  const menus = [
    {
      title: "Articles",
      items: [
        { name: "All Posts", path: "/" },
        { name: "Add New", path: "/new" },
        { name: "Preview", path: "/preview" },
      ],
    },
  ];

  return (
    <div className="navbar">
      <div className="navLogo padding12lr">
        <div className="logoTitle mb-20">KENAPARTICLE</div>
      </div>
      <div className="navMenus">
        {menus.map((menu, index) => (
          <div className="navMenu" key={index}>
            <div className="menuTitle">{menu.title}</div>
            {menu.items.map((item, itemIndex) => (
              <div className="menuItems" key={itemIndex}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "menuItem active" : "menuItem"
                  }
                >
                  <span className="itemSpan"></span>
                  {item.name}
                </NavLink>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
```
````

### Penjelasan Kode

1. **Import Statement**

   - `NavLink`: Komponen dari `react-router-dom` yang digunakan untuk navigasi antar halaman. `NavLink` memungkinkan penandaan aktif pada item navigasi.

2. **Struktur Menu**

   - Variabel `menus` mendefinisikan struktur menu navigasi. Di sini, ada satu menu utama bernama "Articles" yang memiliki tiga item:
     - **All Posts**: Mengarah ke halaman semua artikel (`/`).
     - **Add New**: Mengarah ke halaman untuk menambahkan artikel baru (`/new`).
     - **Preview**: Mengarah ke halaman pratinjau artikel (`/preview`).

3. **Render Menu**

   - Komponen `Navbar` merender menu dengan melakukan iterasi pada array `menus`. Setiap menu dan item di dalamnya di-render dengan menggunakan fungsi map.

   ```javascript
   {
     menus.map((menu, index) => (
       <div className="navMenu" key={index}>
         <div className="menuTitle">{menu.title}</div>
         {menu.items.map((item, itemIndex) => (
           <div className="menuItems" key={itemIndex}>
             <NavLink
               to={item.path}
               className={({ isActive }) =>
                 isActive ? "menuItem active" : "menuItem"
               }
             >
               <span className="itemSpan"></span>
               {item.name}
             </NavLink>
           </div>
         ))}
       </div>
     ));
   }
   ```

4. **Active Link**
   - `NavLink` menggunakan prop `className` untuk menentukan kelas CSS berdasarkan apakah link aktif atau tidak. Jika link aktif, kelas `active` ditambahkan.

### Cara Menggunakan

- Komponen `Navbar` cukup dipanggil dalam layout aplikasi, biasanya di bagian atas halaman, untuk memberikan navigasi kepada pengguna. Pastikan Anda sudah mengatur routing di aplikasi agar navigasi dapat berfungsi dengan baik.

## Catatan Tambahan

- Pastikan untuk menyesuaikan gaya CSS (`navbar`, `menuItem`, dll.) agar tampilan navigasi sesuai dengan desain aplikasi Anda.

```

Silakan salin dokumentasi ini untuk membantu Anda memahami komponen `Navbar`. Jika ada bagian yang ingin Anda tanyakan lebih lanjut, silakan beri tahu!
```
