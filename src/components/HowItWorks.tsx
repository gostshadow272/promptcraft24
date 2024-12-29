import { Type, Wand2, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Type,
    title: "Input Context",
    description: "Describe your task or need",
  },
  {
    icon: Wand2,
    title: "Select Options",
    description: "Choose AI, type, and tone",
  },
  {
    icon: Sparkles,
    title: "Generate",
    description: "Get your optimized AI-ready prompt",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16" id="how-it-works">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 animate-fadeIn"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;