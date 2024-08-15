import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-y-auto bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200">
      <Navbar />
      <Hero />
      <Skills />
      {/* <Projects />
      <ContactMe />
      <Footer /> */}
    </div>
  );
}

export default App;
