import React from "react";

export default function KegiatanDesa() {
  const kegiatan = [
    {
      judul: "Kerja Bakti Bersih Desa",
      tanggal: "2 Agustus 2025",
      isi: "Warga bergotong royong membersihkan halaman desa.",
      gambar: "/bakti.jpg",
    },
    {
      judul: "Festival Panen Raya",
      tanggal: "18 September 2025",
      isi: "Pelatihan membuat abon berbahan ikan.",
      gambar: "abon.jpg",
    },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-green-700 mb-6">
        Informasi Kegiatan Desa
      </h1>
      <div className="grid md:grid-cols-2 gap-6">
        {kegiatan.map((k, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img src={k.gambar} alt={k.judul} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{k.judul}</h2>
              <p className="text-sm text-gray-500 mb-2">{k.tanggal}</p>
              <p className="text-gray-600">{k.isi}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
