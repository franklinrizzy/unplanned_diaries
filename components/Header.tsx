"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import "@/styles/header.css";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Trips", path: "/trips" },
    { name: "Gallery", path: "/gallery" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" }
  ];

  return (
    <header className={`main-header ${isSticky ? "sticky" : ""}`}>
      {/* Brand Name */}
      <Link href="/" className="brand-name">
        Unplanned Diaries
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex">
        <ul className="navbar">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Icon */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="menu-icon md:hidden text-white text-2xl"
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="mobile-menu md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;