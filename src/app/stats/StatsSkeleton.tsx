"use client";

import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";

const SkeletonCard = ({ className = "" }: { className?: string }) => (
  <div className={`card border border-border/40 rounded-xl p-8 w-full h-full animate-pulse ${className}`}>
    <div className="space-y-2 mb-4">
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 bg-muted rounded-full"></div>
        <div className="h-6 bg-muted rounded w-32"></div>
      </div>
      <div className="h-[1px] w-full bg-muted/60"></div>
    </div>
    <div className="flex flex-col items-center justify-center flex-1 py-6">
      <div className="h-16 bg-muted rounded w-24 mb-4"></div>
      <div className="h-4 bg-muted rounded w-48"></div>
    </div>
  </div>
);

const SkeletonStatCard = () => (
  <div className="card border border-border/40 rounded-xl p-4 w-full h-full animate-pulse">
    <div className="card-content">
      <div className="h-6 bg-muted rounded w-32 mb-2"></div>
      <div className="h-12 bg-muted rounded w-16"></div>
    </div>
  </div>
);

const SkeletonGitHubGraph = () => (
  <div className="flex items-center justify-center w-full p-4 mb-8 border border-border/40 rounded-xl animate-pulse">
    <div className="w-full h-32 bg-muted rounded"></div>
  </div>
);

const StatsSkeleton = () => {
  return (
    <>
      {/* About this portfolio */}
      <PageHeader>
        <PageHeaderHeading>About this portfolio</PageHeaderHeading>
        <PageHeaderDescription>
          Insights and metrics about this portfolio website
        </PageHeaderDescription>
      </PageHeader>

      <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
        <SkeletonCard />
        <SkeletonCard />
      </div>

      {/* About GitHub Stats */}
      <PageHeader className="mt-8 mb-4">
        <PageHeaderHeading>GitHub Stats</PageHeaderHeading>
        <PageHeaderDescription>
          Insights and metrics about my GitHub profile
        </PageHeaderDescription>
      </PageHeader>

      {/* GitHub Graphs Skeleton */}
      <SkeletonGitHubGraph />

      <div className="mb-8">
        <div className="grid grid-cols-1 gap-4 card-container md:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <SkeletonStatCard key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default StatsSkeleton; 