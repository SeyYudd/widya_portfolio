'use client';

export default function ExperienceNew() {
  const experiences = [
    {
      company: "Golden Tsunami Entertainment",
      role: "Sekretaris",
      period: "2022 - Sekarang",
      color: "from-[var(--sage-green)] to-[var(--sage-green-dark)]",
      icon: "🎵",
      highlights: [
        "Mengoordinasikan acara musik skala besar dengan 1.000+ peserta",
        "Mengelola pembuatan dan distribusi 1.000+ kartu ID",
        "Menangani komunikasi media dan siaran pers",
        "Merampingkan dokumentasi dan pelaporan acara"
      ],
      size: "lg"
    },
    {
      company: "PT Famili Dinamika Multikresi",
      role: "Sekretaris",
      period: "2021 - 2022",
      color: "from-[var(--pastel-pink)] to-[#FF9EBC]",
      icon: "🍽️",
      highlights: [
        "Mengelola pesanan katering untuk klien korporat",
        "Berkoordinasi dengan berbagai vendor dan pemasok",
        "Mengimplementasikan sistem petty cash yang terstruktur",
        "Memelihara dokumentasi keuangan yang akurat"
      ],
      size: "lg"
    },
    {
      company: "TK Mandala Putra",
      role: "Guru",
      period: "2020 - 2021",
      color: "from-[var(--cream-dark)] to-[var(--cream)]",
      icon: "🎓",
      highlights: [
        "Membina perkembangan anak secara holistik",
        "Membangun komunikasi efektif dengan orang tua",
        "Membuat materi edukasi yang menarik",
        "Mengembangkan soft skills melalui pengajaran"
      ],
      size: "md"
    },
    {
      company: "PT Way Livestock",
      role: "Magang - Admin Konstruksi",
      period: "2019",
      color: "from-[var(--sage-green-light)] to-white",
      icon: "🏗️",
      highlights: [
        "Membantu administrasi proyek konstruksi",
        "Mengelola dokumentasi proyek",
        "Berkoordinasi dengan kontraktor"
      ],
      size: "sm"
    },
    {
      company: "PT Indo Megah Abadi",
      role: "Magang - Rekrutmen HR",
      period: "2019",
      color: "from-[var(--pastel-pink-light)] to-white",
      icon: "👥",
      highlights: [
        "Mendukung rekrutmen untuk 350+ pelamar",
        "Menyaring resume dan menjadwalkan wawancara",
        "Memelihara database kandidat"
      ],
      size: "sm"
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-br from-[var(--cream)] to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-6xl opacity-20 animate-float">⭐</div>
      <div className="absolute bottom-20 right-10 text-5xl opacity-20 animate-float" style={{ animationDelay: '1s' }}>✨</div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-6xl font-bold text-[var(--text-dark)] mb-4">
              Pengalaman
            </h2>
            {/* Hand-drawn underline */}
            <svg viewBox="0 0 200 10" className="absolute -bottom-2 left-0 w-full">
              <path d="M5,5 Q100,8 195,5" fill="none" stroke="var(--sage-green)" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
          <p className="mt-8 text-lg text-gray-600 max-w-2xl mx-auto">
            Dari acara musik hingga koordinasi katering dan pendidikan—inilah perjalanan saya
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {/* Golden Tsunami - Large Card (spans 2 columns) */}
          <div className="md:col-span-2 lg:col-span-2 bento-card bg-gradient-to-br from-[var(--sage-green-light)] to-white hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className="text-5xl">{experiences[0].icon}</div>
              <span className="badge-pill text-xs">Saat Ini</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-dark)] mb-2">{experiences[0].company}</h3>
            <p className="text-lg font-semibold text-[var(--sage-green-dark)] mb-2">{experiences[0].role}</p>
            <p className="text-sm text-gray-500 mb-4">{experiences[0].period}</p>
            <ul className="space-y-2">
              {experiences[0].highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2 text-[var(--text-dark)]">
                  <span className="text-[var(--sage-green)] mt-1">▸</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* TK Mandala Putra - Medium Card */}
          <div className="bento-card bg-gradient-to-br from-[var(--pastel-pink-light)] to-white hover:scale-[1.02] transition-transform duration-300">
            <div className="text-5xl mb-4">{experiences[2].icon}</div>
            <h3 className="text-xl font-bold text-[var(--text-dark)] mb-2">{experiences[2].company}</h3>
            <p className="font-semibold text-[var(--sage-green-dark)] mb-2">{experiences[2].role}</p>
            <p className="text-sm text-gray-500 mb-4">{experiences[2].period}</p>
            <ul className="space-y-2">
              {experiences[2].highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-[var(--text-dark)]">
                  <span className="text-[var(--pastel-pink)]" style={{ color: '#FF9EBC' }}>▸</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* PT Famili Dinamika - Large Card (spans 2 columns on lg) */}
          <div className="md:col-span-2 bento-card bg-gradient-to-br from-[var(--cream-dark)] to-white hover:scale-[1.02] transition-transform duration-300">
            <div className="text-5xl mb-4">{experiences[1].icon}</div>
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-dark)] mb-2">{experiences[1].company}</h3>
            <p className="text-lg font-semibold text-[var(--sage-green-dark)] mb-2">{experiences[1].role}</p>
            <p className="text-sm text-gray-500 mb-4">{experiences[1].period}</p>
            <ul className="grid md:grid-cols-2 gap-3">
              {experiences[1].highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2 text-[var(--text-dark)]">
                  <span className="text-[var(--sage-green)] mt-1">▸</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Internships - Small Cards */}
          <div className="bento-card bg-white border-2 border-[var(--sage-green-light)] hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-3xl">{experiences[3].icon}</div>
              <span className="badge-pill text-xs bg-[var(--sage-green-light)]">Magang</span>
            </div>
            <h3 className="text-lg font-bold text-[var(--text-dark)] mb-1">{experiences[3].company}</h3>
            <p className="text-sm font-semibold text-[var(--sage-green-dark)] mb-1">{experiences[3].role}</p>
            <p className="text-xs text-gray-500 mb-3">{experiences[3].period}</p>
            <ul className="space-y-1">
              {experiences[3].highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-[var(--text-dark)]">
                  <span className="text-[var(--sage-green)] text-xs">•</span>
                  <span className="text-xs">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bento-card bg-white border-2 border-[var(--pastel-pink)] hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-3xl">{experiences[4].icon}</div>
              <span className="badge-pill text-xs">Magang</span>
            </div>
            <h3 className="text-lg font-bold text-[var(--text-dark)] mb-1">{experiences[4].company}</h3>
            <p className="text-sm font-semibold text-[var(--sage-green-dark)] mb-1">{experiences[4].role}</p>
            <p className="text-xs text-gray-500 mb-3">{experiences[4].period}</p>
            <ul className="space-y-1">
              {experiences[4].highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-[var(--text-dark)]">
                  <span className="text-[var(--pastel-pink)]" style={{ color: '#FF9EBC' }}>•</span>
                  <span className="text-xs">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
