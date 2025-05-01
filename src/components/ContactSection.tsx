
import { Card, CardContent } from "@/components/ui/card";
import { Github, Mail, Linkedin, Twitter } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-foreground/60">
            Feel free to reach out for collaborations, opportunities, or just to say hi!
            I'm always open to discussing new projects and ideas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <Card className="hover:shadow-md transition-all hover:-translate-y-1">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Email</h3>
                <a href="mailto:atulkushwaha2008@gmail.com" className="text-primary hover:underline">
                  atulkushwaha2008@gmail.com
                </a>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-all hover:-translate-y-1">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="bg-primary/10 p-3 rounded-full">
                <Github className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium mb-1">GitHub</h3>
                <a 
                  href="https://github.com/coderatul" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  github.com/coderatul
                </a>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-all hover:-translate-y-1">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="bg-primary/10 p-3 rounded-full">
                <Linkedin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium mb-1">LinkedIn</h3>
                <a 
                  href="https://linkedin.com/in/coderatul" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  linkedin.com/in/coderatul
                </a>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-all hover:-translate-y-1">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="bg-primary/10 p-3 rounded-full">
                <Twitter className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Twitter</h3>
                <a 
                  href="https://twitter.com/coderatul" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  @coderatul
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
