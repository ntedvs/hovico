import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Getting-to-Know-You Meeting",
    price: "Free",
    duration: "30 minutes",
    description: "Start your journey with a no-pressure consultation",
    features: [
      "Share your health challenges & goals",
      "Learn about our approach",
      "Receive initial guidance",
      "No commitment required"
    ],
    cta: "Book Free Meeting",
    popular: false
  },
  {
    name: "One-Month Program",
    price: "€480",
    duration: "4 weeks",
    description: "Intensive support to kickstart your transformation",
    features: [
      "Weekly 1-on-1 coaching sessions",
      "Weekly questionnaires for personalized insights",
      "Customized weekly plans created by coach",
      "Food & health diary review and guidance",
      "Direct coach access via messaging",
      "Personalized nutrition and exercise recommendations"
    ],
    cta: "Start Transformation",
    popular: true
  },
  {
    name: "Six-Month Program",
    price: "€820",
    duration: "6 months",
    description: "Complete transformation with ongoing support",
    features: [
      "Everything in One-Month Program",
      "Extended coaching relationship",
      "Original PDFs with health/wellness information written by coach",
      "Meal planning templates",
      "Recipe collections",
      "Lifestyle optimization guides",
      "Long-term habit formation",
      "Sustained support system"
    ],
    cta: "Begin Journey",
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6">
            Choose Your Path to Wellness
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            Flexible programs designed to meet you where you are in your health journey. 
            Every option includes personalized support tailored to your unique needs.
          </p>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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