import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Building2,
  ExternalLink,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";

const experiences = [
  {
    id: 1,
    title: "Full Stack MERN Trainee",
    company: "AccioJob Skill Center",
    location: "Noida",
    period: "Training & Development",
    type: "Trainee",
    certificateUrl: "",
    description: [
      "Completed hands-on training in Full Stack MERN Development, mastering core technologies.",
      "Built full-stack web applications utilizing React.js, Node.js, Express.js, and MongoDB.",
      "Developed responsive user interfaces with Tailwind CSS and Redux Toolkit, enhancing user experience.",
      "Designed and consumed REST APIs for seamless data integration.",
      "Utilized Git, GitHub, Postman, and deployment platforms to streamline development processes.",
      "Collaborated on real-world projects, ensuring adherence to clean coding practices.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen pt-16 sm:pt-20 px-4 max-w-5xl mx-auto pb-16 sm:pb-20 relative overflow-hidden">
      <ScrollAnimation>
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 gradient-text flex items-center gap-3">
          <Briefcase className="w-7 h-7 sm:w-8 sm:h-8 text-purple-400" />
          Professional Experience
        </h2>
      </ScrollAnimation>

      <div className="space-y-8 sm:space-y-12">
        {experiences.map((exp) => (
          <ScrollAnimation key={exp.id}>
            <div className="group relative bg-gradient-to-br from-gray-800/60 via-gray-900/60 to-purple-950/20 rounded-xl sm:rounded-2xl overflow-hidden backdrop-blur-md hover:bg-gray-800/80 transition-all border border-white/10 p-6 sm:p-8 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-500/20 border border-purple-500/30 rounded-xl text-purple-300 group-hover:scale-110 transition-transform">
                    <Building2 className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-purple-300 font-medium text-base sm:text-lg">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs sm:text-sm text-gray-300 self-start sm:self-auto">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span>{exp.location}</span>
                  <span>•</span>
                  <span>{exp.period}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-xs uppercase tracking-wider text-gray-400 font-medium flex items-center gap-1.5 mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                  Key Responsibilities & Highlights
                </div>
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-300 text-sm sm:text-base leading-relaxed"
                    >
                      <ArrowRight className="w-5 h-5 mt-0.5 text-purple-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {exp.certificateUrl && (
                <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
                  <motion.a
                    href={exp.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-white bg-purple-600/30 hover:bg-purple-600/50 border border-purple-500/40 rounded-xl transition-all text-sm font-semibold shadow-lg"
                    whileHover={{ scale: 1.02 }}
                  >
                    View Certificate
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              )}
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Experience;

