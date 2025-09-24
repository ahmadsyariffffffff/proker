import React from "react";

export default function FotoKegiatan() {
  const kegiatan = [
    {
      judul: "Gotong Royong Bersih Masjid",
      deskripsi: "Warga desa bergotong royong membersihkan lingkungan masjid agar tetap terlihat.",
      gambar: "royong.jpg",
    },
    {
      judul: "Ramah Tamah 17 Agustus",
      deskripsi: "Acara ramah tamah 17 agustus di desa panikang.",
      gambar: "ramah.jpg",
    },
    {
      judul: "Gotong Royong Desa",
      deskripsi: "Kegiatan mengali jalur air.",
      gambar: "bakti2.jpg",
    },
    {
      judul: "Maulid Nabi",
      deskripsi: "Merayakan maulid nabi.",
      gambar: "maulid.jpg",
    },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-green-700 mb-10 text-center">
        Foto Kegiatan Desa
      </h1>

      <div className="space-y-12">
        {kegiatan.map((k, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row items-center gap-6 ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Gambar */}
            <img
              src={k.gambar}
              alt={k.judul}
              className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow-lg"
            />

            {/* Teks */}
            <div className="md:w-1/2 bg-white shadow rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {k.judul}
              </h2>
              <p className="text-gray-600">{k.deskripsi}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
