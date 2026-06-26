import React from "react";
import Image from "next/image";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  altText: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageSrc, altText }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-all duration-300">
      {/* Tombol Close di Luar Area Gambar untuk Mempermudah Pengguna */}
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

      {/* Kontainer Utama Gambar */}
      <div className="relative bg-zinc-900 border border-zinc-800 rounded-xl p-2 max-w-4xl w-full max-h-[85vh] flex flex-col items-center overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        
        {/* Tombol Tutup (X) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-red-600 text-white p-2 rounded-full transition-colors duration-200"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Tampilan Gambar Beresolusi Tinggi */}
        <div className="relative w-full h-[60vh] md:h-[70vh]">
          <Image
            src={imageSrc}
            alt={altText}
            fill
            className="object-contain rounded-lg"
            priority
          />
        </div>

        {/* Keterangan Gambar di Bagian Bawah */}
        <div className="p-3 text-center w-full">
          <p className="text-zinc-400 text-sm font-medium">{altText}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;