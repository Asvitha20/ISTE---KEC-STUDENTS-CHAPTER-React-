import React from 'react';

const REGISTRATION_FORM_URL = 'https://forms.gle/XXv2nYCC13wkJNT76';

const technicalEvents = [
    {
        title: 'PAPER PRESENTATION',
        meta: 'TEAM EVENT • 3 MEMBERS',
        description:
            'Present a topic from your chosen domain before a jury, followed by an engaging Q&A session.',
        details: [
            '3 members per team',
            'Technical topic from the selected domain',
            'Software, Core & Circuit panels',
            'PowerPoint permitted',
        ],
    },
    {
        title: 'PROJECT PRESENTATION',
        meta: 'TEAM EVENT • 3 MEMBERS',
        description:
            'Showcase a project, demonstrate your work and present your ideas before the jury panel.',
        details: [
            '3 members per team',
            'Software or Hardware project',
            'Presentation + Demonstration + Q&A',
            '4 minutes per team',
        ],
    },
    {
        title: 'CODE STORM',
        meta: 'INDIVIDUAL EVENT • 2 ROUNDS',
        description:
            'A two-stage coding challenge designed to test frontend knowledge and practical problem-solving ability.',
        details: [
            'For 2nd & 3rd year students',
            'Languages allowed: C, C++, Java, Python',
        ],
        rounds: ['ROUND 01 — FRONTEND QUIZ', 'ROUND 02 — CODING CHALLENGE'],
    },
    {
        title: 'CIRCUITRON',
        meta: 'TEAM EVENT • 3 MEMBERS',
        description:
            'A circuit-based simulation challenge combining technical identification with practical circuit design.',
        details: [
            '3 members per team',
            'For 2nd & 3rd year students',
            'Tinkercad',
        ],
        rounds: ['ROUND 01 — COMPONENT IDENTIFICATION', 'ROUND 02 — CIRCUIT SIMULATION'],
    },
];

const nonTechnicalEvents = [
    {
        title: 'AD-O-MANIA',
        meta: 'TEAM EVENT • 3 MEMBERS',
        description:
            'Unleash your creativity, branding instincts and presentation skills through a three-stage advertising challenge.',
        details: [
            '3 members per team',
            'Team event',
            'Approximately 60 minutes',
        ],
        rounds: ['ROUND 01 — BRAND BLITZ', 'ROUND 02 — AD MAKER', 'ROUND 03 — THE ULTIMATE AD WAR'],
    },
    {
        title: 'NEURON COMBAT',
        meta: 'TEAM EVENT • 3 MEMBERS',
        description:
            'A strategic reasoning challenge where teams compete through logical thinking, decision-making and deduction.',
        details: [
            '3 members per team',
            'Team-based logical reasoning challenge',
            'Final winner determined by overall performance',
        ],
    },
];

const EventCard = ({ event, index, category }) => (
    <article
        className="exodia-event-card"
        style={{ '--card-index': index }}
    >
        <div className="exodia-card-number">
            {String(index + 1).padStart(2, '0')}
        </div>

        <div className="exodia-card-category">
            {category}
        </div>

        <h2>{event.title}</h2>
        <div className="exodia-card-meta">{event.meta}</div>

        <p>{event.description}</p>

        <div className="exodia-card-details">
            {event.details.map((detail) => (
                <div className="exodia-detail" key={detail}>
                    <span>◆</span>
                    <span>{detail}</span>
                </div>
            ))}
        </div>

        {event.rounds && (
            <div className="exodia-rounds">
                <span className="exodia-rounds-label">ROUNDS</span>
                {event.rounds.map((round) => (
                    <div key={round}>{round}</div>
                ))}
            </div>
        )}

        <a
            href={REGISTRATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="exodia-event-register-button"
        >
            REGISTER <span>↗</span>
        </a>
    </article>
);

const ExodiaEvent = () => {
    const [expanded, setExpanded] = React.useState(null);
    const openCategory = (category) => setExpanded(category);
    const closeCategory = () => setExpanded(null);

    return (
        <main className="exodia-page">
            <div className="exodia-noise"></div>
            <div className="exodia-glow exodia-glow-one"></div>
            <div className="exodia-glow exodia-glow-two"></div>

            <button
                type="button"
                className="exodia-back-button"
                aria-label="Go back to home page"
                onClick={() => { window.location.href = '/'; }}
            >
                ← <span>BACK</span>
            </button>

            <section className={`exodia-selector ${expanded ? 'is-expanded' : ''}`}>
                <div className="exodia-title-block">
                    <span>KEC – ISTE STUDENTS' CHAPTER</span>
                    <h1>EXODIA <em>2K26</em></h1>
                    <p>AN INTRA-COLLEGE SYMPOSIUM</p>
                    <div className="exodia-date">12 OCTOBER 2026</div>

                    <a
                        href={REGISTRATION_FORM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="exodia-register-button"
                    >
                        REGISTER
                    </a>
                </div>

                {!expanded && (
                    <div className="exodia-category-grid">
                        <button
                            type="button"
                            className="exodia-category-card technical"
                            onClick={() => openCategory('technical')}
                            >

                            <span className="category-index">01</span>
                            <span className="category-label">TECHNICAL</span>
                            <strong>EVENTS</strong>
                            <small>04 EVENTS</small>
                            <span className="category-arrow">↗</span>
                        </button>

                        <button
                            type="button"
                            className="exodia-category-card nontechnical"
                            onClick={() => openCategory('nontechnical')}
                            >

                            <span className="category-index">02</span>
                            <span className="category-label">NON-TECHNICAL</span>
                            <strong>EVENTS</strong>
                            <small>02 EVENTS</small>
                            <span className="category-arrow">↗</span>
                        </button>
                    </div>
                )}

                {expanded && (
                    <section className={`exodia-expanded-view ${expanded}`}>
                        <button
                            type="button"
                            className="exodia-close"
                            aria-label="Close events"
                            onClick={closeCategory}
                        >
                            ×
                        </button>

                        <div className="exodia-expanded-heading">
                            <span>{expanded === 'technical' ? '01' : '02'}</span>
                            <h2>
                                {expanded === 'technical' ? 'TECHNICAL' : 'NON-TECHNICAL'} EVENTS
                            </h2>
                            <p>
                                {expanded === 'technical'
                                    ? 'Explore the challenges designed to test technical skill, creativity and problem-solving.'
                                    : 'Explore the challenges built around creativity, strategy and reasoning.'}
                            </p>
                        </div>

                        <div className={`exodia-events-grid ${expanded}`}>
                            {(expanded === 'technical' ? technicalEvents : nonTechnicalEvents).map((event, index) => (
                                <EventCard
                                    key={event.title}
                                    event={event}
                                    index={index}
                                    category={expanded === 'technical' ? 'TECHNICAL EVENT' : 'NON-TECHNICAL EVENT'}
                                />
                            ))}
                        </div>
                    </section>
                )}
            </section>
        </main>
    );
};

export default ExodiaEvent;
