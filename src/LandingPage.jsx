import { useEffect } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TopWoodSection from './components/TopWoodSection';
import ProductGrid from './components/ProductGrid';
import NewArrivalsSection from './components/NewArrivalsSection';
import FeaturesSection from './components/FeaturesSection';
import PromoBannerSection from './components/PromoBannerSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';
import { initScrollAnimations } from './utils/scrollAnimations';
import './styles/animations.css';

const LandingPage = () => {
  useEffect(() => {
    const observer = initScrollAnimations();
    
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="bg-white min-h-screen w-full">
      <TopBar />
      
      <div className="w-full max-w-7xl mx-auto px-4 font-sans">
        <Navbar />
        <HeroSection />
        <TopWoodSection />
        <ProductGrid />
        <NewArrivalsSection />
        <FeaturesSection />
        <PromoBannerSection />
      </div>

      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default LandingPage;