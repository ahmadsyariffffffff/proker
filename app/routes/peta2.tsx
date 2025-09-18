// main.tsx (entry point)
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";

function Home() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Selamat Datang di Desa</h1>
      <p>Lihat peta desa:</p>
      <Link
        to="/peta"
        className="text-blue-500 underline hover:text-blue-700"
      >
        Buka Peta
      </Link>
    </div>
  );
}

function PetaDesa() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Peta Desa 2D</h1>
      <svg
        width="600"
        height="400"
        viewBox="0 0 600 400"
        className="border border-gray-400"
      >
        {/* Jalan utama */}
        <rect x="0" y="180" width="600" height="40" fill="#aaa" />
        
        {/* Sungai */}
        <rect x="450" y="0" width="60" height="400" fill="#4da6ff" />

        {/* Rumah-rumah */}
        <rect x="50" y="100" width="60" height="60" fill="#ffcc00" stroke="black" />
        <text x="80" y="140" textAnchor="middle" fontSize="12">Rumah A</text>

        <rect x="150" y="100" width="60" height="60" fill="#ffcc00" stroke="black" />
        <text x="180" y="140" textAnchor="middle" fontSize="12">Rumah B</text>

        {/* Sawah */}
        <rect x="50" y="250" width="200" height="100" fill="#66cc66" stroke="black" />
        <text x="150" y="310" textAnchor="middle" fontSize="12">Sawah</text>

        {/* Balai Desa */}
        <rect x="300" y="150" width="100" height="100" fill="#ff6666" stroke="black" />
        <text x="350" y="200" textAnchor="middle" fontSize="12">Balai Desa</text>
      </svg>
      <br />
      <Link to="/" className="text-blue-500 underline hover:text-blue-700">
        Kembali ke Home
      </Link>
    </div>
  );
}

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/peta", element: <PetaDesa /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);