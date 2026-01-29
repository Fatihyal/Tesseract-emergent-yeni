import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageSquare, Bot, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/button';
import { useLanguage } from '../../context/LanguageContext';

const BOOKING_URL = 'https://link.tesseractcrm.com/widget/booking/VuCHnV26sXlp8qy9DiVG';

export const SolutionsSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const solutions = t('solutions.items');
  const icons = [MessageSquare, Bot];

  return (
    <section 
      id="solutions" 
      data-testid="solutions-section"
      ref={ref}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505]" />
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7C3AED]/10 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm mb-6"
          >
            {t('solutions.sectionTitle')}
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('solutions.sectionSubtitle')}
          </h2>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                data-testid={`solution-card-${index}`}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="group relative"
              >
                {/* Glow Background */}
                <div className={`absolute inset-0 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity ${
                  index === 0 ? 'bg-[#FF5722]/20' : 'bg-[#7C3AED]/20'
                }`} />

                {/* Card */}
                <div className="relative glass-card p-8 sm:p-10 rounded-3xl overflow-hidden h-full">
                  {/* Top Gradient Line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 ${
                    index === 0 
                      ? 'bg-gradient-to-r from-transparent via-[#FF5722] to-transparent' 
                      : 'bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent'
                  }`} />

                  <div className="flex flex-col sm:flex-row gap-6">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${
                        index === 0 
                          ? 'bg-[#FF5722]/10 border border-[#FF5722]/30' 
                          : 'bg-[#7C3AED]/10 border border-[#7C3AED]/30'
                      }`}
                    >
                      <Icon className={`w-8 h-8 ${index === 0 ? 'text-[#FF5722]' : 'text-[#7C3AED]'}`} />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {solution.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed mb-6">
                        {solution.description}
                      </p>

                      {/* Benefits */}
                      <div className="flex flex-wrap gap-3 mb-6">
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 text-sm text-gray-300">
                          <CheckCircle2 className="w-3 h-3 text-green-400" />
                          15 dk kurulum
                        </span>
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 text-sm text-gray-300">
                          <CheckCircle2 className="w-3 h-3 text-green-400" />
                          7/24 aktif
                        </span>
                      </div>

                      {/* CTA */}
                      <Button
                        data-testid={`solution-cta-${index}`}
                        asChild
                        variant="ghost"
                        className={`group/btn px-0 ${
                          index === 0 ? 'text-[#FF5722] hover:text-[#FF5722]' : 'text-[#7C3AED] hover:text-[#7C3AED]'
                        }`}
                      >
                        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                          Hemen Başla
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-2 transition-transform" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
