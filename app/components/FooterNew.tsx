'use client';

export default function FooterNew() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[var(--sage-green-dark)] to-[var(--sage-green)] text-white py-12 px-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="white"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Widya Rahma Wulandari</h3>
            <p className="text-[var(--cream)] leading-relaxed">
              Profesional Administrasi & Komunikasi yang memadukan presisi dengan kreativitas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-[var(--cream)] hover:text-white transition-colors">Tentang Saya</a>
              </li>
              <li>
                <a href="#experience" className="text-[var(--cream)] hover:text-white transition-colors">Pengalaman</a>
              </li>
              <li>
                <a href="#skills" className="text-[var(--cream)] hover:text-white transition-colors">Keahlian</a>
              </li>
              <li>
                <a href="#organizations" className="text-[var(--cream)] hover:text-white transition-colors">Organisasi</a>
              </li>
              <li>
                <a href="#contact" className="text-[var(--cream)] hover:text-white transition-colors">Kontak</a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hubungi Saya</h4>
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="mailto:widywulandari167@gmail.com"
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-[var(--cream)] text-sm">
            © {currentYear} Widya Rahma Wulandari. Dibuat dengan semangat, presisi, dan kreativitas ✨
          </p>
        </div>
      </div>

      {/* Decorative bottom element */}
      <div className="absolute bottom-0 left-0 w-full opacity-10">
        <svg viewBox="0 0 1200 60" className="w-full">
          <path d="M0,30 Q300,10 600,30 T1200,30 L1200,60 L0,60 Z" fill="white"/>
        </svg>
      </div>
    </footer>
  );
}
