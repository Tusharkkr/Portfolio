import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://tusharkumar.vercel.app";

const PAGE_META = {
  "/": {
    title: "Tushar Kumar - Aspiring Full Stack MERN Developer",
    description:
      "Tushar Kumar — MCA Graduate and Aspiring Full Stack MERN Developer specializing in React.js, Redux Toolkit, Node.js, Express.js, and MongoDB. Based in Meerut, India.",
  },
  "/about": {
    title: "About - Tushar Kumar | Full Stack MERN Developer",
    description:
      "Learn about Tushar Kumar — MCA graduate from Meerut Institute of Engineering and Technology, Full Stack MERN Developer.",
  },
  "/projects": {
    title: "Projects - Tushar Kumar | Full Stack Portfolio",
    description:
      "Explore web projects built by Tushar Kumar using MongoDB, Express.js, React.js, Node.js, and Redux Toolkit.",
  },
  "/skills": {
    title: "Skills - Tushar Kumar | React.js, Redux Toolkit, MERN Stack",
    description:
      "Technical skills of Tushar Kumar — React.js, Redux Toolkit, Node.js, Express.js, MongoDB, Mongoose, REST APIs, Git, and Postman.",
  },
  "/experience": {
    title: "Experience - Tushar Kumar | Full Stack MERN Trainee",
    description:
      "Professional training and experience of Tushar Kumar at AccioJob Skill Center in full stack MERN web development.",
  },
  "/education": {
    title: "Education - Tushar Kumar | MCA & BCA Graduate",
    description:
      "Educational background of Tushar Kumar — Master of Computer Applications (MCA) and Bachelor of Computer Applications (BCA).",
  },
  "/certificates": {
    title: "Achievements & Awards - Tushar Kumar | MERN Developer",
    description:
      "Achievements and awards of Tushar Kumar in MERN stack development and REST API integrations.",
  },
  "/contact": {
    title: "Contact - Tushar Kumar | Full Stack MERN Developer",
    description:
      "Get in touch with Tushar Kumar for full stack developer opportunities, web projects, or collaborations.",
  },
};

const FALLBACK_META = {
  title: "Tushar Kumar - Aspiring Full Stack MERN Developer",
  description:
    "Portfolio of Tushar Kumar — Aspiring Full Stack MERN Developer specializing in React.js, Redux Toolkit, Node.js, Express.js, and MongoDB.",
};

export const useSEO = () => {
  const location = useLocation();

  useEffect(() => {
    const meta = PAGE_META[location.pathname] ?? FALLBACK_META;
    const url = `${BASE_URL}${location.pathname}`;

    document.title = meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", meta.description);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", meta.title);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", meta.description);
    document
      .querySelector('meta[property="og:url"]')
      ?.setAttribute("content", url);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", url);
  }, [location.pathname]);
};
