// Mengimpor React Hook 'useState' yang digunakan untuk menyimpan dan mengubah status (state)
import { useState } from "react";

// Ini adalah data yang akan kita tampilkan di setiap tab
const content = [
  {
    summary: "React is a library for building UIs", // Ringkasan tentang tab pertama
    details:
      "React memungkinkan kita membuat antarmuka pengguna dengan cara yang efisien dan fleksibel.",
  },
  {
    summary: "State management is like giving state a home", // Ringkasan tab kedua
    details:
      "State dalam React adalah cara kita menyimpan data di dalam aplikasi.",
  },
  {
    summary: "Props are used to pass data to components", // Ringkasan tab ketiga
    details:
      "Props adalah cara untuk mengirim data dari satu komponen ke komponen lainnya.",
  },
];

export default function App() {
  return (
    <div>
      <Tabbed content={content} />{" "}
      {/* Menampilkan komponen Tabbed dengan data content */}
    </div>
  );
}

console.log(<DifferentContent />);

// Komponen Tabbed, yang merender berbagai tab
function Tabbed({ content }) {
  // 'activeTab' menyimpan tab yang sedang aktif (defaultnya tab pertama dengan nilai 0)
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      {/* Menampilkan 4 tab (tab 0 sampai tab 3), jika tab yang diklik, 'setActiveTab' akan merubah tab yang aktif */}
      <div className="tabs">
        <Tab num={0} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={1} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={2} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={3} activeTab={activeTab} onClick={setActiveTab} />
      </div>

      {/* Tampilkan konten berdasarkan tab yang aktif */}
      {activeTab <= 2 ? (
        // Jika tab aktif antara 0 dan 2, tampilkan konten sesuai tab yang dipilih
        <TabContent
          item={content[activeTab]}
          key={content.at(activeTab).summary}
        />
      ) : (
        // Jika tab ke-3 aktif, tampilkan konten lain yang berbeda
        <DifferentContent />
      )}
    </div>
  );
}

// Komponen Tab, yang merender satu tab
function Tab({ num, activeTab, onClick }) {
  return (
    <button
      className={activeTab === num ? "tab active" : "tab"} // Menentukan apakah tab ini aktif atau tidak
      onClick={() => onClick(num)} // Ketika tab diklik, 'onClick' akan merubah tab yang aktif
    >
      Tab {num + 1} {/* Nama Tab yang ditampilkan */}
    </button>
  );
}

// Komponen TabContent, yang merender konten dari tab yang dipilih
function TabContent({ item }) {
  // Mengelola apakah detail dari tab tersebut ditampilkan atau tidak
  const [showDetails, setShowDetails] = useState(true);
  // Mengelola jumlah 'likes' yang diterima tab ini
  const [likes, setLikes] = useState(0);

  // Fungsi untuk menambah likes setiap kali tombol "+" diklik
  function handleInc() {
    setLikes(likes + 1);
  }
  function handleTripleInc() {
    // setLikes(likes + 1);
    // setLikes(likes + 1);
    // setLikes(likes + 1);

    setLikes((likes) => likes + 1);
    setLikes((likes) => likes + 1);
    setLikes((likes) => likes + 1);
  }

  function handleUndoLater() {
    setTimeout(handleUndo, 2000);
  }

  function handleUndo() {
    setShowDetails(true);
    setLikes(0);
  }

  return (
    <div className="tab-content">
      <h4>{item.summary}</h4> {/* Menampilkan ringkasan tab */}
      {showDetails && <p>{item.details}</p>}{" "}
      {/* Jika showDetails true, tampilkan detail tab */}
      <div className="tab-actions">
        <button onClick={() => setShowDetails((prev) => !prev)}>
          {showDetails ? "Hide" : "Show"} details{" "}
          {/* Tombol untuk menampilkan atau menyembunyikan detail */}
        </button>

        <div className="hearts-counter">
          <span>{likes} ❤️</span> {/* Menampilkan jumlah like */}
          <button onClick={handleInc}>+</button>{" "}
          {/* Tombol untuk menambah like */}
          <button onClick={handleTripleInc}>+++</button>{" "}
        </div>
      </div>
      {/* Tombol Undo - meskipun saat ini tidak ada fungsionalitas tambahan */}
      <div className="tab-undo">
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleUndoLater }>Undo in 2s</button>
      </div>
    </div>
  );
}

// Komponen untuk menampilkan konten berbeda jika tab ke-4 dipilih
function DifferentContent() {
  return (
    <div className="tab-content">
      <h4>I'm a DIFFERENT tab, so I reset state 💣💥</h4>{" "}
      {/* Konten yang berbeda untuk tab ke-4 */}
    </div>
  );
}
