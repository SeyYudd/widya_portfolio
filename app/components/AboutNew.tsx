"use client";

export default function AboutNew() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-white relative overflow-hidden"
    >
      {/* Decorative wavy line */}
      <div className="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 1200 40" className="w-full">
          <path
            d="M0,20 Q300,0 600,20 T1200,20"
            fill="none"
            stroke="var(--sage-green-light)"
            strokeWidth="2"
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-6xl font-bold text-[var(--text-dark)] mb-4">
              Hi I'm Widya!
            </h2>
            {/* Hand-drawn underline */}
            <svg
              viewBox="0 0 200 10"
              className="absolute -bottom-2 left-0 w-full"
            >
              <path
                d="M5,5 Q100,0 195,5"
                fill="none"
                stroke="var(--pastel-pink)"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="mt-8 text-2xl opacity-60">✨</div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 ">
          <div className="bento-card bg-gradient-to-br from-[var(--cream)] to-white">
              <h3 className="text-2xl font-bold text-[var(--text-dark)] mb-6">
             Sedikit Cerita Tentang Aku
            </h3>
            <p className="text-lg leading-relaxed text-[var(--text-dark)]">
              Aku Widya. Aku suka menggabungkan hal yang terstruktur
              dengan ide-ide kreatif. Di dunia administrasi dan komunikasi, Aku
              merasa cocok karena bisa bekerja rapi, tapi tetap punya ruang
              untuk berkreasi.
            </p>

            <p className="text-lg leading-relaxed text-[var(--text-dark)]">
              Sehari-hari Aku terbiasa mengelola dokumen, mengatur petty cash,
              menyusun kebutuhan acara, hingga menyiapkan materi visual dan
              komunikasi agar informasi jadi lebih mudah dipahami.
            </p>

            <p className="text-lg leading-relaxed text-[var(--text-dark)]">
              Bagi Aku, pekerjaan yang baik bukan hanya selesai, tapi juga
              membantu orang lain bekerja lebih nyaman. Itulah alasan Aku
              selalu mencoba membuat alur kerja lebih rapi, jelas, dan efektif.
            </p>
          </div>

          {/* Right - Key Highlights */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[var(--text-dark)] mb-6">
              Yang Aku Tawarkan
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border-2 border-[var(--sage-green-light)] hover:shadow-lg transition-shadow">
                <div className="text-3xl">📋</div>
                <div>
                  <h4 className="font-semibold text-[var(--text-dark)] mb-1">
                    Keunggulan Administrasi
                  </h4>
                  <p className="text-sm text-gray-600">
                    Pengarsipan dokumen yang teliti, manajemen petty cash, dan koordinasi operasional
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border-2 border-[var(--pastel-pink)] hover:shadow-lg transition-shadow">
                <div className="text-3xl">🎨</div>
                <div>
                  <h4 className="font-semibold text-[var(--text-dark)] mb-1">
                    Komunikasi Kreatif
                  </h4>
                  <p className="text-sm text-gray-600">
                    Poster menarik, konten media sosial, dan pembuatan katalog menggunakan Canva & CapCut
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border-2 border-[var(--cream-dark)] hover:shadow-lg transition-shadow">
                <div className="text-3xl">🎭</div>
                <div>
                  <h4 className="font-semibold text-[var(--text-dark)] mb-1">
                    Koordinasi Acara
                  </h4>
                  <p className="text-sm text-gray-600">
                    Pengalaman mengelola 1.000+ peserta, hubungan vendor, dan komunikasi media
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border-2 border-[var(--sage-green)] hover:shadow-lg transition-shadow">
                <div className="text-3xl">👥</div>
                <div>
                  <h4 className="font-semibold text-[var(--text-dark)] mb-1">
                    Keterampilan Interpersonal
                  </h4>
                  <p className="text-sm text-gray-600">
                    Komunikasi yang kuat, keterlibatan orang tua, dan kemampuan kolaborasi tim
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-0 right-10 opacity-30">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="var(--pastel-pink)"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <circle
            cx="50"
            cy="50"
            r="30"
            fill="none"
            stroke="var(--sage-green)"
            strokeWidth="2"
            strokeDasharray="3,6"
          />
        </svg>
      </div>
    </section>
  );
}
