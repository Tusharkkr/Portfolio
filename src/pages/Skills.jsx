import {
  Code2,
  Layout,
  Database,
  Wrench,
  Users,
  Brain,
  MessageSquare,
} from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import {
  JavaScriptLogo,
  ReactLogo,
  NodeLogo,
  MongoDBLogo,
  VSCodeLogo,
  GitLogo,
  TailwindLogo,
  VercelLogo,
  ReduxLogo,
  ExpressLogo,
  RenderLogo,
  PostmanLogo,
} from "@/components/TechLogos";

const skills = [
  {
    category: "Frameworks & Libraries",
    icon: <Layout className="w-6 h-6 text-purple-400" />,
    items: [
      { name: "React.js", icon: <ReactLogo /> },
      { name: "Redux Toolkit", icon: <ReduxLogo /> },
      { name: "React Router", icon: <ReactLogo /> },
      { name: "Axios", icon: <Layout className="w-4 h-4 text-purple-400" /> },
    ],
  },
  {
    category: "Back-End & Databases",
    icon: <Database className="w-6 h-6 text-blue-400" />,
    items: [
      { name: "MongoDB", icon: <MongoDBLogo /> },
      { name: "Mongoose", icon: <MongoDBLogo /> },
      { name: "Node.js", icon: <NodeLogo /> },
      { name: "Express.js", icon: <ExpressLogo /> },
    ],
  },
  {
    category: "Programming Languages",
    icon: <Code2 className="w-6 h-6 text-emerald-400" />,
    items: [
      { name: "HTML5", icon: <Code2 className="w-4 h-4 text-orange-400" /> },
      { name: "CSS3", icon: <TailwindLogo /> },
      { name: "JavaScript", icon: <JavaScriptLogo /> },
      { name: "ES6+ Standards", icon: <Code2 className="w-4 h-4 text-yellow-400" /> },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: <Wrench className="w-6 h-6 text-amber-400" />,
    items: [
      { name: "Git", icon: <GitLogo /> },
      { name: "GitHub", icon: <GitLogo /> },
      { name: "Postman", icon: <PostmanLogo /> },
      { name: "VS Code", icon: <VSCodeLogo /> },
      { name: "Vercel", icon: <VercelLogo /> },
      { name: "Render", icon: <RenderLogo /> },
    ],
  },
  {
    category: "Soft Skills & Languages",
    icon: <Brain className="w-6 h-6 text-pink-400" />,
    items: [
      { name: "Communication", icon: <MessageSquare className="w-4 h-4 text-pink-400" /> },
      { name: "Problem Solving", icon: <Brain className="w-4 h-4 text-purple-400" /> },
      { name: "Adaptability", icon: <Users className="w-4 h-4 text-indigo-400" /> },
      { name: "English & Hindi", icon: <MessageSquare className="w-4 h-4 text-teal-400" /> },
    ],
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20 relative overflow-hidden">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-4 gradient-text">
          Technical Skills
        </h2>
      </ScrollAnimation>

      <ScrollAnimation>
        <p className="text-gray-400 mb-12 max-w-2xl">
          A comprehensive overview of my technical expertise, tools, and developer workflow.
        </p>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {skills.map((skillGroup) => (
          <ScrollAnimation key={skillGroup.category} className="h-full">
            <div className="bg-gray-800/50 p-6 rounded-2xl backdrop-blur-md hover:bg-gray-800/70 transition-all border border-white/10 h-full flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-white/10">
                  <div className="p-2.5 bg-white/10 border border-white/10 rounded-xl">
                    {skillGroup.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">{skillGroup.category}</h3>
                </div>
                <div className="grid grid-cols-2 gap-3.5">
                  {skillGroup.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="bg-gray-700/40 border border-white/5 hover:border-white/20 h-14 px-3 rounded-xl flex items-center justify-center gap-2.5 hover:bg-white/10 transition-all group shadow-sm text-center"
                    >
                      <div className="w-5 h-5 flex items-center justify-center text-gray-400 group-hover:text-white transition-colors flex-shrink-0">
                        {skill.icon}
                      </div>
                      <span className="text-gray-300 group-hover:text-white transition-colors text-xs font-semibold leading-tight">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Skills;

