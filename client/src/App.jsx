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
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Custom Styles
import './styles/main.css';
import './styles/landing.css';

const ExodiaEventPage = () => (
  <div className="exodia-event-page">
    <div className="exodia-page-brush exodia-page-brush-green"></div>
    <div className="exodia-page-brush exodia-page-brush-blue"></div>
    <div className="exodia-page-content">
      <span>ISTE - KEC • SPECIAL NOTICE</span>
      <h1>EXODIA</h1>
      <p>Event 04</p>
      <button
        type="button"
        className="btn btn-primary rounded-pill"
        onClick={() => { window.location.href = '/'; }}
      >
        Back to Home
      </button>
    </div>
  </div>
);

function App() {
  const [selectedTeamYear, setSelectedTeamYear] = React.useState("2026-27");
  const [selectedEventsYear, setSelectedEventsYear] = React.useState("2026-27");
  const [exodiaActivated, setExodiaActivated] = React.useState(false);
  const [activeEventIndex, setActiveEventIndex] = React.useState(null);

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

  const handleExodiaClick = () => {
    setExodiaActivated(true);
    setActiveEventIndex(3);

    window.setTimeout(() => {
      document.getElementById('events')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 0);
  };

  const handleEventClick = (index) => {
    if (index === 3 && exodiaActivated) {
      window.location.href = '/events/exodia';
    }
  };

  if (window.location.pathname === '/events/exodia') {
    return <ExodiaEventPage />;
  }

  return (
    <div className="App">
      <Navbar
        selectedYear={selectedTeamYear}
        onTeamYearChange={setSelectedTeamYear}
        selectedEventsYear={selectedEventsYear}
        onEventsYearChange={setSelectedEventsYear}
        onExodiaClick={handleExodiaClick}
      />
      <main>
        <Hero />
        <About />
        <Team selectedYear={selectedTeamYear} />
        <Timeline
          selectedYear={selectedEventsYear}
          activeEventIndex={activeEventIndex}
          onEventClick={handleEventClick}
          exodiaActivated={exodiaActivated}
        />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
