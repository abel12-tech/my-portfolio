import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import blogImage1 from "../assets/01 Dashboard _ Vertical 1.png";
import blogImage2 from "../assets/06 Apps _ Calendar _ This Month 1.png";
import blogImage3 from "../assets/01 Dashboard _ Vertical 1.png";
const blogPosts = [
  {
    title: "The Future of Web Development",
    description:
      "Explore the latest trends and technologies shaping the future of web development.",
    image: blogImage1,
    link: "#",
  },
  {
    title: "Understanding React Hooks",
    description:
      "A deep dive into React Hooks and how they can simplify your code.",
    image: blogImage2,
    link: "#",
  },
  {
    title: "CSS Grid vs Flexbox: Which One to Use?",
    description:
      "A comprehensive comparison between CSS Grid and Flexbox, and when to use each.",
    image: blogImage3,
    link: "#",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen px-5 md:px-20 py-10 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Breadcrumb */}
      <nav className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-8">
        <Link
          to="/"
          className="hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800 dark:text-gray-200">Blog</span>
      </nav>

      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-extrabold mb-10 text-center bg-gradient-to-r from-yellow-500 via-blue-500 to-yellow-400 text-transparent bg-clip-text"
      >
        Welcome to My Blog
      </motion.h1>

      {/* Blog Post Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-bold mb-2">{post.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {post.description}
              </p>
              <a
                href={post.link}
                className="text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-800 dark:hover:text-blue-600 transition-colors"
              >
                See More →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
