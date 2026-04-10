"use client";

import { useEffect, useRef, useState } from "react";

export default function StickyCtaBar({ applyUrl }: { applyUrl: string }) {
  const [visible, setVisible] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    const sentinel = sentinelRef.current;
    if (sentinel) observer.observe(sentinel);
    return () => { if (sentinel) observer.unobserve(sentinel); };
  }, []);

  return (
    <>
      <div ref={sentinelRef} className="h-px" />
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 px-4 pb-6 pt-3 bg-white/95 backdrop-blur-sm shadow-[0_-2px_12px_rgba(0,0,0,0.08)] transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="max-w-lg mx-auto">
          <a
            href={applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shiny block w-full bg-[#e8837a] text-white font-bold py-4 rounded-full text-base text-center shadow-lg"
          >
            応募・詳細の確認はこちら
          </a>
          <p className="text-xs text-center text-gray-400 mt-2">※公式LINEに友だち登録していただきます。</p>
        </div>
      </div>
    </>
  );
}
