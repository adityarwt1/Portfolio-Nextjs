"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // State to track menu visibility
  const menuRef = useRef(null); // Ref for the dropdown menu

  // Close the menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full flex justify-center pt-4">
      <nav className="flex justify-between items-center text-white p-4 w-full max-w-4xl bg-[rgba(255,255,255,0.2)] rounded-full border relative">
        {/* Logo/Navigation Links */}
        <div className="flex items-center space-x-4">
          {/* Profile Picture */}
          <div>
            <Image
              src="/dp.jpg"
              width={30}
              height={30}
              alt="Profile Picture"
              className="rounded-full"
            />
          </div>

          {/* Links - Shown only on larger screens */}
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="font-semibold hover:text-gray-200">
              Home
            </Link>
            <Link href="/project" className="font-semibold hover:text-gray-200">
              Project
            </Link>
            <Link href="/about" className="font-semibold hover:text-gray-200">
              About
            </Link>
            <Link href="/resume" className="font-semibold hover:text-gray-200">
              Resume
            </Link>
            <Link href="/services" className="font-semibold hover:text-gray-200">
              Services
            </Link>
            <Link href="/contact" className="font-semibold hover:text-gray-200">
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            className="p-2 rounded-md hover:bg-[rgba(255,255,255,0.3)] focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div
            ref={menuRef}
            className="absolute top-16 left-0 right-0 bg-[rgba(0,0,0,0.8)] rounded-md shadow-md z-50 md:hidden transform transition-transform duration-300 ease-in-out"
          >
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li>
                <Link
                  href="/"
                  className="font-semibold hover:text-gray-700"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/project"
                  className="font-semibold hover:text-gray-700"
                  onClick={() => setMenuOpen(false)}
                >
                  Project
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="font-semibold hover:text-gray-700"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/resume"
                  className="font-semibold hover:text-gray-700"
                  onClick={() => setMenuOpen(false)}
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="font-semibold hover:text-gray-700"
                  onClick={() => setMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-semibold hover:text-gray-700"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
