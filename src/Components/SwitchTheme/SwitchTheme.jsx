import React, { useEffect, useState } from 'react';

export default function SwitchTheme() {
  const [dark, setDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // بدل hovered

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = stored === 'dark' || (!stored && prefersDark);

    if (isDark) {
      document.documentElement.classList.add('dark');
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    // تغيير الثيم
    document.documentElement.classList.toggle('dark');
    const newTheme = !dark;
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    setDark(newTheme);

    setIsOpen(prev => !prev);
  };

  return (
    <div className="fixed -right-20 top-1/2 -translate-y-1/2 z-50">
      <button
        onClick={toggleTheme}
        className={`flex items-center ${dark? 'bg-black/70' : 'bg-white/70 text-black'}
                    font-medium rounded-l-full overflow-hidden px-2`}
        style={{
          // لما نضغط → يتحرك شمال 90 بكسل بس (حلو وشيك)
          transform: isOpen ? 'translateX(-20px)' : 'translateX(-20px)',
        }}
      >
        {/* الأيقونة دايمًا باينة وبتلف حلو */}
        <div className="p-2 transition-transform duration-700"
             style={{ transform: dark ? 'rotate(360deg)' : 'rotate(0deg)' }}>
          {dark ? (
            <span className="text-xl block">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
            </span>
          ) : (
            <span className="text-xl block">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
            </span>
          )}
        </div>
        {/* الكلمة تظهر وتختفي بسلاسة */}
        <span
          className={`whitespace-nowrap mr-3 transition-all duration-500 ${
            isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
          }`}
        >
          {dark ? 'dark' : 'light'}
        </span>

        
      </button>
    </div>
  );
}