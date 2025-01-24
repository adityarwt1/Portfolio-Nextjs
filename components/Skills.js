import React from "react";
import Image from "next/image";

function Skills() {
  const skills = [
    { name: "JavaScript", color: "text-yellow-400", logo: "/logos/javascript.svg", certificate: "Certificate from KG Coding" },
    { name: "React.js", color: "text-blue-400", logo: "/logos/react.svg", certificate: "React.js Mastery" },
    { name: "Next.js", color: "text-white", logo: "/logos/nextjs.svg", certificate: "Next.js Developer" },
    { name: "Node.js", color: "text-green-500", logo: "/logos/node.svg", certificate: "Node.js Proficiency" },
    { name: "Express.js", color: "text-gray-300", logo: "/logos/express.svg", certificate: "Express.js Fundamentals" },
    { name: "MongoDB", color: "text-green-400", logo: "/logos/mongodb.svg", certificate: "MongoDB Specialist" },
    { name: "Tailwind CSS", color: "text-teal-400", logo: "/logos/tailwind.svg", certificate: "Tailwind CSS Mastery" },
    { name: "HTML5", color: "text-orange-500", logo: "/logos/html.svg", certificate: "HTML5 Certification" },
    { name: "CSS3", color: "text-blue-500", logo: "/logos/css.svg", certificate: "CSS3 Expert" },
    { name: "Git", color: "text-red-500", logo: "/logos/git.svg", certificate: "Git Proficiency" },
    { name: "GitHub", color: "text-red-500", logo: "/logos/github.svg", certificate: "GitHub Remote" },
    { name: "Vercel", color: "text-red-500", logo: "/logos/vercel.svg", certificate: "Vercel Deployment" }
  ];

  return (
    <section className="w-full min-h-screen bg-black flex flex-col items-center justify-center py-10">
      <h1 className="text-white text-4xl sm:text-5xl font-bold mb-10 glow-effect text-center">
        My Skills & Expertise
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-6 max-w-screen-xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group relative bg-[#1e1e1e] p-4 sm:p-6 rounded-lg border-2 border-transparent hover:border-gray-600 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            {/* Skill Icon */}
            <div className="flex items-center justify-center mb-4">
              <Image
                src={skill.logo}
                alt={skill.name}
                width={80}
                height={80}
                className="mx-auto mb-4 rounded-md transition-all duration-300 ease-in-out"
              />
            </div>
            
            {/* Skill Name */}
            <h2 className={`text-center text-lg sm:text-xl font-semibold ${skill.color} transition-all duration-300 ease-in-out`}>
              {skill.name}
            </h2>

            {/* Certificate Tooltip */}
            <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center text-center text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <span className="text-lg sm:text-xl font-bold">{skill.certificate}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
