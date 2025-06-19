import CodeSnippet from "@/components/code-snippet";
import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from "@/components/page-header";
import Pager from "@/components/pager";
import { code } from "@/config/codeContent";
import { Award } from "lucide-react";

const ExperiencePage = () => {
    return (
        <>
            <PageHeader className="mb-10">
                <PageHeaderHeading>Experience & Leadership</PageHeaderHeading>
                <PageHeaderHeading className="mt-2 text-muted-foreground">
                    You need it to get the job, but the job’s what gives it!
                </PageHeaderHeading>
                <PageHeaderDescription>
                    My experience spans across software development and
                    leadership, where I’ve engineered scalable systems and
                    empowered peers in the developer community. From optimizing
                    real-world platforms to mentoring dozens of students in
                    competitive programming, each opportunity has sharpened both
                    my technical and teamwork skills.
                </PageHeaderDescription>
            </PageHeader>

            <ol className="relative mb-10 border-s border-gray-200 dark:border-gray-700">

                {/* Medzillo */}
                <li className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-purple-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-purple-900" />
                    <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                        Full Stack Developer Intern · Medzillo
                    </h3>
                    <time className="block mb-2 text-sm font-normal text-gray-400 dark:text-gray-500">
                        May 2025 – Present · Chennai, India
                    </time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Engineered a scalable appointment booking system with Next.js, React, Node.js, and MongoDB handling 1000+ bookings/day and 5000+ monthly active users, with brochure/image uploads via Firebase Storage. Architected a Redis queue system for race-free token generation, sustaining 100+ concurrent appointment requests/sec with real-time updates via Socket.IO. Enhanced system security with Google reCAPTCHA, Zod validation, and bcrypt password hashing. Boosted image load speeds by 50% and optimized runtime performance with domain-based code splitting, lazy loading, and Webpack package-level splitting.
                    </p>
                </li>

                {/* LawQuest */}
                <li className="mb-10 ms-6">
                    <a
                        href="https://drive.google.com/file/d/1joB5BvI4lf8f4XXdRPHkmZC-bVkWoFKD/view?usp=sharing"
                        className="text-purple-800 flex items-center gap-1 float-right"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Award />
                        Certificate
                    </a>
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-purple-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-purple-900" />
                    <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                        Frontend Developer Intern · LawQuest
                    </h3>
                    <time className="block mb-2 text-sm font-normal text-gray-400 dark:text-gray-500">
                        February 2025 – April 2025 · Remote
                    </time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Scaled content engagement by 30% through responsive course listings, legal blog sections, and dynamic detail pages built with Next.js. Developed lead capture systems using React Hook Form, Zod validation, and Nodemailer to automate email workflows. Spearheaded a reusable component library featuring modals, carousels, and accordions, contributing to the platform’s Aceternity UI library with Framer Motion animations and improving average session time by 20%.
                    </p>
                </li>

                {/* Existing Leadership Roles */}
                <li className="mb-10 ms-6">
                    <a
                        href="https://drive.google.com/file/d/1joB5BvI4lf8f4XXdRPHkmZC-bVkWoFKD/view?usp=sharing"
                        className="text-purple-800 flex items-center gap-1 float-right"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Award />
                        Certificate
                    </a>
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-purple-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-purple-900" />
                    <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                        CP/DSA Lead · GFG IIIT-BH Student’s Chapter
                    </h3>
                    <time className="block mb-2 text-sm font-normal text-gray-400 dark:text-gray-500">
                        April 2024 – April 2025
                    </time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Initiated a mentorship program for 100+ students, curated 20+ problem sets with detailed editorials, boosting engagement and reducing support queries by 25%.
                    </p>
                </li>

                <li className="mb-10 ms-6">
                    <a
                        href="https://drive.google.com/file/d/1VvyLEE0VV9iB7ty6-MeZfHAhISufqDVg/view"
                        className="text-purple-800 flex items-center gap-1 float-right"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Award />
                        Certificate
                    </a>
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-purple-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-purple-900" />
                    <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                        Project Manager · OPCODE (Open-Source Spring Fest)
                    </h3>
                    <time className="block mb-2 text-sm font-normal text-gray-400 dark:text-gray-500">
                        March 2024 – April 2024
                    </time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Spearheaded the open-source CodeCrack project by delivering daily C++ challenges to 200+ participants. Managed 60+ issues and merged 170+ pull requests, ensuring smooth collaboration and continuous contribution throughout the fest.
                    </p>
                </li>

                <li className="mb-10 ms-6">
                    <a
                        href="https://drive.google.com/file/d/1hmNeVqNhcnZcGN5cZsmXL5qIUTzvSsYY/view?usp=sharing"
                        className="text-purple-800 flex items-center gap-1 float-right"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Award />
                        Certificate
                    </a>
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-purple-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-purple-900" />
                    <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                        Club Lead · PyC Coding Club IIIT Bhagalpur
                    </h3>
                    <time className="block mb-2 text-sm font-normal text-gray-400 dark:text-gray-500">
                        January 2024 – January 2025
                    </time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Mentored 40+ students in DSA and CP, led 5+ competitive contests with 200+ participants, and fostered a healthy peer-learning culture through hands-on guidance.
                    </p>
                </li>

            </ol>

            <CodeSnippet code={code.experience} title="experience.ts" />

            <Pager
                prevHref="/skills-tools"
                nextHref="/education"
                prevTitle="Skills & Tools"
                nextTitle="Education"
            />
        </>
    );
};

export default ExperiencePage;
