import Hero from "@/components/landing/hero";
import React, { lazy, Suspense } from "react";
import CenteredSpinningLoader from "@/app/centered-spinning-loader";
import { HeroLoad } from "@/app/skeletons";
const SkillsComponent = lazy(() => import("@/components/landing/skills"));
const ExploreComponent = lazy(() => import("@/components/landing/explore"));
const ReviewComponent = lazy(() => import("@/components/landing/reviews"));
const FaqComponent = lazy(() => import("@/components/landing/faq"));
const CtaComponent = lazy(() => import("@/components/landing/cta"));

export default function Home() {
  return (
    <main className="min-h-screen px-5 sm:px-12 bg-white">
      <Suspense fallback={<HeroLoad />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<CenteredSpinningLoader size={80} color="#3498db" />}>
        <SkillsComponent />
      </Suspense>
      <Suspense fallback={<CenteredSpinningLoader size={80} color="#3498db" />}>
        <ExploreComponent />
      </Suspense>
      <Suspense fallback={<CenteredSpinningLoader size={80} color="#3498db" />}>
        <ReviewComponent />
      </Suspense>
      <Suspense fallback={<CenteredSpinningLoader size={80} color="#3498db" />}>
        <FaqComponent />
      </Suspense>
      <Suspense fallback={<CenteredSpinningLoader size={80} color="#3498db" />}>
        <CtaComponent />
      </Suspense>
    </main>
  );
}
