import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
  type PieLabelRenderProps,
} from "recharts";

export default function DataFasilitas() {
  const fasilitas = [
    {
      nama: "SD Negeri 1 Desa Makmur",
      jenis: "Sekolah",
      gambar: "/images/fasilitas/sd1.jpg",
    },
    {
      nama: "Puskesmas Desa Sehat",
      jenis: "Puskesmas",
      gambar: "/images/fasilitas/puskesmas.jpg",
    },
    {
      nama: "Masjid Al-Ikhlas",
      jenis: "Tempat Ibadah",
      gambar: "ahmad.png",
    },
    {
      nama: "Gereja Santo Yosef",
      jenis: "Tempat Ibadah",
      gambar: "/images/fasilitas/gereja.jpg",
    },
  ];

  // Hitung jumlah fasilitas berdasarkan jenis
  const dataJenis = Object.values(
    fasilitas.reduce((acc, f) => {
      acc[f.jenis] = acc[f.jenis] || { name: f.jenis, value: 0 };
      acc[f.jenis].value++;
      return acc;
    }, {} as Record<string, { name: string; value: number }>)
  );

  const COLORS = ["#22c55e", "#3b82f6", "#f97316", "#9333ea"];

  // fungsi label agar TypeScript aman
  const renderLabel = ({ name, percent }: PieLabelRenderProps) =>
    `${name} ${(percent ?? 0 * 100).toFixed(0)}%`;

  return (
    <div className="p-4 sm:p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold text-green-700 mb-6 text-center sm:text-left">
        Data Fasilitas Umum
      </h1>

      {/* Grafik Pie */}
      <div className="bg-white shadow rounded-xl p-4 sm:p-6 mb-8">
        <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-700 text-center sm:text-left">
          Distribusi Fasilitas Umum
        </h2>
        <div className="w-full h-64 sm:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
  data={dataJenis}
  cx="50%"
  cy="50%"
  labelLine={false}
  outerRadius="80%"
  fill="#8884d8"
  dataKey="value"
  label={({ name, percent }: { name?: string; percent?: number }) =>
    `${name ?? ""} ${(percent ?? 0 * 100).toFixed(0)}%`
  }
>
  {dataJenis.map((_, index) => (
    <Cell
      key={`cell-${index}`}
      fill={COLORS[index % COLORS.length]}
    />
  ))}
</Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Daftar detail */}
      <div className="grid gap-6">
        {fasilitas.map((f, i) => (
          <div
            key={i}
            className={`bg-white shadow rounded-xl p-4 flex flex-col sm:flex-row items-center gap-4 ${
              i % 2 !== 0 ? "sm:flex-row-reverse" : ""
            }`}
          >
            <img
              src={f.gambar}
              alt={f.nama}
              className="w-full sm:w-[200px] h-[180px] sm:h-[200px] object-cover rounded-lg"
            />
            <div className="text-center sm:text-left">
              <h2 className="text-lg sm:text-xl font-semibold">{f.nama}</h2>
              <p className="text-gray-600">
                <strong>Jenis:</strong> {f.jenis}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
