import React from "react";

export default function Kontak() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Kontak Desa Makmur</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Info Kontak */}
        <div className="space-y-4">
          <div className="bg-white shadow rounded-xl p-4">
            <h2 className="text-xl font-semibold mb-2">Alamat Kantor</h2>
            <p>Jl. Poros Pakkatto Pattallassang</p>
            <p>Kec. Pattallassang, Kab. Gowa</p>
          </div>

          <div className="bg-white shadow rounded-xl p-4">
            <h2 className="text-xl font-semibold mb-2">Email Resmi</h2>
            <p>desapanaikang@gmail.com email dummy</p>
          </div>
        </div>

        {/* Google Maps */}
        <div className="bg-white shadow rounded-xl overflow-hidden">
          <iframe
            title="Lokasi Desa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18873.894949623074!2d119.57238220905724!3d-5.191476516576447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee5eafa291fc3%3A0xe7f6e54298df8ea8!2sPanaikang%2C%20Kec.%20Pattallassang%2C%20Kabupaten%20Gowa%2C%20Sulawesi%20Selatan!5e1!3m2!1sid!2sid!4v1756401466949!5m2!1sid!2sid"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
