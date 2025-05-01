
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GitHubRepo } from "@/types/github";
import { FolderOpen, Link, Github } from "lucide-react";

interface ProjectCardProps {
  project: GitHubRepo;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  // Calculate delay for staggered animation
  const delay = `${index * 100}ms`;
  
  return (
    <Card className="h-full flex flex-col hover:shadow-md transition-all hover:-translate-y-1" 
      style={{ animationDelay: delay, opacity: 0 }}
      data-animate="slide-up">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <FolderOpen className="h-6 w-6 text-primary" />
          <div className="flex gap-3">
            <a href={project.html_url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label={`GitHub repository for ${project.name}`}>
              <Github className="h-5 w-5" />
            </a>
            {project.homepage && (
              <a href={project.homepage} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label={`Live site for ${project.name}`}>
                <Link className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
        <CardTitle className="truncate">{project.name}</CardTitle>
        <CardDescription className="line-clamp-2 h-10">
          {project.description || "No description provided"}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {project.topics && project.topics.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {project.topics.slice(0, 3).map((topic) => (
              <Badge key={topic} variant="outline" className="text-xs">
                {topic}
              </Badge>
            ))}
            {project.topics.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{project.topics.length - 3}
              </Badge>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="border-t pt-4 gap-4 text-sm text-foreground/60">
        <div className="flex items-center gap-1">
          <span className="font-medium">
            {project.stargazers_count}
          </span> stars
        </div>
        {project.language && (
          <div className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full bg-primary"></span>
            {project.language}
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
