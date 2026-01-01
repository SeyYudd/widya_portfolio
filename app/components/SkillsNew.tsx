'use client';

export default function SkillsNew() {
  const skillCategories = [
    {
      category: "Administrasi",
      icon: "📊",
      color: "var(--sage-green)",
      bgColor: "var(--sage-green-light)",
      skills: [
        { name: "MS Office Suite", icon: "📝" },
        { name: "Manajemen Petty Cash", icon: "💰" },
        { name: "Pengarsipan Dokumen", icon: "📂" },
        { name: "Data Entry", icon: "⌨️" },
        { name: "Penulisan Laporan", icon: "📋" },
        { name: "Koordinasi Rapat", icon: "📅" }
      ]
    },
    {
      category: "Kreatif",
      icon: "🎨",
      color: "#FF9EBC",
      bgColor: "var(--pastel-pink-light)",
      skills: [
        { name: "Canva Pro", icon: "🎨" },
        { name: "CapCut Editing", icon: "🎬" },
        { name: "Konten Media Sosial", icon: "📱" },
        { name: "Pembuatan Katalog", icon: "📖" },
        { name: "Desain Poster", icon: "🖼️" },
        { name: "Materi Brand", icon: "✨" }
      ]
    },
    {
      category: "Tools Teknis",
      icon: "💻",
      color: "var(--sage-green-dark)",
      bgColor: "var(--cream-dark)",
      skills: [
        { name: "Trello", icon: "📊" },
        { name: "WhatsApp Business", icon: "💬" },
        { name: "LinkedIn", icon: "👔" },
        { name: "Glints", icon: "🔍" },
        { name: "Google Workspace", icon: "☁️" },
        { name: "Zoom", icon: "🎥" }
      ]
    },
    {
      category: "Soft Skills",
      icon: "🌟",
      color: "#FF9EBC",
      bgColor: "var(--cream)",
      skills: [
        { name: "Komunikasi", icon: "💬" },
        { name: "Kolaborasi Tim", icon: "🤝" },
        { name: "Pemecahan Masalah", icon: "🧩" },
        { name: "Manajemen Waktu", icon: "⏰" },
        { name: "Perhatian Detail", icon: "🔍" },
        { name: "Adaptabilitas", icon: "🔄" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="var(--pastel-pink)"/>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10">
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="var(--sage-green)"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-6xl font-bold text-[var(--text-dark)] mb-4">
              Keahlian & Kemampuan
            </h2>
            {/* Hand-drawn underline */}
            <svg viewBox="0 0 300 10" className="absolute -bottom-2 left-0 w-full">
              <path d="M5,5 Q150,10 295,5" fill="none" stroke="var(--pastel-pink)" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
          <p className="mt-8 text-lg text-gray-600 max-w-2xl mx-auto">
            Perpaduan presisi administrasi dan bakat kreatif
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx}
              className="bento-card hover:scale-[1.02] transition-all duration-300"
              style={{ 
                background: `linear-gradient(135deg, ${category.bgColor} 0%, white 100%)`,
                borderColor: category.color
              }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${category.color}, ${category.bgColor})` }}
                >
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-dark)]">{category.category}</h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <div 
                    key={skillIdx}
                    className="group bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 border-2 border-transparent hover:border-current"
                    style={{ borderColor: 'transparent' }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = category.color}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}
                  >
                    <div className="flex flex-col items-center text-center gap-2">
                      <div className="text-2xl group-hover:scale-110 transition-transform">
                        {skill.icon}
                      </div>
                      <p className="text-sm font-medium text-[var(--text-dark)]">{skill.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Highlight Section */}
        <div className="mt-12 text-center">
          <div className="inline-block bento-card bg-gradient-to-r from-[var(--sage-green-light)] via-[var(--pastel-pink-light)] to-[var(--cream-dark)] max-w-3xl">
            <div className="flex flex-wrap justify-center gap-3">
              <span className="badge-pill bg-white">Cepat Belajar</span>
              <span className="badge-pill bg-white">Teliti</span>
              <span className="badge-pill bg-white">Multitasking</span>
              <span className="badge-pill bg-white">Pemikir Kreatif</span>
              <span className="badge-pill bg-white">Inisiatif</span>
              <span className="badge-pill bg-white">Mandiri</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
