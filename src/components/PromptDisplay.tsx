import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Copy } from "lucide-react";

interface PromptDisplayProps {
  prompt: string;
}

const PromptDisplay = ({ prompt }: PromptDisplayProps) => {
  const { toast } = useToast();
  const [copying, setCopying] = useState(false);

  const handleCopy = async () => {
    try {
      setCopying(true);
      await navigator.clipboard.writeText(prompt);
      toast({
        title: "Copied!",
        description: "Prompt copied to clipboard",
      });
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy prompt",
        variant: "destructive",
      });
    } finally {
      setCopying(false);
    }
  };

  if (!prompt) return null;

  return (
    <Card className="p-6 mt-8 relative bg-white/50 backdrop-blur-sm border border-gray-200">
      <div className="absolute top-4 right-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleCopy}
          disabled={copying}
        >
          <Copy className="h-4 w-4" />
        </Button>
      </div>
      <p className="text-lg whitespace-pre-wrap">{prompt}</p>
    </Card>
  );
};

export default PromptDisplay;