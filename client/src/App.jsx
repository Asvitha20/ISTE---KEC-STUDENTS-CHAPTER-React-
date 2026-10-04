import React, { useEffect } from 'react';

// Import Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ExodiaEvent from './components/ExodiaEvent';

// Import Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Custom Styles
import './styles/main.css';
import './styles/landing.css';

function App() {
  const [selectedTeamYear, setSelectedTeamYear] = React.useState("2026-27");
  const [selectedEventsYear, setSelectedEventsYear] = React.useState("2026-27");

  useEffect(() => {
    const reveal = () => {
      var reveals = document.querySelectorAll('.reveal');

      for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
          reveals[i].classList.add('active');
        } else {
          reveals[i].classList.remove('active');
        }
      }
    };

    window.addEventListener('scroll', reveal);
    reveal();

    return () => window.removeEventListener('scroll', reveal);
  }, []);

  if (window.location.pathname === '/events/exodia') {
    return <ExodiaEvent />;
  }

  return (
    <div className="App">
      <Navbar
        selectedYear={selectedTeamYear}
        onTeamYearChange={setSelectedTeamYear}
        selectedEventsYear={selectedEventsYear}
        onEventsYearChange={setSelectedEventsYear}
      />
      <main>
        <Hero />
        <About />
        <Team selectedYear={selectedTeamYear} />
        <Timeline selectedYear={selectedEventsYear} />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
