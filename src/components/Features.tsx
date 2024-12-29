import { Code, Globe, Zap, Smartphone } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Code,
    title: "Free API Access",
    description: "Integrate prompt generation into your apps effortlessly",
  },
  {
    icon: Globe,
    title: "Multiple Use Cases",
    description: "Perfect for content creation, coding, and brainstorming",
  },
  {
    icon: Zap,
    title: "Customizable",
    description: "Adjust tone and style to match your needs",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Works seamlessly on all devices",
  },
];

const Features = () => {
  return (
    <section className="py-16" id="features">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
          Powerful Features for Every Need
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;