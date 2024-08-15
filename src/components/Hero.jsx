import { motion } from "framer-motion";
import myphoto from "../assets/me.jpeg";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-10 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="md:w-1/2">
        <motion.h1
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="text-4xl font-bold mb-4"
        >
          I'm a Frontend Developer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-6"
        >
          Frontend Web Developer with the ability to learn and collaborate in
          rapidly changing environments and compositions.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-blue-500 dark:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-lg"
        >
          Hire Me
        </motion.button>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="md:w-1/3"
      >
        <img
          src={myphoto}
          alt="Developer"
          className="rounded-lg shadow-lg dark:shadow-cyan-500/50"
        />
      </motion.div>
    </section>
  );
}
