import { ScrollAnimation } from "@/components/ScrollAnimation";
import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink, Sparkles } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Full Stack MERN Certification & Projects",
    issuer: "AccioJob Skill Center",
    date: "2024",
    link: "",
    description:
      "Developed multiple React.js and MERN Stack projects demonstrating hands-on expertise in full-stack architecture, REST APIs, Redux Toolkit, and responsive web development.",
    skills: ["React.js", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
];

const Certificates = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-4xl mx-auto pb-20 relative overflow-hidden">
      <ScrollAnimation>
        <motion.div
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Award className="w-8 h-8 text-purple-400" />
          <h2 className="text-4xl font-bold gradient-text">Awards & Achievements</h2>
        </motion.div>
      </ScrollAnimation>

      <div className="grid gap-6">
        {certificates.map((cert) => (
          <ScrollAnimation key={cert.id}>
            <div className="bg-gradient-to-r from-purple-900/40 via-gray-800/60 to-gray-900 p-8 rounded-2xl backdrop-blur-md hover:bg-gray-800/80 transition-all group border border-white/10 shadow-xl relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-purple-500/20 rounded-xl border border-purple-500/30 text-purple-300">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{cert.title}</h3>
                    <span className="text-purple-300 font-medium text-base">{cert.issuer}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs sm:text-sm text-gray-300 self-start sm:self-auto">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  <span>{cert.date}</span>
                </div>
              </div>

              <div className="text-gray-300 space-y-4">
                <p className="text-sm sm:text-base leading-relaxed">{cert.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-semibold bg-white/10 rounded-lg border border-white/10 text-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                {cert.link && (
                  <div className="pt-4">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold group-hover:translate-x-2 transition-transform text-sm"
                    >
                      View Certificate
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Certificates;

