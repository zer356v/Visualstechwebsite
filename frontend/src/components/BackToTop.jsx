import { useState, useEffect } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  // Show after scrolling down 200px
  useEffect(() => {
    const handleScroll = () => 
      setVisible(window.scrollY > 3000);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      aria-label="Back to Top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed z-50 bottom-8 right-8 flex items-center gap-3 px-6 py-3 rounded-full bg-black shadow-2xl transition-all duration-300
        ${visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <span className="flex items-center justify-center bg-white rounded-full w-7 h-7">
        <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth={2.1} viewBox="0 0 24 24">
          <path d="M12 18V6m0 0l-6 6m6-6l6 6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
      <span className="text-lg font-medium text-[#dcebfc] tracking-tight">Back to Top</span>
    </button>
  );
};

export default BackToTop;
