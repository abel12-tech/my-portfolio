import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { SiJavascript, SiReact, SiHtml5, SiCss3, SiPython, SiMongodb, SiTypescript } from 'react-icons/si';

const skills = [
  { name: 'HTML', percent: 100, icon: <SiHtml5 className="text-orange-500 w-8 h-8" /> },
  { name: 'CSS', percent: 100, icon: <SiCss3 className="text-blue-500 w-8 h-8" /> },
  { name: 'JavaScript', percent: 90, icon: <SiJavascript className="text-yellow-500 w-8 h-8" /> },
  { name: 'React', percent: 90, icon: <SiReact className="text-blue-500 w-8 h-8" /> },
  { name: 'TypeScript', percent: 80, icon: <SiTypescript className="text-blue-600 w-8 h-8" /> },
  { name: 'Python', percent: 70, icon: <SiPython className="text-blue-400 w-8 h-8" /> },
  { name: 'MongoDB', percent: 90, icon: <SiMongodb className="text-green-600 w-8 h-8" /> },
];

export default function Skills() {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [500, 1000], [-100, 0]);

  return (
    <section className="relative w-full px-5 md:px-20 py-10 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 flex justify-center items-center"
        style={{ y }}
      >
        <div className="flex items-center space-x-32">
          <span className="text-[25rem] font-bold text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text dark:hidden">
            {"{"}
          </span>
          <span className="text-[25rem] font-bold text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text dark:hidden">
            {"}"}
          </span>
          <span className="text-[25rem] font-bold text-transparent bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text hidden dark:block">
            {"{"}
          </span>
          <span className="text-[25rem] font-bold text-transparent bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text hidden dark:block">
            {"}"}
          </span>
        </div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-4xl font-bold mb-10 text-center z-10 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-400 text-transparent bg-clip-text"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 1 }}
            className="flex flex-col items-center space-y-4"
          >
            <div className="flex items-center space-x-3">
              {skill.icon}
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </div>
            <div className="relative w-full h-8 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full flex items-center justify-center relative"
                style={{
                  backgroundColor: skill.icon.props.className.split(' ')[0].split('-')[1],
                  width: `${skill.percent}%`
                }}
                initial={{ width: 0 }}
                animate={{ width: `${skill.percent}%` }}
                transition={{ delay: 0.5, duration: 1.5 }}
              >
                <motion.span
                  className="absolute left-0 pl-2"
                  animate={{
                    x: [0, 15, -15, 0],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "mirror",
                    },
                  }}
                >
                  {skill.icon}
                </motion.span>
                <span className="font-bold text-white text-sm ml-auto pr-2">
                  {`${skill.percent}%`}
                </span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
