import { Button } from "@/components/ui/button";
import { ArrowRight, Code } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 py-16">
      <div className="container">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Create Perfect AI Prompts in Seconds
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you're a content creator, developer, or marketer, our AI prompt generator
              helps you craft the perfect prompts for any AI model.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={() => document.getElementById('prompt-form')?.scrollIntoView({ behavior: 'smooth' })}>
              Start Generating Prompts
              <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              Explore Free API
              <Code className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;