import Hero from "@/components/landing/hero";
import Skills from "@/components/landing/skills";
import Explore from "@/components/landing/explore";
import Reviews from "@/components/landing/reviews";
import Faq from "@/components/landing/faq";
import Cta from "@/components/landing/cta";

export default function Home() {
  return (
    <main className="min-h-screen px-5 sm:px-12 bg-white">
      <Hero />
      <Skills />
      <Explore />
      <Reviews />
      <Faq />
      <Cta />
    </main>
  );
}
