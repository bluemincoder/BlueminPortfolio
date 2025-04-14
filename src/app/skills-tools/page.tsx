import CodeSnippet from "@/components/code-snippet";
import { Icons } from "@/components/icons";
import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from "@/components/page-header";
import Pager from "@/components/pager";
import { Badge } from "@/components/ui/badge";
import { code } from "@/config/codeContent";
import { mySkills } from "@/constants";

const SkillsToolsPage = () => {
    return (
        <>
            <PageHeader>
                <PageHeaderHeading>Skills & Tools</PageHeaderHeading>
                <PageHeaderHeading className="mt-2 text-muted-foreground">
                    Learned by coding all night and debugging all day!
                </PageHeaderHeading>
                <PageHeaderDescription>
                    I specialize in building full-stack web applications using
                    modern technologies like Next.js, React, Tailwind CSS, and
                    Node.js. On the backend, I work with MongoDB, Express,
                    Convex, and secure auth systems like Clerk and JWT. I’m also
                    diving into tools like Docker and Redis to improve backend
                    performance and scalability.
                </PageHeaderDescription>

                <PageHeaderDescription>
                    Whether it's real-time collaboration using Socket.io or
                    crafting beautiful UI with Shadcn, I love working across the
                    stack and exploring new tools to build better, faster, and
                    smarter.
                </PageHeaderDescription>
            </PageHeader>

            {/* skills and tools badges */}
            <div
                id="badges"
                className="flex flex-wrap items-center justify-center gap-2 my-4"
            >
                {mySkills.map((item) => (
                    <Badge
                        key={item.title}
                        className="p-4 py-2 border border-secondary bg-secondary-foreground text-secondary"
                    >
                        {Icons[item.icon as keyof typeof Icons]?.({
                            className: "mr-2 size-4",
                        })}
                        {item.title}
                    </Badge>
                ))}
            </div>

            <CodeSnippet title="skills.ts" code={code.skillsTools} />

            <Pager
                prevHref="/projects"
                nextHref="/experience"
                prevTitle="Projects"
                nextTitle="Experience"
            />
        </>
    );
};

export default SkillsToolsPage;
