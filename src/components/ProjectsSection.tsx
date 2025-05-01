
import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { useGitHubProjects } from "@/hooks/useGitHubProjects";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";

const ProjectsSection = () => {
  const username = "coderatul";
  const { data: projects, isLoading, error } = useGitHubProjects(username);
  const { toast } = useToast();
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById("projects-grid");
    if (element) {
      observer.observe(element);
    }
    
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    if (error) {
      toast({
        title: "Error loading projects",
        description: "Could not load GitHub projects. Please try again later.",
        variant: "destructive",
      });
    }
  }, [error, toast]);
  
  useEffect(() => {
    if (isInView) {
      const cards = document.querySelectorAll('[data-animate="slide-up"]');
      cards.forEach((card) => {
        card.classList.add('animate-slide-up');
      });
    }
  }, [isInView, projects]);
  
  return (
    <section id="projects" className="section-padding bg-secondary/50">
      <div className="container-custom">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-foreground/60 max-w-2xl">
            A collection of my work from GitHub. These projects showcase my skills and interests in software development.
          </p>
        </div>
        
        <div id="projects-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? 
            Array.from({ length: 6 }).map((_, index) => (
              <Card key={index} />
            ))
            : projects?.filter(p => !p.fork && !p.archived)
              .slice(0, 6)
              .map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))
          }
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:underline"
          >
            View more projects on GitHub 
            <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

// Skeleton component for loading state
const Card = () => {
  return (
    <div className="bg-card border rounded-lg p-6 h-64 flex flex-col">
      <div className="flex justify-between items-start mb-6">
        <Skeleton className="h-6 w-6 rounded-full" />
        <div className="flex gap-3">
          <Skeleton className="h-5 w-5 rounded-full" />
          <Skeleton className="h-5 w-5 rounded-full" />
        </div>
      </div>
      <Skeleton className="h-7 w-3/4 mb-3" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-5/6 mb-8" />
      <div className="flex gap-2 mt-auto">
        <Skeleton className="h-5 w-16 rounded-full" />
        <Skeleton className="h-5 w-16 rounded-full" />
      </div>
    </div>
  );
};

import { ArrowRight } from "lucide-react";

export default ProjectsSection;
