import Hero from "@/app/hero";
import Skills from "@/app/skills";

export default function Home() {
  return (
    <main className="min-h-screen px-5 sm:px-12">
      <Hero />
      <Skills />
    </main>
  );
}
