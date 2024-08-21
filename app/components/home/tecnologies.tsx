import React from "react";

type Technology = {
  name: string;
  icon: string;
  category: string;
};

const dummyTechnologies: Technology[] = [
  { name: "HTML", icon: "html5.svg", category: "Frontend" },
  { name: "CSS", icon: "css3.svg", category: "Frontend" },
  { name: "Javascript", icon: "javascript.svg", category: "Frontend" },
  { name: "Bootstrap", icon: "bootstrap.svg", category: "Frontend" },
  { name: "TailwindCSS", icon: "tailwindcss.svg", category: "Frontend" },
  { name: "React", icon: "react.svg", category: "Frontend" },
  { name: "Alpine.js", icon: "alpinejs.svg", category: "Frontend" },
  { name: "Next.js", icon: "nextjs.svg", category: "Frontend" },
  { name: "Bulma", icon: "bulma.svg", category: "Frontend" },
  { name: "Framer Motion", icon: "framer-motion.svg", category: "Frontend" },
  { name: "Node.js", icon: "nodejs.svg", category: "Backend" },
  { name: "PHP", icon: "php.svg", category: "Backend" },
  { name: "Express", icon: "express.svg", category: "Backend" },
  { name: "C#", icon: "csharp.svg", category: "Backend" },
  { name: "MongoDB", icon: "mongodb.svg", category: "Database" },
  { name: "MySQL", icon: "mysql.svg", category: "Database" },
  { name: "Git", icon: "git.svg", category: "Tools" },
  { name: "Yarn", icon: "yarn.svg", category: "Tools" },
  { name: "Heroku", icon: "heroku.svg", category: "Tools" },
  { name: "Github", icon: "github.svg", category: "Tools" },
  { name: "Illustrator CC", icon: "illustrator.svg", category: "Design" },
  { name: "Photoshop CC", icon: "photoshop.svg", category: "Design" },
  { name: "Corel Draw", icon: "coreldraw.svg", category: "Design" },
];

const Tecnologies: React.FC<{ technologies?: Technology[] }> = ({
  technologies = dummyTechnologies,
}) => {
  return (
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Technologies I Use
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex items-center"
            >
              {/* Replace with actual SVG icons */}
              <img
                src={`/images/${tech.icon}`}
                alt={tech.name}
                className="w-8 h-8 mr-4"
              />
              <span className="text-lg font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tecnologies;
