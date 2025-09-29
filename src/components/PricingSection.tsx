import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Free Consultation",
    price: "Free",
    duration: "30 minutes",
    description: "Getting to know you meeting - start your health journey",
    features: [
      "Ask questions about different programs",
      "Share your health challenges & goals",
      "Learn about our holistic approach",
      "Meet your coach and understand what to expect",
      "No commitment required"
    ],
    cta: "Book Free Meeting",
    popular: false
  },
  {
    name: "One-on-One Coaching",
    price: "€120",
    duration: "Single session",
    description: "Perfect for self-motivated individuals ready to start",
    features: [
      "60-minute comprehensive intake session",
      "Hormonal balance questionnaires & analysis",
      "One-week food and health diary review",
      "Personal advice on nutrition, sleep & exercise",
      "Stress management guidance",
      "Customized health plan to follow independently"
    ],
    cta: "Start Your Journey",
    popular: false
  },
  {
    name: "3-Month Coaching Program",
    price: "€270",
    duration: "3 months",
    description: "Comprehensive support with ongoing guidance",
    features: [
      "Everything from one-on-one coaching session",
      "Detailed follow-up meeting with action plan",
      "3 months of support via email and WhatsApp",
      "Access to exclusive recipes and e-books",
      "Hormonal health and vitality resources",
      "Regular check-ins and plan adjustments"
    ],
    cta: "Begin Transformation",
    popular: true
  },
  {
    name: "6-Month Coaching Program",
    price: "€490",
    duration: "6 months",
    description: "Complete transformation with extended support",
    features: [
      "Everything from 3-month program",
      "4 live coaching sessions (60 minutes each)",
      "6 months of continuous support via email/WhatsApp",
      "Access to all e-books written by the coach",
      "Comprehensive resource library",
      "Long-term habit formation support",
      "Sustained accountability partnership"
    ],
    cta: "Commit to Wellness",
    popular: false
  }
];

const PricingSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6">
            Choose Your Path to Wellness
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            My holistic approach recognizes that everything works together: mental health, diet,
            lifestyle balance, and hormonal balance. The goal isn't just weight loss or stress
            reduction in isolation, but overall health balance and wellbeing so your body can heal.
            I provide support, accountability, and personalized strategies - we're in this together!
          </p>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative card flex flex-col transition-transform duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'ring-2 ring-primary shadow-xl' 
                  : 'ring-1 ring-gray-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-4 py-2 rounded-soft text-sm font-medium flex items-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}
              
              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className="heading-md text-xl mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-serif font-bold text-primary">{plan.price}</span>
                  {plan.price !== "Free" && (
                    <span className="text-text-light ml-2">/ {plan.duration}</span>
                  )}
                </div>
                <p className="text-text-light">{plan.description}</p>
              </div>
              
              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-text-light">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <Button
                className={`w-full mt-auto ${plan.popular ? 'btn-hero' : 'btn-beige'}`}
                size="lg"
                onClick={scrollToContact}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
        
        {/* Guarantee */}
        <div className="text-center mt-12 p-6 bg-beige-soft rounded-soft max-w-2xl mx-auto">
          <h4 className="font-serif text-xl font-semibold mb-2 text-text-dark">
            100% Satisfaction Guarantee
          </h4>
          <p className="text-text-light">
            If you're not completely satisfied with your progress in the first 30 days, 
            we'll work with you to make it right or provide a full refund.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;