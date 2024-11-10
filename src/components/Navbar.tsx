'use client';
// app/components/Navbar.tsx
import Link from "next/link";
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`transition-all duration-300 p-4 ${isScrolled ? 'h-12 bg-purple-700' : 'h-16 bg-transparent'} fixed w-full top-0 left-0 z-50 flex justify-between items-center`}>
      <div className="text-white text-2xl font-bold">
        Asma Iqbal
      </div>
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="text-white hover:underline">Home</Link>
        </li>
        <li>
          <Link href="/skills" className="text-white hover:underline">Skills</Link>
        </li>
        <li>
          <Link href="/projects" className="text-white hover:underline">Projects</Link>
        </li>
        <li>
          <Link href="/contact-us" className="text-white hover:underline">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;