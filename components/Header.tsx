"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import "@/styles/header.css";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Trips", path: "/trips" },
    { name: "Blog", path: "/blog" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" }
  ];

    const toggleMenu = () => {
    if (menuOpen) {
      setClosing(true);
      setTimeout(() => {
        setMenuOpen(false);
        setClosing(false);
      }, 300); // match animation duration
    } else {
      setMenuOpen(true);
    }
  };

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
              <Link href={item.path} className={pathname === item.path ? "active-link" : ""}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Icon */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="menu-icon md:hidden text-white text-2xl"
      >
        {menuOpen && !closing ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className={`mobile-menu ${closing ? "close" : "open"}`}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              // onClick={() => setMenuOpen(false)}
              onClick={toggleMenu}
              className={pathname === item.path ? "active-link" : ""}
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