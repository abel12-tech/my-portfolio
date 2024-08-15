import Slider from "react-slick";
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Cryptography Dashboard",
    description: "A dashboard for monitoring cryptography algorithms and encryption techniques.",
    image: "/path-to-project-image1.jpg",
    link: "#"
  },
  {
    title: "Blockchain Explorer",
    description: "A tool to explore blockchain transactions and blocks.",
    image: "/path-to-project-image2.jpg",
    link: "#"
  },
  {
    title: "Secure Messaging App",
    description: "A messaging app with end-to-end encryption.",
    image: "/path-to-project-image3.jpg",
    link: "#"
  },
  // Add more projects here
];

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="p-10 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className="p-4"
          >
            <div className="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <a href={project.link} className="text-blue-500 dark:text-blue-400 hover:underline">View Project</a>
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>
    </section>
  );
}
