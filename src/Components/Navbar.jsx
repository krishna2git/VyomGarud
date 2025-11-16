import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-xl bg-white/20 border-b border-white/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <div className="flex items-center space-x-2">
          <span className="text-4xl font-semibold text-white drop-shadow">
            VG
          </span>
        </div>

        <ul className="hidden md:flex space-x-10 text-white/90 font-medium">
          <li className="hover:text-white cursor-pointer transition">Home</li>
          <li className="hover:text-white cursor-pointer transition">Services</li>
          <li className="hover:text-white cursor-pointer transition">About</li>
          <li className="hover:text-white cursor-pointer transition">Projects</li>
        </ul>

        <div className="hidden md:block">
          <button className="px-6 py-2 bg-white/20 text-white backdrop-blur-md rounded-xl border border-white/30 hover:bg-white/30 transition-all">
            Contact Us
          </button>
        </div>

        <div className="md:hidden" onClick={() => setOpen(!open)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </div>
      </div>

      {open && (
        <ul className="md:hidden bg-white/20 backdrop-blur-xl border-t border-white/10 px-6 pb-4 space-y-4 text-white font-medium">
          <li className="hover:text-white cursor-pointer transition">Home</li>
          <li className="hover:text-white cursor-pointer transition">Services</li>
          <li className="hover:text-white cursor-pointer transition">About</li>
          <li className="hover:text-white cursor-pointer transition">Projects</li>

          <button className="w-full py-2 bg-white/20 text-white backdrop-blur-md rounded-xl border border-white/30 hover:bg-white/30 transition">
            Contact Us
          </button>


        </ul>
      )}
    </nav>
  );
}

export default Navbar;
