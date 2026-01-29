# Tesseract CRM Landing Page - PRD

## Project Overview
**Brand:** Tesseract CRM  
**Website:** www.tesseractcrm.com  
**Type:** High-conversion landing page for AI Automation solutions  
**Date Created:** January 2025

---

## Original Problem Statement
İşletmelerin operasyonel yüklerini azaltan ve gelirlerini artıran Yapay Zeka Otomasyon çözümlerini pazarlayan yüksek dönüşümlü bir landing page. GoHighLevel tabanlı white-label SaaS ve AI dönüşüm danışmanlığı.

## User Choices
- **Theme:** Dark mode + Glassmorphism
- **Colors:** Orange (#FF5722) + Purple (#7C3AED) on black (#050505)
- **Animations:** Heavy (parallax, 3D effects, scroll reveals)
- **Language:** TR/EN dual language support
- **Form:** GHL widget integration (no local DB)
- **Testimonials:** Not included

---

## User Personas
1. **SMB Owners** - Local business owners looking for AI automation
2. **Sales Managers** - Need 24/7 lead capture solutions
3. **Restaurant/Retail Owners** - Need content automation

---

## Core Requirements (Static)
- Hero section with compelling headline
- Problem-Solution approach (Pain points → Solutions)
- Services showcase (AI Voice, SaaS, Content Automation)
- ROI/Investment section with stats
- Business Diagnosis Form (GHL widget)
- Mobile-optimized responsive design
- Booking integration

---

## What's Been Implemented ✅

### Sections
- ✅ Navbar with language toggle (TR/EN)
- ✅ Hero Section with animated CTA
- ✅ Problems Section (3 pain points)
- ✅ Solutions Section (2 solutions)
- ✅ Services Section (3 services with Bento grid)
- ✅ ROI Section with animated stats
- ✅ Diagnosis Form with GHL iframe embed
- ✅ Footer with links and social icons

### Features
- ✅ Language Toggle (TR/EN)
- ✅ Smooth scroll navigation
- ✅ Framer Motion animations
- ✅ Glassmorphism design
- ✅ Mobile responsive
- ✅ User logo assets integrated

### Integrations
- ✅ GHL Form Widget: https://link.tesseractcrm.com/widget/form/iFOzCNyLBErzA4PTRZld
- ✅ Booking Widget: https://link.tesseractcrm.com/widget/booking/VuCHnV26sXlp8qy9DiVG

---

## Prioritized Backlog

### P0 (Completed) ✅
- All core sections implemented
- Dual language support
- Form integration
- Mobile optimization

### P1 (Future Enhancements)
- [ ] Add testimonial/case study section
- [ ] Add pricing section
- [ ] Add FAQ section
- [ ] Add blog/resources section

### P2 (Nice to Have)
- [ ] Add live chat widget
- [ ] Add WhatsApp integration
- [ ] Add Google Analytics/Tag Manager
- [ ] Add cookie consent banner

---

## Tech Stack
- **Frontend:** React + Tailwind CSS + Shadcn/UI
- **Animations:** Framer Motion
- **Backend:** FastAPI (minimal, not used for landing)
- **Form:** GHL Widget (external)

---

## Files Structure
```
/app/frontend/src/
├── App.js
├── context/LanguageContext.js
├── components/landing/
│   ├── Navbar.jsx
│   ├── HeroSection.jsx
│   ├── ProblemsSection.jsx
│   ├── SolutionsSection.jsx
│   ├── ServicesSection.jsx
│   ├── ROISection.jsx
│   ├── DiagnosisFormSection.jsx
│   └── Footer.jsx
```

---

## Next Action Items
1. Consider adding testimonials section
2. Add Google Analytics tracking
3. Consider A/B testing different CTAs
