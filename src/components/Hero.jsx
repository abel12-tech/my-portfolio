import { motion } from "framer-motion";
import myphoto from "../assets/me.jpeg";
import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiPython,
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiDocker,
  SiGit,
  SiLinux,
} from "react-icons/si";

export default function Hero() {
  const icons = [
    <SiHtml5 className="text-orange-500" />,
    <SiCss3 className="text-blue-500" />,
    <SiJavascript className="text-yellow-500" />,
    <SiReact className="text-blue-400" />,
    <SiPython className="text-blue-600" />,
    <SiMongodb className="text-green-500" />,
    <SiTypescript className="text-blue-600" />,
    <SiTailwindcss className="text-teal-500" />,
    <SiDocker className="text-blue-500" />,
    <SiGit className="text-red-500" />,
    <SiLinux className="text-black dark:text-white" />,
  ];

  const circleAnimation = {
    animate: {
      rotate: 360,
      scale: [1, 1.1, 1],
      transition: {
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between px-5 md:px-20 py-10 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 overflow-hidden">
      {/* Rotating Circular Icons around Text Section */}
      <div className="absolute inset-0 flex justify-between items-center">
        <motion.div
          className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px]"
          {...circleAnimation}
        >
          <div className="rounded-full absolute inset-0 flex justify-center items-center">
            {icons.map((icon, index) => (
              <motion.div
                key={index}
                className="absolute text-5xl md:text-6xl opacity-40"
                style={{
                  transform: `rotate(${index * (360 / icons.length)}deg) translate(170px) rotate(-${index * (360 / icons.length)}deg)`,
                }}
              >
                {icon}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Rotating Circular Icons with Larger Background around Image Section */}
        <motion.div
          className="relative w-[350px] h-[350px] md:w-[50px] md:h-[450px] lg:w-[450px] lg:h-[650px]"
          {...circleAnimation}
        >
          <div className="rounded-full absolute inset-0 flex justify-center items-center">
            <div className="absolute inset-0 rounded-full"></div>
            {icons.map((icon, index) => (
              <motion.div
                key={index}
                className="absolute text-5xl md:text-6xl opacity-60"
                style={{
                  transform: `rotate(${index * (360 / icons.length)}deg) translate(220px) rotate(-${index * (360 / icons.length)}deg)`,
                }}
              >
                {icon}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="md:w-2/3 lg:w-1/2 mx-auto mb-10 md:mb-0 z-10 text-center md:text-left">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delay: 0.3,
                staggerChildren: 0.05,
              },
            },
          }}
          className="text-4xl font-extrabold mb-4 font-sans bg-gradient-to-r from-yellow-500 via-blue-500 via-blue-400 via-orange-500 to-blue-500 text-transparent bg-clip-text"
        >
          {"Frontend Developer".split("").map((char, index) => (
            <motion.span key={index} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-6 text-lg font-medium font-sans"
        >
          Frontend Web Developer with the ability to learn and collaborate in rapidly changing environments and compositions.
        </motion.p>
        <motion.a
          href="/path-to-your-cv.pdf"
          whileHover={{ scale: 1.1 }}
          className="inline-block bg-gradient-to-r from-yellow-500 via-blue-500 via-blue-400 via-orange-500 to-blue-500 text-white px-6 py-2 rounded-lg shadow-lg"
          download
        >
          Download CV
        </motion.a>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="relative md:w-1/3 lg:w-1/4 w-2/3 z-10 mb-10 md:mb-0"
      >
        <div className="rounded-full overflow-hidden shadow-lg mx-auto">
          <img
            src={myphoto}
            alt="Developer"
            className="w-full h-full object-cover rounded-full border-8 border-yellow-500 dark:border-blue-500"
          />
        </div>
      </motion.div>
    </section>
  );
}
