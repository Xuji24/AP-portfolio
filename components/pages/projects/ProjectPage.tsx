import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    id: 1,
    title: "NextJS Project - Booking App",
    description:
      "A purpose-driven booking app focused on user-centric design and hassle-free reservations, supported by a robust backend with Supabase, PostgreSQL, NextJS and secure Google OAuth authentication.",
    link: "https://d-creatives.online",
    status: "Completed",
    image: "/booking-app-screenshot.png",
  },
  {
    id: 2,
    title: "JS Project - Coffee Shop Static Website",
    description:
      "A coffee shop app, that let users explore various coffee blends, view detailed descriptions, and place orders online through a user-friendly interface.",
    link: "https://julsmartinez.github.io/STOUTCAFE/",
    status: "Completed",
    image: "/stoutcafe.png",
  },
  {
    id: 3,
    title: "NextJS Project - Event Running App",
    description:
      "A progressive event running app focused on user-centric design and hassle-free reservations, supported by a robust backend with Supabase, PostgreSQL, NextJS and secure Google OAuth authentication.",
    link: "#",
    status: "In Progress",
  },
  {
    id: 4,
    title: "Coming Soon - New Project",
    description:
      "New project coming soon. Stay tuned for updates on this exciting venture!",
    link: "#",
    status: "In Progress",
  },
  {
    id: 5,
    title: "Coming Soon - New Project",
    description:
      "New project coming soon. Stay tuned for updates on this exciting venture!",
    link: "#",
    status: "In Progress",
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-full min-h-screen xl:px-37.5">
      <section className="py-20 animate-fade-in px-6 lg:px-16">
        <h1 className="text-5xl font-bold text-black dark:text-white mb-12 animate-slide-in-down">
          Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{ animationDelay: `${index * 0.1}s` }}
              className="animate-slide-in-up"
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                link={project.link}
                status={project.status}
                image={project.image}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
