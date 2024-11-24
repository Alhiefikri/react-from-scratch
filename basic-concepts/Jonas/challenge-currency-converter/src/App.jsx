import { useEffect, useState } from "react"; // Mengimpor hook React: useState untuk state dan useEffect untuk efek samping (side effects)
import "./App.css"; // Mengimpor file CSS untuk styling

export default function App() {
  // Set nilai default untuk amount, fromCurrency, toCurrency
  const [amount, setAmount] = useState(100); // Menginisialisasi state amount dengan nilai default 100
  const [fromCurrency, setFromCurrency] = useState("USD"); // Menginisialisasi state fromCurrency dengan nilai default "USD"
  const [toCurrency, setToCurrency] = useState("EUR"); // Menginisialisasi state toCurrency dengan nilai default "EUR"
  const [rate, setRate] = useState(0); // Menginisialisasi state rate untuk menyimpan nilai tukar, default 0
  const [isLoading, setIsLoading] = useState(false); // Menginisialisasi state isLoading untuk menandakan apakah data sedang dimuat, default false
  const [error, setError] = useState(null); // Menginisialisasi state error untuk menyimpan pesan error, default null (tidak ada error)

  // Efek samping: Fetch data setiap kali amount, fromCurrency, atau toCurrency berubah
  useEffect(() => {
    // Validasi jika amount bukan angka atau kurang dari atau sama dengan 0
    if (isNaN(amount) || amount <= 0) {
      setError("Please enter a valid amount."); // Jika amount tidak valid, set error message
      setRate(0); // Mengatur rate menjadi 0
      return; // Jika amount tidak valid, hentikan eksekusi lebih lanjut
    }

    // Fungsi asinkron untuk mengambil data mata uang
    async function fetchCurrency() {
      setIsLoading(true); // Set isLoading menjadi true, menandakan bahwa data sedang dimuat
      setError(null); // Reset error state sebelum memulai fetch

      try {
        // Mengambil data dari API dengan menggunakan fetch dan AbortController untuk cancel request jika diperlukan
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
        );

        // Mengecek jika response tidak ok (status HTTP selain 200)
        if (!res.ok) {
          throw new Error("Failed to fetch data"); // Jika response tidak ok, lempar error
        }

        const data = await res.json(); // Mengubah response menjadi JSON
        setRate(data.rates[toCurrency]); // Mengambil nilai tukar dari data yang diterima dan mengupdate state rate
      } catch (error) {
        // Jika ada error, cek apakah error disebabkan oleh AbortError
        if (error.name !== "AbortError") {
          console.error("Error fetching data:", error); // Log error ke console jika bukan error abort
          setError("Failed to fetch exchange rate. Please try again."); // Set error state dengan pesan error
        }
      } finally {
        setIsLoading(false); // Setelah proses fetch selesai (baik berhasil atau gagal), set isLoading menjadi false
      }
    }

    // Jika fromCurrency dan toCurrency sama, tidak perlu fetch, langsung set rate menjadi amount
    if (fromCurrency === toCurrency) {
      setRate(amount); // Jika mata uang sama, rate adalah jumlah yang dimasukkan (amount)
    } else {
      fetchCurrency(); // Jika mata uang berbeda, panggil fungsi fetchCurrency untuk mendapatkan rate
    }
  }, [amount, fromCurrency, toCurrency]); // Efek samping dijalankan ulang ketika amount, fromCurrency, atau toCurrency berubah

  return (
    <div className="app-container">
      <div className="card">
        <h1>Currency Converter</h1>

        <div className="input-group">
          {/* Input untuk jumlah uang */}
          <input
            type="number"
            min="0" // Membatasi nilai minimum input menjadi 0
            step="any" // Memungkinkan input dengan nilai desimal
            onChange={(e) => setAmount(Number(e.target.value))} // Mengubah state amount ketika nilai input berubah
            value={amount} // Menampilkan nilai amount saat ini di input
            placeholder="Enter amount" // Placeholder untuk input jumlah
          />
        </div>

        <div className="select-group">
          {/* Dropdown untuk memilih mata uang asal (fromCurrency) */}
          <select
            value={fromCurrency} // Nilai dropdown yang dipilih berdasarkan state fromCurrency
            onChange={(e) => setFromCurrency(e.target.value)} // Mengubah state fromCurrency ketika pilihan berubah
          >
            <option value="IDR">IDR</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="CAD">CAD</option>
            <option value="INR">INR</option>
          </select>

          {/* Dropdown untuk memilih mata uang tujuan (toCurrency) */}
          <select
            value={toCurrency} // Nilai dropdown yang dipilih berdasarkan state toCurrency
            onChange={(e) => setToCurrency(e.target.value)} // Mengubah state toCurrency ketika pilihan berubah
          >
            <option value="IDR">IDR</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="CAD">CAD</option>
            <option value="INR">INR</option>
          </select>
        </div>

        <div className="result">
          {/* Menampilkan pesan error jika ada */}
          {error && <div className="error">{error}</div>}

          {/* Menampilkan loading atau hasil konversi */}
          {isLoading ? (
            <div className="loading">Loading...</div> // Menampilkan pesan "Loading..." saat sedang menunggu data
          ) : rate > 0 ? (
            <p>
              {amount} {fromCurrency} is equal to {rate.toFixed(2)} {toCurrency}
              .
            </p> // Menampilkan hasil konversi jika rate lebih dari 0
          ) : (
            <p>
              Please enter an amount and select currencies to see the
              conversion.
            </p> // Menampilkan pesan jika user belum memilih mata uang atau memasukkan jumlah
          )}
        </div>
      </div>
    </div>
  );
}
