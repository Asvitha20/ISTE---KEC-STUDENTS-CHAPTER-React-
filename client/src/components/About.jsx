import React from 'react';
import heroImage from '../assets/images/hero.jpg';
import isteLogo from '../assets/images/ISTE.png';

const About = () => {
    return (
        <section id="about" className="about-section py-5">
            <div className="container py-5">
                <div className="section-header text-center mb-5 reveal">
                    <h2 className="display-5 fw-bold text-white">About Us</h2>
                    <p className="text-secondary">Who we are and what we stand for.</p>
                </div>

                <div className="row align-items-center gy-5 reveal">
                    <div className="col-lg-6">
                        <div className="about-img position-relative">
                            <img
                                src={isteLogo}
                                alt="ISTE Logo"
                                className="img-fluid"
                            />
                        </div>

                        <div className="about-recognition">
                            <div className="about-recognition-mark">
                                <span className="about-recognition-icon">✦</span>
                                <span>RECOGNITION</span>
                            </div>

                            <div className="about-recognition-content">
                                <div className="about-recognition-copy">
                                    <span className="about-recognition-label">PROUD MOMENT</span>
                                    <h3>Best Society Award</h3>
                                    <span className="about-recognition-event">ANNUAL DAY 2K26</span>
                                    <p>Honoured with the Best Society Award at Annual Day 2K26 for our commitment to excellence, student development, and impactful initiatives.</p>
                                </div>

                                <div className="about-recognition-image">
                                    <img src={heroImage} alt="Best Society Award recognition" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content ps-lg-4">
                            <h3 className="h2 text-primary mb-4">Empowering Future Engineers</h3>
                            <p className="text-secondary mb-4 lead">
                                The Indian Society for Technical Education (ISTE) is the leading National Professional non-profit
                                making Society for the Technical Education System in our country. We operate with the motto of
                                Career Development of Teachers and Personality Development of Students.
                            </p>
                            <p className="text-secondary mb-5">
                                ISTE-KEC provides students with opportunities to develop their technical knowledge, professional skills,
                                leadership qualities, and innovative thinking through a wide range of academic and co-curricular activities.
                            </p>
                            <a href="#team" className="btn btn-outline-primary rounded-pill px-4">Meet Our Team</a>

                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
