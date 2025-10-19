"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiGithub } from "react-icons/fi";

export default function Navbar() {
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full sticky top-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-gray-800">
      <div className="flex justify-between items-center py-6 px-8 max-w-6xl mx-auto">
        {/* === Logo === */}
        <Link
          href="/"
          onClick={handleClick}
          className="hover:opacity-90 transition-opacity"
        >
          <h1
            className="text-4xl font-extrabold bg-gradient-to-r from-purple-300
            via-sky-300 to-pink-400 text-transparent bg-clip-text shadow-lg inline-block cursor-pointer"
            style={{
              filter: "drop-shadow(0 0 15px rgba(200, 100, 255, 0.75))",
            }}
          >
            CUYFACE
          </h1>
        </Link>

        {/* === Right section (GitHub link) === */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/hamzul1216/cuyface_openrouter"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] transition-all"
          >
            <FiGithub className="w-6 h-6" />
            <span className="hidden sm:inline font-medium">GitHub</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
