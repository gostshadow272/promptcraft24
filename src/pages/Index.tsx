import { useState } from "react";
import PromptForm, { PromptFormData } from "@/components/PromptForm";
import PromptDisplay from "@/components/PromptDisplay";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  const [generatedPrompt, setGeneratedPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const generatePrompt = (data: PromptFormData) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      const prompt = `As an AI assistant (${data.aiSystem}), I need you to create a ${data.tone} ${
        data.promptType
      } about ${data.context}. 
      
Key requirements:
- Maintain a ${data.tone} tone throughout
- Ensure the content is well-researched and accurate
- Include relevant examples and supporting details
- Structure the content in a clear, logical manner
- Optimize the writing style for ${data.aiSystem}

Additional guidelines:
${data.promptType === "blog" ? `
- Start with an SEO-optimized title using the main keyword
- Include H2 and H3 headings with relevant keywords
- Write an engaging introduction with emotional hooks
- Add 5-7 relevant internal links to other blog posts
- Include product recommendations with affiliate links where appropriate
- Use emojis strategically throughout the content
- Add a recipe card with ingredients and instructions (if applicable)
- Include high-quality images with alt text
- End with a strong call-to-action
- Add nutritional information and recipe notes
- Optimize meta description and URL structure` : ""}
${data.promptType === "coding" ? `
- Include code examples where relevant
- Explain the logic behind the solution
- Consider best practices and optimization
- Add comments for clarity` : ""}
${data.promptType === "marketing" ? `
- Focus on unique selling propositions
- Include call-to-action suggestions
- Consider target audience demographics
- Incorporate persuasive language elements` : ""}
${data.promptType === "creative" ? `
- Use vivid descriptive language
- Incorporate storytelling elements
- Develop unique perspectives
- Maintain consistent narrative voice` : ""}

Content Structure:
1. SEO Title (include main keyword)
2. Meta Description (150-160 characters)
3. Introduction (with emotional hook)
4. Main Content Sections (H2 headings)
5. Subsections (H3 headings)
6. Product Recommendations
7. Recipe Card (if applicable)
8. Nutritional Information
9. Expert Tips
10. FAQ Section
11. Conclusion with CTA

Please ensure the output is comprehensive, engaging, and tailored to the specific needs of this request. Remember to naturally incorporate keywords and maintain readability throughout the content.`;

      setGeneratedPrompt(prompt);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <Helmet>
        <title>AI Prompt Generator | Free & Easy-to-Use Prompt Maker for ChatGPT</title>
        <meta
          name="description"
          content="Create powerful AI prompts for ChatGPT, Bard, and Claude with our free prompt generator tool. Tailored prompts for content creation, coding, marketing, and more!"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "PromptCraft AI Generator",
            "applicationCategory": "Utility",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "featureList": [
              "AI Prompt Generation",
              "Multiple AI Model Support",
              "Custom Tone Selection",
              "Free API Access"
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <Hero />
        
        <main className="container py-12">
          <div className="text-center mb-12 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              Revolutionize Your AI Workflow with the Best Prompt Generator!
            </h1>
            <p className="text-xl text-gray-600">
              Create Tailored AI Prompts for ChatGPT, Bard, and More in Seconds!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <PromptForm onGenerate={generatePrompt} isLoading={isLoading} />
            <PromptDisplay prompt={generatedPrompt} />
          </div>

          <HowItWorks />
          <Features />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;