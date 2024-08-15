import { motion } from 'framer-motion';
import { SiJavascript, SiReact,  SiHtml5, SiCss3, SiPython, SiMongodb, SiTypescript } from 'react-icons/si';

const skills = [
  { name: 'HTML', percent: 90, icon: <SiHtml5 className="text-orange-500 w-8 h-8" /> },
  { name: 'CSS', percent: 85, icon: <SiCss3 className="text-blue-500 w-8 h-8" /> },
  { name: 'JavaScript', percent: 80, icon: <SiJavascript className="text-yellow-500 w-8 h-8" /> },
  { name: 'React', percent: 70, icon: <SiReact className="text-blue-500 w-8 h-8" /> },
  { name: 'TypeScript', percent: 65, icon: <SiTypescript className="text-blue-600 w-8 h-8" /> },
  { name: 'Python', percent: 75, icon: <SiPython className="text-blue-400 w-8 h-8" /> },
  { name: 'MongoDB', percent: 60, icon: <SiMongodb className="text-green-600 w-8 h-8" /> },
];

export default function Skills() {
  return (
    <section className="p-10 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: index * 0.2 }} 
            className="mb-4 flex items-center"
          >
            <div className="flex items-center space-x-3">
              {skill.icon}
              <h3 className="">{skill.name}</h3>
            </div>
            <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2.5 ml-4">
              <div 
                className="bg-blue-500 dark:bg-blue-700 h-2.5 rounded-full" 
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
