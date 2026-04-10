"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header({ applyUrl }: { applyUrl: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-lg mx-auto px-4 h-14 flex items-center justify-between">
        <Image src="/logo.webp" alt="minoriba" width={120} height={20} className="h-7 w-auto" />
        <div className="flex gap-4 text-sm text-gray-600">
          <a href="#requirements" className="hover:text-[#e8837a] transition-colors">詳細</a>
          <a
            href={applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#e8837a] transition-colors"
          >
            お問い合わせ
          </a>
        </div>
      </div>
    </header>
  );
}
