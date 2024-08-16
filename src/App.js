import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200">
      <Navbar />
      <Hero />
      <Skills />
    </div>
  );
}

export default App;
