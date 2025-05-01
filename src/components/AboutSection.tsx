
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink } from "lucide-react";

interface DevtoBlog {
  id: number;
  title: string;
  url: string;
  published_at: string;
  description: string;
}

const AboutSection = () => {
  const [blogs, setBlogs] = useState<DevtoBlog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://dev.to/api/articles?username=coderatul");
        const data = await response.json();
        setBlogs(data.slice(0, 3));  // Get latest 3 blogs
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <div className="space-y-4 text-foreground/70">
              <p>
                I'm an open source enthusiast exploring new technologies and ideas. Passionate about Python development
                and creating cool learning projects that solve real problems.
              </p>
              <p className="bg-primary/10 p-3 rounded-lg border border-primary/20 font-medium text-foreground">
                🎓 GATE 2025 qualified and currently preparing for GATE CSE 2026.
              </p>
              <p>
                I enjoy building projects that help visualize complex concepts and make learning more intuitive.
                My focus is on creating tools that bring abstract ideas to life through interactive visualizations.
              </p>
            </div>
            
            <div className="pt-2">
              <Button variant="outline" className="gap-2" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FileText className="h-4 w-4" />
                  Resume
                </a>
              </Button>
            </div>
            
            <div className="pt-4">
              <h3 className="font-semibold text-lg mb-3">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Git', 'SQL', 'Java', 'C++', 'Kotlin'].map(skill => (
                  <div key={skill} className="bg-secondary text-foreground/80 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                Recent Blogs
                <a 
                  href="https://dev.to/coderatul" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-normal text-primary hover:underline flex items-center"
                >
                  dev.to/coderatul <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </h3>
              
              {isLoading ? (
                <div className="space-y-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="bg-secondary/50 animate-pulse h-24 rounded-lg"></div>
                  ))}
                </div>
              ) : blogs.length > 0 ? (
                <div className="space-y-4">
                  {blogs.map(blog => (
                    <a 
                      key={blog.id}
                      href={blog.url}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="block p-4 rounded-lg border bg-card/50 hover:bg-card/80 transition-colors"
                    >
                      <h4 className="font-medium text-lg line-clamp-1">{blog.title}</h4>
                      <p className="text-sm text-foreground/60 line-clamp-2 mt-1">
                        {blog.description || "Read this article on dev.to"}
                      </p>
                      <p className="text-xs text-primary mt-2">
                        {new Date(blog.published_at).toLocaleDateString()}
                      </p>
                    </a>
                  ))}
                </div>
              ) : (
                <p className="text-foreground/60 italic">No blogs found. Check out my profile on dev.to!</p>
              )}
            </div>
          </div>
        </div>
    </section>
  );
};

export default AboutSection;
