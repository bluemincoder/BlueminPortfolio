import CodeSnippet from "@/components/code-snippet";
import { PageActions } from "@/components/page-header";
import {
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { PageHeader } from "@/components/page-header";
import Pager from "@/components/pager";
import { Button } from "@/components/ui/button";
import { code } from "@/config/codeContent";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { ExternalLink, Mail } from "lucide-react";
import { SplineScene } from "@/components/ui/splite";

const IntroductionPage = async () => {
  return (
    <>
      <PageHeader>
        <div className="flex flex-col lg:flex-row items-start w-full ">
          <div className="flex-1 relative">
            <PageHeaderHeading>Minal Satankar</PageHeaderHeading>
            <PageHeaderHeading className="mt-2 text-muted-foreground">
              A coder by day, problem-solver by night!
            </PageHeaderHeading>
            <PageHeaderDescription className="xl:w-[55%]">
              I’m an aspiring Software Engineer with a strong passion for
              full-stack web development and competitive programming. I
              specialize in building scalable applications using technologies
              like Next.js, React, Node.js, and MongoDB. My experience in C++,
              TypeScript, and Python allows me to solve complex problems
              efficiently. I am also expanding my skills into DevOps with tools
              like Docker and Redis to deliver robust, user-focused software
              solutions. Currently, I am looking for opportunities where I can
              contribute my skills and grow further.
            </PageHeaderDescription>{" "}
          </div>
          <div className="overflow-hidden w-[45%] h-150 absolute right-0 top-0 hidden xl:block">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>

        <PageActions>
          <Button asChild size="sm" className="rounded-md">
            <Link href={siteConfig.links.resume} target="_blank">
              Get Resume
              <ExternalLink className="size-3" strokeWidth={2} />
            </Link>
          </Button>
          <Button asChild size="sm" variant="ghost" className="rounded-md">
            <Link href="/contact">
              <Mail className="size-4" />
              Contact Me!
            </Link>
          </Button>
        </PageActions>
      </PageHeader>

      <CodeSnippet title="welcome.ts" code={code.welcome} />

      <Pager
        prevHref="/"
        nextHref="/about"
        prevTitle="Previous"
        nextTitle="About Me"
      />
    </>
  );
};
export default IntroductionPage;
