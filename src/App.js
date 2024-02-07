import Hero from './components/Hero';
import Navbar from './components/Navbar';
import "./App.css"
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  function isInView(skills, Styles) {
    if (skills.current) {
      var distInView = skills.current.getBoundingClientRect().top - window.innerHeight + 20;
      if (distInView < 0) {
        skills.current.classList.add(Styles.inView);
      }
    }
  }
  return (
    <>
      <Navbar />
      <div className='container'>
        <Hero isInView={isInView} />
        <Skills isInView={isInView} />
        <Projects isInView={isInView} />
      </div>
    </>
  );
}

export default App;
