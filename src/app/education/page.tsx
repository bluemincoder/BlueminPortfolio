import CodeSnippet from "@/components/code-snippet";
import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from "@/components/page-header";
import Pager from "@/components/pager";
import { code } from "@/config/codeContent";

const EducationPage = () => {
    return (
        <>
            <PageHeader className="mb-10">
                <PageHeaderHeading>Education</PageHeaderHeading>
                <PageHeaderHeading className="mt-2 text-muted-foreground">
                    I learned a lot, but the real learning happens in the code
                    editor!
                </PageHeaderHeading>
                <PageHeaderDescription>
                    Education has served as the backbone of my engineering
                    journey. While pursuing my B.Tech, I explored various
                    programming concepts and built a strong interest in web
                    development and software engineering.
                </PageHeaderDescription>

                <PageHeaderDescription>
                    From high school to IIIT Bhagalpur, each stage has shaped my
                    skills— technically and personally—making me a more
                    thoughtful and solutions-driven developer.
                </PageHeaderDescription>
            </PageHeader>

            <ol className="relative mb-10 border-s border-gray-200 dark:border-gray-700">
                <li className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900" />
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                        B.Tech in Electronics and Communication Engineering ·
                        IIIT Bhagalpur
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ms-3">
                            Ongoing
                        </span>
                    </h3>
                    <time className="block mb-2 text-sm font-normal text-gray-400 dark:text-gray-500">
                        2022 – 2026 · CGPA: 7.16/10
                    </time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Pursuing a B.Tech at IIIT Bhagalpur with a focus on
                        programming, software development, and modern web
                        technologies through both academics and self-driven
                        projects.
                    </p>
                </li>

                <li className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900" />
                    <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                        Class 12 · Kendriya Vidyalaya No.3 Bhopal · CBSE
                    </h3>
                    <time className="block mb-2 text-sm font-normal text-gray-400 dark:text-gray-500">
                        2020 – 2021 · Percentage: 82.4%
                    </time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Specialized in Physics, Chemistry, and Mathematics.
                        Built a strong academic foundation and interest in
                        logical thinking and coding.
                    </p>
                </li>

                <li className="ms-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900" />
                    <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                        Class 10 · Kendriya Vidyalaya No.3 Bhopal · CBSE
                    </h3>
                    <time className="block mb-2 text-sm font-normal text-gray-400 dark:text-gray-500">
                        2018 – 2019 · Percentage: 88%
                    </time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Completed secondary education with distinction.
                        Developed an early passion for technology and
                        problem-solving.
                    </p>
                </li>
            </ol>

            <CodeSnippet
                code={code.educationJourney}
                title="educationJourney.ts"
            />

            <Pager
                prevHref="/leadership"
                nextHref="/contact"
                prevTitle="Leadership"
                nextTitle="Contact"
            />
        </>
    );
};

export default EducationPage;
