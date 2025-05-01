
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Toggle } from "@/components/ui/toggle";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  
  // Wait for component to mount to access theme
  useEffect(() => {
    setMounted(true);
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-background/80 backdrop-blur-md py-3 shadow-sm" : "bg-transparent py-5"
    )}>
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-primary">
          coder<span className="text-foreground">atul.me</span>
        </a>
        
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex space-x-8">
            <li>
              <a href="#projects" className="text-foreground/80 hover:text-primary transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">
                Contact
              </a>
            </li>
          </ul>
          
          <Toggle
            pressed={mounted && theme === "dark"}
            onPressedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="p-2 rounded-full bg-secondary/80 text-foreground/70 hover:text-primary transition-colors"
          >
            {mounted && theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </Toggle>
          
          <a 
            href="https://github.com/coderatul" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full hover:bg-primary/20 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
