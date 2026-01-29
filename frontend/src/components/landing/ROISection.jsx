import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, BarChart3 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const ROISection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = t('roi.stats');

  return (
    <section 
      id="roi" 
      data-testid="roi-section"
      ref={ref}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505]" />
      
      {/* Ambient Effects */}
      <motion.div 
        className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#FF5722]/10 rounded-full blur-[150px]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-[#7C3AED]/10 rounded-full blur-[100px]"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF5722]/10 border border-[#FF5722]/20 text-[#FF5722] text-sm mb-6"
            >
              <TrendingUp className="w-4 h-4" />
              {t('roi.sectionTitle')}
            </motion.span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              {t('roi.sectionSubtitle')}
            </h2>

            <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-10">
              {t('roi.description')}
            </p>

            {/* Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="glass-card p-6 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="w-5 h-5 text-[#FF5722]" />
                <span className="text-sm font-medium text-gray-300">Performans Paneli</span>
              </div>
              
              {/* Mock Chart */}
              <div className="flex items-end gap-2 h-24">
                {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={isInView ? { height: `${height}%` } : {}}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                    className="flex-1 rounded-t-sm"
                    style={{
                      background: i === 6 
                        ? 'linear-gradient(to top, #FF5722, #FF5722)' 
                        : 'linear-gradient(to top, rgba(255,87,34,0.3), rgba(255,87,34,0.1))'
                    }}
                  />
                ))}
              </div>
              
              <div className="flex justify-between mt-4 text-xs text-gray-500">
                <span>Pzt</span>
                <span>Sal</span>
                <span>Çar</span>
                <span>Per</span>
                <span>Cum</span>
                <span>Cmt</span>
                <span className="text-[#FF5722]">Paz</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4 sm:gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                data-testid={`roi-stat-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card glass-card-hover p-6 sm:p-8 rounded-2xl text-center relative overflow-hidden group"
              >
                {/* Glow on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity ${
                  index % 2 === 0 ? 'bg-[#FF5722]/5' : 'bg-[#7C3AED]/5'
                }`} />
                
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                  className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 ${
                    index % 2 === 0 ? 'text-[#FF5722]' : 'text-[#7C3AED]'
                  }`}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
