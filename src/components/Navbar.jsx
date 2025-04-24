import { Menu } from "lucide-react";
import logo from "../assets/icon.png";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Why EWIG", href: "#why-ewig" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="w-full absolute top-0 left-0 z-50 py-4 bg-transparent">
      <div className="flex items-center justify-between  max-w-6xl mx-auto bg-[#0A9642] rounded-full">

        {/* Logo Left Aligned */}
        <div className="bg-white px-4 py-2 rounded-full flex items-center justify-center">
          <img
            src={logo}
            alt="EWIG Logo"
            className="w-28 h-16 "
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center text-white font-medium ml-6 flex-1 justify-center">
          <ul className="flex items-center list-none m-0 p-0">
            {navLinks.map((item, idx) => (
              <li key={idx} className="flex items-center">
                <a
                  href={item.href}
                  className="px-4 py-3 rounded-full transition-all duration-500 ease-in-out hover:bg-white hover:text-[#0A9642]"
                >
                  {item.label}
                </a>
                {/* Vertical line with equal spacing */}
                {idx < navLinks.length - 1 && (
                  <span className="mx-2 w-px h-5 bg-[#383737]"></span>
                )}
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="ml-6 bg-gray-900 px-5 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out hover:bg-white hover:text-[#0A9642] text-white"
              >
                Request a Quote
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 px-8">
            <Menu className="text-white w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-2 mx-4 bg-[#0A9642] text-white animate-slide-in-left rounded-md px-6 py-4 space-y-4 text-base font-medium shadow-lg">
          {[...navLinks, { label: "Request a Quote", href: "#contact", extraStyle: "bg-gray-900" }].map((item, i) => (
            <a
              key={i}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block text-center py-2 rounded-full transition-all duration-300 ease-in-out ${
                item.extraStyle
                  ? `${item.extraStyle} text-white hover:bg-white hover:text-[#0A9642]`
                  : "hover:bg-white hover:text-[#0A9642]"}`
              }
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
