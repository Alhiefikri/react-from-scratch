# About Component Documentation

Komponen About section yang menampilkan informasi personal dengan foto dan deskripsi. Dirancang dengan layout responsif menggunakan Tailwind CSS.

## Fitur Utama

- Foto profil
- Deskripsi personal
- Layout responsif (Mobile & Desktop)
- Custom styling untuk text dan container
- Rounded corners design

## Teknologi Digunakan

- React.js
- Tailwind CSS
- Local image import

## Struktur Komponen

### Asset Import

```javascript
import foto from "../assets/photo-2.jpg";
```

- Mengimport foto profil dari assets

### Komponen Utama

#### 1. Section Container

```javascript
<div>{/* Section content */}</div>
```

#### 2. Heading Text

```javascript
<div
  id="about"
  className="font-sora text-[20px] text-[#FBFBFB] md:text-[40px] md:leading-[72px]"
>
  Let me tell you a little more about myself
</div>
```

- Font: Sora
- Warna text: #FBFBFB (hampir putih)
- Responsif text size:
  - Mobile: 20px
  - Desktop: 40px
- Line height desktop: 72px

#### 3. Content Container

```javascript
<div className="mt-[40px] flex flex-col items-center gap-9 xl:flex-row xl:items-stretch">
```

- Margin top: 40px
- Layout responsif:
  - Mobile: Column layout
  - Desktop: Row layout (xl breakpoint)
- Gap antar elemen: 9 unit
- Centered items di mobile

#### 4. Profile Image

```javascript
<img
  src={foto}
  alt=""
  className="h-[300px] w-[300px] rounded-[20px] object-cover md:h-[400px] md:w-[400px]"
/>
```

- Dimensi responsif:
  - Mobile: 300x300px
  - Desktop: 400x400px
- Border radius: 20px
- Object-fit: cover

#### 5. Description Box

```javascript
<div className="rounded-[20px] bg-[#323443] p-[20px] text-slate-400 md:mr-20">
  {/* Description text */}
</div>
```

- Background: #323443 (dark grey)
- Border radius: 20px
- Padding: 20px
- Text color: slate-400
- Margin right desktop: 20 unit

### Styling Features

1. Layout System

```javascript
flex flex-col xl:flex-row
```

- Mobile: Column layout
- Desktop: Row layout

2. Responsive Design

```javascript
text-[20px] md:text-[40px]  // Text size
h-[300px] md:h-[400px]      // Image height
w-[300px] md:w-[400px]      // Image width
```

- Breakpoints:
  - md: 768px
  - xl: 1280px

3. Spacing

```javascript
mt-[40px]  // Top margin
gap-9      // Gap between elements
p-[20px]   // Padding for description
```

### Content Structure

1. **Heading**
   - Personal introduction text
   - Responsif font size
2. **Image**
   - Foto profil
   - Square format
   - Rounded corners
3. **Description**
   - Background berwarna
   - Text berwarna slate
   - Padding konsisten
   - Informasi personal lengkap

## Best Practices

1. **Responsif Design**

   - Layout adaptif untuk berbagai ukuran layar
   - Font size yang sesuai untuk readability
   - Spacing yang konsisten

2. **Visual Hierarchy**

   - Clear heading
   - Balanced image size
   - Well-structured text

3. **Performance**
   - Local image import
   - Optimal image dimensions

## Tips Pengembangan

1. Tambahkan alt text untuk accessibility
2. Implementasi lazy loading untuk gambar
3. Tambahkan animasi pada scroll
4. Optimize image loading
5. Tambahkan interactive elements
6. Consider adding:
   - Social media links
   - Download CV button
   - Skills highlight
   - Timeline/experience section

## Content Checklist

- [x] Personal introduction
- [x] Professional background
- [x] Current focus/interests
- [x] Contact information
- [x] Professional goals
- [x] Personal interests
