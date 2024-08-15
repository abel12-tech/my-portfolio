import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="p-10 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Address</h3>
          <p>XYZ ST 128, IN</p>
          <p>myemail@codewave.com</p>
          <p>+11 234 567 987</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-500 dark:hover:text-blue-400">Home</a></li>
            <li><a href="#" className="hover:text-blue-500 dark:hover:text-blue-400">About</a></li>
            <li><a href="#" className="hover:text-blue-500 dark:hover:text-blue-400">Projects</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Social Media</h3>
          <div className="flex space-x-6">
            <a href="https://github.com/yourusername" className="hover:text-blue-500 dark:hover:text-blue-400">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/yourusername" className="hover:text-blue-500 dark:hover:text-blue-400">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="https://facebook.com/yourusername" className="hover:text-blue-500 dark:hover:text-blue-400">
              <FaFacebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
