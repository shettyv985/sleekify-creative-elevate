
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { ThemeToggle } from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Services', path: '/#services' },
    { name: 'Portfolio', path: '/#portfolio' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-display font-bold relative z-50">
            L7 Studio
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-8 mr-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="text-sm font-medium relative overflow-hidden group"
                >
                  <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-full block">
                    {item.name}
                  </span>
                  <span className="absolute inset-0 z-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                    {item.name}
                  </span>
                  <span className="absolute left-0 bottom-0 h-0.5 w-full origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100"></span>
                </a>
              ))}
            </nav>
            <ThemeToggle />
          </div>
          
          {/* Mobile Menu Button and Theme Toggle */}
          <div className="flex items-center space-x-3 md:hidden">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="text-foreground p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-background dark:bg-black/90 z-30 flex flex-col justify-center p-8 transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <nav className="flex flex-col space-y-8 items-center">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="text-xl font-medium relative group"
              onClick={toggleMenu}
            >
              <span>{item.name}</span>
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
