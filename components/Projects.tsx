"use client";
import { useEffect, useRef, useState } from "react";
import { FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaTimes, FaCode } from "react-icons/fa";

// Definisikan tipe data untuk struktur proyek
interface ProofImage {
  src: string;
  alt: string;
  explanation: string; // Penjelasan spesifik untuk masing-masing screenshot/gambar
}

interface Project {
  title: string;
  desc: string;
  image: string;
  color: string;
  tags: string[];
  link: string;
  proofImages?: ProofImage[];
}

const projects: Project[] = [
  {
    title: "Sistem Presensi Pegawai Berbasis Web",
    desc: "Aplikasi absensi digital modern dengan verifikasi lokasi otomatis via GPS (Geotagging) dan validasi foto selfie (WebRTC) untuk mencegah manipulasi data. Dilengkapi dashboard statistik real-time, pengajuan lembur, multi-role authentication, serta modul ekspor laporan ke format Excel/PDF.",
    image: "📸", 
    color: "from-cyan-950/60 to-[#0d1529]/20",
    tags: ["Laravel 10", "Vue.js 3", "Tailwind CSS", "MySQL", "Geolocation API"],
    link: "https://github.com/ilhamwahyudi03/Sistem-Presensi",
    proofImages: [
      { 
        src: "/image/LM-login.png", 
        alt: "Antarmuka Halaman Login", 
        explanation: "Sistem autentikasi aman dengan multi-role login (Pegawai & Admin). Dilengkapi enkripsi password dan session management berbasis database untuk mencegah celah keamanan." 
      },
      { 
        src: "/image/LM-dashboard.png", 
        alt: "Dashboard Pemantauan GPS", 
        explanation: "Halaman khusus admin untuk memantau titik koordinat presensi pegawai secara real-time di atas peta interaktif. Sistem otomatis mencatat jarak radius pegawai dari kantor." 
      },
      { 
        src: "/image/LM-lk.png", 
        alt: "Verifikasi Kamera WebRTC", 
        explanation: "Implementasi teknologi WebRTC API untuk mengambil foto selfie langsung dari browser. Berfungsi sebagai validasi biometrik wajah guna menghindari kecurangan titip absen." 
      },
      { 
        src: "/image/LM-doc.jpeg", 
        alt: "Dokumentasi Bersama Mitra Life Media", 
        explanation: "Dokumentasi proses pengembangan dan kolaborasi dengan mitra Life Media untuk implementasi sistem presensi." 
      },
      { 
        src: "/image/SP1.png", 
        alt: "Sertifikat Juara 3 FAST 2026", 
        explanation: "Inovasi Rancang Bangun Sistem Presensi ini sukses meraih penghargaan Juara 3 dalam ajang pameran teknologi akbar Festival of Science and Technology (FAST) 2026 tingkat Fakultas." 
      },
      { 
        src: "/image/SP4.jpeg", 
        alt: "Dokumentasi acara FAST", 
        explanation: "Dokumentasi dari acara Festival of Science and Technology (FAST) 2026." 
      },
    ]
  },
  {
    title: "Healtisin AI - Platform Konsultasi Kesehatan",
    desc: "Platform asisten kesehatan digital berbasis AI terintegrasi menggunakan Google Gemini API (Gemini 2.0 Flash) dan DeepSeek API yang diperkaya dengan dataset medis lokal Indonesia. Dilengkapi sistem otentikasi OTP, integrasi payment gateway Midtrans untuk langganan premium, sistem manajemen konten (CMS) artikel, serta strategi dual-logging untuk keamanan sistem.",
    image: "🩺", 
    color: "from-indigo-950/60 to-[#0d1529]/20",
    tags: ["Laravel 11", "Gemini & DeepSeek API", "Midtrans Gateway", "Tailwind CSS", "MySQL"],
    link: "https://github.com/Healtisin/healtisin",
    proofImages: [
      {
        src: "/image/healtisin-dashboard.png",
        alt: "AI Chat Workspace",
        explanation: "Workspace konsultasi AI menggunakan gemini-2.0-flash yang terintegrasi dengan data riwayat kesehatan user untuk memberikan rekomendasi medis yang personal."
      },
      {
        src: "/image/sertif-ht.png", // Simpan file sertifikat ini di folder public/image/ kamu dengan nama ini
        alt: "Certificate of Recognition (Top 10 Semifinalist) - PROXOCORIS International 2025",
        explanation: "Sertifikat penghargaan internasional (Certificate of Recognition) atas pencapaian prestasi sebagai Top 10 Semifinalist dalam ajang kompetisi teknologi global PROXOCORIS International 2025 pada kategori Web Development. Dikembangkan bersama tim 'The Raid', penghargaan ini diraih melalui keunggulan perancangan arsitektur, kualitas integrasi multi-API (Gemini & DeepSeek), serta implementasi keamanan data pada platform Healtisin AI yang dinilai inovatif dan berdaya saing tinggi."
      }
    ]
  },
  {
    title: "Web Operational Dashboard",
    desc: "Sistem dashboard operasional real-time yang dibangun untuk mengintegrasikan pemantauan kendala logistik dan manajemen aset perusahaan secara terpusat. Platform ini sukses mentransformasi alur pelaporan manual berbasis WhatsApp Group menjadi ekosistem visual yang terstruktur, memanfaatkan LeafletJS untuk pemetaan geografis isu, serta PostgreSQL untuk manajemen data operasional yang kompleks.",
    image: "📊",
    color: "from-blue-950/60 to-[#0d1529]/20",
    tags: ["Laravel", "PostgreSQL", "Bootstrap", "LeafletJS"],
    link: "https://github.com/ilhamwahyudi03",
    proofImages: [
      {
        src: "/image/aino-dashboard.png",
        alt: "Operational Dashboard",
        explanation: "Dashboard operasional yang menampilkan pemantauan kendala logistik dan manajemen aset perusahaan secara terpusat."
      },
      {
      src: "/image/aino-certification.png", // Simpan file sertifikat ini di folder public/image/ kamu dengan nama ini
      alt: "Certificate of Internship (Predikat: Excellent) - PT Aino Indonesia",
      explanation: "Sertifikat penghargaan resmi (Certificate of Internship) yang diterbitkan oleh PT Aino Indonesia atas penyelesaian program magang profesional sebagai Product Intern pada divisi Operation Delivery & Service. Lembar kredensial ini mencatat performa kerja dengan predikat tertinggi yaitu 'Excellent' selama periode Oktober hingga Desember 2024, memvalidasi kontribusi nyata dalam proses analisis situasi bisnis serta perancangan visual sistem web dashboard operasional internal perusahaan."
      },
      {
        src: "/image/dokumentasi-aino.jpg", // Simpan file foto ini di folder public/image/ kamu dengan nama ini
        alt: "Dokumentasi Kemitraan & Penyerahan Proyek - PT Aino Indonesia",
        explanation: "Foto dokumentasi resmi momentum penyerahan hasil akhir pengerjaan proyek sistem operasi serta simbolisasi kemitraan antara Program Studi Teknologi Informasi Universitas 'Aisyiyah Yogyakarta (UNISA) dengan pihak manajemen operasional PT Aino Indonesia. Berkas visual ini memvalidasi kemampuan komunikasi profesional di dunia kerja, kapabilitas kolaborasi tim lintas institusi, serta kedisiplinan dalam menuntaskan siklus pengembangan produk teknologi yang siap pakai di industri bisnis."
      }
    ]
  },
  {
    title: "Come Visit - Platform Web Wellness Tourism",
    desc: "Platform informasi pariwisata kesehatan (wellness tourism) interaktif yang dirancang untuk memperkenalkan ragam minuman herbal tradisional (Jamu) serta mempromosikan destinasi terapi dan pengobatan tradisional di Yogyakarta kepada wisatawan domestik maupun mancanegara. Menyediakan direktori penjual, katalog khasiat produk, dan fitur feedback interaktif.",
    image: "🍃",
    color: "from-emerald-950/60 to-[#0d1529]/20",
    tags: ["Laravel", "PHP", "Tailwind CSS", "Bootstrap", "Jira"],
    link: "https://github.com/ilhamwahyudi03",
    proofImages: [
      {
        src: "/image/comevisit-page.png",
        alt: "Come Visit Platform",
        explanation: "Platform web wellness tourism yang memperkenalkan ragam minuman herbal tradisional (Jamu) serta mempromosikan destinasi terapi dan pengobatan tradisional di Yogyakarta."
      }
    ]
  },
  {
    title: "Mental Health Predictor - Sistem AI Analisis Risiko",
    desc: "Aplikasi deteksi dini risiko kesehatan mental berbasis kecerdasan buatan (AI) yang mengintegrasikan model Machine Learning (Random Forest, Logistic Regression, XGBoost). Sistem ini menyediakan tiga jalur antarmuka interaktif (Gradio Blocks, Flask Web App dengan Bootstrap 5, dan CLI) yang dirancang ramah bagi tenaga medis serta mengutamakan privasi pasien melalui pemrosesan data lokal.",
    image: "🧠",
    color: "from-purple-950/60 to-[#0d1529]/20",
    tags: ["Python", "Flask", "Gradio", "Scikit-Learn", "XGBoost", "Bootstrap 5"],
    link: "https://github.com/ilhamwahyudi03",
    proofImages: [
      {
        src: "/image/mhp-1.png",
        alt: "Mental Health Predictor - Bagian Edukasi Platform",
        explanation: "Komponen informasi landasan platform yang memaparkan tiga pilar utama arsitektur sistem kepada pengguna: penjaminan enkripsi privasi data, transparansi implementasi algoritma machine learning terkini untuk akurasi prediksi, dan komitmen kepedulian kesehatan mental."
      },
      {
        src: "/image/mhp-2.png",
        alt: "Mental Health Predictor - Antarmuka Beranda Utama",
        explanation: "Tampilan beranda utama (Hero Section) yang responsif dengan estetika modern menggunakan perpaduan warna gradien dinamis. Menyediakan navigasi bar yang bersih serta tombol Call-to-Action (CTA) interaktif untuk mempermudah alur pendaftaran mandiri pengguna."
      },
      {
        src: "/image/mhp-3.png",
        alt: "Mental Health Predictor - Dasbor Fitur Unggulan",
        explanation: "Grid menu interaktif yang memetakan fungsionalitas inti platform kesehatan: modul asesmen mandiri tingkat stres/depresi, pintu eksekusi pengujian prediksi risiko berbasis AI, direktori pencarian psikolog terdekat, serta visualisasi rekam jejak riwayat tes pengguna."
      }
    ]
  },
  {
    title: "Rancang Bangun EMR Kegawatdaruratan Kebidanan (Kolaborasi S2 Kebidanan)",
    desc: "Proyek rekayasa sistem rekam medis elektronik (EMR) untuk digitalisasi dokumen darurat asuhan kebidanan di RS PKU Muhammadiyah Gamping. Berdasarkan evaluasi metode HOT-FIT, platform ini merestrukturisasi format keperawatan umum menjadi modul spesifik yang memuat integrasi otomatis skor peringatan dini (MEOWS), alur klinis Sectio Caesarea, serta formulir transfer pasien intra-rumah sakit.",
    image: "🏥",
    color: "from-red-950/60 to-[#0d1529]/20",
    tags: ["Figma", "System Analysis", "HOT-FIT Evaluation", "UI/UX Design"],
    link: "https://github.com/ilhamwahyudi03",
    proofImages: [
      {
        src: "/image/sm-login.png",
        alt: "Sistem Manajemen - Login Page",
        explanation: "Antarmuka autentikasi awal yang menampilkan formulir masuk dengan validasi input dan mekanisme proteksi keamanan data pasien."
      },
      {
        src: "/image/sm-2.png", // Sesuaikan nama file gambar di folder public/image/ kamu (misal: sm-2.png)
        alt: "EMR Kebidanan - Form Transfer Intra Rumah Sakit",
        explanation: "Antarmuka digitalisasi formulir Transfer Intra Rumah Sakit untuk pasien kebidanan yang mendokumentasikan perbandingan kondisi pasien secara objektif (Sebelum & Sesudah Pindah Ruangan). Menyediakan input data rekam medis terstruktur mulai dari keluhan, tingkat kesadaran, tanda-tanda vital (vital signs), skala nyeri, hingga asesmen risiko jatuh guna menjaga keselamatan pasien (patient safety)."
      },
      {
        src: "/image/sm-3.png", // Sesuaikan nama file gambar di folder public/image/ kamu (misal: sm-3.png)
        alt: "EMR Kebidanan - Clinical Pathway Sectio Caesarea",
        explanation: "Modul pemantauan alur klinis (Clinical Pathway) elektronik untuk persalinan Sectio Caesarea yang memetakan rencana perawatan dan tindakan harian (Hari ke-1 hingga ke-5). Fitur ini mengintegrasikan lembar kendali aktivitas Profesional Pemberi Asuhan (PPA) secara real-time, mencakup rekap pemeriksaan klinis harian, verifikasi kesiapan laboratorium, tindakan radiologi, hingga pemantauan elektromedik janin."
      },
      {
        src: "/image/haki.png", // Sesuaikan nama file gambar di folder public/image/ kamu (misal: emr-haki.png)
        alt: "Sertifikat Hak Cipta (HAKI) - Kemenkumham RI",
        explanation: "Bukti pelindungan hukum dan sertifikasi resmi berupa Surat Pencatatan Ciptaan dari Direktorat Jenderal Kekayaan Intelektual (DJKI) Kemenkumham RI atas inovasi arsitektur dan rancangan sistem EMR Kegawatdaruratan Kebidanan. Legalitas ini memvalidasi orisinalitas karya rekayasa teknologi, kepatuhan terhadap regulasi, serta pengakuan hukum negara terhadap hak kekayaan intelektual hasil kolaborasi ini."
      }
    ]
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // State manajemen detail modal proyek
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImgIdx, setCurrentImgIdx] = useState<number>(0);

  const openProjectView = (project: Project) => {
    setSelectedProject(project);
    setCurrentImgIdx(0);
  };

  const closeProjectView = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    if (selectedProject?.proofImages) {
      setCurrentImgIdx((prev) => (prev + 1) % selectedProject.proofImages!.length);
    }
  };

  const prevImage = () => {
    if (selectedProject?.proofImages) {
      setCurrentImgIdx((prev) => (prev - 1 + selectedProject.proofImages!.length) % selectedProject.proofImages!.length);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-28 bg-[#0a0f1e] grid-bg relative" ref={sectionRef}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16 reveal">
          <h2
            className="text-4xl font-extrabold tracking-wider"
            style={{ color: "#00e5ff", textShadow: "0 0 20px rgba(0,229,255,0.4)" }}
          >
            My Projects
          </h2>
          <div className="mx-auto mt-3 w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        </div>

        {/* Grid Kartu Utama */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="project-card reveal rounded-2xl overflow-hidden bg-[#0d1529] flex flex-col justify-between border border-white/5 hover:border-cyan-400/30 transition-all duration-300 shadow-lg"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div>
                {/* Preview Thumbnail */}
                <div className={`bg-gradient-to-br ${p.color} h-48 flex items-center justify-center relative overflow-hidden`}>
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: "linear-gradient(rgba(0,229,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.1) 1px, transparent 1px)",
                      backgroundSize: "30px 30px",
                    }}
                  />
                  <span className="text-7xl">{p.image}</span>
                </div>

                {/* Konten Singkat */}
                <div className="p-5">
                  <h3 className="text-cyan-400 font-bold text-lg mb-2">{p.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-4">{p.desc}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-xs font-mono px-2 py-1 rounded border border-cyan-400/20 text-cyan-400/70 bg-cyan-400/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tombol View All / Lihat Lebih Lengkap */}
              <div className="p-5 pt-0 mt-auto">
                <button
                  onClick={() => openProjectView(p)}
                  className="w-full text-center bg-cyan-400/10 hover:bg-cyan-400 hover:text-[#0a0f1e] text-cyan-400 font-mono font-bold text-xs py-2.5 px-4 rounded-xl border border-cyan-400/30 transition-all duration-200 shadow-md tracking-wider uppercase"
                >
                  🔍 LIHAT LEBIH LENGKAP
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL JENDELA DETAIL PROYEK GLOBAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-all duration-300">
          <div className="absolute inset-0 cursor-pointer" onClick={closeProjectView} />
          
          <div className="relative bg-[#0d1529] border border-cyan-400/20 rounded-2xl max-w-5xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-[0_0_50px_rgba(0,229,255,0.15)] animate-in fade-in zoom-in-95 duration-200">
            
            {/* Header Modal */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-[#0a0f1e]/60">
              <div>
                <h3 className="text-cyan-400 font-bold text-lg">{selectedProject.title}</h3>
                {selectedProject.proofImages && selectedProject.proofImages.length > 0 ? (
                  <p className="text-gray-500 text-xs font-mono mt-0.5">
                    Dokumen {currentImgIdx + 1} dari {selectedProject.proofImages.length} : {selectedProject.proofImages[currentImgIdx].alt}
                  </p>
                ) : (
                  <p className="text-gray-500 text-xs font-mono mt-0.5">Ringkasan Teknis Proyek</p>
                )}
              </div>
              <button
                onClick={closeProjectView}
                className="text-gray-400 hover:text-red-400 p-2 rounded-full transition-colors duration-200"
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* Konten Modal */}
            <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* SISI KIRI: Galeri Foto/Screenshot (Jika Ada) */}
              <div className="lg:col-span-7 flex flex-col justify-center items-center relative bg-[#060a13] rounded-xl border border-white/5 p-2 group h-[30vh] sm:h-[45vh] lg:h-full min-h-[300px]">
                {selectedProject.proofImages && selectedProject.proofImages.length > 0 ? (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={selectedProject.proofImages[currentImgIdx].src}
                      alt={selectedProject.proofImages[currentImgIdx].alt}
                      className="max-w-full max-h-[40vh] lg:max-h-[55vh] object-contain rounded-lg shadow-lg animate-in fade-in duration-200"
                    />

                    {/* Navigasi Panah Slider */}
                    {selectedProject.proofImages.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-3 bg-black/60 hover:bg-cyan-400 hover:text-[#0a0f1e] text-cyan-400 p-3 rounded-full transition-all duration-200 border border-cyan-400/20 shadow-md opacity-0 group-hover:opacity-100"
                        >
                          <FaChevronLeft size={14} />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-3 bg-black/60 hover:bg-cyan-400 hover:text-[#0a0f1e] text-cyan-400 p-3 rounded-full transition-all duration-200 border border-cyan-400/20 shadow-md opacity-0 group-hover:opacity-100"
                        >
                          <FaChevronRight size={14} />
                        </button>
                      </>
                    )}
                  </>
                ) : (
                  // Tampilan fallback ikon jika tidak ada screenshot
                  <div className="text-center p-6">
                    <span className="text-6xl block mb-4">{selectedProject.image}</span>
                    <span className="text-xs font-mono text-gray-500 block uppercase tracking-widest">
                      🔒 Dokumentasi Internal Berbasis Kode
                    </span>
                  </div>
                )}
              </div>

              {/* SISI KANAN: Penjelasan + View Code Button */}
              <div className="lg:col-span-5 flex flex-col justify-between bg-[#0a0f1e]/40 p-5 rounded-xl border border-white/5">
                <div>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-2.5 py-1 rounded-md uppercase tracking-wider block w-max mb-3">
                    Analisis Implementasi
                  </span>
                  
                  {selectedProject.proofImages && selectedProject.proofImages.length > 0 ? (
                    <>
                      <h4 className="text-white font-bold text-base mb-2 border-b border-white/5 pb-2">
                        {selectedProject.proofImages[currentImgIdx].alt}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed font-sans whitespace-pre-line">
                        {selectedProject.proofImages[currentImgIdx].explanation}
                      </p>
                    </>
                  ) : (
                    <>
                      <h4 className="text-white font-bold text-base mb-2 border-b border-white/5 pb-2">
                        Deskripsi Lengkap
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed font-sans">
                        {selectedProject.desc}
                      </p>
                    </>
                  )}
                </div>

                {/* Sektor Navigasi Cepat & Tombol Utama View Code di dalam Modal */}
                <div className="mt-8 pt-4 border-t border-white/10 flex flex-col gap-4">
                  {/* Navigasi Cepat Indikator Gambar */}
                  {selectedProject.proofImages && selectedProject.proofImages.length > 1 && (
                    <div>
                      <span className="text-gray-500 text-xs font-mono block mb-2">Navigasi Berkas:</span>
                      <div className="flex gap-1.5 overflow-x-auto pb-1">
                        {selectedProject.proofImages.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentImgIdx(idx)}
                            className={`text-xs font-mono px-2.5 py-1.5 rounded transition-all duration-200 ${
                              idx === currentImgIdx
                                ? "bg-cyan-400 text-[#0a0f1e] font-bold"
                                : "bg-white/5 text-gray-400 hover:bg-white/10"
                            }`}
                          >
                            Gbr #{idx + 1}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tombol Utama View Code Git Terintegrasi */}
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-gray-500 text-xs font-mono flex items-center gap-1.5">
                      <FaCode size={14} className="text-gray-500" /> Source Code:
                    </span>
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-mono bg-cyan-400 hover:bg-cyan-300 text-[#0a0f1e] px-4 py-2.5 rounded-xl font-bold hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all duration-300"
                    >
                      VIEW REPOSITORY <FaExternalLinkAlt size={10} />
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}