import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen overflow-x-hidden bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Skills />
                <Projects />
                <Footer />
              </>
            }
          />
          <Route
            path="/blog"
            element={
              <>
                <Blog /> <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
