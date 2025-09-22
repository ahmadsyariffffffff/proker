// src/components/Demografi.tsx
import React, { useMemo, useState } from "react";

type HouseHold = {
  id: string;
  namaKepala: string;
  jumlahAnggota: number;
  pekerjaan: string;
  alamat?: string;
};

type DemografiData = {
  totalPenduduk: number;
  totalKK: number;
  mataPencaharian: Record<string, number>;
  households: HouseHold[];
};

const sampleData: DemografiData = {
  totalPenduduk: 2200,
  totalKK: 769,
  mataPencaharian: {
    Petani: 823,
    Nelayan: 0,
    Pedagang: 54,
    "PNS/ASN": 32,
    Wiraswasta: 0,
    Buruh: 187,
    Pesiunan: 4,
    TidakBekerja: 908,
    Lainnya: 287,
  },
  households: [],
};

function numberWithSeparator(n: number) {
  return n.toLocaleString("id-ID");
}

export default function Demografi({ data = sampleData }: { data?: DemografiData }) {


  const jobList = useMemo(() => {
    return ["Semua", ...Object.keys(data.mataPencaharian)];
  }, [data]);

  // Untuk bar chart sederhana: normalisasi ke 100%
  const maxJobCount = Math.max(...Object.values(data.mataPencaharian), 1);

  function exportCSV() {
    const headers = ["ID KK", "Nama Kepala", "Jumlah Anggota", "Pekerjaan", "Alamat"];
    const rows = data.households.map((h) => [
      h.id,
      h.namaKepala,
      String(h.jumlahAnggota),
      h.pekerjaan,
      h.alamat ?? "",
    ]);
    const csv =
      [headers, ...rows].map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `demografi_kk_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Data Demografi Desa</h1>
          <p className="text-sm text-gray-600">
            Ringkasan jumlah penduduk, rumah tangga (KK) dan mata pencaharian.
          </p>
        </div>

        <div className="flex gap-3 items-center">
          <button
            onClick={exportCSV}
            className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700"
            title="Export data KK ke CSV"
          >
            Export CSV
          </button>
        </div>
      </header>

      {/* Summary cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-2xl p-4 shadow border border-gray-100">
          <p className="text-sm text-gray-500">Total Penduduk</p>
          <p className="text-2xl font-bold text-gray-900">{numberWithSeparator(data.totalPenduduk)}</p>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow border border-gray-100">
          <p className="text-sm text-gray-500">Total KK</p>
          <p className="text-2xl font-bold text-gray-900">{numberWithSeparator(data.totalKK)}</p>
        </div>
      </section>

      {/* Mata pencaharian horizontal bars */}
      <section className="bg-white rounded-2xl p-4 shadow border border-gray-100 mb-6">
        <h2 className="font-semibold text-lg mb-3">Mata Pencaharian</h2>
        <div className="space-y-3">
          {Object.entries(data.mataPencaharian).map(([job, count]) => {
            const pct = Math.round((count / maxJobCount) * 100);
            return (
              <div key={job} className="flex items-center gap-3">
                <div className="w-40 text-sm text-gray-700">{job}</div>
                <div className="flex-1 bg-gray-100 rounded-full h-4 overflow-hidden">
                  <div
                    className="h-4 rounded-full bg-green-600"
                    style={{ width: `${pct}%`, maxWidth: "100%" }}
                  />
                </div>
                <div className="w-20 text-right text-sm text-gray-600">{count}</div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
