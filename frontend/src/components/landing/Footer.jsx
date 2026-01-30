import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const LOGO_URL = 'https://customer-assets.emergentagent.com/job_ai-business-boost-11/artifacts/z6mxilkl_350x180%20px%20logo.png';
const BOOKING_URL = 'https://link.tesseractcrm.com/widget/booking/VuCHnV26sXlp8qy9DiVG';

export const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t('nav.home'), href: '#hero' },
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.solutions'), href: '#solutions' },
    { label: t('nav.contact'), href: '#contact' }
  ];

  return (
    <footer 
      data-testid="footer"
      className="relative pt-20 pb-8 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#030303]" />
      
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF5722]/50 to-transparent" />

      {/* Ambient Glow */}
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[200px] bg-[#FF5722]/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.a 
              href="#hero"
              whileHover={{ scale: 1.02 }}
              className="inline-block mb-6"
            >
              <img 
                src={LOGO_URL} 
                alt="Tesseract CRM" 
                className="h-12 w-auto"
              />
            </motion.a>
            <p className="text-gray-400 leading-relaxed max-w-md mb-6">
              {t('footer.description')}
            </p>
            <motion.a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="footer-cta"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF5722] hover:bg-[#FF5722]/90 text-white rounded-full font-medium transition-all shadow-[0_0_20px_rgba(255,87,34,0.4)]"
            >
              {t('nav.bookAudit')}
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 4 }}
                    data-testid={`footer-link-${index}`}
                    className="text-gray-400 hover:text-[#FF5722] transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#FF5722]/50" />
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">{t('footer.contact')}</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:info@tesseractcrm.com"
                  className="text-gray-400 hover:text-[#FF5722] transition-colors inline-flex items-center gap-3"
                >
                  <Mail className="w-4 h-4 text-[#FF5722]" />
                  info@tesseractcrm.com
                </a>
              </li>
              <li>
                <a 
                  href="https://www.tesseractcrm.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#FF5722] transition-colors inline-flex items-center gap-3"
                >
                  <MapPin className="w-4 h-4 text-[#FF5722]" />
                  www.tesseractcrm.com
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {/* Facebook */}
              <motion.a
                href="https://www.facebook.com/TesseractCRM/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="social-facebook"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1877F2]/20 hover:border-[#1877F2]/30 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </motion.a>
              {/* Instagram */}
              <motion.a
                href="https://www.instagram.com/tesseractcrm"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="social-instagram"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#E4405F]/20 hover:border-[#E4405F]/30 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </motion.a>
              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/company/tesseractcrm"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="social-linkedin"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/30 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.a>
              {/* TikTok */}
              <motion.a
                href="https://www.tiktok.com/@yaldizajans"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="social-tiktok"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#FF5722]/20 hover:border-[#FF5722]/30 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Tesseract CRM. {t('footer.rights')}
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>Powered by</span>
              <span className="text-[#FF5722] font-medium">GoHighLevel</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
