import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);
  const navLinks = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Services',
    path: '/services'
  },
  {
    name: 'Portfolio',
    path: '/portfolio'
  },
  {
    name: 'Contact',
    path: '/contact'
  }];

  const headerClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !isHome ? 'bg-primary shadow-lg py-3' : 'bg-transparent py-5'}`;
  return (
    <header className={headerClass}>
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 z-50">
          <img
            src="/HILLMAN_PROPERTY_LOGO.png"
            alt="Hillman Property"
            className="h-12 w-auto object-contain bg-white rounded p-1.5" />

        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
          <Link
            key={link.name}
            to={link.path}
            className={`text-sm font-medium tracking-wide transition-colors hover:text-accent ${location.pathname === link.path ? 'text-accent' : 'text-white'}`}>

              {link.name.toUpperCase()}
            </Link>
          )}
          <Link to="/contact" className="btn-accent px-6 py-2 text-sm">
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu">

          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen &&
          <motion.div
            initial={{
              opacity: 0,
              x: '100%'
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            exit={{
              opacity: 0,
              x: '100%'
            }}
            transition={{
              type: 'tween',
              duration: 0.3
            }}
            className="fixed inset-0 bg-primary-dark z-40 flex flex-col items-center justify-center md:hidden">

              <nav className="flex flex-col items-center gap-8">
                {navLinks.map((link) =>
              <Link
                key={link.name}
                to={link.path}
                className={`text-2xl font-serif font-medium ${location.pathname === link.path ? 'text-accent' : 'text-white'}`}>

                    {link.name}
                  </Link>
              )}
                <Link to="/contact" className="btn-accent mt-4">
                  Get a Quote
                </Link>

                <div className="mt-12 flex items-center gap-2 text-neutral-300">
                  <Phone size={18} />
                  <span>+27 (0) 11 234 5678</span>
                </div>
              </nav>
            </motion.div>
          }
        </AnimatePresence>
      </div>
    </header>);

}