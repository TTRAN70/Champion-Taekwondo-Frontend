import Hero from "@/components/landing/hero";
import React, { lazy, Suspense } from "react";
import { TaekwondoLoader } from "@/app/clientloaders";
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
      <Suspense fallback={<TaekwondoLoader />}>
        <SkillsComponent />
      </Suspense>
      <Suspense fallback={<TaekwondoLoader />}>
        <ExploreComponent />
      </Suspense>
      <Suspense fallback={<TaekwondoLoader />}>
        <ReviewComponent />
      </Suspense>
      <Suspense fallback={<TaekwondoLoader />}>
        <FaqComponent />
      </Suspense>
      <Suspense fallback={<TaekwondoLoader />}>
        <CtaComponent />
      </Suspense>
    </main>
  );
}
