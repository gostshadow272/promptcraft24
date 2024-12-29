import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export interface PromptFormData {
  context: string;
  aiSystem: string;
  promptType: string;
  tone: string;
}

interface PromptFormProps {
  onGenerate: (data: PromptFormData) => void;
  isLoading: boolean;
}

const PromptForm = ({ onGenerate, isLoading }: PromptFormProps) => {
  const [formData, setFormData] = useState<PromptFormData>({
    context: "",
    aiSystem: "chatgpt",
    promptType: "blog",
    tone: "professional",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.context.trim()) {
      toast({
        title: "Error",
        description: "Please enter your context first",
        variant: "destructive",
      });
      return;
    }
    onGenerate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-2xl mx-auto">
      <Textarea
        placeholder="Enter your context or task description here..."
        value={formData.context}
        onChange={(e) =>
          setFormData({ ...formData, context: e.target.value })
        }
        className="min-h-[150px] p-4 text-lg"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Select
          value={formData.aiSystem}
          onValueChange={(value) =>
            setFormData({ ...formData, aiSystem: value })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select AI System" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="chatgpt">ChatGPT</SelectItem>
            <SelectItem value="bard">Bard</SelectItem>
            <SelectItem value="claude">Claude</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={formData.promptType}
          onValueChange={(value) =>
            setFormData({ ...formData, promptType: value })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Prompt Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="blog">Blog Writing</SelectItem>
            <SelectItem value="coding">Coding</SelectItem>
            <SelectItem value="marketing">Marketing</SelectItem>
            <SelectItem value="creative">Creative Writing</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={formData.tone}
          onValueChange={(value) =>
            setFormData({ ...formData, tone: value })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Tone" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="professional">Professional</SelectItem>
            <SelectItem value="casual">Casual</SelectItem>
            <SelectItem value="persuasive">Persuasive</SelectItem>
            <SelectItem value="informative">Informative</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button
        type="submit"
        className="w-full py-6 text-lg font-semibold"
        disabled={isLoading}
      >
        {isLoading ? "Generating..." : "Generate Prompt"}
      </Button>
    </form>
  );
};

export default PromptForm;