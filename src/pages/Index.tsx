import { useState } from "react";
import PromptForm, { PromptFormData } from "@/components/PromptForm";
import PromptDisplay from "@/components/PromptDisplay";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

const Index = () => {
  const [generatedPrompt, setGeneratedPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const generatePrompt = (data: PromptFormData) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      const prompt = `Write a ${data.tone} ${data.promptType} about ${data.context}. The content should be engaging, well-structured, and optimized for ${data.aiSystem}.`;
      setGeneratedPrompt(prompt);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <main className="container py-12">
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            PromptCraft
          </h1>
          <p className="text-xl text-gray-600">
            Your AI-Powered Prompt Generator for Every Need
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <PromptForm onGenerate={generatePrompt} isLoading={isLoading} />
          <PromptDisplay prompt={generatedPrompt} />
        </div>

        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;