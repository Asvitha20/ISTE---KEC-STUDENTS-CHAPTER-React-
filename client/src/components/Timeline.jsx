import React from 'react';
import '../styles/timeline.css';

const eventsData = [
    { title: "Inaugural", date: "2nd Aug 2025", desc: "Official inauguration of the ISTE Student Chapter. Join us as we kickstart a year of innovation and learning." },
    { title: "PREP2PLACE – UNLOCK YOUR CAREER VOLUME 1.0", date: "7th Aug 2025", desc: "(For AI, AUTO, ECE, EEE, EIE)\nA Guidance Programme by the seniors and the one to one interaction between senior and junior." },
    { title: "Prep2place – Unlock Your Carrer (1.1)", date: "13th Aug 2025", desc: "(For CSD, CSE, IT, MECHNICAL, MECHATRONICS, CIVIL)\nA Guidance Programme by the seniors and the one to one interaction between senior and junior." },
    { title: "Prep2place – Unlock Your Carrer Volume 1.2", date: "29th & 30th Aug 2025", desc: "An Frontend and Backend Workshop to get hands-on experience in developing and deploying an website by the seniors" },
    { title: "Prep2place – Unlock Your Carrer Volume 1.3", date: "2nd Sep 2025", desc: "(For EEE, ECE and EIE)\nA Guidance Programme by the seniors and the one to one interaction between senior and junior." },
    { title: "EXODIA 2K25 - An 30 Hours Hackathon", date: "Sep 27-28, 2025", desc: "A thrilling 30-hour non-stop hackathon challenging participants to solve real-world problems. Collaborate, innovate, and code your way to victory while showcasing your technical prowess." },
    { title: "EXODIA 2K25 - Intra College Symposium", date: "3rd Jan 2026", desc: "An Intra College Symposium featuring a series of technical and non-technical events. A platform to exhibit talents, compete, and learn from the best minds in the college." },
    { title: "Nexodus'2k26", date: "21st Feb 2026", desc: "An Event Symposium which is Exclusive only for First years. Featuring a series of technical and non-technical events. A platform to exhibit talents, compete, and learn from the best minds in the college." },
    { title: "AVENTURO 2K26 - An Inter-college National level Symposium", date: "Coming Soon", desc: "Get ready for the grandest event of the year! A national-level platform to showcase your technical prowess, network with peers from across the country, and participate in exciting workshops and competitions." },
];

const placeholderEventsData = [
    { title: "STAND OUT", date: "19th Sep 2026", desc: "Details coming soon." },
    { title: "Prep2Place – Skills to Carrer Volume 1.0", date: "21st Sep 2026", desc: "Details coming soon." },
    { title: "Prep2Place – Skills to Carrer Volume 1.1", date: "21st Sep 2026", desc: "Details coming soon." },
    { title: "EXODIA 2K26", date: "12th Oct 2026", desc: "Details coming soon." },
    { title: "Event 05", date: "To Be Updated", desc: "Details coming soon." },
    { title: "Event 06", date: "To Be Updated", desc: "Details coming soon." },
    { title: "Event 07", date: "To Be Updated", desc: "Details coming soon." },
    { title: "Event 08", date: "To Be Updated", desc: "Details coming soon." },
    { title: "Event 09", date: "To Be Updated", desc: "Details coming soon." },
];

const Timeline = ({ selectedYear = "2025-26", activeEventIndex = null, onEventClick, exodiaActivated = false }) => {
    const [hoveredIndex, setHoveredIndex] = React.useState(-1);
    const selectedEvents = selectedYear === "2026-27" ? placeholderEventsData : eventsData;

    // Calculate width: (Index + 0.5) / Total Items * 100%
    const previewedIndex = activeEventIndex !== null ? activeEventIndex : hoveredIndex;
    const progressWidth = previewedIndex === -1 || previewedIndex === null
        ? '0%'
        : `${((previewedIndex + 0.5) / selectedEvents.length) * 100}%`;

    return (
        <section id="events" className="events-section">
            <div className="section-header text-center mb-5 reveal">
                <div className="container">
                    <h2 className="display-5 fw-bold text-white">EVENTS TIMELINE</h2>
                    <p className="text-secondary">A journey through our milestones and upcoming activities.</p>
                </div>
            </div>

            {/* Removed scroll container for overlay effect */}
            <div className="timeline" onMouseLeave={() => setHoveredIndex(-1)}>
                {/* The line is handled by .timeline::after in CSS */}
                <div className="timeline-progress" style={{ width: progressWidth }}></div>

                {selectedEvents.map((event, index) => (
                    <div
                        key={index}
                        className={`timeline-item reveal ${previewedIndex === index ? 'timeline-item-active' : ''} ${index === 3 && exodiaActivated ? 'exodia-event-ready' : ''}`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onClick={() => onEventClick?.(index)}
                        role={index === 3 && exodiaActivated ? "button" : undefined}
                        tabIndex={index === 3 && exodiaActivated ? 0 : undefined}
                        onKeyDown={(e) => {
                            if (index === 3 && exodiaActivated && (e.key === 'Enter' || e.key === ' ')) {
                                e.preventDefault();
                                onEventClick?.(index);
                            }
                        }}
                    >
                        <div className="content transition-hover">
                            <h2 className="h4">{event.title}</h2>
                            <span className="date">{event.date}</span>
                            <p>{event.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Timeline;
