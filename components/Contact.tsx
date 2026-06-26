"use client";
import { useEffect, useRef, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

const socials = [
  { icon: <FaGithub size={22} />, label: "GitHub", href: "https://github.com/ilhamwahyudi03?tab=repositories", color: "hover:text-white" },
  { icon: <FaLinkedin size={22} />, label: "LinkedIn", href: "https://www.linkedin.com/feed/", color: "hover:text-blue-400" },
  { icon: <FaInstagram size={22} />, label: "Instagram", href: "https://www.instagram.com/ilhamwahyudi_____?igsh=MXRha25qd3N2bjBwMQ==", color: "hover:text-pink-400" },
  { icon: <FaWhatsapp size={22} />, label: "WhatsApp", href: "https://wa.me/6287871563112", color: "hover:text-green-400" },
  { icon: <FaEnvelope size={22} />, label: "Email", href: "ilhamwahyudi4625@gmail.com", color: "hover:text-cyan-400" },
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); });
      },
      { threshold: 0.15 }
    );
    const els = sectionRef.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-28 bg-[#0d1529] relative" ref={sectionRef}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16 reveal">
          <h2
            className="text-4xl font-extrabold tracking-wider"
            style={{ color: "#00e5ff", textShadow: "0 0 20px rgba(0,229,255,0.4)" }}
          >
            My Contact
          </h2>
          <div className="mx-auto mt-3 w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          <p className="text-gray-400 mt-6 max-w-md mx-auto text-sm leading-relaxed">
            Punya proyek menarik? Mari bekerja sama! Saya selalu terbuka untuk
            peluang baru dan kolaborasi yang menarik.
          </p>
        </div>

        {/* Contact card */}
        <div
          className="reveal rounded-3xl p-8 md:p-12"
          style={{
            border: "1px solid rgba(0,229,255,0.15)",
            background: "linear-gradient(135deg, rgba(0,229,255,0.03) 0%, transparent 100%)",
            boxShadow: "0 0 40px rgba(0,229,255,0.05), inset 0 0 40px rgba(0,229,255,0.02)",
          }}
        >
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: info */}
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Hubungi Saya</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                Saya akan membalas pesan Anda dalam 24 jam. Jangan ragu untuk
                menghubungi saya!
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 text-gray-400">
                  <FaEnvelope className="cyan-text flex-shrink-0" />
                  <span className="text-sm font-mono">ilhamwahyudi4625@gmail.com</span>
                </div>
              </div>

              {/* Social icons */}
              <div className="flex gap-4">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    title={s.label}
                    className={`w-11 h-11 rounded-full border border-cyan-400/20 flex items-center justify-center text-gray-400 ${s.color} transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_0_12px_rgba(0,229,255,0.2)]`}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Nama Anda"
                  required
                  className="w-full bg-[#0a0f1e] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-400/50 focus:shadow-[0_0_10px_rgba(0,229,255,0.1)] transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Anda"
                  required
                  className="w-full bg-[#0a0f1e] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-400/50 focus:shadow-[0_0_10px_rgba(0,229,255,0.1)] transition-all duration-300"
                />
              </div>
              <div>
                <textarea
                  placeholder="Pesan Anda..."
                  required
                  rows={4}
                  className="w-full bg-[#0a0f1e] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-400/50 focus:shadow-[0_0_10px_rgba(0,229,255,0.1)] transition-all duration-300 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full border border-cyan-400 text-cyan-400 py-3 font-mono text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:bg-cyan-400 hover:text-[#0a0f1e] hover:shadow-[0_0_20px_rgba(0,229,255,0.5)] rounded-lg"
              >
                {sent ? "✓ PESAN TERKIRIM!" : "KIRIM PESAN →"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-20 text-gray-600 text-sm font-mono">
        <div className="mb-3 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <p>© 2026 <span className="cyan-text">M. Ilham Wahyudi</span>. Portofolio</p>
      </div>
    </section>
  );
}
