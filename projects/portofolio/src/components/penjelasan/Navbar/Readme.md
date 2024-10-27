# Navbar Component Documentation

Komponen navigasi responsif dengan efek shadow saat scroll dan menu hamburger untuk tampilan mobile.

## Fitur Utama

- Menu responsif (Mobile & Desktop)
- Shadow effect saat scroll
- Animasi transisi menu mobile
- Gradient hover effect
- Fixed positioning

## Teknologi Digunakan

- React Hooks (useState, useEffect)
- React Icons (IoClose, AiOutlineMenu)
- Tailwind CSS

## Struktur Komponen

### State Management

```javascript
const [nav, setNav] = useState(false); // Kontrol toggle menu mobile
const [shadow, setShadow] = useState(false); // Kontrol efek shadow
```

### Scroll Effect

```javascript
useEffect(() => {
  const handleShadow = () => {
    if (window.scrollY >= 100) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };
  window.addEventListener("scroll", handleShadow);
});
```

- Menambahkan shadow saat scroll > 100px
- Event listener untuk scroll
- Mengubah state `shadow`

### Komponen Utama

#### 1. Navbar Container

```javascript
<div className={`${
  shadow ? "shadow-xl shadow-slate-900" : ""
} bg-black-2 fixed right-0 z-[1000] flex h-[70px] w-full items-center justify-between px-[30px] text-white md:h-[70px] md:px-[100px]`}>
```

- Fixed positioning
- Height: 70px
- Full width
- Flex layout
- Shadow conditionally rendered
- Padding responsif:
  - Mobile: 30px
  - Desktop: 100px

#### 2. Brand Logo

```javascript
<div className="font-poppins text-[24px] font-bold">Alhie</div>
```

- Font size: 24px
- Font: Poppins
- Bold weight

#### 3. Navigation Menu

```javascript
<ul className={`${
  nav ? "top-[70px]" : "top-[-490px]"
} bg-black-2 absolute left-0 z-[100] w-full gap-2 px-[30px] pb-12 transition-all duration-300 ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:pb-0`}>
```

- Conditional positioning berdasarkan state `nav`
- Transisi animasi 300ms
- Responsif:
  - Mobile: Full width, absolute positioning
  - Desktop: Auto width, static positioning

#### 4. Menu Items

```javascript
<li className="cursor-pointer bg-[linear-gradient(134deg,_#3BF686_40.75%,_#ACA9FF_90.52%)] bg-clip-text p-2 hover:text-transparent xl:hover:scale-110">
  <a href="/#home">Home</a>
</li>
```

- Gradient hover effect
- Scale animation pada hover (desktop)
- Padding: 2 unit
- Cursor pointer

#### 5. Hamburger Menu

```javascript
<div className="flex text-2xl font-bold md:hidden" onClick={() => setNav(!nav)}>
  {nav ? <IoClose /> : <AiOutlineMenu />}
</div>
```

- Toggle icon berdasarkan state `nav`
- Hanya tampil di mobile (hidden di desktop)
- Font size: 2xl
- Bold weight

### Styling Features

1. Menu Animation

```javascript
transition-all duration-300 ease-in
```

- Smooth transition effect
- Duration: 300ms
- Easing: ease-in

2. Hover Effects

```javascript
hover:text-transparent xl:hover:scale-110
```

- Gradient text pada hover
- Scale up 110% pada hover (desktop)

3. Shadow Effect

```javascript
shadow-xl shadow-slate-900
```

- Extra large shadow
- Warna shadow: slate-900

## Navigation Links

1. Home
2. About
3. Skills
4. Projects
5. CV/Resume
6. Contact

## Best Practices

1. Responsive Design
2. Smooth Transitions
3. Intuitive Navigation
4. Consistent Spacing
5. Clear Visual Hierarchy

## Tips Pengembangan

1. Tambahkan active state untuk current section
2. Implementasi smooth scroll
3. Tambahkan keyboard navigation
4. Optimize event listener dengan cleanup
5. Tambahkan aria-labels untuk accessibility
