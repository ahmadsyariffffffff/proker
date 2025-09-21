import type { Route } from "./+types/home";
import { Link } from "react-router";

export default function Home() {
  return (
    <div
      className="p-6 min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/desa.jpg')" }} // gambar dari public/bg-desa.jpg
    >
      {/* Overlay biar teks tetap terbaca */}
      <div className="bg-black/40 min-h-screen p-6 rounded-xl">
        {/* Sambutan Kepala Desa */}
        <section className="mb-8 text-center text-white">
          <h1 className="text-3xl font-bold mb-4">
            Selamat Datang di Desa Panaikang
          </h1>
          <p className="max-w-2xl mx-auto">
            Assalamu’alaikum warahmatullahi wabarakatuh.  
            Atas nama pemerintah desa, kami mengucapkan selamat datang di website Profil Desa Panaikang. 
            Semoga website ini menjadi sarana informasi dan komunikasi yang bermanfaat bagi masyarakat.
          </p>
          <p className="mt-4 font-semibold">– Kepala Desa</p>
        </section>

        {/* Informasi Desa */}
        <section className="mb-8 text-white">
          <h2 className="text-2xl font-semibold mb-2">Tentang Desa</h2>
          <p>
            Desa Panaikang memiliki sejarah panjang dalam perkembangan masyarakat lokal.  
            Dengan visi <span className="font-semibold">“Mewujudkan Desa Mandiri, Sejahtera, dan Berdaya Saing”</span>  
            serta misi untuk meningkatkan pelayanan, memberdayakan masyarakat, dan menjaga kearifan lokal.
          </p>
        </section>

        {/* Banner / Foto Desa */}
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-white">Kegiatan & Dokumentasi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img
              src="/desa.jpg"
              alt="Banner Desa"
              className="rounded-xl shadow-md"
            />
            <img
              src="https://placehold.co/400x250?text=Kegiatan+1"
              alt="Kegiatan Desa"
              className="rounded-xl shadow-md"
            />
            <img
              src="https://placehold.co/400x250?text=Kegiatan+2"
              alt="Kegiatan Desa"
              className="rounded-xl shadow-md"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
