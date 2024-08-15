import { motion } from 'framer-motion';

export default function ContactMe() {
  return (
    <section className="p-10 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
      <motion.form 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.2 }}
        className="space-y-6 max-w-lg mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 text-gray-600 dark:text-gray-400">Name</label>
            <input 
              type="text" 
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-600 dark:text-gray-400">Email</label>
            <input 
              type="email" 
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            />
          </div>
        </div>
        <div>
          <label className="block mb-2 text-gray-600 dark:text-gray-400">Message</label>
          <textarea 
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            rows="5"
          ></textarea>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          className="w-full p-3 bg-blue-500 dark:bg-blue-700 text-white rounded-lg shadow-lg"
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
}
