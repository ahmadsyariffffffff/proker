import type { Route } from "./+types/home";
import { Link } from "react-router";

export default function Home() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/desa.jpg')" }}
    >
      {/* Overlay full tanpa rounded dan tanpa padding luar */}
      <div className="bg-black/40 min-h-screen w-full">
        {/* Konten diberi container agar teks tidak terlalu mepet */}
        <div className="max-w-6xl mx-auto px-6 py-12">
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
  <h2 className="text-2xl font-semibold mb-2 text-white">
    Kegiatan & Dokumentasi
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {[
      { src: "/desa.jpg", alt: "Banner Desa" },
      { src: "/tusuk botol.jpg", alt: "Kegiatan Desa" },
      { src: "/abon.jpg", alt: "Kegiatan Desa" },
    ].map((img, idx) => (
      <div
        key={idx}
        className="h-60 w-full overflow-hidden rounded-xl shadow-md"
      >
        <img
          src={img.src}
          alt={img.alt}
          className="w-full h-full object-cover transform transition duration-300 hover:scale-105"
        />
      </div>
    ))}
  </div>
</section>

        </div>
      </div>
    </div>
  );
}
