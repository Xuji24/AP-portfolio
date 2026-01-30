import HeroSection from "@/components/sections/HeroSection";
import AboutPage from "@/components/pages/about/AboutPage";
import ProjectPage from "@/components/pages/projects/ProjectPage";
import ContactPage from "@/components/pages/contact/ContactPage";

export default function Home() {
  return (
    <main className="w-full bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center"
      >
        <div className="w-full max-w-7xl px-6 lg:px-16 py-20">
          <HeroSection />
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center"
      >
        <div className="w-full max-w-fit">
          <AboutPage />
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center"
      >
        <div className="w-full max-w-8xl">
          <ProjectPage />
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center"
      >
        <div className="w-full max-w-7xl">
          <ContactPage />
        </div>
      </section>
    </main>
  );
}
