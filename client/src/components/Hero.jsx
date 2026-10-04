import React from 'react';
import heroImage from '../assets/images/hero.jpg';

const Hero = () => {
    return (
        <section
            id="home"
            className="hero d-flex align-items-center justify-content-center text-center"
            style={{
                backgroundImage: `url(${heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="hero-overlay"></div>

            <div className="container hero-content reveal">
                <span className="hero-label d-block mb-3">Welcome To</span>

                <h1 className="display-1 fw-bold mb-4">
                    ISTE - KEC <span>STUDENT CHAPTER</span>
                </h1>

                <p className="lead text-light mb-5 mx-auto" style={{ maxWidth: '700px' }}>
                    Kongu Engineering College - Fostering innovation, leadership, and technical excellence.
                </p>

                <div className="d-flex justify-content-center gap-3">
                    <a
                        href="/events/exodia"
                        className="btn btn-primary btn-lg rounded-pill px-5"
                    >
                        Register for EXODIA
                    </a>

                    <a
                        href="#events"
                        className="btn btn-outline-light btn-lg rounded-pill px-5"
                    >
                        Upcoming Events
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;