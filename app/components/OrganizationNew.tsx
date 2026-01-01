'use client';

export default function OrganizationNew() {
  const bemExperience = [
    {
      role: "Kepala Divisi Info-Kom",
      organization: "BEM (Badan Eksekutif Mahasiswa)",
      period: "2020 - 2021",
      icon: "📢",
      achievements: [
        "Memimpin divisi informasi dan komunikasi",
        "Mengelola media sosial dan strategi konten",
        "Mengoordinasikan promosi acara dan humas",
        "Membuat konten visual yang menarik untuk kampanye"
      ]
    },
    {
      role: "Sekretaris",
      organization: "BEM (Badan Eksekutif Mahasiswa)",
      period: "2019 - 2020",
      icon: "📝",
      achievements: [
        "Mengelola korespondensi dan dokumentasi resmi",
        "Mengoordinasikan jadwal dan agenda rapat",
        "Memelihara catatan dan arsip organisasi",
        "Mendukung proses pengambilan keputusan eksekutif"
      ]
    }
  ];

  return (
    <section id="organizations" className="py-20 px-6 bg-gradient-to-br from-[var(--cream)] via-white to-[var(--pastel-pink-light)] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-20 opacity-20 animate-float">
        <svg width="120" height="120" viewBox="0 0 120 120">
          <path d="M60,20 L70,50 L100,55 L75,75 L82,105 L60,90 L38,105 L45,75 L20,55 L50,50 Z" fill="var(--sage-green)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-6xl font-bold text-[var(--text-dark)] mb-4">
              Kepemimpinan & Organisasi
            </h2>
            {/* Hand-drawn underline */}
            <svg viewBox="0 0 400 10" className="absolute -bottom-2 left-0 w-full">
              <path d="M5,5 Q200,0 395,5" fill="none" stroke="var(--sage-green)" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
          <p className="mt-8 text-lg text-gray-600 max-w-2xl mx-auto">
            Membangun keterampilan kepemimpinan melalui keterlibatan aktif di organisasi kampus
          </p>
        </div>

        {/* Timeline Style Layout */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--sage-green)] via-[var(--pastel-pink)] to-[var(--sage-green)]"></div>

          <div className="space-y-12">
            {bemExperience.map((exp, idx) => (
              <div 
                key={idx} 
                className={`relative grid md:grid-cols-2 gap-8 items-center ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[var(--sage-green)] to-[var(--pastel-pink)] shadow-lg border-4 border-white"></div>
                </div>

                {/* Content Card - alternating sides */}
                <div className={`${idx % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'}`}>
                  <div className="bento-card bg-white hover:scale-[1.03] transition-all duration-300 h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div 
                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg"
                        style={{ 
                          background: idx % 2 === 0 
                            ? 'linear-gradient(135deg, var(--sage-green), var(--sage-green-light))' 
                            : 'linear-gradient(135deg, var(--pastel-pink), var(--pastel-pink-light))'
                        }}
                      >
                        {exp.icon}
                      </div>
                      <span className="badge-pill text-xs">{exp.period}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-[var(--text-dark)] mb-2">
                      {exp.role}
                    </h3>
                    <p className="text-lg font-semibold mb-4" style={{ color: idx % 2 === 0 ? 'var(--sage-green-dark)' : '#FF9EBC' }}>
                      {exp.organization}
                    </p>

                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achIdx) => (
                        <li key={achIdx} className="flex items-start gap-3">
                          <span 
                            className="mt-1 text-lg" 
                            style={{ color: idx % 2 === 0 ? 'var(--sage-green)' : '#FF9EBC' }}
                          >
                            ▸
                          </span>
                          <span className="text-[var(--text-dark)]">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className={`hidden md:block ${idx % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'}`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Badges Section */}
        <div className="mt-16 text-center">
          <div className="inline-block bento-card bg-gradient-to-r from-[var(--sage-green-light)] to-[var(--pastel-pink-light)] max-w-4xl">
            <h3 className="text-xl font-bold text-[var(--text-dark)] mb-6">Kualitas Kepemimpinan Utama</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow-sm border-2 border-[var(--sage-green)]">
                <span className="text-xl">🎯</span>
                <span className="font-semibold text-[var(--text-dark)]">Berpikir Strategis</span>
              </div>
              <div className="flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow-sm border-2 border-[var(--pastel-pink)]">
                <span className="text-xl">👥</span>
                <span className="font-semibold text-[var(--text-dark)]">Kepemimpinan Tim</span>
              </div>
              <div className="flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow-sm border-2 border-[var(--sage-green)]">
                <span className="text-xl">💡</span>
                <span className="font-semibold text-[var(--text-dark)]">Inisiatif Kreatif</span>
              </div>
              <div className="flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow-sm border-2 border-[var(--pastel-pink)]">
                <span className="text-xl">📊</span>
                <span className="font-semibold text-[var(--text-dark)]">Manajemen Proyek</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative wavy line */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 60" className="w-full">
          <path d="M0,30 Q300,10 600,30 T1200,30" fill="none" stroke="var(--sage-green-light)" strokeWidth="2" opacity="0.5"/>
          <path d="M0,40 Q300,20 600,40 T1200,40" fill="none" stroke="var(--pastel-pink)" strokeWidth="2" opacity="0.5"/>
        </svg>
      </div>
    </section>
  );
}
