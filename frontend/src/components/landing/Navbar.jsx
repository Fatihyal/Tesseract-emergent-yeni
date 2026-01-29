import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '../ui/button';
import { useLanguage } from '../../context/LanguageContext';

const LOGO_URL = 'https://customer-assets.emergentagent.com/job_ai-business-boost-11/artifacts/z6mxilkl_350x180%20px%20logo.png';
const BOOKING_URL = 'https://link.tesseractcrm.com/widget/booking/VuCHnV26sXlp8qy9DiVG';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: t('nav.home') },
    { href: '#services', label: t('nav.services') },
    { href: '#solutions', label: t('nav.solutions') },
    { href: '#contact', label: t('nav.contact') }
  ];

  return (
    <>
      <motion.nav
        data-testid="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a 
              href="#hero"
              data-testid="navbar-logo"
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <img 
                src={LOGO_URL} 
                alt="Tesseract CRM" 
                className="h-10 sm:h-12 w-auto"
              />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  data-testid={`nav-link-${index}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                  className="text-gray-300 hover:text-white transition-colors font-medium"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden md:flex items-center gap-4">
              {/* Language Toggle */}
              <motion.button
                data-testid="language-toggle"
                onClick={toggleLanguage}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
              </motion.button>

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  data-testid="navbar-cta"
                  asChild
                  className="bg-[#FF5722] hover:bg-[#FF5722]/90 text-white rounded-full px-6 shadow-[0_0_20px_rgba(255,87,34,0.4)] hover:shadow-[0_0_30px_rgba(255,87,34,0.6)] transition-all"
                >
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                    {t('nav.bookAudit')}
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-3">
              <motion.button
                data-testid="mobile-language-toggle"
                onClick={toggleLanguage}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full border border-white/20"
              >
                <Globe className="w-5 h-5" />
              </motion.button>
              <motion.button
                data-testid="mobile-menu-button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{ scale: 0.95 }}
                className="p-2"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden pt-20"
          >
            <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" />
            <div className="relative flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  data-testid={`mobile-nav-link-${index}`}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-medium text-white hover:text-[#FF5722] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button
                  data-testid="mobile-cta"
                  asChild
                  className="bg-[#FF5722] hover:bg-[#FF5722]/90 text-white rounded-full px-8 py-6 text-lg shadow-[0_0_30px_rgba(255,87,34,0.5)]"
                >
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                    {t('nav.bookAudit')}
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
