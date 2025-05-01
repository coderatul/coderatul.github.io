
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container-custom">
        <div className="animate-fade-in space-y-6 max-w-3xl">
          <p className="text-primary font-medium">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Atul
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground/70 tracking-tight">
            Computer Science Undergraduate
          </h2>
          <p className="text-lg text-foreground/60 max-w-lg leading-relaxed">
            I'm an open source enthusiast exploring new technologies and ideas. 
            Passionate about Python development and creating cool learning projects 
            that solve real problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="group" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              Check out my projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Get in touch</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
