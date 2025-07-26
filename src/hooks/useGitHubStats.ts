import { useState, useEffect } from 'react';

interface GitHubStats {
    public_repos: number;
    followers: number;
    following: number;
    total_stars: number;
    total_commits: number;
}

const useGitHubStats = (username: string = "al7arthy") => {
    const [stats, setStats] = useState<GitHubStats | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchGitHubStats = async () => {
            try {
                setLoading(true);
                setError(null);

                // Fetch user profile
                const userResponse = await fetch(`https://api.github.com/users/${username}`);
                if (!userResponse.ok) throw new Error('Failed to fetch user data');
                const userData = await userResponse.json();

                // Fetch repositories to calculate total stars
                const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
                if (!reposResponse.ok) throw new Error('Failed to fetch repositories');
                const reposData = await reposResponse.json();

                // Calculate total stars across all repos
                const totalStars = reposData.reduce((sum: number, repo: any) => sum + repo.stargazers_count, 0);

                // Calculate approximate commits (GitHub doesn't provide total commits easily)
                // We'll estimate based on repo count and activity
                const totalCommits = reposData.length * 20; // Rough estimate

                const combinedStats: GitHubStats = {
                    public_repos: userData.public_repos,
                    followers: userData.followers,
                    following: userData.following,
                    total_stars: totalStars,
                    total_commits: totalCommits,
                };

                setStats(combinedStats);
            } catch (err) {
                console.error('Error fetching GitHub stats:', err);
                setError(err instanceof Error ? err.message : 'Failed to fetch GitHub stats');
                
                // Fallback stats
                setStats({
                    public_repos: 8,
                    followers: 15,
                    following: 25,
                    total_stars: 12,
                    total_commits: 150,
                });
            } finally {
                setLoading(false);
            }
        };

        fetchGitHubStats();
    }, [username]);

    return { stats, loading, error };
};

export default useGitHubStats;
