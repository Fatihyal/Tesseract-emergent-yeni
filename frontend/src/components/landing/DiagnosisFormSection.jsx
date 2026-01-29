import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ClipboardCheck, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const FORM_URL = 'https://link.tesseractcrm.com/widget/form/iFOzCNyLBErzA4PTRZld';

export const DiagnosisFormSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section 
      id="contact" 
      data-testid="diagnosis-form-section"
      ref={ref}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#050505]" />
      
      {/* Gradient Effects */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#FF5722]/10 via-[#7C3AED]/10 to-[#FF5722]/10 rounded-full blur-[150px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#7C3AED] text-sm mb-6"
          >
            <ClipboardCheck className="w-4 h-4" />
            {t('form.sectionTitle')}
          </motion.span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('form.sectionSubtitle')}
          </h2>

          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            {t('form.description')}
          </p>
        </motion.div>

        {/* Form Container - The Cockpit Style */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          {/* Outer Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF5722]/20 via-[#7C3AED]/20 to-[#FF5722]/20 rounded-3xl blur-2xl" />

          {/* Form Card */}
          <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-4 sm:p-6 lg:p-8 overflow-hidden">
            {/* Top Accent Line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#FF5722] to-transparent" />

            {/* Corner Decorations */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#FF5722]/30 rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[#7C3AED]/30 rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[#7C3AED]/30 rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#FF5722]/30 rounded-br-lg" />

            {/* Header Bar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-sm text-gray-400 hidden sm:inline">tesseractcrm.com/diagnosis</span>
              </div>
              <div className="flex items-center gap-2 text-[#FF5722]">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">AI Powered</span>
              </div>
            </div>

            {/* GHL Form Iframe */}
            <div className="relative min-h-[600px] bg-[#0a0a0a] rounded-xl overflow-hidden">
              <iframe
                data-testid="ghl-form-iframe"
                src={FORM_URL}
                style={{
                  width: '100%',
                  height: '600px',
                  border: 'none',
                  borderRadius: '12px'
                }}
                scrolling="yes"
                title="İşletme Teşhis Formu"
              />
            </div>

            {/* Bottom Status */}
            <div className="flex items-center justify-center gap-4 mt-6 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-gray-500">Güvenli Bağlantı</span>
              </div>
              <div className="w-px h-4 bg-white/10" />
              <span className="text-xs text-gray-500">256-bit SSL</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
