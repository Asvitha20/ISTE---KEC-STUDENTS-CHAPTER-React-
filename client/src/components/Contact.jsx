import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="contact-section py-5">
            <div className="container py-5">
                <div className="section-header text-center mb-5 reveal">
                    <h2 className="display-5 fw-bold text-white">Contact Us</h2>
                    <p className="text-secondary">Connect with our team for any queries.</p>
                </div>

                {/* Faculty Coordinators */}
                <div className="row justify-content-center g-4 mb-5 reveal">
                    <h3 className="text-center text-primary mb-4 h4 text-uppercase tracking-wide">Faculty Coordinators</h3>
                    <div className="col-md-5">
                        <div className="contact-card p-4 rounded-4 bg-dark border border-secondary text-center h-100 placeholder-wave">
                            <div className="mb-3">
                                <i className='bx bxs-user-circle fs-1 text-white opacity-50'></i>
                            </div>
                            <h4 className="text-white h5 fw-bold mb-1">Dr.P.RAVICHANDRAN ME.,Ph.D.</h4>
                            <p className="text-secondary small text-uppercase mb-3 fw-bold">Faculty Coordinator</p>
                            <div className="d-flex justify-content-center gap-3 text-white small">
                                <span><i className='bx bxs-phone text-primary'></i> +91 99659 98989</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="contact-card p-4 rounded-4 bg-dark border border-secondary text-center h-100 placeholder-wave">
                            <div className="mb-3">
                                <i className='bx bxs-user-circle fs-1 text-white opacity-50'></i>
                            </div>
                            <h4 className="text-white h5 fw-bold mb-1">Mr. A. Ganesh M.Tech</h4>
                            <p className="text-secondary small text-uppercase mb-3 fw-bold">Faculty Coordinator</p>
                            <div className="d-flex justify-content-center gap-3 text-white small">
                                <span><i className='bx bxs-phone text-primary'></i> +91 95785 05841</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Student Coordinators */}
                <div className="row justify-content-center g-4 reveal">
                    <h3 className="text-center text-primary mb-4 h4 text-uppercase tracking-wide">Student Coordinators</h3>
                    <div className="col-md-4">
                        <div className="contact-card p-4 rounded-4 bg-dark border border-secondary text-center h-100 placeholder-wave">
                            <div className="mb-3">
                                <i className='bx bxs-user fs-1 text-white opacity-50'></i>
                            </div>
                            <h4 className="text-white h5 fw-bold mb-1">Ms. SAHANA VARSINI S S</h4>
                            <p className="text-secondary small text-uppercase mb-3 fw-bold">Chairperson</p>
                            <div className="d-flex flex-column gap-2 text-white small">
                                <span><i className='bx bxs-phone text-primary'></i> +91 94422 67643</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="contact-card p-4 rounded-4 bg-dark border border-secondary text-center h-100 placeholder-wave">
                            <div className="mb-3">
                                <i className='bx bxs-user fs-1 text-white opacity-50'></i>
                            </div>
                            <h4 className="text-white h5 fw-bold mb-1">Mr. KIRUTHITK R</h4>
                            <p className="text-secondary small text-uppercase mb-3 fw-bold">Secretary</p>
                            <div className="d-flex flex-column gap-2 text-white small">
                                <span><i className='bx bxs-phone text-primary'></i> +91 95974 24158</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="contact-card p-4 rounded-4 bg-dark border border-secondary text-center h-100 placeholder-wave">
                            <div className="mb-3">
                                <i className='bx bxs-user fs-1 text-white opacity-50'></i>
                            </div>
                            <h4 className="text-white h5 fw-bold mb-1">Mr. MUKESH G E</h4>
                            <p className="text-secondary small text-uppercase mb-3 fw-bold">Treasurer</p>
                            <div className="d-flex flex-column gap-2 text-white small">
                                <span><i className='bx bxs-phone text-primary'></i> +91 95665 43907</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
