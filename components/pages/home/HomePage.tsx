import HeroSection from "@/components/sections/HeroSection";

export default function HomePage() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-7xl px-6 lg:px-16 py-20">
        <HeroSection />
      </div>
    </section>
  );
}
