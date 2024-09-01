import Hero from "@/app/hero";
import Skills from "@/app/skills";
import Explore from "@/app/explore";
import Reviews from "@/app/reviews";
import Faq from "@/app/faq";
import Cta from "@/app/cta";

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
