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
    <SiLinux className="text-black" />,
  ];

  const iconPositions = [
    { top: "10%", left: "10%" },
    { top: "10%", left: "80%" },
    { top: "40%", left: "15%" },
    { top: "60%", left: "70%" },
    { top: "75%", left: "25%" },
    { top: "85%", left: "85%" },
    { top: "15%", left: "60%" },
    { top: "50%", left: "50%" },
    { top: "70%", left: "15%" },
    { top: "90%", left: "70%" },
    { top: "80%", left: "40%" },
  ];

  const iconAnimation = {
    animate: {
      scale: [1.5, 1.2, 1.5],
      opacity: [0.6, 0.8, 0.6],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };

  const textAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        staggerChildren: 0.05,
      },
    },
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between px-5 md:px-20 py-10 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 overflow-hidden">
      {/* Clustered Programming Language Icons in Background */}
      <div className="absolute inset-0">
        {icons.map((icon, index) => (
          <motion.div
            key={index}
            className="text-6xl opacity-20"
            style={{
              position: "absolute",
              ...iconPositions[index],
            }}
            {...iconAnimation}
          >
            {icon}
          </motion.div>
        ))}
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 mb-10 md:mb-0 z-10 text-center md:text-left">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          className="text-4xl font-extrabold mb-4 font-sans bg-gradient-to-r from-yellow-500 via-blue-500 via-blue-400 via-orange-500 to-blue-500 text-transparent bg-clip-text"
        >
          {"Frontend Developer".split("").map((char, index) => (
            <motion.span key={index} variants={letterAnimation}>
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
          Frontend Web Developer with the ability to learn and collaborate in
          rapidly changing environments and compositions.
        </motion.p>
        <motion.a
          href="/path-to-your-cv.pdf" // Change this to the correct path for your CV
          whileHover={{ scale: 1.1 }}
          className="inline-block bg-gradient-to-r from-yellow-500 via-blue-500 via-blue-400 via-orange-500 to-blue-500 text-white px-6 py-2 rounded-lg shadow-lg"
          download
        >
          Download CV
        </motion.a>
      </div>

      {/* Circular Image Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="relative md:w-1/3 w-2/3 z-10 mb-10 md:mb-0"
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
