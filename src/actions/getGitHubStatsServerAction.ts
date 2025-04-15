"use server";

import { siteConfig } from "@/config/site";

export async function getGitHubStatsServerAction() {
    try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 1000000); // 7s timeout

        const response = await fetch(
            `https://api.github.com/users/${siteConfig.links.githubUsername}`,
            {
                signal: controller.signal,
                headers: {
                    "User-Agent": "portfolio-site", // helps with GitHub rate-limiting
                },
            }
        );

        clearTimeout(timeout);

        if (!response.ok) throw new Error("GitHub API error");

        const data = await response.json();

        return {
            name: data.name,
            bio: data.bio,
            avatar_url: data.avatar_url,
            company: data.company,
            public_repos: data.public_repos,
            followers: data.followers,
            following: data.following,
            location: data.location,
            hireable: data.hireable,
            success: true,
        };
    } catch (error) {
        console.error("GitHub Stats Error:", error);
        return {
            success: false,
            message: "Failed to get GitHub stats",
        };
    }
}
