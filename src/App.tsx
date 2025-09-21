import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { Dashboard } from './components/Dashboard';
import { CropsSection } from './components/CropsSection';
import { SoilInsights } from './components/SoilInsights';
import { AIPredictions } from './components/AIPredictions';
import { ImageGallerySection } from './components/ImageGallerySection';
import { ProfileSection } from './components/ProfileSection';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
// import { BotsonicChatbox } from './components/BotsonicChatbox';
// import { BOTSONIC_CONFIG } from './config/botsonic';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <HeroSection />
        <Dashboard />
        <CropsSection />
        <SoilInsights />
        <AIPredictions />
        <ImageGallerySection />
        <ProfileSection />
        <Testimonials />
      </main>
      
      <Footer />
      {/* BotsonicChatbox temporarily disabled to fix CORS issues */}
      {/* <BotsonicChatbox 
        position={BOTSONIC_CONFIG.POSITION}
        theme={BOTSONIC_CONFIG.THEME}
      /> */}
      <Toaster />
    </div>
  );
}