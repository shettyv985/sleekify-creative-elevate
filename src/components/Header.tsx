
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

  // Close mobile menu when clicking on a menu item
  const handleMenuItemClick = () => {
    if (window.innerWidth < 768) {
      setIsMenuOpen(false);
    }
  };

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
        scrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
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
              className="text-foreground p-2 focus:outline-none rounded-full bg-primary/10 backdrop-blur-md border border-white/10 hover:bg-primary/20 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation - Slide in from right */}
      <div
        className={`fixed inset-y-0 right-0 max-w-xs w-full bg-background/95 dark:bg-black/95 z-30 flex flex-col justify-center p-8 transition-all duration-300 ease-in-out md:hidden shadow-xl ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } backdrop-blur-md border-l border-white/10 dark:border-white/5`}
      >
        <button 
          onClick={toggleMenu}
          className="absolute top-4 right-4 p-2 text-foreground rounded-full bg-primary/10 border border-white/10 hover:bg-primary/20 transition-all duration-300"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </button>
        
        <nav className="flex flex-col space-y-6 items-start">
          {menuItems.map((item, index) => (
            <a
              key={item.name}
              href={item.path}
              onClick={handleMenuItemClick}
              className="text-lg font-medium relative group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span>{item.name}</span>
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
        
        <div className="mt-12 border-t border-white/10 dark:border-white/5 pt-8">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} L7 Studio
          </p>
        </div>
      </div>
      
      {/* Overlay when mobile menu is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden animate-fade-in"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
};

export default Header;
