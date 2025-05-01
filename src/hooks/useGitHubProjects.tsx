
import { useQuery } from "@tanstack/react-query";
import { GitHubRepo } from "../types/github";

const fetchGitHubProjects = async (username: string): Promise<GitHubRepo[]> => {
  const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=12`);
  
  if (!response.ok) {
    throw new Error("Failed to fetch GitHub projects");
  }
  
  const data = await response.json();
  return data;
};

export function useGitHubProjects(username: string) {
  return useQuery({
    queryKey: ["github", username],
    queryFn: () => fetchGitHubProjects(username),
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
}
