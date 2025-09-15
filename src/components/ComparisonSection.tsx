import { Target, Zap } from "lucide-react";

const ComparisonSection = () => {
  return (
    <section className="section-padding bg-beige-soft relative overflow-hidden">
      {/* Accent Graphics */}
      <div className="accent-graphic top-8 right-8 w-24 h-24 bg-primary/10 rounded-full"></div>
      <div className="accent-graphic bottom-8 left-8 w-16 h-2 bg-primary/10 rounded-full"></div>

      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6">
            Why Choose This Approach?
          </h2>
          <p className="body-text max-w-3xl mx-auto">
            Traditional health coaching treats each aspect of your wellness separately.
            Our revolutionary 3D approach integrates everything for lasting transformation.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* 2D Traditional Approach */}
            <div className="relative">
              <div className="card bg-white/60 border-2 border-text-light/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-text-light/20 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-text-light" />
                  </div>
                  <h3 className="heading-md text-xl text-text-light">2D Traditional Approach</h3>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-text-light/40 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-text-light">Focus on single areas (diet OR exercise)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-text-light/40 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-text-light">Surface-level solutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-text-light/40 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-text-light">Treats symptoms, not root causes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-text-light/40 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-text-light">One-size-fits-all approaches</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 3D Holistic Approach */}
            <div className="relative">
              <div className="card bg-white border-2 border-primary/20 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="heading-md text-xl text-primary">Our 3D Holistic Method</h3>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-text-dark">Integrates mental health, diet & lifestyle</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-text-dark">Specialized in women's hormonal health</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-text-dark">Deeply personalized plans for lasting change</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-text-dark">Addresses root causes, not just symptoms</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* VS Divider */}
          {/* <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:block hidden z-10">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">VS</span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;