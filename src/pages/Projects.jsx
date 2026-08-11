import { ScrollAnimation } from "@/components/ScrollAnimation";
import { ExternalLink, Code2, Film, GraduationCap } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Swaadly – Food Delivery Application",
    description:
      "A full-stack food delivery application featuring user authentication, cart management, food listing, order placement, and an admin dashboard. Built with secure REST APIs and MongoDB for persistent data storage.",
    icon: <Code2 className="w-8 h-8 text-emerald-400" />,
    gradient: "from-emerald-900/40 via-emerald-950/20 to-gray-900",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    live: "https://swaadly-frontend.onrender.com",
    tags: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JavaScript",
      "REST APIs",
    ],
  },
  {
    id: 2,
    title: "NextSkill – Learning Management System",
    description:
      "A responsive LMS frontend built using React.js with modular components, Context API state management, and React Router DOM for seamless client-side navigation. Styled with Tailwind CSS for all devices.",
    icon: <GraduationCap className="w-8 h-8 text-purple-400" />,
    gradient: "from-purple-900/40 via-purple-950/20 to-gray-900",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    live: "https://learning-management-system-nextskill.onrender.com",
    tags: [
      "React.js",
      "Context API",
      "React Router DOM",
      "JavaScript",
      "Tailwind CSS",
    ],
  },
  {
    id: 3,
    title: "HQMovies – Movie Browsing Platform",
    description:
      "A responsive movie browsing platform powered by TMDB API. Features category filters (Trending, Popular, Top Rated), instant movie search, rating scores, immersive trailer previews, and Redux Toolkit state management.",
    icon: <Film className="w-8 h-8 text-blue-400" />,
    gradient: "from-blue-900/40 via-blue-950/20 to-gray-900",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    live: "https://hq-movies.vercel.app",
    tags: [
      "React.js",
      "Redux Toolkit",
      "React Router",
      "JavaScript",
      "REST APIs",
    ],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20 relative overflow-hidden">
      <ScrollAnimation>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-bold gradient-text mb-2">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              A collection of live web applications showcasing full-stack engineering and frontend architecture.
            </p>
          </div>
          <span className="px-4 py-1.5 bg-white/10 rounded-full text-xs font-semibold text-gray-300 border border-white/10">
            {projects.length} Applications
          </span>
        </div>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {projects.map((project) => (
          <ScrollAnimation key={project.id} className="h-full">
            <div className="bg-gray-800/50 rounded-2xl overflow-hidden backdrop-blur-md hover:bg-gray-800/70 transition-all border border-white/10 h-full flex flex-col justify-between shadow-xl group">
              {/* Dummy Stylized Mockup Header replacing static background photo */}
              <div className={`relative h-44 bg-gradient-to-br ${project.gradient} p-5 flex flex-col justify-between overflow-hidden border-b border-white/10`}>
                {/* Decorative Pattern & Glass Circle */}
                <div className="absolute -right-8 -top-8 w-36 h-36 bg-white/5 rounded-full blur-xl group-hover:scale-150 transition-transform pointer-events-none" />
                
                {/* Mockup Header Window Controls */}
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                  </div>
                  <span className={`px-2.5 py-0.5 text-[10px] font-bold rounded-full border uppercase tracking-wider ${project.badgeColor}`}>
                    Live App
                  </span>
                </div>

                {/* Center Icon Illustration */}
                <div className="relative z-10 flex items-center gap-3 mt-auto">
                  <div className="p-3 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 group-hover:scale-110 transition-transform">
                    {project.icon}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-gray-400 block">Project #{project.id}</span>
                    <span className="text-sm font-bold text-white tracking-wide line-clamp-1">{project.title.split("–")[0]}</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium bg-white/[0.06] border border-white/10 rounded-md text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 bg-purple-600/30 hover:bg-purple-600/50 border border-purple-500/40 rounded-xl transition-all flex items-center justify-center gap-2 text-xs font-bold text-purple-200 hover:text-white shadow-md group-hover:scale-[1.02]"
                    >
                      <ExternalLink className="w-4 h-4 text-purple-400" />
                      <span>Live Project</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Projects;


