import { useState, useEffect } from "react";
import {
    faLaptopCode,
    faGamepad,
    faRobot,
    faCube,
    faTools,
    faMobileAlt,
    faCode,
    faDatabase,
} from "@fortawesome/free-solid-svg-icons";

export interface GitHubProject {
    id: number;
    name: string;
    description: string;
    html_url: string;
    homepage?: string;
    language: string;
    topics: string[];
    stargazers_count: number;
    forks_count: number;
    updated_at: string;
    created_at: string;
}

export interface ProcessedProject {
    id: number;
    name: string;
    description: string;
    github: string;
    homepage?: string;
    language: string;
    tags: string[];
    stars: number;
    forks: number;
    updated: string;
    icon: any;
    gradient: string;
}

const useGitHubProjects = (username: string = "al7arthy") => {
    const [projects, setProjects] = useState<ProcessedProject[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const getProjectStyle = (language: string, topics: string[]) => {
        const lang = language?.toLowerCase() || "";
        const topicsLower = topics.map((t) => t.toLowerCase());

        if (
            topicsLower.includes("game") ||
            topicsLower.includes("gaming") ||
            topicsLower.includes("mta")
        ) {
            return { icon: faGamepad, gradient: "from-green-500 to-blue-600" };
        }
        if (topicsLower.includes("bot") || topicsLower.includes("discord")) {
            return { icon: faRobot, gradient: "from-purple-500 to-pink-600" };
        }
        if (
            topicsLower.includes("3d") ||
            topicsLower.includes("blender") ||
            topicsLower.includes("modeling")
        ) {
            return { icon: faCube, gradient: "from-red-500 to-orange-600" };
        }
        if (
            topicsLower.includes("automation") ||
            topicsLower.includes("tool") ||
            topicsLower.includes("script")
        ) {
            return { icon: faTools, gradient: "from-indigo-500 to-blue-600" };
        }
        if (
            topicsLower.includes("mobile") ||
            topicsLower.includes("react-native") ||
            topicsLower.includes("ui")
        ) {
            return { icon: faMobileAlt, gradient: "from-pink-500 to-red-600" };
        }

        switch (lang) {
            case "javascript":
            case "typescript":
            case "react":
                return {
                    icon: faLaptopCode,
                    gradient: "from-blue-500 to-purple-600",
                };
            case "python":
                return {
                    icon: faTools,
                    gradient: "from-green-500 to-yellow-600",
                };
            case "lua":
                return {
                    icon: faGamepad,
                    gradient: "from-purple-500 to-blue-600",
                };
            case "java":
            case "kotlin":
                return {
                    icon: faMobileAlt,
                    gradient: "from-orange-500 to-red-600",
                };
            case "sql":
            case "mysql":
                return {
                    icon: faDatabase,
                    gradient: "from-gray-500 to-blue-600",
                };
            case "html":
            case "css":
                return {
                    icon: faCode,
                    gradient: "from-pink-500 to-purple-600",
                };
            default:
                return {
                    icon: faLaptopCode,
                    gradient: "from-gray-500 to-gray-700",
                };
        }
    };

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true);
                setError(null);
                setProjects([]);

                const response = await fetch(
                    `https://api.github.com/users/${username}/repos?sort=updated&per_page=20`
                );

                if (!response.ok) {
                    throw new Error(`GitHub API error: ${response.status}`);
                }

                const repos: GitHubProject[] = await response.json();

                const processedProjects: ProcessedProject[] = repos
                    .filter(
                        (repo) =>
                            !repo.name.startsWith(".") && repo.name !== username
                    )
                    .slice(0, 6)
                    .map((repo) => {
                        const style = getProjectStyle(
                            repo.language,
                            repo.topics
                        );

                        return {
                            id: repo.id,
                            name: repo.name,
                            description:
                                repo.description || "No description available",
                            github: repo.html_url,
                            homepage: repo.homepage,
                            language: repo.language || "Unknown",
                            tags: [repo.language, ...repo.topics].filter(
                                Boolean
                            ),
                            stars: repo.stargazers_count,
                            forks: repo.forks_count,
                            updated: (() => {
                                const date = new Date(repo.updated_at);
                                const day = String(date.getDate()).padStart(2, "0");
                                const month = String(date.getMonth() + 1).padStart(2, "0");
                                const year = date.getFullYear();
                                return `${day}/${month}/${year}`;
                            })(),
                            icon: style.icon,
                            gradient: (() => {
                                const gradients = [
                                    "from-blue-500 to-purple-600",
                                    "from-green-500 to-blue-600",
                                    "from-purple-500 to-pink-600",
                                    "from-indigo-500 to-blue-600",
                                    "from-red-500 to-orange-600",
                                    "from-teal-500 to-cyan-600",
                                    "from-orange-500 to-red-600",
                                    "from-emerald-500 to-teal-600",
                                    "from-violet-500 to-purple-600",
                                    "from-cyan-500 to-blue-600",
                                ];
                                return gradients[repo.id % gradients.length];
                            })(),
                        };
                    });

                setProjects(processedProjects);
            } catch (err) {
                console.error("Detailed error:", err);
                setError(
                    err instanceof Error
                        ? err.message
                        : "Failed to fetch projects"
                );

                setProjects([]);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, [username]);

    return { projects, loading, error };
};

export default useGitHubProjects;
