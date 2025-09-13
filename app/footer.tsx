import React from "react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white mt-8">
      <div className="max-w-6xl mx-auto px-3 py-3 center grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profil singkat */}
        <div>
          <h2 className="text-lg font-bold mb-3">Desa Panaikang</h2>
          <p className="text-sm">
            Desa panaikang adalah desa yang terus berkembang dengan potensi wisata,
            pertanian, dan UMKM lokal yang maju.
          </p>
        </div>

        {/* Kontak singkat */}
        <div>
          <h2 className="text-lg font-bold mb-3">Kontak</h2>
          <p className="text-sm">Alamat: Jl. Desa Panaikang</p>
          <p className="text-sm">Telepon: 0812-3456-7890</p>
          <p className="text-sm">Email: desapanaikang@email.com</p>
        </div>
      </div>

      <div className="bg-green-800 text-center text-sm py-4">
        © {new Date().getFullYear()} KKN UHM Desa Panaikang. Posko 5.
      </div>
    </footer>
  );
}
