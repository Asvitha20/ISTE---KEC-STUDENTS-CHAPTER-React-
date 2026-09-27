import React from 'react';
import kecLogo from '../assets/images/kec_logo.jpg';
import isteLogo from '../assets/images/favicon.png';

const Navbar = ({ selectedYear, onTeamYearChange }) => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-white border-bottom shadow-sm">
            <div className="container-fluid container-xl">
                <a className="navbar-brand d-flex align-items-center gap-2" href="#">
                    <img
                        src={kecLogo}
                        alt="KEC Logo"
                        className="nav-logo-img"
                    />
                    <img
                        src={isteLogo}
                        alt="KEC-ISTE Logo"
                        className="nav-logo-img iste-logo"
                    />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav align-items-center gap-3 mt-3 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#team"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Team
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                    <a
                                        className="dropdown-item"
                                        href="#team"
                                        onClick={() => onTeamYearChange("2025-26")}
                                    >
                                        2025-26{selectedYear === "2025-26" ? " ✓" : ""}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item"
                                        href="#team"
                                        onClick={() => onTeamYearChange("2026-27")}
                                    >
                                        2026-27{selectedYear === "2026-27" ? " ✓" : ""}
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#events">Events</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#gallery">Gallery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-btn" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
