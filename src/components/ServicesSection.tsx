import { 
  Apple, 
  Brain, 
  Heart, 
  Dumbbell, 
  Moon, 
  Pill 
} from "lucide-react";

const services = [
  {
    icon: Apple,
    title: "Nutrition",
    description: "Hormonal balance through food",
    points: [
      "Anti-inflammatory meal planning",
      "Blood sugar stabilization",
      "Hormone-supporting nutrients",
      "Personalized dietary protocols"
    ]
  },
  {
    icon: Brain,
    title: "Stress & Anxiety Management",
    description: "Practical tools and techniques",
    points: [
      "Mindfulness practices",
      "Breathing techniques",
      "Stress response optimization",
      "Emotional regulation strategies"
    ]
  },
  {
    icon: Heart,
    title: "Women's Hormone Health",
    description: "PCOS, PMS, hormonal optimization",
    points: [
      "Cycle tracking and optimization",
      "PCOS symptom management",
      "PMS relief strategies",
      "Reproductive health support"
    ]
  },
  {
    icon: Dumbbell,
    title: "Exercise",
    description: "Hormone-friendly movement and planning",
    points: [
      "Cycle-synced workouts",
      "Cortisol-conscious exercise",
      "Movement for hormone balance",
      "Sustainable fitness planning"
    ]
  },
  {
    icon: Moon,
    title: "Lifestyle Management",
    description: "Sleep optimization, life balance",
    points: [
      "Sleep hygiene protocols",
      "Circadian rhythm support",
      "Work-life balance strategies",
      "Daily routine optimization"
    ]
  },
  {
    icon: Pill,
    title: "Supplementation & Natural Support",
    description: "Evidence-based supplements",
    points: [
      "Targeted supplement protocols",
      "Natural hormone support",
      "Nutrient deficiency correction",
      "Quality supplement guidance"
    ]
  }
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-light-green">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6">
            Comprehensive Health Coaching Areas
          </h2>
          <p className="body-text max-w-3xl mx-auto">
            Our 6-pillar approach addresses every aspect of hormonal wellness, 
            providing you with the tools and knowledge to achieve lasting vitality.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="card hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-soft flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="heading-md text-xl mb-1">{service.title}</h3>
                    <p className="text-text-light text-sm">{service.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {service.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="text-text-light text-sm flex items-start gap-2">
                      <span className="text-primary text-xs mt-1">●</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;