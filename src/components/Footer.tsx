const Footer = () => {
  return (
    <footer className="bg-beige-soft border-t border-beige-primary/30">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-primary mb-2">
              Hormone Vitality Coaching
            </h3>
            <p className="text-text-light mb-4">
              Empowering women to reclaim their vitality through natural hormone balance
            </p>
            <div className="text-sm text-text-light">
              Certified Health & Hormonal Coach
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-medium text-text-dark mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-text-light">
              <li>PCOS Management</li>
              <li>PMS Relief</li>
              <li>Hormonal Balance</li>
              <li>Nutrition Coaching</li>
              <li>Stress Management</li>
              <li>Lifestyle Optimization</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-medium text-text-dark mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-text-light">
              <div>info@hormonevitalitycoaching.com</div>
              <div>+1 (555) 123-4567</div>
              <div>English & Dutch Services</div>
              <div>Monday - Friday, 9 AM - 5 PM EST</div>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-beige-primary/30 text-center text-sm text-text-light">
          <p>&copy; 2024 Hormone Vitality Coaching. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;