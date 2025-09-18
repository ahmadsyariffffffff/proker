import React from "react";
import { Link } from "react-router-dom";

export default function Sejarah() {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <header className="text-center">
        <h1 className="text-3xl text-center font-extrabold text-gray-800 mb-2">
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
        <p className="text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          iure, ratione enim inventore voluptatum ipsum, nisi maiores mollitia
          itaque accusantium sequi adipisci perferendis amet deleniti labore
          expedita et fuga suscipit?
        </p>
      </section>

      {/* Visi */}
      <section className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
        <h2 className="text-xl font-semibold text-green-700 mb-3">Visi</h2>
        <p className="text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
          corrupti iusto, saepe neque expedita obcaecati, officia commodi qui,
          blanditiis provident molestias. Possimus tempora fugiat hic,
          reiciendis corrupti quidem ex molestiae!
        </p>
      </section>

      {/* Misi */}
      <section className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
        <h2 className="text-xl font-semibold text-green-700 mb-3">Misi</h2>
        <p className="text-gray-700 leading-relaxed">
          Misi kami adalah menjadikan desa ini lebih maju, mandiri, dan
          sejahtera.
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
