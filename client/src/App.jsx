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

// Import Styles
// Bootstrap is expected to be loaded in main.jsx or via CDN in index.html, 
// but we can import it here if we install it. 
// For now, we assume the user will install bootstrap or we'll add it to main.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Custom Styles
import './styles/main.css';  // The api/static/css/main.css
import './styles/landing.css'; // The extracted inline styles

function App() {
  const [selectedTeamYear, setSelectedTeamYear] = React.useState("2025-26");
  const [selectedEventsYear, setSelectedEventsYear] = React.useState("2025-26");


  // Scroll Reveal Logic
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

    // Trigger once on mount
    reveal();

    return () => window.removeEventListener('scroll', reveal);
  }, []);

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
