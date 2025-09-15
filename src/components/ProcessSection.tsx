import { 
  Calendar, 
  FileText, 
  Target, 
  BarChart, 
  MessageCircle 
} from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Calendar,
    title: "Book Getting-to-Know-You Meeting",
    description: "Schedule your free 30-minute consultation to discuss your health goals and challenges.",
    detail: "No commitment required - just an open conversation about your wellness journey."
  },
  {
    number: 2,
    icon: FileText,
    title: "Share & Track",
    description: "Share your problems list and complete a one-week food and health diary.",
    detail: "This gives us valuable insights into your current patterns and specific health challenges."
  },
  {
    number: 3,
    icon: Target,
    title: "Choose Your Program",
    description: "Select between our intensive 1-month program or comprehensive 6-month transformation.",
    detail: "Both options include personalized coaching tailored to your specific needs."
  },
  {
    number: 4,
    icon: BarChart,
    title: "Weekly Cycle & Personalized Plans",
    description: "Complete weekly questionnaires, which the coach reviews to create your personalized weekly plans.",
    detail: "Coach researches your responses and creates customized plans specifically for your needs."
  },
  {
    number: 5,
    icon: MessageCircle,
    title: "Ongoing Support & Open Communication",
    description: "Enjoy continuous communication and support throughout your transformation journey.",
    detail: "Direct access to Kim for questions, adjustments, and celebration of your progress."
  }
];

const ProcessSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6">
            How It Works
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            Our proven 5-step process ensures you receive personalized, effective support 
            every step of the way on your journey to hormonal wellness.
          </p>
        </div>
        
        {/* Process Steps */}
        <div className="relative">
          
          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className={`relative flex items-center ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:gap-16 gap-8`}>
                  {/* Step Content */}
                  <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'} text-center lg:max-w-md`}>
                    <div className="card">
                      <h3 className="heading-md text-xl mb-3">{step.title}</h3>
                      <p className="text-text-dark mb-3">{step.description}</p>
                      <p className="text-text-light text-sm">{step.detail}</p>
                    </div>
                  </div>

                  {/* Step Icon Circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                  </div>

                  {/* Empty space for alignment */}
                  <div className="flex-1 lg:max-w-md lg:block hidden"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;