import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { TechStackData } from "@/components/TechStackIcons";

const experience = [
  {
    id: 1,
    role: "Backend Developer",
    company: "Polytechnic University of the Philippines",
    date: "June 2024",
    description: "Using C#, backend design in winforms, utilizing mysql4.",
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Polytechnic University of the Philippines",
    date: "June 2025",
    description:
      "Utilizing Javascript, Jquery, for more interactive frontend design.",
  },
  {
    id: 3,
    role: "Backend Developer",
    company: "Polytechnic University of the Philippines",
    date: "October 2025 - 2026",
    description:
      "Leveraging NextJS, NodeJS, RestAPI, and Supabase for faster and more efficient web applications.",
  },
];

function TechCard({ image, name }: { image: string; name: string }) {
  return (
    <div className="group flex flex-col items-center justify-center gap-4 p-5 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 hover:border-teal-400/50 dark:hover:border-teal-500/50 transition-all duration-300 hover:scale-110 hover:-translate-y-2 h-40 w-40 shadow-lg hover:shadow-xl hover:bg-white/20 dark:hover:bg-white/10">
      <div className="relative w-16 h-16 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
        <div className="absolute inset-0 rounded-full bg-linear-to-r from-teal-400/20 to-blue-400/20 blur-lg group-hover:blur-xl transition-all duration-300"></div>
        <Image
          src={image}
          alt={name}
          width={64}
          height={64}
          className="w-14 h-14 object-contain relative z-10"
        />
      </div>
      <p className="text-xs font-bold text-gray-800 dark:text-gray-200 text-center line-clamp-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
        {name}
      </p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="w-full">
      <section className="py-20 animate-fade-in px-6 lg:px-16">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-teal-100 dark:bg-teal-900/50 border border-teal-200 dark:border-teal-700/50">
            <CheckCircle
              size={16}
              className="text-teal-600 dark:text-teal-400"
            />
            <span className="text-sm font-semibold text-teal-700 dark:text-teal-300">
              My Background
            </span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-black text-black dark:text-white mb-4">
            My Journey &{" "}
            <span className="bg-linear-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
            From university projects to real-world applications, I&apos;ve built
            a diverse skill set in full-stack development.
          </p>
        </div>

        {/* Experience and Tech Stack Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Experience Section */}
          <div>
            <h2 className="text-3xl font-bold text-black dark:text-white mb-10 flex items-center gap-3">
              <div className="w-2 h-8 bg-linear-to-b from-teal-600 to-blue-600 rounded-full"></div>
              Experience
            </h2>

            <div className="space-y-6">
              {experience.map((job, index) => (
                <div
                  key={job.id}
                  className="group relative pl-8 rounded-2xl p-6 bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-white/10 dark:border-white/10 hover:border-teal-400/30 dark:hover:border-teal-500/30 transition-all duration-300 hover:bg-white/10 dark:hover:bg-white/10 hover:shadow-lg"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-8 w-4 h-4 bg-linear-to-r from-teal-600 to-blue-600 rounded-full border-4 border-white dark:border-black shadow-lg transform -translate-x-2"></div>

                  {/* Timeline Line */}
                  {index !== experience.length - 1 && (
                    <div className="absolute left-1.5 top-12 w-0.5 h-24 bg-linear-to-b from-teal-600/50 to-transparent"></div>
                  )}

                  <h3 className="text-lg font-bold text-black dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
                    {job.role}
                  </h3>
                  <p className="text-teal-600 dark:text-teal-400 font-semibold text-sm mt-2">
                    {job.company}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1 font-medium">
                    {job.date}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-3 text-sm leading-relaxed">
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Section */}
          <div>
            <h2 className="text-3xl font-bold text-black dark:text-white mb-10 flex items-center gap-3">
              <div className="w-2 h-8 bg-linear-to-b from-blue-600 to-teal-600 rounded-full"></div>
              Tech Stack
            </h2>

            <div className="grid grid-cols-4 gap-6">
              {TechStackData.map((tech, index) => (
                <div
                  key={tech.name}
                  style={{ animationDelay: `${index * 0.05}s` }}
                  className="animate-slide-in-up"
                >
                  <TechCard image={tech.image} name={tech.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
