import React from 'react';

export default function DownloadBtn() {
  return (
    <a href="https://drive.google.com/file/d/1sb4UKqM6H_Q40XQMGRe7oYKg0hPMXTjA/view?usp=drive_link" target='blank' download="AnberAlaaCV.pdf" className="relative group cursor-pointer w-full max-w-[250px] mx-auto">
      <div className="relative text-center px-4 py-3 border-2 border-secondaryColor text-secondaryColor font-bold text-base md:text-lg rounded-lg transform transition-all duration-300 group-hover:translate-y-1 group-hover:translate-x-1 shadow-[6px_6px_10px_rgba(0,0,0,0.6),-6px_-6px_10px_rgba(255,255,255,0.1)] group-hover:shadow-[8px_8px_15px_rgba(0,0,0,0.8),-8px_-8px_15px_rgba(255,255,255,0.15)]">
        Download my CV
      </div>

      {/* Border Overlay */}
      <div className="absolute inset-0 border-2 border-dashed border-secondaryColor rounded-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Ping Animations */}
      <div className="absolute -top-2 -right-2 w-3 h-3 bg-secondaryColor rounded-full animate-ping shadow-lg" />
      <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-secondaryColor rounded-full animate-ping shadow-lg" />
      <div className="absolute top-1/3 left-2 w-2.5 h-2.5 bg-secondaryColor rounded-full animate-ping opacity-70" />
      <div className="absolute top-2/3 right-2 w-2.5 h-2.5 bg-secondaryColor rounded-full animate-ping opacity-70" />
    </a>
  );
}