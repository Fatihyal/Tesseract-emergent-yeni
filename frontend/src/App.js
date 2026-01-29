import "@/App.css";
import { LanguageProvider } from "./context/LanguageContext";
import { Navbar } from "./components/landing/Navbar";
import { HeroSection } from "./components/landing/HeroSection";
import { ProblemsSection } from "./components/landing/ProblemsSection";
import { SolutionsSection } from "./components/landing/SolutionsSection";
import { ServicesSection } from "./components/landing/ServicesSection";
import { ROISection } from "./components/landing/ROISection";
import { DiagnosisFormSection } from "./components/landing/DiagnosisFormSection";
import { Footer } from "./components/landing/Footer";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <LanguageProvider>
      <div className="App dark min-h-screen bg-[#050505] text-white overflow-x-hidden">
        {/* Noise Overlay */}
        <div className="noise-overlay" />
        
        {/* Navigation */}
        <Navbar />
        
        {/* Main Content */}
        <main>
          <HeroSection />
          <ProblemsSection />
          <SolutionsSection />
          <ServicesSection />
          <ROISection />
          <DiagnosisFormSection />
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* Toast Notifications */}
        <Toaster position="bottom-right" />
      </div>
    </LanguageProvider>
  );
}

export default App;
