# Dokumentasi Detail Weather App React

## Struktur Import dan Setup Awal

```javascript
import { useEffect, useState } from "react";
import "./App.css";
import humidity from "./assets/humidity.png";
import rain from "./assets/rain.png";
import wind from "./assets/wind.png";
```

**Penjelasan:**

- `useEffect`: Hook untuk menangani side effects (seperti API calls) dan lifecycle component
- `useState`: Hook untuk mengelola state dalam functional component
- Import gambar: Mengimpor asset gambar yang akan digunakan untuk ikon cuaca

## State Management

```javascript
const [input, setInput] = useState(""); // State untuk input pencarian
const [term, setTerm] = useState("jakarta"); // State untuk kata kunci pencarian aktif
const [data, setData] = useState(null); // State untuk menyimpan response API
```

**Penjelasan State:**

1. `input`:

   - Menyimpan nilai yang diketik user di search bar
   - Diupdate setiap kali user mengetik (onChange event)
   - Reset menjadi string kosong setelah pencarian

2. `term`:

   - Menyimpan kata kunci yang akan digunakan untuk API call
   - Default value: "jakarta"
   - Hanya diupdate saat user meng-klik tombol search
   - Berfungsi sebagai trigger untuk useEffect

3. `data`:
   - Menyimpan seluruh data cuaca dari API
   - Null saat pertama kali load
   - Berisi object dengan informasi cuaca setelah API call berhasil

## API Integration dengan useEffect

```javascript
useEffect(() => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${term}&appid=51e034840776cf8ea4fe0b9087c468a2&units=metric`,
  )
    .then((res) => res.json())
    .then((datas) => setData(datas));
}, [term]);
```

**Penjelasan Detail:**

1. **Timing Eksekusi:**

   - Dijalankan saat komponen pertama kali di-mount
   - Dijalankan ulang setiap kali `term` berubah
   - Dependency array `[term]` mengontrol kapan effect dijalankan

2. **URL API:**

   - Base URL: `https://api.openweathermap.org/data/2.5/weather`
   - Parameter:
     - `q=${term}`: nama kota yang dicari
     - `appid`: API key untuk autentikasi
     - `units=metric`: mengatur unit suhu ke Celsius

3. **Proses Fetch:**
   - Menggunakan Fetch API bawaan JavaScript
   - `.then((res) => res.json())`: Mengkonversi response ke JSON
   - `.then((datas) => setData(datas))`: Menyimpan data ke state

## Struktur Layout Utama

```javascript
<div className="flex h-screen items-center justify-center">
  <div
    className={`${
      data && data.weather[0].icon.slice(-1) === "n" ? "bg-night" : "bg-day"
    } h-[600px] w-[500px] rounded-[10px] p-8`}
  >
    {/* Konten aplikasi */}
  </div>
</div>
```

**Penjelasan Layout:**

1. **Container Luar:**

   - `flex h-screen`: Menggunakan seluruh tinggi layar
   - `items-center justify-center`: Memusatkan konten secara vertikal dan horizontal

2. **Container Aplikasi:**

   - Dynamic background berdasarkan waktu
   - Ukuran tetap: 600px tinggi, 500px lebar
   - Rounded corners dan padding 8 units

3. **Logic Background:**
   - Mengecek `data.weather[0].icon`
   - Slice(-1) mengambil karakter terakhir
   - 'n' menandakan malam hari
   - Conditional class: bg-night atau bg-day

## Komponen Search Bar

```javascript
<div className="flex items-center justify-between gap-3">
  <input
    onChange={(e) => setInput(e.target.value)}
    className="w-full rounded-full px-4 py-2 text-[14px] text-slate-400 outline-none focus:italic focus:shadow-lg focus:shadow-slate-500"
    type="text"
    placeholder="Search"
  />
  <div
    onClick={() => {
      setTerm(input);
      setInput("");
    }}
    className="rounded-full bg-white p-2 hover:scale-110"
  >
    <svg>{/* SVG search icon */}</svg>
  </div>
</div>
```

**Penjelasan Search Bar:**

1. **Input Field:**
   - Event handler: `onChange` memperbarui state `input`
   - Styling:
     - `w-full`: Mengambil seluruh lebar tersedia
     - `rounded-full`: Border radius maksimal
     - `focus:` modifiers untuk efek saat focus
2. **Search Button:**
   - Event handler: `onClick`
     - Memperbarui `term` dengan nilai `input`
     - Mereset `input` menjadi string kosong
   - Styling:
     - `hover:scale-110`: Efek hover membesar
     - `rounded-full`: Bentuk bulat

## Komponen Display Cuaca

```javascript
<div className="mt-5 flex justify-center">
  {data && (
    <img
      width={150}
      height={150}
      src={require(`./assets/${data.weather[0].icon}.png`)}
      alt=""
    />
  )}
</div>
```

**Penjelasan Display:**

1. **Conditional Rendering:**

   - Menggunakan `data &&` untuk memastikan data sudah ada
   - Mencegah error saat data masih null

2. **Dynamic Image Loading:**
   - Menggunakan require untuk load gambar dinamis
   - Path gambar berdasarkan icon code dari API
   - Ukuran tetap: 150x150px

## Komponen Informasi Suhu

```javascript
<div className="mt-1 flex justify-center text-[70px] text-white">
  {data && data.main.temp} &deg; C
</div>
<div className="mt-[-10px] flex flex-col items-center justify-center text-white">
  <div className="text-[40px] font-bold">{data && data.name}</div>
  <div className="text-[24px]">Precipitations</div>
  <div className="flex gap-6">
    <span>Min: {data && data.main.temp_min} &deg; C </span>
    <span>Max: {data && data.main.temp_min} &deg; C </span>
  </div>
</div>
```

**Penjelasan Informasi Suhu:**

1. **Suhu Utama:**

   - Font size besar (70px)
   - Mengakses `data.main.temp`
   - Symbol derajat dengan HTML entity

2. **Informasi Kota:**

   - Nama kota dari `data.name`
   - Styling bold dan ukuran 40px

3. **Detail Suhu:**
   - Menampilkan suhu min dan max
   - Layout flexbox dengan gap 6 units
   - Data dari `data.main.temp_min/max`

## Komponen Metrik Cuaca

```javascript
<div className="relative mt-10 flex justify-between rounded-full p-4">
  <div className="absolute bottom-0 left-0 right-0 top-0 w-full rounded-full bg-[#001026] opacity-30"></div>

  <div className="z-10 flex gap-2 text-[20px] text-white">
    <img width={30} src={rain} alt="" />
    <span>{data && data.clouds.all} %</span>
  </div>

  <div className="z-10 flex gap-2 text-[20px] text-white">
    <img width={30} src={humidity} alt="" />
    <span>{data && data.main.humidity} %</span>
  </div>

  <div className="z-10 flex gap-2 text-[20px] text-white">
    <img width={30} src={wind} alt="" />
    <span>{data && data.wind.speed}</span>
  </div>
</div>
```

**Penjelasan Metrik Cuaca:**

1. **Container:**

   - Posisi relative untuk background overlay
   - Flex dengan justify-between untuk spacing merata
   - Rounded-full untuk bentuk pill

2. **Background Overlay:**

   - Absolute positioning
   - Opacity 30%
   - Warna gelap (#001026)

3. **Metrik Individual:**
   - z-index 10 untuk berada di atas overlay
   - Layout flex dengan gap 2 units
   - Ikon 30px width
   - Data dari berbagai property API:
     - Clouds: `data.clouds.all`
     - Humidity: `data.main.humidity`
     - Wind: `data.wind.speed`

## Cara Kerja React dan Data Flow

1. **Initial Load:**

   - Component di-mount
   - Default term "jakarta" memicu API call pertama
   - Data ditampilkan di UI

2. **User Interaction:**

   - User mengetik → update state `input`
   - User klik search → update state `term`
   - Update `term` memicu useEffect
   - API call baru → update state `data`
   - UI di-render ulang dengan data baru

3. **Conditional Rendering:**
   - Semua data display menggunakan `data &&`
   - Mencegah error saat data belum tersedia
   - Background berubah berdasarkan waktu

## Tips Pengembangan dan Debugging

1. **Error Handling:**

   ```javascript
   useEffect(() => {
     fetch(URL)
       .then((res) => {
         if (!res.ok) throw new Error("City not found");
         return res.json();
       })
       .then((data) => setData(data))
       .catch((error) => console.error(error));
   }, [term]);
   ```

2. **Loading State:**

   ```javascript
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
     setIsLoading(true);
     fetch(URL)
       .then(...)
       .finally(() => setIsLoading(false));
   }, [term]);
   ```

3. **Input Validation:**
   ```javascript
   const handleSearch = () => {
     if (input.trim() === "") return;
     setTerm(input);
     setInput("");
   };
   ```

## Sesuaikan Background berdasarkan Cuaca

```javascript
const getWeatherBackground = (weatherCode) => {
  const code = weatherCode.toLowerCase();
  if (code.includes("rain")) return "bg-rainy";
  if (code.includes("cloud")) return "bg-cloudy";
  if (code.includes("clear")) return "bg-clear";
  return "bg-default";
};
```

## Optimizations

1. **Debouncing Search:**

   ```javascript
   const debounce = (func, delay) => {
     let timeoutId;
     return (...args) => {
       clearTimeout(timeoutId);
       timeoutId = setTimeout(() => func(...args), delay);
     };
   };
   ```

2. **Memoization Data:**
   ```javascript
   const memoizedData = useMemo(() => {
     return {
       temp: data?.main.temp,
       city: data?.name,
       weather: data?.weather[0],
     };
   }, [data]);
   ```

## Testing Considerations

1. **Unit Tests:**

   ```javascript
   test("renders weather data correctly", () => {
     const mockData = {
       main: { temp: 25 },
       name: "Jakarta",
     };
     // Test rendering dengan mock data
   });
   ```

2. **Integration Tests:**
   ```javascript
   test("fetches and displays weather data", async () => {
     // Test alur lengkap dari input hingga display
   });
   ```

## Kesimpulan

Weather App ini mendemonstrasikan konsep-konsep React penting:

1. Functional Components
2. Hooks (useState, useEffect)
3. Conditional Rendering
4. Event Handling
5. API Integration
6. Dynamic Styling
7. Responsive Design

Setiap bagian kode memiliki peran spesifik dalam membentuk aplikasi yang interaktif dan responsif. Pemahaman mendalam tentang alur data dan lifecycle component sangat penting untuk pengembangan dan debugging yang efektif.
