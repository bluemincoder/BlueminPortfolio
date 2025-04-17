import { title } from "process";

export const siteConfig = {
    name: "Bluemin Portfolio",
    url: "https://blueminportfolio.vercel.app/",
    description: "Portfolio of Minal Satankar",
    ogImage: "https://blueminportfolio.vercel.app/og.jpg",
    links: {
        shadcn: "https://ui.shadcn.com/",
        telegram: "https://t.me/bluemincoder",
        twitter: "https://x.com/bluemincoder",
        github: "https://github.com/bluemincoder/bluemin.com",
        githubProfile: "https://github.com/bluemincoder",
        resume: "https://drive.google.com/file/d/19YuDtbTrnfeSqcu7Md7zVpo-dp8UER-D/view?usp=sharing",
        email: "mailto:minaalwork@gmail.com",
        githubUsername: "bluemincoder",
    },
    projects: {
        blueminCode: {
            title: "BlueminCode · Online Coding Platform",
            description:
                "Developed a Monaco-powered multi-language IDE with customizable theming, execution history, and Convex for backend. Integrated Clerk for auth and Razorpay for premium upgrades.",
            tags: [
                "Next.js",
                "Convex",
                "Clerk",
                "Monaco Editor",
                "Aceternity UI",
                "Razorpay",
                "TypeScript",
                "Full Stack",
                "Web Application",
            ],
            live: "https://bluemin-code.vercel.app/",
            github: "https://github.com/bluemincoder/BlueminCode",
        },
        codeScreen: {
            title: "CodeScreen · Online Interview Platform",
            description:
                "Built with Stream-powered video calls, screen sharing, and a Monaco code editor. Used Convex for real-time sync and Clerk for secure auth.",
            tags: [
                "Next.js",
                "Convex",
                "Stream",
                "Clerk",
                "Monaco Editor",
                "Shadcn/ui",
                "TypeScript",
                "Full Stack",
                "Web Application",
            ],
            live: "https://codescreen.site/",
            github: "https://github.com/bluemincoder/CodeScreen",
        },
        nicheNest: {
            title: "NicheNest · Job Management Platform",
            description:
                "JWT-secured job platform with automated postings, Nodemailer alerts, and role-based access control for employers/job seekers.",
            tags: [
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "JWT",
                "Nodemailer",
                "JavaScript",
                "Full Stack",
                "Web Application",
            ],
            live: "https://nichenestapp.netlify.app/",
            github: "https://github.com/bluemincoder/NicheNest",
        },
    },
};

export type SiteConfig = typeof siteConfig;

export const META_THEME_COLORS = {
    light: "#ffffff",
    dark: "#09090b",
};
