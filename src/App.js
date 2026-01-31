import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./App.css";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ContactMe from "./components/ContactMe";
import { Toaster } from "react-hot-toast";
import WorkExperience from "./components/WorkExperience";
import Resume from "./components/Resume";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  function isInView(skills, Styles) {
    if (skills.current) {
      var distInView =
        skills.current.getBoundingClientRect().top - window.innerHeight + 100;
      if (distInView < 0) {
        skills.current.classList.add(Styles.inView);
      }
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <Toaster position="top-center" reverseOrder={false} />
              <Navbar />
              <div className="container">
                <Hero isInView={isInView} />
                <Skills isInView={isInView} />
                <WorkExperience />
                <Projects isInView={isInView} />
                <ContactMe isInView={isInView} />
              </div>
              <Resume />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
