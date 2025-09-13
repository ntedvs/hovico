import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  ChevronDown
} from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How do I get started with hormone coaching?",
    answer: "Simply book your free Getting-to-Know-You meeting where we'll discuss your health challenges and goals. This 30-minute consultation helps us understand if our approach is right for you, with no pressure or commitment required."
  },
  {
    question: "Are all sessions conducted online?",
    answer: "Yes, all coaching sessions are conducted via secure video calls, allowing you to receive support from the comfort of your home. This also enables us to serve clients globally while maintaining the personal connection essential for effective coaching."
  },
  {
    question: "What's included in the coaching programs?",
    answer: "Both programs include weekly 1-on-1 sessions, personalized nutrition and lifestyle plans, direct coach access for questions, and ongoing progress monitoring. The 6-month program also includes exclusive educational resources, meal planning templates, and extended support."
  },
  {
    question: "Do you really offer services in both English and Dutch?",
    answer: "Absolutely! Kim is fluent in both English and Dutch, allowing her to provide comfortable, culturally-appropriate coaching in your preferred language. This ensures clear communication and deeper understanding of your unique health journey."
  }
];

const ContactSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="section-padding bg-beige-soft">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="heading-lg mb-8">
              Ready to Transform Your Health?
            </h2>
            
            <p className="body-text mb-8">
              Take the first step towards hormonal wellness and vitality. 
              Reach out today to schedule your free consultation.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-soft flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-text-dark">Email</div>
                  <div className="text-text-light">info@hormonevitalitycoaching.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-soft flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-text-dark">Phone</div>
                  <div className="text-text-light">+1 (555) 123-4567</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-soft flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-text-dark">Location</div>
                  <div className="text-text-light">Serving clients globally online</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-soft flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-text-dark">Hours</div>
                  <div className="text-text-light">Monday - Friday, 9 AM - 5 PM EST</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* FAQ */}
          <div>
            <h3 className="heading-md mb-8">
              Frequently Asked Questions
            </h3>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-soft overflow-hidden">
                  <button
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-beige-soft/50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <h4 className="font-medium text-text-dark pr-4">{faq.question}</h4>
                    <ChevronDown 
                      className={`w-5 h-5 text-text-light transition-transform ${
                        openFaq === index ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-text-light leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;