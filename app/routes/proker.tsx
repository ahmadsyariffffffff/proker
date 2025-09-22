import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ProgramKerjaKebijakan() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const programKerja = {
  "A. Sub Bidang Pendidikan": [
    "Pengadaan pagar sekolah SDI Balang Punia 150 M",
    "Vevin blok lapangan upacara SD Balang Punia 25+45 M",
    "Pengadaan vevin blok lapangan upacara SDI Dusun Biring Romang 30x50 M dan drainase 250 M",
    "Pengadaan vevin Blok lapangan upacara SMP 1 Pattallassang 35x50 M",
    "Pengadaan pagar SMP 1 Pattallassang 150 M",
  ],
  "B. Sub Bidang Kesehatan": [
    "Pengadaan mobil ambulance desa",
    "Pengadaan veving 15x20 M2 Pustu",
    "Pengadaan pagar PUSTU 80 M",
  ],
  "C. Sub Bidang Perindustrian": [
    "Pengadaan mesin jahit 20 unit",
    "Pengadaan mesin parut kelapa 10 unit 5 dusun",
    "Pengadaan perlengkapan perbengkelan",
    "Pengadaan pasar desa Panaikang",
  ],
  "D. Sub Bidang Peternakan": [
    "Pengadaan bibit sapi 50 ekor dan kandangnya",
    "Pengadaan bibit itik sebanyak 5000 ekor",
    "Pengadaan bibit ikan nila 10.000 ekor",
  ],
  "E. Sub Bidang Pertanian": [
    "Pengadaan hendtraktor roda 4 sebanyak 5 unit",
    "Pengadaan saluran irigasi 5000 M di 5 dusun",
    "Pengadaan traktor dua roda 5 unit",
    "Pengadaan bibit padi 50 ton untuk 27 kelompok tani",
    "Pengadaan 50 ton bibit jagung untuk 27 kelompok tani",
    "Pengadaan mesin pompa air 3 ml sebanyak 10 unit",
    "Pengadaan mesin pompa air 8 ml sebanyak 10 unit",
    "Pengadaan penggiling padi 5 unit",
    "Pengadaan penggiling padi dan jagung",
    "Pengadaan pupuk organik sebanyak 50 ton",
    "Pengadaan jalan tani dan taludnya 350 M",
    "Pengadaan mesin rumput sebanyak 5 unit",
    "Pengadaan pagar kantor 85 M",
  ],
  "F. Sub Bidang Pekerjaan Umum dan Penataan Ruang": [
    "Pengadaan sumur bor sebanyak 2 unit",
    "Pengadaan gernase 3000 M di dusun Biring Romang, dusun Saile dan sertu",
    "Pengadaan gernase 2000 M jalan poros dusun Balang Punia, dusun Je'netallassa dan sertu",
    "Pengaspalan pengecoran jl poros provinsi Panaikang, Bu'rung-bu'rung 5 KM",
    "Pengadaan pagar keliling lapangan Balang Punia 400 M2 dan pondasi keliling serta timbunannya",
    "Pengaspalan 1000 M jl lorong desa Panaikang",
  ],
  "G. Sub Bidang Keagamaan": [
    "Pengadaan gaji insentif imam desa dan imam dusun",
    "Bantuan pembangunan pagar masjid 50 M",
  ],
};


  const kebijakan = [
    {
      judul: "Kebijakan Lingkungan",
      isi: "Program penghijauan dan pengelolaan sampah terpadu.",
    },
    {
      judul: "Kebijakan Sosial",
      isi: "Bantuan untuk warga miskin, janda, yatim piatu, dan lansia.",
    },
    {
      judul: "Kebijakan Kesehatan & Pendidikan",
      isi: "Wajib posyandu setiap bulan dan dukungan penuh untuk PAUD/TK.",
    },
  ];

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <h1 className="text-3xl font-bold text-green-700 mb-4">
        Program Kerja & Kebijakan Desa
      </h1>
      <p className="text-gray-600 mb-8">
        Halaman ini berisi rencana kerja desa berdasarkan bidang serta kebijakan
        yang telah ditetapkan untuk mendukung pembangunan desa secara
        berkelanjutan.
      </p>

      {/* Program Kerja */}
      <h2 className="text-2xl font-semibold text-green-600 mb-3">Program Kerja</h2>
      <div className="space-y-4 mb-8">
        {Object.entries(programKerja).map(([bidang, items], idx) => (
          <div key={idx} className="bg-white shadow rounded-xl p-4">
            <h3 className="text-lg font-semibold mb-2">{bidang}</h3>
            <ul className="list-disc list-inside text-gray-700">
              {items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Kebijakan Desa */}
      <h2 className="text-2xl font-semibold text-green-600 mb-3">Kebijakan Desa</h2>
      <div className="space-y-3">
        {kebijakan.map((k, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggleAccordion(idx)}
              className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 transition"
            >
              <span className="font-medium">{k.judul}</span>
              <span>{openIndex === idx ? "−" : "+"}</span>
            </button>
            {openIndex === idx && (
              <div className="p-4 text-gray-700 bg-white">{k.isi}</div>
            )}
          </div>
        ))}
      </div>

      {/* Link navigasi */}
      <div className="mt-6">
        <Link
          to="/kebijakan"
          className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Pergi ke Halaman Program Kerja
        </Link>
      </div>
    </div>
  );
}
