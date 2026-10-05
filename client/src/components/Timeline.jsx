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
    { title: "STAND OUT – FROM FEAR TO CONFIDENCE ", date: "19th Sep 2026", desc: "For 1st year students: An interactive group discussions and speaking activities to overcome stage fear. Build real confidence and sharpen essential communication skills." },
    { title: "Prep2Place – Skills to Carrer Volume 1.0", date: "21st Sep 2026", desc: "For 3rd year CHEM, AUTO, CIVIL, MECH, and MECHATRONICS students. A career guidance programme focused on freelancing, corporate opportunities, workplace culture, adaptability, and professional development." },
    { title: "Prep2Place – Skills to Carrer Volume 1.1", date: "21st Sep 2026", desc: "For 3rd year AI-ML, AI-DS, CSE, IT, EIE, EEE, ECE, and CSD students. A career guidance programme focused on freelancing, corporate opportunities, workplace culture, adaptability, and professional development." },
    { title: "EXODIA 2K26", date: "12th Oct 2026", desc: "An intra-college symposium featuring technical and non-technical events." },
    { title: "Event 05", date: "To Be Updated", desc: "Details coming soon." },
    { title: "Event 06", date: "To Be Updated", desc: "Details coming soon." },
    { title: "Event 07", date: "To Be Updated", desc: "Details coming soon." },
    { title: "Event 08", date: "To Be Updated", desc: "Details coming soon." },
    { title: "Event 09", date: "To Be Updated", desc: "Details coming soon." },
];

const Timeline = ({ selectedYear = "2025-26" }) => {
    const [hoveredIndex, setHoveredIndex] = React.useState(-1);
    const selectedEvents = selectedYear === "2026-27" ? placeholderEventsData : eventsData;

    const previewedIndex = hoveredIndex;
    const progressWidth = previewedIndex === -1
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

            <div className="timeline" onMouseLeave={() => setHoveredIndex(-1)}>
                <div className="timeline-progress" style={{ width: progressWidth }}></div>

                {selectedEvents.map((event, index) => (
                    <div
                        key={index}
                        className={`timeline-item ${previewedIndex === index ? 'timeline-item-active' : ''}`}
                        onMouseEnter={() => setHoveredIndex(index)}
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
