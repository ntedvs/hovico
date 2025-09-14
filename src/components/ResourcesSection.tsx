import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const resources = [
  {
    title: "Hormone Balance Starter Guide",
    description: "Essential foundations for understanding and optimizing your hormonal health naturally.",
    icon: FileText,
    downloadLabel: "Download Now"
  },
  {
    title: "3D Wellness Transformation Workbook",
    description: "A comprehensive workbook to implement our holistic approach in your daily life.",
    icon: FileText,
    downloadLabel: "Download Now"
  }
];

const ResourcesSection = () => {
  return (
    <section className="section-padding bg-beige-soft">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6">
            Download Your Free Guides
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            Get started on your wellness journey with these comprehensive guides created
            specifically to support your hormonal health and holistic transformation.
          </p>
        </div>

        {/* Resource Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <div key={index} className="card hover:shadow-md transition-shadow flex flex-col">
                {/* Resource Icon */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-soft flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="heading-md text-xl mb-2">{resource.title}</h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-text-light mb-6 leading-relaxed flex-1">
                  {resource.description}
                </p>

                {/* Download Button */}
                <Button className="w-full mt-auto" size="lg">
                  <Download className="w-4 h-4 mr-2" />
                  {resource.downloadLabel}
                </Button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ResourcesSection;