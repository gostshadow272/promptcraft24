import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Github,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";

const AboutMe = () => {
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/Larbi-Life",
      username: "Larbi Life",
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      label: "Facebook",
      href: "https://facebook.com/LarbiAboudi",
      username: "Larbi Aboudi",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: "X (Twitter)",
      href: "https://twitter.com/larbi_aboudi",
      username: "@larbi_aboudi",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/LarbiAboudi",
      username: "Larbi Aboudi",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram",
      href: "https://instagram.com/aboudi_larbi",
      username: "@aboudi_larbi",
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      label: "YouTube",
      href: "https://youtube.com/@LarbiAboudi",
      username: "Larbi Aboudi",
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container max-w-4xl">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              About Me
            </CardTitle>
            <CardDescription className="text-lg">
              Creator of AI Prompt Generator
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Hi, I'm Larbi Aboudi, the creator of this cutting-edge AI Prompt
                Generator project. As a passionate developer and innovator, I focus
                on designing tools that simplify workflows and unlock creative
                potential for writers, developers, and businesses.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With a strong background in AI technologies and web development, I
                strive to create solutions that are accessible, intuitive, and
                impactful. This project represents my dedication to making AI more
                user-friendly and empowering individuals to achieve exceptional
                results.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Connect with me:
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    {link.icon}
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-gray-900">
                        {link.label}
                      </span>
                      <span className="text-sm text-gray-500">
                        {link.username}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Whether you're here to explore the power of AI or looking to
              collaborate on innovative ideas, I'd love to hear from you. Let's
              connect and create something extraordinary!
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutMe;