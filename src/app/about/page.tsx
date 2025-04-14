import CodeSnippet from "@/components/code-snippet";
import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from "@/components/page-header";
import Pager from "@/components/pager";
import { code } from "@/config/codeContent";

const AboutMePage = () => {
    return (
        <>
            <PageHeader>
                <PageHeaderHeading>About Minal</PageHeaderHeading>
                <PageHeaderHeading className="mt-2 text-muted-foreground">
                    Curious developer. Community builder. Competitive coder.
                </PageHeaderHeading>

                <PageHeaderDescription>
                    I'm Minal Satankar, a B.Tech student at IIIT Bhagalpur,
                    passionate about crafting full-stack web applications that
                    solve real-world problems. I enjoy working with tools like
                    Next.js, Tailwind CSS, and Node.js, and I’m always excited
                    to learn something new or build something useful.
                </PageHeaderDescription>

                <PageHeaderDescription>
                    Beyond development, I lead initiatives in my campus coding
                    community as CP/DSA Lead for GFG IIIT-BH and Club Lead of
                    PyC. From curating problem sets to mentoring students and
                    organizing contests, I love helping others grow while
                    continuing to challenge myself.
                </PageHeaderDescription>

                <PageHeaderDescription>
                    I'm also an avid competitive programmer, with 1200+ problems
                    solved across Codeforces, LeetCode, and CodeChef. Highlights
                    include being a Codeforces Specialist, LeetCode Knight (top
                    0.01%), and 3-Star on CodeChef—with ranks in the global top
                    percentile.
                </PageHeaderDescription>

                <PageHeaderDescription>
                    Whether it’s building, leading, or solving—I'm driven by a
                    genuine love for tech and a desire to create impact.
                </PageHeaderDescription>
            </PageHeader>

            <CodeSnippet title="aboutMe.ts" code={code.aboutMe} />

            <Pager
                prevHref="/"
                nextHref="/projects"
                prevTitle="Introduction"
                nextTitle="Projects"
            />
        </>
    );
};

export default AboutMePage;
