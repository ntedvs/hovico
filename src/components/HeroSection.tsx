import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-beige-primary/60"></div>
      </div>
      
      {/* Accent Graphics */}
      <div className="accent-graphic top-8 right-8 w-32 h-32 bg-primary/10 rounded-full"></div>
      <div className="accent-graphic bottom-12 left-8 w-24 h-1 bg-primary/20"></div>
      
      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Bilingual Badge */}
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-soft mb-8">
            <Globe className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-text-dark">English & Dutch Services</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="heading-xl mb-6">
            Reclaim Your Vitality with 
            <span className="block text-primary"> Natural Hormone Balance</span>
          </h1>
          
          {/* Subheadline */}
          <p className="body-text text-xl mb-8 max-w-2xl mx-auto">
            Transform your health with our holistic approach connecting diet, mental wellness, 
            and lifestyle. Specialized support for PCOS, PMS, and women's hormonal health.
          </p>
          
          {/* CTA Button */}
          <Button className="btn-hero" size="lg" onClick={scrollToNextSection}>
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;