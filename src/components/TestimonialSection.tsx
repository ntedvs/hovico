import { Star } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="section-padding bg-beige-soft relative overflow-hidden">
      {/* Accent Graphics */}
      <div className="accent-graphic top-8 left-8 w-16 h-16 bg-primary/10 rounded-full"></div>
      <div className="accent-graphic bottom-8 right-8 w-24 h-2 bg-primary/10 rounded-full"></div>
      
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Rating Stars */}
          <div className="flex justify-center gap-1 mb-8">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          
          {/* Testimonial */}
          <blockquote className="mb-8">
            <p className="text-2xl lg:text-3xl font-serif leading-relaxed text-text-dark mb-6">
              "Working with Kim has transformed my life. After years of struggling with 
              PCOS symptoms, I finally feel like myself again. Her personalized approach 
              and genuine care made all the difference."
            </p>
            <footer>
              <cite className="text-lg text-text-light font-medium">— Sarah M.</cite>
            </footer>
          </blockquote>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-serif font-bold text-primary mb-2">200+</div>
              <div className="text-text-light">Women Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-bold text-primary mb-2">95%</div>
              <div className="text-text-light">Report Improved Symptoms</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-bold text-primary mb-2">5★</div>
              <div className="text-text-light">Average Client Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;