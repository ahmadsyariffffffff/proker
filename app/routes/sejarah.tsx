import React from "react";
import { Link } from "react-router-dom";

export default function Sejarah() {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <header className="text-center">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
          Sejarah Desa
        </h1>
        <p className="text-gray-600">
          Mengenal sejarah, visi, dan misi desa kita.
        </p>
      </header>

      {/* Sejarah Desa */}
      <section className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
        <h2 className="text-xl font-semibold text-green-700 mb-3">
          Sejarah Desa
        </h2>
        <p className="text-gray-700 leading-relaxed font-bold">
          "Desa Panaikang merupakan hasil pemekaran dari Desa Pallantikang dan Desa Pacellekang 
          yang pada awalnya berada dalam wilayah Kecamatan Bontomarannu Kabupaten Gowa. Sejak 
          tahun 2004, Desa Panaikang resmi menjadi desa definitif dan masuk dalam wilayah Kecamatan 
          Pattallassang. Pada periode awal, desa ini dipimpin oleh Muh. Said Dg. Mangati (Alm.) sebelum 
          dilanjutkan oleh beberapa kepala desa berikutnya, hingga pada tahun 2007 terpilih Ismail G. yang
          memimpin hingga kini. Dalam perjalanan pemerintahannya, Desa Panaikang terus mengalami perkembangan
          dengan dukungan perangkat desa, kepala dusun, serta tokoh agama yang berperan aktif dalam membangun masyarakat."
        </p>
      </section>

      {/* Visi */}
      <section className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
        <h2 className="text-xl font-semibold text-green-700 mb-3">Visi</h2>
        <p className="text-gray-700 leading-relaxed font-bold">
          “Terwujudnya Panaikang sebagai Desa yang mandiri berbasis Pertanian, 
          Perkebunan, Perikanan, Perdagangan dan Perindustrian untuk mencapai 
          masyarakat yang sehat, cerdas dan lebih sejahtera.”
        </p>
      </section>

      {/* Misi */}
      <section className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
        <h2 className="text-xl font-semibold text-green-700 mb-3">Misi</h2>
        <p className="text-gray-700 leading-relaxed">
            <ul className="list-decimal list-inside text-gray-700 leading-relaxed text-justify space-y-2 font-bold">
  <li>Meningkatkan pembangunan infrastruktur yang mendukung perekonomian desa, seperti jalan, jembatan serta infrastruktur strategis lainnya.</li>
  <li>Meningkatkan pembangunan di bidang kesehatan untuk mendorong derajat kesehatan masyarakat agar dapat bekerja lebih optimal dan memiliki harapan hidup yang lebih panjang.</li>
  <li>Meningkatkan pembangunan di bidang pendidikan untuk mendorong peningkatan kualitas sumber daya manusia agar memiliki kecerdasan dan daya saing yang lebih baik.</li>
  <li>Meningkatkan pembangunan ekonomi dengan mendorong semakin tumbuh dan berkembangnya pembangunan di bidang pertanian, industri, perdagangan, dan pariwisata.</li>
  <li>Menciptakan tata kelola pemerintahan yang baik (good governance) berdasarkan demokratisasi, transparansi, penegakan hukum, berkeadilan, kesetaraan gender, dan pelayanan kepada masyarakat.</li>
  <li>Mengupayakan pelestarian sumber daya alam untuk memenuhi kebutuhan dan pemerataan pembangunan guna meningkatkan perekonomian.</li>
</ul>

        </p>
      </section>

      {/* Peta Desa */}
      <section className="rounded-2xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18873.894949623074!2d119.57238220905724!3d-5.191476516576447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee5eafa291fc3%3A0xe7f6e54298df8ea8!2sPanaikang%2C%20Kec.%20Pattallassang%2C%20Kabupaten%20Gowa%2C%20Sulawesi%20Selatan!5e1!3m2!1sid!2sid!4v1756401466949!5m2!1sid!2sid"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      {/* Tombol kembali */}
      <div className="text-center">
        <Link
          to="/"
          className="inline-block px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
        >
          Kembali ke Home
        </Link>
      </div>
    </div>
  );
}
