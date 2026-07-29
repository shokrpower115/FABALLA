"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface ImageLightboxProps {
  src: string;
  alt: string;
  open: boolean;
  onClose: () => void;
}

const ImageLightbox = ({ src, alt, open, onClose }: ImageLightboxProps) => {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 px-4 py-6" onClick={onClose}>
      <div className="relative w-full max-w-5xl rounded-[24px] border border-white/10 bg-white p-3 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 rounded-full bg-black/70 p-2 text-white transition hover:bg-black"
          aria-label="Cerrar imagen"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px]">
          <Image src={src} alt={alt} fill className="object-contain" priority />
        </div>
      </div>
    </div>
  );
};

export default ImageLightbox;
