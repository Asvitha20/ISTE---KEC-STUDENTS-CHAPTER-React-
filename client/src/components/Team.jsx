import React, { useState, useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
const teamImages = import.meta.glob('../assets/images/team/*.{png,jpg,jpeg,svg}', { eager: true, as: 'url' });

const getTeamImage = (imageName) => {
    const path = `../assets/images/team/${imageName}`;
    return teamImages[path] || null;
};

const teamData = [
    { name: "Bharath N K", role: "Chairperson", dept: "AIML", year: "IV", image: "bharath_nk.png", linkedin: "#" },
    { name: "Induja V", role: "Vice Chairperson", dept: "ECE", year: "III", image: "induja_v.jpg", linkedin: "https://www.linkedin.com/in/induja-v-593783346" },
    { name: "Sharni K", role: "Secretary", dept: "CSD", year: "IV", image: "sharni_k.jpg", linkedin: "https://www.linkedin.com/in/sharni-k-b27396259" },
    { name: "Mukesh G E", role: "Join Secretary", dept: "CSD", year: "III", image: "mukesh_ge.jpg", linkedin: "https://www.linkedin.com/in/mukesh-g-e-42196a32a/" },
    { name: "Sahana Varsini S", role: "Additional Secretary", dept: "ECE", year: "III", image: "sahana_varsini_s.jpg", linkedin: "https://www.linkedin.com/in/sahana-varsini-s-s-616048292/" },
    { name: "Abhinaya P S", role: "Treasurer", dept: "CSE", year: "IV", image: "abhinaya_ps.jpg", linkedin: "https://www.linkedin.com/in/abhinaya-shrinivasan-a2b015243" },
    { name: "Naveen S", role: "Additional Treasurer", dept: "CSE", year: "III", image: "naveen_s.jpg", linkedin: "https://www.linkedin.com/in/naveen-sivakumar-09742a371" },
    { name: "Dharshini P", role: "Media Head", dept: "EIE", year: "IV", image: "dharshinip20" , linkedin: "https://www.linkedin.com/in/dharshinip20" },
    { name: "Harini G", role: "Document Head", dept: "AIML", year: "IV", image: "harini_updated.jpg", linkedin: "https://www.linkedin.com/in/harini-ganesan-abb8a72a8/" },
    { name: "Kabilan A", role: "Document Head", dept: "FT", year: "IV", image: "kabilan_a.jpg", linkedin: "https://www.linkedin.com/in/kabilan-a-76924a259" },
    { name: "Sanjay T S", role: "Document Head", dept: "Auto", year: "IV", image: "sanjay_ts.jpg", linkedin: "https://www.linkedin.com/in/sanjay-t-s" },
    { name: "DivyaSri U", role: "Event Mgmt Head", dept: "Civil", year: "IV", image: "divyasri_u.jpg", linkedin: "#" },
    { name: "Rithanya S", role: "Event Mgmt Head", dept: "CSE", year: "IV", image: "rithanya_s_updated.jpg", linkedin: "https://www.linkedin.com/in/rithanya-s-a7338b259" },
    { name: "Kiruthick R", role: "Event Mgmt Head", dept: "MTS", year: "III", image: "krithik_r_updated.jpg", linkedin: "https://www.linkedin.com/in/kiruthick-r-%E2%9A%A1-803291293/" },
    { name: "Tamilarasi P", role: "Executive Head", dept: "CSE", year: "IV", image: "tamilarasi_p.jpg", linkedin: "https://www.linkedin.com/in/tamilarasi-palanivel/" },
    { name: "Sathyaa S", role: "Executive Head", dept: "AIDS", year: "IV", image: "sathyaa_s.jpg", linkedin: "https://www.linkedin.com/in/sathyaa-selvaraju" },
    { name: "KavyaSri V", role: "Executive Head", dept: "EEE", year: "IV", image: "kavyasri_v.jpg", linkedin: "https://www.linkedin.com/in/kaviya-sri-v-388247259" },
    { name: "Jestin A", role: "Media Team", dept: "Civil", year: "III", image: "jestin_a_updated.jpg", linkedin: "https://www.linkedin.com/in/jestin-a-/" },
    { name: "GuruPrasath S B", role: "Media Team", dept: "AIML", year: "II", image: "guruprasath_sb.jpg", linkedin: "https://in.linkedin.com/in/guruprasath-s-b-932383326" },
    { name: "Praveen Kumar M", role: "Media Team", dept: "CSD", year: "II", image: "praveen_kumar_m.jpg", linkedin: "https://www.linkedin.com/in/praveen-kumar-24a551359" },
    { name: "Kishore R S", role: "Event Mgmt Team", dept: "Civil", year: "II", image: "kishore_rs.jpg", linkedin: "#" },
    { name: "Sudha M", role: "Event Mgmt Team", dept: "CSD", year: "III", image: "sudha_m.jpg", objectPosition: 'top', linkedin: "https://www.linkedin.com/in/sudha-murugesan-a42458380" },
    { name: "ASVITHA.R.M.", role: "Event Mgmt Team", dept: "CSE", year: "II", image: "asvitha_rm.jpg", linkedin: "https://www.linkedin.com/in/asvitha-ramesh-58866236a" },
    { name: "Atchaya A", role: "Document Team", dept: "AIML", year: "IV", image: "atchaya_a.jpg", linkedin: "https://www.linkedin.com/in/atchaya-a-1468a42b7/" },
    { name: "Sudheeksha S", role: "Document Team", dept: "AIML", year: "IV", image: "sudheeksha_s.jpg", linkedin: "https://www.linkedin.com/in/sudheeksha-senthilkumar-64b571259" },
    { name: "Harini M", role: "Document Team", dept: "ECE", year: "III", image: "harini_m.jpg", linkedin: "https://www.linkedin.com/in/harini-m-b806a0348" },
    { name: "Rubiga D", role: "Document Team", dept: "CSE", year: "II", image: "rubiga_d.jpg", linkedin: "https://www.linkedin.com/in/rubiga-d-29a39a327" },
    { name: "Jagadeesh S K", role: "Executive Team", dept: "Civil", year: "III", image: "jagadeesh_sk.jpg", linkedin: "https://www.linkedin.com/in/jagadeesh-s-k-589509380" },
    { name: "BHARAT HARI S", role: "Executive Team", dept: "AIML", year: "II", image: "bharat_hari_s.jpg", linkedin: "https://www.linkedin.com/in/bharat-hari-s-b940b5327" },
    { name: "UDHAYANITHI S", role: "Executive Team", dept: "IT", year: "II", image: "udhayanithi_s.jpg", linkedin: "https://www.linkedin.com/in/udhayanithi-s-1b0556332/" },
];

const teamDataByYear = {
    "2025-26": teamData,
    "2026-27": [
        { name: "Member 01", role: "To Be Updated", dept: "TBD", year: "—", placeholder: true },
        { name: "Member 02", role: "To Be Updated", dept: "TBD", year: "—", placeholder: true },
        { name: "Member 03", role: "To Be Updated", dept: "TBD", year: "—", placeholder: true },
        { name: "Member 04", role: "To Be Updated", dept: "TBD", year: "—", placeholder: true },
        { name: "Member 05", role: "To Be Updated", dept: "TBD", year: "—", placeholder: true },
        { name: "Member 06", role: "To Be Updated", dept: "TBD", year: "—", placeholder: true },
    ],
};

const Team = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [selectedYear, setSelectedYear] = useState("2025-26");

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    const selectedTeam = teamDataByYear[selectedYear];

    return (
        <section id="team" className="team-section py-5">
            <div className="container py-5">
                <div className="section-header text-center mb-5 reveal">
                    <h2 className="display-5 fw-bold text-white">Our Team</h2>
                    <p className="text-secondary">The dedicated individuals behind our chapter.</p>
                </div>

                <div
                    className="team-year-bar d-flex justify-content-center align-items-center gap-2 mb-5"
                    style={{
                        position: "sticky",
                        top: "80px",
                        zIndex: 20,
                        padding: "10px",
                        margin: "0 auto 30px",
                        width: "fit-content",
                        maxWidth: "100%",
                        borderRadius: "999px",
                        background: "rgba(10, 10, 18, 0.82)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        backdropFilter: "blur(12px)",
                    }}
                >
                    {Object.keys(teamDataByYear).map((year) => (
                        <button
                            key={year}
                            type="button"
                            onClick={() => setSelectedYear(year)}
                            aria-pressed={selectedYear === year}
                            className="btn"
                            style={{
                                borderRadius: "999px",
                                padding: "9px 20px",
                                color: selectedYear === year ? "#081b29" : "#fff",
                                background: selectedYear === year ? "#0ef" : "transparent",
                                border: selectedYear === year ? "1px solid #0ef" : "1px solid transparent",
                                fontWeight: 600,
                                transition: "all 0.25s ease",
                            }}
                        >
                            {year}
                        </button>
                    ))}
                </div>

                {isLoading ? (
                    <div className="d-flex justify-content-center gap-4 flex-wrap">
                        {Array(3).fill(0).map((_, index) => (
                            <div key={index} className="team-slide" style={{ width: '300px', height: '420px', background: 'rgba(255,255,255,0.05)', borderRadius: '15px', padding: '15px' }}>
                                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                                    <Skeleton height={300} style={{ borderRadius: '10px', marginBottom: '15px' }} />
                                    <Skeleton height={30} width="80%" style={{ marginBottom: '10px' }} />
                                    <Skeleton height={20} width="60%" />
                                </SkeletonTheme>
                            </div>
                        ))}
                    </div>
                ) : (
                    <Swiper
                        key={selectedYear}
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        loop={selectedTeam.length > 1}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                            slideShadows: true,
                        }}
                        pagination={{ clickable: true }}
                        modules={[EffectCoverflow, Pagination, Autoplay]}
                        className="teamSwiper reveal"
                    >
                        {selectedTeam.map((member, index) => (
                            <SwiperSlide className="team-slide" key={index}>
                                {member.placeholder ? (
                                    <div
                                        className="team-placeholder-card"
                                        style={{
                                            height: "100%",
                                            minHeight: "420px",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            textAlign: "center",
                                            padding: "30px",
                                            borderRadius: "15px",
                                            background: "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.025))",
                                            border: "1px solid rgba(255,255,255,0.12)",
                                        }}
                                    >
                                        <div style={{ fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#0ef", marginBottom: "18px" }}>
                                            2026-27
                                        </div>
                                        <h3 style={{ color: "#fff", marginBottom: "10px" }}>{member.name}</h3>
                                        <span style={{ color: "#aaa" }}>{member.role}</span>
                                        <div className="text-secondary small mt-2" style={{ fontSize: "0.9rem" }}>
                                            {member.dept}
                                        </div>
                                        <div style={{ marginTop: "22px", color: "#777", fontSize: "0.85rem" }}>
                                            Details coming soon
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <div className="team-image-container">
                                            <img
                                                src={getTeamImage(member.image) || 'https://via.placeholder.com/300x420?text=No+Image'}
                                                alt={member.name}
                                                style={{ objectPosition: member.objectPosition || 'center' }}
                                            />
                                        </div>
                                        <div className="team-overlay">
                                            <h3>{member.name}</h3>
                                            <span>{member.role}</span>
                                            <div className="text-secondary small mt-1" style={{ fontSize: '0.9rem', color: '#ccc' }}>
                                                {member.dept} - {member.year}
                                            </div>
                                            <div className="team-socials-reveal">
                                                <a href={member.linkedin || "#"} target="_blank" rel="noopener noreferrer" className="team-icon"><i className='bx bxl-linkedin'></i></a>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </section>
    );
};

export default Team;
