"use client";

import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Github, Linkedin } from 'lucide-react';

export default function Header() {
  const [scroll, setScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { href: "#accueil", label: "Accueil" },
    { href: "#profil", label: "Profil" },
    { href: "#parcours", label: "Parcours" },
    { href: "#competences", label: "Compétences" },
    { href: "#projets", label: "Projets" },
    { href: "#auto-eval", label: "Auto-Eval" },
    { href: "#contact", label: "Contact" },
    { href: "/cv/CV-THOMAS-MAINGRE.pdf", label: "CV", target: "_blank" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full flex justify-between items-center p-4 transition-colors duration-300 ${scroll ? 'bg-gray-800 text-white' : 'bg-transparent text-black'
          }`}
        style={{ zIndex: 1000 }}
      >
        <div className="flex items-center space-x-4">
          <a href="#accueil">
            <Avatar className="w-12 h-12">
              <AvatarImage src="/image/logo/logo-portfolio.png" alt="Logo" />
            </Avatar>
          </a>
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-4 text-white text-xl" style={{
            textShadow: "4px 8px 8px rgba(0, 0, 0, 1)",
          }}>
            {menuItems.map((item) => (
              <li key={item.href} className="hover:text-yellow-300 transition duration-300 ease-in-out">
                <a href={item.href} target={item.target}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:flex space-x-4">
          <a href="https://github.com/ThomasMaingre" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <Github className="w-9 h-12 hover:text-yellow-300 transition duration-300 ease-in-out" />
          </a>
          <a href="https://www.linkedin.com/in/thomas-maingre/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-9 h-12 hover:text-blue-300 transition duration-300 ease-in-out" />
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-95 z-50 md:hidden">
            <div className="flex flex-col items-center justify-start h-full pt-20">
              <button
                onClick={toggleMenu}
                className="absolute top-4 right-4 text-white hover:text-yellow-300 transition duration-300 ease-in-out"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
              <ul className="text-white text-xl space-y-6">
                {menuItems.map((item) => (
                  <li key={item.href} className="hover:text-yellow-300 transition duration-300 ease-in-out">
                    <a href={item.href} target={item.target} onClick={toggleMenu}>{item.label}</a>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex space-x-4">
                <a href="https://github.com/ThomasMaingre" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                  <Github className="w-9 h-12 hover:text-yellow-300 transition duration-300 ease-in-out" />
                </a>
                <a href="https://www.linkedin.com/in/thomas-maingre/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-9 h-12 hover:text-blue-300 transition duration-300 ease-in-out" />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <section
        id="accueil"
        className="py-20 text-center bg-muted"
        style={{
          backgroundImage: "url('/image/backgrounds/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingTop: "150px",
        }}
      >
        <h1
          className="text-6xl font-bold mb-4 text-white"
          style={{
            textShadow: "4px 10px 10px rgba(0, 0, 0, 1)",
          }}
        >
          MAINGRE Thomas
        </h1>
        <h2
          className="text-4xl mb-8 text-white"
          style={{
            textShadow: "4px 8px 8px rgba(0, 0, 0, 1)",
          }}
        >
          Développeur Web Full Stack
        </h2>
      </section>
    </>
  );
}