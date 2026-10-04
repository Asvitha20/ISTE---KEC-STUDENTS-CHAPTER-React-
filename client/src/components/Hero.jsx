import React from 'react';
import heroVideo from '../assets/videos/hero.mp4';

const Hero = () => {
    const [videoLoaded, setVideoLoaded] = React.useState(false);

    return (
        <section id="home" className="hero d-flex align-items-center justify-content-center text-center">
            {!videoLoaded && (
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#1a1a1a',
                    zIndex: 0
                }}>
                </div>
            )}

            <video
                className={`hero-video ${videoLoaded ? 'fade-in' : 'opacity-0'}`}
                autoPlay
                muted
                loop
                playsInline
                onLoadedData={() => setVideoLoaded(true)}
                style={{ transition: 'opacity 1s ease-in-out', opacity: videoLoaded ? 1 : 0 }}
            >
                <source src={heroVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="hero-overlay"></div>

            <div className="container hero-content reveal">
                <span className="hero-label d-block mb-3">Welcome To</span>
                <h1 className="display-1 fw-bold mb-4">ISTE - KEC <span>STUDENT CHAPTER</span></h1>
                <p className="lead text-light mb-5 mx-auto" style={{ maxWidth: '700px' }}>
                    Kongu Engineering College - Fostering innovation, leadership, and technical excellence.
                </p>
                <div className="d-flex justify-content-center gap-3">
                    <a href="/events/exodia" className="btn btn-primary btn-lg rounded-pill px-5">Register for EXODIA</a>
                    <a href="#events" className="btn btn-outline-light btn-lg rounded-pill px-5">Upcoming Events</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
