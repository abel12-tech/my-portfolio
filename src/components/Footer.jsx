import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="container mx-auto px-5 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-yellow-500">About Me</h2>
            <p className="text-sm text-gray-400">
              I'm Abel Kinfu, a Frontend Developer with a passion for creating engaging and innovative web experiences. I love to learn new technologies and improve my skills in web development.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-yellow-500">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-yellow-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-yellow-500 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-yellow-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-yellow-500 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-yellow-500">Connect with Me</h2>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="w-6 h-6 text-gray-400 hover:text-blue-500 transition-colors" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-6 h-6 text-gray-400 hover:text-blue-700 transition-colors" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-6 h-6 text-gray-400 hover:text-gray-100 transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Abel Kinfu. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
