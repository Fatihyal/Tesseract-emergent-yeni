import { createContext, useContext, useState } from 'react';

const translations = {
  tr: {
    nav: {
      home: 'Ana Sayfa',
      services: 'Hizmetler',
      solutions: 'Çözümler',
      contact: 'İletişim',
      bookAudit: 'Randevu Al'
    },
    hero: {
      title: 'İşletmenizi Otomatik Pilota Alın:',
      titleHighlight: 'Kaçan Fırsatları Yakalayan Yapay Zeka Çözümleri',
      subtitle: 'Tesseract CRM ile satış süreçlerinizi 7/24 çalışan AI agent\'lar ile yönetin, verimliliğinizi %50 artırın.',
      cta: 'Ücretsiz Otomasyon Denetimi Alın',
      ctaSecondary: 'Hizmetlerimizi Keşfedin'
    },
    problems: {
      sectionTitle: 'Tanıdık Geldi mi?',
      sectionSubtitle: 'Birçok işletmenin günlük mücadelesi',
      items: [
        {
          title: 'Cevapsız Kalan Çağrılar',
          description: 'Her kaçırılan çağrı, potansiyel bir müşteri kaybı demek. Mesai saatleri dışında kim cevap veriyor?'
        },
        {
          title: 'Soğuyan Lead\'ler',
          description: 'Hızlı yanıt veremediğiniz potansiyel müşteriler rakiplerinize gidiyor.'
        },
        {
          title: 'Manuel Veri Girişi',
          description: 'Saatler süren manuel işlemler, değerli zamanınızı çalıyor ve hata riskini artırıyor.'
        }
      ]
    },
    solutions: {
      sectionTitle: 'Çözümlerimiz',
      sectionSubtitle: '15 dakikada kurulum, anında sonuç',
      items: [
        {
          title: 'Missed Call Text Back',
          description: 'Kaçırılan her çağrıya otomatik SMS yanıtı. Müşterilerinizi asla kaybetmeyin.'
        },
        {
          title: 'AI Sales Agent',
          description: '7/24 çalışan yapay zeka satış temsilcisi. Lead\'lerinizi anında yakalayın ve dönüştürün.'
        }
      ]
    },
    services: {
      sectionTitle: 'Hizmetlerimiz',
      sectionSubtitle: 'İşletmenizi geleceğe taşıyacak AI çözümleri',
      items: [
        {
          title: 'AI Voice Agents',
          description: 'Telefonlara bakan, randevu alan ve müşteri sorularını yanıtlayan sesli yapay zeka botları.',
          features: ['7/24 Aktif', 'Doğal Konuşma', 'Randevu Yönetimi']
        },
        {
          title: 'SaaS Otomasyonu',
          description: 'GoHighLevel altyapısı ile entegre, uçtan uca müşteri yönetimi ve satış otomasyonu.',
          features: ['CRM Entegrasyonu', 'Pipeline Yönetimi', 'Otomatik Takip']
        },
        {
          title: 'İçerik Otomasyonu',
          description: 'Restoranlar ve yerel işletmeler için otomatik sosyal medya içerik sistemleri.',
          features: ['Otomatik Paylaşım', 'İçerik Planlama', 'Marka Tutarlılığı']
        }
      ]
    },
    roi: {
      sectionTitle: 'Yatırım Getirisi',
      sectionSubtitle: 'Otomasyon bir maliyet değil, bir yatırımdır',
      description: 'Veriye dayalı panolar ile kazancınızı anlık takip edin. Her otomasyon adımının ROI\'sini görün.',
      stats: [
        { value: '%50+', label: 'Verimlilik Artışı' },
        { value: '7/24', label: 'Kesintisiz Hizmet' },
        { value: '%30', label: 'Maliyet Azalması' },
        { value: '15dk', label: 'Kurulum Süresi' }
      ]
    },
    form: {
      sectionTitle: 'İşletme Teşhis Formu',
      sectionSubtitle: 'İşletmenizdeki en büyük tıkanıklığı birlikte tespit edelim',
      description: 'Ücretsiz otomasyon denetimi için formu doldurun. Uzmanlarımız sizinle iletişime geçsin.'
    },
    footer: {
      description: 'Yapay zeka destekli otomasyon çözümleri ile işletmenizi geleceğe taşıyın.',
      quickLinks: 'Hızlı Bağlantılar',
      contact: 'İletişim',
      rights: 'Tüm hakları saklıdır.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      solutions: 'Solutions',
      contact: 'Contact',
      bookAudit: 'Book Audit'
    },
    hero: {
      title: 'Put Your Business on Autopilot:',
      titleHighlight: 'AI Solutions That Capture Lost Opportunities',
      subtitle: 'Manage your sales processes with AI agents working 24/7 with Tesseract CRM, increase your efficiency by 50%.',
      cta: 'Get Free Automation Audit',
      ctaSecondary: 'Explore Our Services'
    },
    problems: {
      sectionTitle: 'Sound Familiar?',
      sectionSubtitle: 'Daily struggles of many businesses',
      items: [
        {
          title: 'Missed Calls',
          description: 'Every missed call means a potential customer loss. Who answers outside business hours?'
        },
        {
          title: 'Cold Leads',
          description: 'Potential customers you can\'t respond to quickly go to your competitors.'
        },
        {
          title: 'Manual Data Entry',
          description: 'Hours of manual processes steal your valuable time and increase error risk.'
        }
      ]
    },
    solutions: {
      sectionTitle: 'Our Solutions',
      sectionSubtitle: 'Setup in 15 minutes, instant results',
      items: [
        {
          title: 'Missed Call Text Back',
          description: 'Automatic SMS response to every missed call. Never lose your customers.'
        },
        {
          title: 'AI Sales Agent',
          description: '24/7 AI sales representative. Capture and convert your leads instantly.'
        }
      ]
    },
    services: {
      sectionTitle: 'Our Services',
      sectionSubtitle: 'AI solutions to take your business to the future',
      items: [
        {
          title: 'AI Voice Agents',
          description: 'Voice AI bots that answer phones, book appointments and respond to customer queries.',
          features: ['24/7 Active', 'Natural Speech', 'Appointment Management']
        },
        {
          title: 'SaaS Automation',
          description: 'End-to-end customer management and sales automation integrated with GoHighLevel infrastructure.',
          features: ['CRM Integration', 'Pipeline Management', 'Auto Follow-up']
        },
        {
          title: 'Content Automation',
          description: 'Automatic social media content systems for restaurants and local businesses.',
          features: ['Auto Posting', 'Content Planning', 'Brand Consistency']
        }
      ]
    },
    roi: {
      sectionTitle: 'Return on Investment',
      sectionSubtitle: 'Automation is not a cost, it\'s an investment',
      description: 'Track your earnings instantly with data-driven dashboards. See the ROI of every automation step.',
      stats: [
        { value: '50%+', label: 'Efficiency Increase' },
        { value: '24/7', label: 'Uninterrupted Service' },
        { value: '30%', label: 'Cost Reduction' },
        { value: '15min', label: 'Setup Time' }
      ]
    },
    form: {
      sectionTitle: 'Business Diagnosis Form',
      sectionSubtitle: 'Let\'s identify the biggest bottleneck in your business together',
      description: 'Fill out the form for a free automation audit. Our experts will contact you.'
    },
    footer: {
      description: 'Take your business to the future with AI-powered automation solutions.',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      rights: 'All rights reserved.'
    }
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('tr');

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'tr' ? 'en' : 'tr');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
