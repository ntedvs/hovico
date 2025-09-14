import kimImage from "@/assets/kim-headshot.jpg";

const AboutSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src={kimImage}
                alt="Kim Van Nieuwenhove - Certified Health & Hormonal Coach"
                className="w-full max-w-lg mx-auto rounded-soft shadow-lg"
              />
              <div className="accent-graphic -bottom-4 -right-4 w-20 h-20 bg-primary/10 rounded-full"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="heading-lg mb-6">
              Meet Kim Van Nieuwenhove
            </h2>
            
            <div className="space-y-4 text-lg leading-relaxed">
              <p className="text-text-dark">
                <strong>Certified Health Coach & Hormonal Coach</strong> specializing in
                women's hormonal wellness, PCOS management, and PMS relief.
              </p>

              <p className="text-text-light">
                Kim takes a unique <strong className="text-primary">3D holistic approach</strong> that goes beyond traditional methods, addressing the interconnected aspects of mental health, diet, and lifestyle balance as a complete system.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;