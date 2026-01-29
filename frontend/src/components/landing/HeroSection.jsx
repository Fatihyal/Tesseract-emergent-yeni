import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import { Button } from '../ui/button';
import { useLanguage } from '../../context/LanguageContext';

const LOGO_VERTICAL = 'https://customer-assets.emergentagent.com/job_ai-business-boost-11/artifacts/z5nx8sb0_Dikey%20istiflenmi%C5%9F.png';
const BOOKING_URL = 'https://link.tesseractcrm.com/widget/booking/VuCHnV26sXlp8qy9DiVG';

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section 
      id="hero" 
      data-testid="hero-section"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[#050505]" />
      
      {/* Gradient Orbs */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#7C3AED]/30 rounded-full blur-[120px]"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#FF5722]/20 rounded-full blur-[100px]"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
            >
              <Sparkles className="w-4 h-4 text-[#FF5722]" />
              <span className="text-sm text-gray-300">AI Employee • Yapay Zeka Çalışanı</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              <span className="text-white">{t('hero.title')}</span>
              <br />
              <span className="text-gradient">{t('hero.titleHighlight')}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg text-gray-400 mb-10 max-w-xl leading-relaxed"
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  data-testid="hero-cta-primary"
                  asChild
                  size="lg"
                  className="bg-[#FF5722] hover:bg-[#FF5722]/90 text-white rounded-full px-8 py-6 text-lg font-medium shadow-[0_0_30px_rgba(255,87,34,0.5)] hover:shadow-[0_0_50px_rgba(255,87,34,0.7)] transition-all group"
                >
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                    <Zap className="w-5 h-5 mr-2" />
                    {t('hero.cta')}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  data-testid="hero-cta-secondary"
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/20 hover:bg-white/10 text-white rounded-full px-8 py-6 text-lg font-medium backdrop-blur-sm"
                >
                  <a href="#services">
                    {t('hero.ctaSecondary')}
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-12 flex items-center gap-8 text-sm text-gray-500"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>7/24 Active</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF5722]" />
                <span>GoHighLevel Partner</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Glass Card with Logo */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF5722]/30 to-[#7C3AED]/30 rounded-3xl blur-3xl" />
              
              {/* Main Card */}
              <div className="relative glass-card p-8 sm:p-12 rounded-3xl overflow-hidden">
                {/* Inner Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-[#FF5722] to-transparent" />
                
                {/* Logo */}
                <div className="flex justify-center">
                  <img 
                    src={LOGO_VERTICAL}
                    alt="Tesseract CRM"
                    className="w-48 sm:w-64 h-auto"
                  />
                </div>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="glass-card p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-[#FF5722]">%50+</div>
                    <div className="text-xs text-gray-400 mt-1">Verimlilik Artışı</div>
                  </div>
                  <div className="glass-card p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-[#7C3AED]">7/24</div>
                    <div className="text-xs text-gray-400 mt-1">AI Desteği</div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute -top-4 -right-4 w-24 h-24 border border-[#FF5722]/30 rounded-full"
                />
                <motion.div
                  animate={{ 
                    rotate: [360, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  className="absolute -bottom-6 -left-6 w-32 h-32 border border-[#7C3AED]/20 rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ height: ['20%', '60%', '20%'] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 bg-[#FF5722] rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
