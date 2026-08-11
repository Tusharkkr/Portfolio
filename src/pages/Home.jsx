import cvPdf from "@/assets/files/cv_pdf/Tushar_Kumar_Resume.pdf";
import {
  ExpressLogo,
  GitLogo,
  JavaScriptLogo,
  MongoDBLogo,
  NodeLogo,
  PostmanLogo,
  ReactLogo,
  ReduxLogo,
  TailwindLogo,
} from "@/components/TechLogos";
import { CONTACT_INFO } from "@/config/contact";
import { fetcher, formatRepoCount, isTouchDevice } from "@/utils/helpers";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Check,
  Code2,
  Copy,
  Cpu,
  Database,
  ExternalLink,
  FileDown,
  Github,
  GraduationCap,
  Layout,
  Linkedin,
  Mail,
  MessageCircle,
  Sparkles,
  Terminal,
  User,
  Film,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";

const GITHUB_API = `https://api.github.com/users/${import.meta.env.VITE_GITHUB_USERNAME || "Tusharkkr"}`;

const ROLES = [
  "Full Stack MERN Developer",
  "React.js & Node.js Specialist",
  "REST API & Database Architect",
  "MCA Graduate & Frontend Craftsperson",
];

const TECH_STACK = [
  { name: "React.js", icon: <ReactLogo /> },
  { name: "Node.js", icon: <NodeLogo /> },
  { name: "Express.js", icon: <ExpressLogo /> },
  { name: "MongoDB", icon: <MongoDBLogo /> },
  { name: "Redux Toolkit", icon: <ReduxLogo /> },
  { name: "JavaScript", icon: <JavaScriptLogo /> },
  { name: "Tailwind CSS", icon: <TailwindLogo /> },
  { name: "Git & GitHub", icon: <GitLogo /> },
  { name: "Postman", icon: <PostmanLogo /> },
];

const FEATURED_PROJECTS = [
  {
    id: 1,
    title: "Swaadly – Food Delivery Application",
    description:
      "A full-stack food delivery application featuring user authentication, cart management, food listing, order placement, and an admin dashboard. Built with React, Node, Express, & MongoDB.",
    icon: <Code2 className="w-8 h-8 text-emerald-400" />,
    gradient: "from-emerald-900/40 via-emerald-950/20 to-gray-900",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    live: "https://swaadly-frontend.onrender.com",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs"],
  },
  {
    id: 2,
    title: "NextSkill – Learning Management System",
    description:
      "A responsive LMS frontend built using React.js with modular components, Context API state management, and React Router DOM for seamless navigation across application pages.",
    icon: <GraduationCap className="w-8 h-8 text-purple-400" />,
    gradient: "from-purple-900/40 via-purple-950/20 to-gray-900",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    live: "https://learning-management-system-nextskill.onrender.com",
    tags: ["React.js", "Context API", "React Router DOM", "Tailwind CSS"],
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
    tags: ["React.js", "Redux Toolkit", "React Router", "REST APIs"],
  },
];

const PILLARS = [
  {
    icon: <Layout className="w-6 h-6 text-purple-400" />,
    title: "Frontend Excellence",
    description:
      "Crafting intuitive, responsive, and pixel-perfect user interfaces using React.js, Redux Toolkit, Tailwind CSS, and Framer Motion.",
  },
  {
    icon: <Cpu className="w-6 h-6 text-blue-400" />,
    title: "Backend & REST APIs",
    description:
      "Designing clean, modular Node.js & Express servers with secure JWT authentication, middleware controls, and robust API endpoints.",
  },
  {
    icon: <Database className="w-6 h-6 text-emerald-400" />,
    title: "Database Architecture",
    description:
      "Structuring optimized MongoDB collections, Mongoose schemas, and efficient query pipelines for scalable data storage.",
  },
  {
    icon: <Terminal className="w-6 h-6 text-amber-400" />,
    title: "Tools & Deployment",
    description:
      "Proficient in Git version control, Postman API testing, and deploying production applications on Vercel and Render.",
  },
];

const Home = () => {
  const [copied, setCopied] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("profile");

  const { data: githubData } = useSWR(GITHUB_API, fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 300000,
    shouldRetryOnError: true,
    errorRetryCount: 3,
  });

  const displayRepos = formatRepoCount(githubData?.public_repos ?? 0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // silent fail
    }
  };

  const handleEmailClick = () => {
    if (isTouchDevice()) {
      window.location.href = `mailto:${CONTACT_INFO.email}`;
    } else {
      copyToClipboard();
    }
  };

  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-96 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="text-center relative z-10 max-w-4xl mx-auto mb-20 sm:mb-28">
        {/* Availability Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs sm:text-sm font-medium mb-6 sm:mb-8 backdrop-blur-md"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-gray-300">Available for Opportunities & Projects</span>
        </motion.div>

        {/* Hero Main Name */}
        <motion.h1
          className="text-4xl sm:text-7xl md:text-8xl font-extrabold tracking-tight mb-4 sm:mb-6 leading-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="gradient-text">Tushar Kumar</span>
        </motion.h1>

        {/* Dynamic Animated Role */}
        <div className="h-12 sm:h-16 flex items-center justify-center mb-6">
          <AnimatePresence mode="wait">
            <motion.h2
              key={roleIndex}
              className="text-xl sm:text-3xl md:text-4xl font-bold gradient-text-accent tracking-wide"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              {ROLES[roleIndex]}
            </motion.h2>
          </AnimatePresence>
        </div>

        {/* Short Punchy Summary */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          MCA Graduate & Full Stack Developer with hands-on expertise engineering web applications using{" "}
          <span className="text-white font-medium">React.js</span>,{" "}
          <span className="text-white font-medium">Redux Toolkit</span>,{" "}
          <span className="text-white font-medium">Node.js</span>,{" "}
          <span className="text-white font-medium">Express.js</span>, and{" "}
          <span className="text-white font-medium">MongoDB</span>.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-4 sm:gap-5 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            to="/projects"
            className="px-6 py-3.5 bg-white text-black font-semibold rounded-full text-sm sm:text-base hover:bg-gray-200 transition-all transform hover:-translate-y-0.5 flex items-center gap-2 shadow-lg shadow-white/10"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>

          <a
            href="https://drive.google.com/file/d/1m3RAtZwJeTFWuwMEJCV3iRgfeTcm0eyX/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full text-sm sm:text-base backdrop-blur-md transition-all border border-white/10 flex items-center gap-2"
          >
            <FileDown className="w-4 h-4" aria-hidden="true" />
            <span>Download CV</span>
          </a>

          <Link
            to="/about"
            className="px-6 py-3.5 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white font-medium rounded-full text-sm sm:text-base transition-all border border-white/5 flex items-center gap-2"
          >
            <User className="w-4 h-4" aria-hidden="true" />
            <span>About Me</span>
          </Link>
        </motion.div>

        {/* Email Pill with Interactive Copy */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="inline-block"
        >
          <button
            onClick={handleEmailClick}
            className="group relative flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2.5 text-left text-xs text-gray-300 transition-all hover:bg-white/[0.08] hover:text-white sm:gap-3 sm:px-5 sm:text-sm lg:text-base"
            aria-label={`Email: ${CONTACT_INFO.email}`}
          >
            <Mail className="h-4 w-4 shrink-0 text-purple-400 transition-transform group-hover:scale-110" />
            <span className="truncate sm:truncate-none">{CONTACT_INFO.email}</span>
            <span className="hidden shrink-0 rounded bg-white/10 px-2 py-0.5 text-[10px] text-gray-400 transition-colors group-hover:text-white sm:inline-block">
              {copied ? "Copied!" : "Click to copy"}
            </span>
            {copied ? (
              <Check className="hidden h-4 w-4 shrink-0 text-emerald-400 sm:inline-block" aria-hidden="true" />
            ) : (
              <Copy className="hidden h-3.5 w-3.5 shrink-0 text-gray-400 group-hover:text-white sm:inline-block" aria-hidden="true" />
            )}
          </button>
        </motion.div>
      </section>

      {/* Metrics & Highlights Grid */}
      <section className="mb-24">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <a
            href={CONTACT_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-6 flex flex-col items-center justify-center text-center group hover:bg-white/[0.06] transition-all"
          >
            <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl mb-3 group-hover:scale-110 transition-transform">
              <Github className="w-6 h-6" />
            </div>
            <span className="text-2xl sm:text-3xl font-extrabold text-white mb-1">
              {displayRepos}
            </span>
            <span className="text-xs sm:text-sm text-gray-400 font-medium">
              GitHub Repositories
            </span>
          </a>

          <div className="glass-card p-6 flex flex-col items-center justify-center text-center group hover:bg-white/[0.06] transition-all">
            <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl mb-3 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <span className="text-2xl sm:text-3xl font-extrabold text-white mb-1">
              MCA
            </span>
            <span className="text-xs sm:text-sm text-gray-400 font-medium">
              Master's Graduate
            </span>
          </div>

          <div className="glass-card p-6 flex flex-col items-center justify-center text-center group hover:bg-white/[0.06] transition-all">
            <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl mb-3 group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6" />
            </div>
            <span className="text-2xl sm:text-3xl font-extrabold text-white mb-1">
              MERN
            </span>
            <span className="text-xs sm:text-sm text-gray-400 font-medium">
              Full Stack Trainee
            </span>
          </div>

          <a
            href={CONTACT_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-6 flex flex-col items-center justify-center text-center group hover:bg-white/[0.06] transition-all"
          >
            <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl mb-3 group-hover:scale-110 transition-transform">
              <Linkedin className="w-6 h-6" />
            </div>
            <span className="text-2xl sm:text-3xl font-extrabold text-white mb-1">
              Connect
            </span>
            <span className="text-xs sm:text-sm text-gray-400 font-medium">
              LinkedIn Profile
            </span>
          </a>
        </motion.div>
      </section>

      {/* Tech Stack Marquee / Grid */}
      <section className="mb-24 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-purple-400 font-semibold mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Tech Stack & Skill Set</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold mb-8 gradient-text">
            Technologies I Work With
          </h2>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
            {TECH_STACK.map((tech) => (
              <div
                key={tech.name}
                className="glass-pill px-4 py-2.5 flex items-center gap-2.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-default group"
              >
                <div className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors">
                  {tech.icon}
                </div>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Featured Projects Spotlight */}
      <section className="mb-28">
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-blue-400 font-semibold mb-2">
              <Code2 className="w-4 h-4" />
              <span>Portfolio Highlights</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
              Featured Projects
            </h2>
          </div>
          <Link
            to="/projects"
            className="mt-4 sm:mt-0 text-sm font-semibold text-gray-400 hover:text-white flex items-center gap-1.5 transition-colors group"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              className="glass-card overflow-hidden flex flex-col group h-full justify-between"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Dummy Stylized Header replacing static background photo */}
              <div className={`relative h-44 bg-gradient-to-br ${project.gradient} p-5 flex flex-col justify-between overflow-hidden border-b border-white/10`}>
                <div className="absolute -right-8 -top-8 w-36 h-36 bg-white/5 rounded-full blur-xl group-hover:scale-150 transition-transform pointer-events-none" />
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                  </div>
                  <span className={`px-2.5 py-0.5 text-[10px] font-bold rounded-full border uppercase tracking-wider ${project.badgeColor}`}>
                    Featured
                  </span>
                </div>

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

              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium bg-white/[0.05] border border-white/10 rounded-md text-gray-300"
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
            </motion.div>
          ))}
        </div>
      </section>

      {/* Engineering Pillars */}
      <section className="mb-28">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-3">
            <Cpu className="w-4 h-4" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
            What I Bring To The Table
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            End-to-end engineering skills to transform concepts into production-ready web applications.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              className="glass-card p-6 flex flex-col justify-between hover:bg-white/[0.05] transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div>
                <div className="p-3 bg-white/[0.05] border border-white/10 rounded-xl inline-block mb-5">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive Developer Terminal */}
      <section className="mb-28">
        <motion.div
          className="glass-card overflow-hidden max-w-3xl mx-auto border border-white/10 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Window Header */}
          <div className="bg-white/[0.05] px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              <span className="ml-2 text-xs font-mono text-gray-400 hidden sm:inline-block">
                tushar@portfolio: ~/profile
              </span>
            </div>

            {/* Tab Switches */}
            <div className="flex items-center space-x-2 text-xs font-mono">
              <button
                onClick={() => setActiveTab("profile")}
                className={`px-2.5 py-1 rounded transition-colors ${
                  activeTab === "profile"
                    ? "bg-white/20 text-white font-bold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                profile.json
              </button>
              <button
                onClick={() => setActiveTab("skills")}
                className={`px-2.5 py-1 rounded transition-colors ${
                  activeTab === "skills"
                    ? "bg-white/20 text-white font-bold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                skills.js
              </button>
            </div>
          </div>

          {/* Window Body */}
          <div className="p-6 font-mono text-xs sm:text-sm text-gray-300 bg-black/40 min-h-[220px] overflow-x-auto">
            {activeTab === "profile" && (
              <div>
                <div className="text-gray-500 mb-2">// Quick Developer Specs</div>
                <div className="text-purple-400">
                  const <span className="text-blue-300">developer</span> = &#123;
                </div>
                <div className="pl-4 space-y-1">
                  <div>
                    <span className="text-gray-400">name:</span>{" "}
                    <span className="text-emerald-300">"Tushar Kumar"</span>,
                  </div>
                  <div>
                    <span className="text-gray-400">role:</span>{" "}
                    <span className="text-emerald-300">"Full Stack MERN Developer"</span>,
                  </div>
                  <div>
                    <span className="text-gray-400">education:</span>{" "}
                    <span className="text-emerald-300">"Master of Computer Applications (MCA)"</span>,
                  </div>
                  <div>
                    <span className="text-gray-400">institution:</span>{" "}
                    <span className="text-emerald-300">"Meerut Institute of Eng. & Tech. (MIET)"</span>,
                  </div>
                  <div>
                    <span className="text-gray-400">location:</span>{" "}
                    <span className="text-emerald-300">"Meerut, Uttar Pradesh, India"</span>,
                  </div>
                  <div>
                    <span className="text-gray-400">availability:</span>{" "}
                    <span className="text-amber-300">true</span>
                  </div>
                </div>
                <div className="text-purple-400">&#125;;</div>
              </div>
            )}

            {activeTab === "skills" && (
              <div>
                <div className="text-gray-500 mb-2">// Tech Stack Definition</div>
                <div className="text-blue-400">
                  export const <span className="text-yellow-300">stack</span> = &#123;
                </div>
                <div className="pl-4 space-y-1">
                  <div>
                    <span className="text-gray-400">frontend:</span> [
                    <span className="text-emerald-300">"React.js"</span>,{" "}
                    <span className="text-emerald-300">"Redux Toolkit"</span>,{" "}
                    <span className="text-emerald-300">"Tailwind CSS"</span>],
                  </div>
                  <div>
                    <span className="text-gray-400">backend:</span> [
                    <span className="text-emerald-300">"Node.js"</span>,{" "}
                    <span className="text-emerald-300">"Express.js"</span>,{" "}
                    <span className="text-emerald-300">"JWT"</span>],
                  </div>
                  <div>
                    <span className="text-gray-400">database:</span> [
                    <span className="text-emerald-300">"MongoDB"</span>,{" "}
                    <span className="text-emerald-300">"Mongoose"</span>],
                  </div>
                  <div>
                    <span className="text-gray-400">tools:</span> [
                    <span className="text-emerald-300">"Git"</span>,{" "}
                    <span className="text-emerald-300">"Postman"</span>,{" "}
                    <span className="text-emerald-300">"Vercel"</span>]
                  </div>
                </div>
                <div className="text-blue-400">&#125;;</div>
              </div>
            )}
          </div>
        </motion.div>
      </section>

      {/* Call To Action Banner */}
      <section>
        <motion.div
          className="glass-card p-8 sm:p-12 text-center relative overflow-hidden bg-gradient-to-r from-purple-900/20 via-black to-blue-900/20 border border-white/10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold gradient-text mb-4">
            Let's Build Something Exceptional
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            Whether you are looking for a dedicated Full Stack Developer to join your team, contribute to open-source, or build a web app from scratch, I'd love to connect!
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="px-8 py-3.5 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all flex items-center gap-2 shadow-xl shadow-white/10 text-sm sm:text-base"
            >
              <Mail className="w-4 h-4" />
              <span>Email Me</span>
            </a>

            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 font-bold rounded-full border border-emerald-500/30 backdrop-blur-md transition-all flex items-center gap-2 text-sm sm:text-base"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Me</span>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
