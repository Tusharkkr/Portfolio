import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  MapPin,
  BookOpen,
  Award,
  FileText,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";

const educationData = [
  {
    id: 1,
    school: "Meerut Institute of Engineering and Technology",
    location: "Meerut, UP, India",
    duration: "2023 – 2025",
    degree: "Master of Computer Applications (MCA)",
    grade: "Post Graduation",
    bgGradient: "from-purple-900/40 via-purple-950/20 to-gray-900",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    coursework: [
      "MERN Stack",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Redux Toolkit",
      "DBMS",
    ],
    description:
      "Specialized in post-graduate computer application studies with an emphasis on modern web technologies, full-stack software engineering, REST API architecture, and database design.",
  },
  {
    id: 2,
    school: "Forte Institute of Technology",
    location: "Meerut, UP, India",
    duration: "2020 – 2023",
    degree: "Bachelor of Computer Applications (BCA)",
    grade: "Graduation",
    bgGradient: "from-blue-900/40 via-blue-950/20 to-gray-900",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    coursework: [
      "C/C++",
      "HTML5 & CSS3",
      "JavaScript (ES6+)",
      "Database Systems",
      "Object-Oriented Programming",
    ],
    description:
      "Undergraduate computer applications degree providing strong core fundamentals in programming, web development basics, object-oriented concepts, and software logic.",
  },
];

const Education = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <motion.div
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <GraduationCap className="w-8 h-8 text-purple-400" />
          <h2 className="text-4xl font-bold gradient-text">Education</h2>
        </motion.div>
      </ScrollAnimation>

      <div className="space-y-8">
        {educationData.map((edu) => (
          <ScrollAnimation key={edu.id}>
            <div className={`relative bg-gradient-to-r ${edu.bgGradient} rounded-2xl p-6 sm:p-8 backdrop-blur-md hover:border-white/20 transition-all border border-white/10 shadow-xl overflow-hidden group`}>
              {/* Subtle Ambient Decorative Glow & Pattern */}
              <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all pointer-events-none" />
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-xs sm:text-sm text-gray-300">
                <Calendar className="w-4 h-4 text-purple-400" />
                <span>{edu.duration}</span>
              </div>

              <div className="flex flex-col md:flex-row md:items-start gap-6 relative z-10">
                {/* Academic Icon Badge Header */}
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-inner">
                  <GraduationCap className="w-8 h-8 text-purple-300" />
                </div>

                <div className="flex-grow space-y-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3 className="text-2xl font-bold text-white tracking-tight">{edu.school}</h3>
                      <span className={`px-3 py-0.5 text-xs font-semibold rounded-full border ${edu.badgeColor}`}>
                        {edu.grade}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-purple-400" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-purple-200 font-semibold text-lg">
                    <BookOpen className="w-5 h-5 text-purple-400" />
                    <h4>{edu.degree}</h4>
                  </div>

                  <div className="flex items-start gap-2.5 text-gray-300 text-sm leading-relaxed">
                    <FileText className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                    <p>{edu.description}</p>
                  </div>

                  {edu.coursework && (
                    <div className="pt-2">
                      <div className="text-xs uppercase tracking-wider text-gray-400 font-medium mb-2.5 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                        Key Coursework & Competencies
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                          <span
                            key={course}
                            className="px-3 py-1 bg-white/[0.07] hover:bg-white/[0.12] border border-white/10 rounded-lg text-xs sm:text-sm text-gray-200 transition-colors"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {edu.resultUrl && (
                    <div className="pt-2">
                      <motion.a
                        href={edu.resultUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all text-xs sm:text-sm font-medium border border-white/10"
                        whileHover={{ scale: 1.02 }}
                      >
                        View Result
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Education;

