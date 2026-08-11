import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import fs from "fs";
import path from "path";

async function createResume() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4 size in points
  const { width, height } = page.getSize();

  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const margin = 36; // 0.5 inch margins
  let y = height - margin;

  const primaryColor = rgb(0.1, 0.1, 0.1);
  const accentColor = rgb(0.2, 0.2, 0.2);
  const darkGray = rgb(0.25, 0.25, 0.25);

  const drawHeader = () => {
    // Name
    page.drawText("Tushar Kumar", {
      x: margin,
      y: y - 24,
      size: 24,
      font: fontBold,
      color: primaryColor,
    });
    y -= 30;

    // Subtitle
    page.drawText("Aspiring Full Stack MERN Developer", {
      x: margin,
      y: y - 14,
      size: 13,
      font: fontBold,
      color: accentColor,
    });
    y -= 22;

    // Contact details line
    const contactText =
      "Tusharkr463@gmail.com  |  +91 8126942996  |  LinkedIn: Tusharkumar  |  GitHub: Tusharkumar  |  Meerut, India";
    page.drawText(contactText, {
      x: margin,
      y: y - 10,
      size: 8.5,
      font: fontRegular,
      color: darkGray,
    });
    y -= 20;
  };

  const drawSectionHeading = (title) => {
    y -= 10;
    page.drawText(title.toUpperCase(), {
      x: margin,
      y: y - 12,
      size: 11,
      font: fontBold,
      color: primaryColor,
    });
    y -= 15;
    // Horizontal divider line
    page.drawLine({
      start: { x: margin, y: y },
      end: { x: width - margin, y: y },
      thickness: 1,
      color: primaryColor,
    });
    y -= 12;
  };

  const drawParagraph = (text, size = 9.5, leading = 13) => {
    const maxWidth = width - margin * 2;
    const words = text.split(" ");
    let line = "";

    for (let i = 0; i < words.length; i++) {
      const testLine = line + (line ? " " : "") + words[i];
      const testWidth = fontRegular.widthOfTextAtSize(testLine, size);
      if (testWidth > maxWidth && i > 0) {
        page.drawText(line, {
          x: margin,
          y: y - size,
          size,
          font: fontRegular,
          color: darkGray,
        });
        y -= leading;
        line = words[i];
      } else {
        line = testLine;
      }
    }
    if (line) {
      page.drawText(line, {
        x: margin,
        y: y - size,
        size,
        font: fontRegular,
        color: darkGray,
      });
      y -= leading;
    }
  };

  const drawBullet = (text, size = 9, indent = 12, leading = 12.5) => {
    const maxWidth = width - margin * 2 - indent;
    page.drawText("\u2022", {
      x: margin + 3,
      y: y - size,
      size: size + 2,
      font: fontBold,
      color: primaryColor,
    });

    const words = text.split(" ");
    let line = "";

    for (let i = 0; i < words.length; i++) {
      const testLine = line + (line ? " " : "") + words[i];
      const testWidth = fontRegular.widthOfTextAtSize(testLine, size);
      if (testWidth > maxWidth && i > 0) {
        page.drawText(line, {
          x: margin + indent,
          y: y - size,
          size,
          font: fontRegular,
          color: darkGray,
        });
        y -= leading;
        line = words[i];
      } else {
        line = testLine;
      }
    }
    if (line) {
      page.drawText(line, {
        x: margin + indent,
        y: y - size,
        size,
        font: fontRegular,
        color: darkGray,
      });
      y -= leading;
    }
  };

  drawHeader();

  // 1. PROFESSIONAL SUMMARY
  drawSectionHeading("Professional Summary");
  drawParagraph(
    "MCA graduate and aspiring Full Stack MERN Developer with hands-on experience in building responsive web applications using React.js, Redux Toolkit, Node.js, Express.js, and MongoDB. Proficient in REST API integration, state management, CRUD operations, and developing scalable, user-friendly applications."
  );

  // 2. WORK EXPERIENCE
  drawSectionHeading("Work Experience");
  page.drawText("Full Stack MERN Trainee", {
    x: margin,
    y: y - 11,
    size: 10.5,
    font: fontBold,
    color: primaryColor,
  });
  page.drawText("Noida", {
    x: width - margin - fontBold.widthOfTextAtSize("Noida", 10.5),
    y: y - 11,
    size: 10.5,
    font: fontBold,
    color: primaryColor,
  });
  y -= 14;
  page.drawText("AccioJob Skill Center", {
    x: margin,
    y: y - 9.5,
    size: 9.5,
    font: fontRegular,
    color: darkGray,
  });
  y -= 14;

  const expBullets = [
    "Completed hands-on training in Full Stack MERN Development, mastering core technologies.",
    "Built full-stack web applications utilizing React.js, Node.js, Express.js, and MongoDB.",
    "Developed responsive user interfaces with Tailwind CSS and Redux Toolkit, enhancing user experience.",
    "Designed and consumed REST APIs for seamless data integration.",
    "Utilized Git, GitHub, Postman, and deployment platforms to streamline development processes.",
    "Collaborated on real-world projects, ensuring adherence to clean coding practices.",
  ];
  expBullets.forEach((b) => drawBullet(b));

  // 3. EDUCATION
  drawSectionHeading("Education");

  // MCA
  page.drawText("Master of Computer Applications (MCA)", {
    x: margin,
    y: y - 10.5,
    size: 10,
    font: fontBold,
    color: primaryColor,
  });
  page.drawText("2023 \u2013 2025", {
    x: width - margin - fontBold.widthOfTextAtSize("2023 \u2013 2025", 10),
    y: y - 10.5,
    size: 10,
    font: fontBold,
    color: primaryColor,
  });
  y -= 13;
  page.drawText("Meerut Institute of Engineering and Technology", {
    x: margin,
    y: y - 9.5,
    size: 9.5,
    font: fontRegular,
    color: darkGray,
  });
  page.drawText("Meerut", {
    x: width - margin - fontRegular.widthOfTextAtSize("Meerut", 9.5),
    y: y - 9.5,
    size: 9.5,
    font: fontRegular,
    color: darkGray,
  });
  y -= 17;

  // BCA
  page.drawText("Bachelor of Computer Applications (BCA)", {
    x: margin,
    y: y - 10.5,
    size: 10,
    font: fontBold,
    color: primaryColor,
  });
  page.drawText("2020 \u2013 2023", {
    x: width - margin - fontBold.widthOfTextAtSize("2020 \u2013 2023", 10),
    y: y - 10.5,
    size: 10,
    font: fontBold,
    color: primaryColor,
  });
  y -= 13;
  page.drawText("Forte Institute of Technology", {
    x: margin,
    y: y - 9.5,
    size: 9.5,
    font: fontRegular,
    color: darkGray,
  });
  page.drawText("Meerut", {
    x: width - margin - fontRegular.widthOfTextAtSize("Meerut", 9.5),
    y: y - 9.5,
    size: 9.5,
    font: fontRegular,
    color: darkGray,
  });
  y -= 17;

  // 4. SKILLS
  drawSectionHeading("Skills");

  const skillRows = [
    { label: "Databases", val: "MongoDB, Mongoose" },
    { label: "Frameworks & Libraries", val: "React.js, Redux Toolkit, React Router, Axios" },
    { label: "Languages", val: "English, Hindi" },
    { label: "Programming Languages", val: "HTML5, CSS3, JavaScript (ES6+)" },
    { label: "Soft Skills", val: "Communication, Problem Solving, Adaptability" },
    { label: "Tools & Platforms", val: "Git, GitHub, Postman, VS Code, Vercel, Render" },
  ];

  skillRows.forEach((s) => {
    page.drawText(s.label, {
      x: margin,
      y: y - 9.5,
      size: 9.5,
      font: fontBold,
      color: primaryColor,
    });
    page.drawText(s.val, {
      x: margin + 140,
      y: y - 9.5,
      size: 9.5,
      font: fontRegular,
      color: darkGray,
    });
    y -= 13.5;
  });

  // 5. PROJECTS
  drawSectionHeading("Projects");

  // Project 1: Swaadly
  page.drawText("Swaadly \u2013 Food Delivery Application", {
    x: margin,
    y: y - 10,
    size: 10,
    font: fontBold,
    color: primaryColor,
  });
  y -= 13;
  [
    "Built a full-stack food delivery application using MongoDB, Express.js, React.js, and Node.js.",
    "Implemented user authentication, cart management, food listing, order placement, and admin dashboard.",
    "Developed secure REST APIs and integrated MongoDB for persistent data storage.",
    "Designed a responsive and user-friendly interface.",
  ].forEach((b) => drawBullet(b, 8.5, 12, 11.5));
  page.drawText("Tech Stack : ", {
    x: margin + 12,
    y: y - 8.5,
    size: 8.5,
    font: fontBold,
    color: primaryColor,
  });
  page.drawText("MongoDB, Express.js, React.js, Node.js, JavaScript, HTML, CSS", {
    x: margin + 12 + fontBold.widthOfTextAtSize("Tech Stack : ", 8.5),
    y: y - 8.5,
    size: 8.5,
    font: fontRegular,
    color: darkGray,
  });
  y -= 14;

  // Project 2: LMS
  page.drawText("Learning Management System", {
    x: margin,
    y: y - 10,
    size: 10,
    font: fontBold,
    color: primaryColor,
  });
  y -= 13;
  [
    "Developed a responsive LMS frontend using React.js with reusable and modular components.",
    "Implemented Context API for centralized state management and efficient data sharing across components.",
    "Used React Router DOM for client-side routing and seamless navigation between application pages.",
    "Designed a responsive and user-friendly interface using Tailwind CSS for desktop, tablet, and mobile devices.",
  ].forEach((b) => drawBullet(b, 8.5, 12, 11.5));
  page.drawText("Tech Stack : ", {
    x: margin + 12,
    y: y - 8.5,
    size: 8.5,
    font: fontBold,
    color: primaryColor,
  });
  page.drawText("React.js | Context API | React Router DOM | JavaScript | Tailwind CSS | HTML | CSS", {
    x: margin + 12 + fontBold.widthOfTextAtSize("Tech Stack : ", 8.5),
    y: y - 8.5,
    size: 8.5,
    font: fontRegular,
    color: darkGray,
  });
  y -= 14;

  // Project 3: HQMovies
  page.drawText("HQMovies", {
    x: margin,
    y: y - 10,
    size: 10,
    font: fontBold,
    color: primaryColor,
  });
  y -= 13;
  [
    "Developed a responsive movie browsing application using React.js and Redux Toolkit.",
    "Integrated REST APIs to display Trending, Popular, Top Rated, Upcoming movies and TV Shows.",
    "Implemented movie search, dynamic routing, reusable components, loading states, and responsive UI.",
    "Managed application state efficiently using Redux Toolkit.",
  ].forEach((b) => drawBullet(b, 8.5, 12, 11.5));
  page.drawText("Tech Stack : ", {
    x: margin + 12,
    y: y - 8.5,
    size: 8.5,
    font: fontBold,
    color: primaryColor,
  });
  page.drawText("React.js, Redux Toolkit, React Router, JavaScript, HTML, CSS, REST APIs", {
    x: margin + 12 + fontBold.widthOfTextAtSize("Tech Stack : ", 8.5),
    y: y - 8.5,
    size: 8.5,
    font: fontRegular,
    color: darkGray,
  });
  y -= 14;

  // 6. AWARDS & ACHIEVEMENTS
  drawSectionHeading("Awards & Achievements");
  drawBullet("Developed multiple React.js and MERN Stack projects.", 9, 12, 12);
  drawBullet("Demonstrated expertise in REST APIs, Redux Toolkit, and responsive web development.", 9, 12, 12);

  const pdfBytes = await pdfDoc.save();
  const targetDir = path.resolve("src/assets/files/cv_pdf");
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  const publicDir = path.resolve("public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(targetDir, "Tushar_Kumar_Resume.pdf"), pdfBytes);
  fs.writeFileSync(path.join(publicDir, "Tushar_Kumar_Resume.pdf"), pdfBytes);
  console.log("Resume PDF successfully generated!");
}

createResume().catch(console.error);
