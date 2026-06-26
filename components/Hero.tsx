"use client";
import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";

const floatingIcons = [
  { icon: "</>", top: "15%", left: "5%", delay: "0s", size: "text-2xl" },
  { icon: "{}", top: "25%", left: "85%", delay: "1s", size: "text-xl" },
  { icon: "//", top: "60%", left: "8%", delay: "2s", size: "text-lg" },
  { icon: "[]", top: "70%", left: "88%", delay: "0.5s", size: "text-2xl" },
  { icon: "#", top: "40%", left: "3%", delay: "1.5s", size: "text-3xl" },
  { icon: "()", top: "80%", left: "75%", delay: "2.5s", size: "text-xl" },
  { icon: "=>", top: "10%", left: "65%", delay: "0.8s", size: "text-lg" },
];

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Web Developer & Data Analyst";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen grid-bg flex items-center overflow-hidden"
    >
      {/* Floating code icons */}
      {floatingIcons.map((item, i) => (
        <span
          key={i}
          className={`floating-icon font-mono font-bold ${item.size}`}
          style={{
            top: item.top,
            left: item.left,
            animationDelay: item.delay,
          }}
        >
          {item.icon}
        </span>
      ))}

      {/* Radial glow center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,229,255,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text */}
          <div className="flex-1 animate-fade-up">
            <p className="text-cyan-400 font-mono text-sm tracking-widest mb-3 uppercase">
              &lt; Hello World /&gt;
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-2">
              HI, I&apos;M{" "}
              <span
                className="cyan-text"
                style={{
                  textShadow:
                    "0 0 20px rgba(0,229,255,0.5), 0 0 40px rgba(0,229,255,0.3)",
                }}
              >
                M. Ilham Wahyudi
              </span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 cursor">
              {text}
            </h2>
            <p className="text-gray-400 max-w-md text-base leading-relaxed mb-10">
              Saya adalah seorang Web Developer yang passionate dalam
              membangun website yang bersih, modern, dan interaktif. Saya
              mengubah ide menjadi pengalaman web yang elegan.
            </p>
            <a
              href="/image/M-Ilham-Wahyudi-CV-2026.pdf"
              download="M-Ilham-Wahyudi-CV-2026.pdf"
              className="inline-flex items-center gap-3 border border-cyan-400 text-cyan-400 px-8 py-3 font-mono text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:bg-cyan-400 hover:text-[#0a0f1e] hover:shadow-[0_0_20px_rgba(0,229,255,0.5)]"
            >
              DOWNLOAD CV <FaDownload />
            </a>
          </div>

          {/* Avatar */}
          <div
            className="flex-shrink-0 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Rotating ring */}
              <div
                className="absolute inset-0 rounded-full border-2 border-cyan-400/30"
                style={{
                  animation: "spin 8s linear infinite",
                  borderStyle: "dashed",
                }}
              />
              <div
                className="absolute inset-4 rounded-full border border-cyan-400/20"
                style={{ animation: "spin 12s linear infinite reverse" }}
              />

              {/* Avatar circle */}
              <div
                className="absolute inset-6 rounded-full overflow-hidden avatar-glow bg-gradient-to-br from-cyan-900/50 to-navy-800"
                style={{ border: "3px solid #00e5ff" }}
              >
                {/* Foto profil */}
                <img
                  src="/image/foto-ilham2.jpeg"
                  alt="M. Ilham Wahyudi"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #0a0f1e)",
        }}
      />

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
