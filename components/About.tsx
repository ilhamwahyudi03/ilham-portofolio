"use client";
import { useEffect, useRef } from "react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaNodeJs, FaLaravel, FaDatabase,
} from "react-icons/fa";
import { SiBootstrap, SiNextdotjs, SiTailwindcss } from "react-icons/si";

const skills = [
  { icon: <FaHtml5 />, label: "HTML5" },
  { icon: <FaCss3Alt />, label: "CSS3" },
  { icon: <FaJs />, label: "JavaScript" },
  { icon: <FaReact />, label: "React" },
  { icon: <FaLaravel />, label: "Laravel" },
  { icon: <FaDatabase />, label: "MySQL" },
  { icon: <SiNextdotjs />, label: "Next.js" },
  { icon: <SiTailwindcss />, label: "Tailwind" },
  { icon: <SiBootstrap />, label: "Bootstrap" },
  { icon: <FaGithub />, label: "GitHub" },
  { icon: <FaNodeJs />, label: "Node.js" },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const els = sectionRef.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-28 bg-[#0d1529] relative" ref={sectionRef}>
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16 reveal">
          <h2
            className="text-4xl font-extrabold tracking-widest uppercase"
            style={{
              color: "#00e5ff",
              textShadow: "0 0 20px rgba(0,229,255,0.4)",
            }}
          >
            ABOUT ME
          </h2>
          <div className="mx-auto mt-3 w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-16">
          {/* Photo */}
          <div className="reveal flex-shrink-0">
            <div
              className="w-64 h-72 rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-900/30 to-[#0a0f1e]"
              style={{
                border: "2px solid rgba(0,229,255,0.3)",
                boxShadow: "0 0 30px rgba(0,229,255,0.1)",
              }}
            >
              <img
                src="/image/ilham3.png"
                alt="M. Ilham Wahyudi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text & skills */}
          <div className="flex-1 reveal" style={{ transitionDelay: "0.15s" }}>
          <p className="text-gray-300 text-base leading-8 mb-10 max-w-xl">
            Hai, saya Ilham. Seorang{" "}
            <span className="cyan-text font-semibold">Web Developer</span> yang antusias
            dalam membangun arsitektur web yang bersih, efisien, dan terstruktur.
            Keahlian utama saya berfokus pada ekosistem{" "}
            <span className="cyan-text font-semibold">JavaScript (HTML, CSS, React, Next.js, Node.js)</span>{" "}
            untuk pengembangan frontend yang interaktif dan responsif, serta{" "}
            <span className="cyan-text font-semibold">PHP (Laravel) dan MySQL</span>{" "}
            untuk pengelolaan database serta logika backend yang optimal.
            <br />
            <br />
            Fokus kerja saya adalah menulis kode yang rapi (
            <span className="cyan-text font-semibold">clean code</span>), memastikan
            performa website tetap tinggi menggunakan framework modern seperti{" "}
            <span className="cyan-text font-semibold">Tailwind CSS & Bootstrap</span>, dan menyelesaikan masalah
            teknis secara efektif. Saya siap membawa kombinasi keterampilan rekayasa web
            ini untuk memperkuat tim pengembangan digital Anda.
          </p>

            {/* Skill icons */}
            <div className="flex flex-wrap gap-3 mb-10">
              {skills.map((s, i) => (
                <div
                  key={i}
                  className="skill-btn flex items-center gap-2 px-4 py-2 rounded-full bg-[#0a0f1e] text-gray-400 text-sm cursor-default"
                  title={s.label}
                >
                  <span className="text-lg">{s.icon}</span>
                  <span className="font-mono text-xs tracking-wider">{s.label}</span>
                </div>
              ))}
            </div>

            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 border border-cyan-400 text-cyan-400 px-8 py-3 font-mono text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:bg-cyan-400 hover:text-[#0a0f1e] hover:shadow-[0_0_20px_rgba(0,229,255,0.5)]"
            >
              VIEW MY PROJECTS →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
