import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Layers, Share2, ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/button';
import { useLanguage } from '../../context/LanguageContext';

const BOOKING_URL = 'https://link.tesseractcrm.com/widget/booking/VuCHnV26sXlp8qy9DiVG';

export const ServicesSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = t('services.items');
  const icons = [Phone, Layers, Share2];
  const colors = ['#FF5722', '#7C3AED', '#10B981'];

  return (
    <section 
      id="services" 
      data-testid="services-section"
      ref={ref}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#050505]" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

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
            className="inline-block px-4 py-2 rounded-full bg-[#FF5722]/10 border border-[#FF5722]/20 text-[#FF5722] text-sm mb-6"
          >
            {t('services.sectionTitle')}
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('services.sectionSubtitle')}
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = icons[index];
            const color = colors[index];
            const isLarge = index === 0;

            return (
              <motion.div
                key={index}
                data-testid={`service-card-${index}`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className={`group relative ${isLarge ? 'md:col-span-2 lg:col-span-1 lg:row-span-1' : ''}`}
              >
                {/* Hover Glow */}
                <div 
                  className="absolute inset-0 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: `${color}20` }}
                />

                {/* Card */}
                <div className="relative glass-card glass-card-hover p-8 rounded-3xl h-full overflow-hidden">
                  {/* Corner Accent */}
                  <div 
                    className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20"
                    style={{ backgroundColor: color }}
                  />

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                    style={{ 
                      backgroundColor: `${color}15`,
                      border: `1px solid ${color}30`
                    }}
                  >
                    <Icon className="w-7 h-7" style={{ color }} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature, fIndex) => (
                      <span 
                        key={fIndex}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{ 
                          backgroundColor: `${color}10`,
                          color: color,
                          border: `1px solid ${color}20`
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA Link */}
                  <Button
                    data-testid={`service-cta-${index}`}
                    asChild
                    variant="ghost"
                    className="px-0 hover:bg-transparent group/link"
                  >
                    <a 
                      href={BOOKING_URL} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ color }}
                    >
                      Detaylı Bilgi
                      <ArrowUpRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
