import { motion } from 'framer-motion';
import projectImage1 from '../assets/01 Dashboard _ Vertical 1.png';  
import projectImage2 from '../assets/06 Apps _ Calendar _ This Month 1.png';
import projectImage3 from '../assets/01 Dashboard _ Vertical 1.png';

const projects = [
  {
    title: "Project One",
    description: "A brief description of Project One.",
    image: projectImage1,
    link: "#",
  },
  {
    title: "Project Two",
    description: "A brief description of Project Two.",
    image: projectImage2,
    link: "#",
  },
  {
    title: "Project Three",
    description: "A brief description of Project Three.",
    image: projectImage3,
    link: "#",
  },
];

export default function Projects() {
  return (
    <section className="relative w-full px-5 md:px-20 py-10 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-4xl font-bold mb-10 text-center z-10 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-400 text-transparent bg-clip-text"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 1 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <a
                href={project.link}
                className="inline-block bg-gradient-to-r from-yellow-500 via-blue-500 via-blue-400 via-orange-500 to-blue-500 text-white px-4 py-2 rounded-lg shadow-lg"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
