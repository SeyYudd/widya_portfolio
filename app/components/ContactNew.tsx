"use client";

import { useState } from "react";

export default function ContactNew() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-5xl opacity-20 animate-float">
        💌
      </div>
      <div
        className="absolute bottom-10 right-10 text-5xl opacity-20 animate-float"
        style={{ animationDelay: "1s" }}
      >
        ✨
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-6xl font-bold text-[var(--text-dark)] mb-4">
              Mari Terhubung!
            </h2>
            {/* Hand-drawn underline */}
            <svg
              viewBox="0 0 250 10"
              className="absolute -bottom-2 left-0 w-full"
            >
              <path
                d="M5,5 Q125,10 245,5"
                fill="none"
                stroke="var(--pastel-pink)"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <p className="mt-8 text-lg text-gray-600 max-w-2xl mx-auto">
            Punya proyek atau ingin berkolaborasi? Saya senang mendengar dari Anda!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bento-card bg-gradient-to-br from-[var(--sage-green-light)] to-white">
              <h3 className="text-2xl font-bold text-[var(--text-dark)] mb-6">
                Hubungi Saya
              </h3>

              <div className="space-y-4">
                <a
                  href="mailto:widywulandari167@gmail.com"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-lg transition-shadow group"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--sage-green)] to-[var(--sage-green-dark)] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text-dark)]">
                      Email
                    </p>
                    <p className="text-sm text-gray-600">
                      widywulandari167@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https:linkedin.com/in/widyarahmawlndr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-lg transition-shadow group"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--sage-green)] to-[var(--sage-green-dark)] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text-dark)]">
                      LinkedIn
                    </p>
                    <p className="text-sm text-gray-600">Terhubung dengan saya</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bento-card bg-gradient-to-br from-[var(--cream)] to-white">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-[var(--sage-green-dark)]">
                  5+
                </div>
                <p className="text-sm text-gray-600">Tahun Pengalaman</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--sage-green-dark)]">
                  1000+
                </div>
                <p className="text-sm text-gray-600">Acara Dikelola</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--sage-green-dark)]">
                  350+
                </div>
                <p className="text-sm text-gray-600">Aplikasi HR</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--sage-green-dark)]">
                  100%
                </div>
                <p className="text-sm text-gray-600">Dedikasi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
