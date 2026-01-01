"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function HeroNew() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 opacity-20">
        <svg viewBox="0 0 100 100" className="animate-float">
          <circle cx="50" cy="50" r="40" fill="var(--pastel-pink)" />
        </svg>
      </div>
      <div className="absolute bottom-20 right-10 w-40 h-40 opacity-20">
        <svg
          viewBox="0 0 100 100"
          style={{ animationDelay: "1s" }}
          className="animate-float"
        >
          <circle cx="50" cy="50" r="40" fill="var(--sage-green)" />
        </svg>
      </div>

      {/* Decorative Stars */}
      <div
        className="absolute top-32 right-1/4 text-4xl opacity-60 animate-float"
        style={{ animationDelay: "0.5s" }}
      >
        ✨
      </div>
      <div
        className="absolute bottom-32 left-1/4 text-3xl opacity-60 animate-float"
        style={{ animationDelay: "1.5s" }}
      >
        ⭐
      </div>

      <div
        className={`max-w-6xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Name with "port[image]folio" Typography */}
        <div className="mb-6">
          <h1 className="text-7xl md:text-9xl font-bold mb-4 text-[var(--text-dark)] flex items-center justify-center gap-0 font-delius leading-none">
            <span className="inline-block transform -translate-y-2 scale-y-[2.25]">
              Port
            </span>
            <span className="relative inline-flex items-center justify-center w-[100px] h-[100px] md:w-[200px] md:h-[200px] mx-[-10px]">
              <Image
                src="/mypict.svg"
                alt="Widya Rahma Wulandari"
                width={150}
                height={150}
                className="object-contain"
                priority
              />
            </span>
            <span className="inline-block transform -translate-y-2 scale-y-[2.25]">
              folio
            </span>
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-[var(--text-dark)] mb-10 max-w-3xl mx-auto leading-relaxed">
          Memadukan{" "}
          <span className="font-semibold text-[var(--sage-green-dark)]">
            Presisi Administrasi
          </span>{" "}
          dengan{" "}
          <span className="font-semibold" style={{ color: "#FF9EBC" }}>
            Komunikasi Kreatif
          </span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a href="#contact" className="gradient-button">
            Hubungi Saya
          </a>
        </div>

        {/* Floating Contact Icons */}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-[var(--sage-green)]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
