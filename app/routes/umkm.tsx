import React from "react";

export default function DataUmkm() {
  const umkmList = [
    {
      nama: "Abon",
      jenis: "Kuliner",
      produk: "Abon Ikan Gabus",
      gambar: "/abon.jpg",
    },
    {
      nama: "Kerajinan Rotan Makmur",
      jenis: "Kerajinan",
      produk: "Kursi, Meja, Anyaman Rotan",
      gambar: "https://via.placeholder.com/300x200.png?text=Kerajinan",
    },
    {
      nama: "Tani Jaya",
      jenis: "Pertanian",
      produk: "Beras Organik, Sayur Mayur",
      gambar: "https://via.placeholder.com/300x200.png?text=Pertanian",
    },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-green-700 mb-4">
        Data UMKM & Potensi Ekonomi Desa
      </h1>
      <p className="text-gray-600 mb-8">
        Berikut adalah daftar UMKM dan potensi ekonomi desa.
      </p>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {umkmList.map((umkm, idx) => (
          <div
            key={idx}
            className="block bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition hover:scale-105"
          >
            <img
              src={umkm.gambar}
              alt={umkm.nama}
              className="w-full h-40 object-cover"
            />

            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {umkm.nama}
              </h2>
              <span className="inline-block bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full mt-1 mb-3">
                {umkm.jenis}
              </span>
              <p className="text-gray-600 text-sm">
                <span className="font-medium">Produk:</span> {umkm.produk}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
