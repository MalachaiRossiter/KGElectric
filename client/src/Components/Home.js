import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import logo from '../Assets/LogoFullText.png';
import '../CSS/Home.css';

import About from '../Components/About';
import Services from '../Components/Services';
import ProjectPannels from '../Components/ProjectPannels';
import Contact from '../Components/Contact';

const words = ["Electric", "Engineering", "Automation"];
const colors = ["#fb8500", "#fb8500", "#fb8500"];

const sectionTitles = {
    "home": "K&G Electric - Electrical Engineering",
    "about": "About K&G Electric",
    "services": "Our Services - K&G Electric",
    "projects": "Projects - K&G Electric",
    "contact": "Contact Us - K&G Electric",
};

const Home = () => {
    const [scrollY, setScrollY] = useState(0);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [fade, setFade] = useState("fade-in");
    const [activeSection, setActiveSection] = useState("home");

    // Parallax scrolling effect and active section detection
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);

            const sections = ["home", "about", "services", "projects", "contact"];
            const sectionPositions = sections.map(section => document.getElementById(section).offsetTop);
            const scrollPosition = window.scrollY + window.innerHeight / 2; // Check middle of viewport

            // Determine the active section
            for (let i = 0; i < sectionPositions.length; i++) {
                if (scrollPosition < sectionPositions[i]) {
                    setActiveSection(sections[i === 0 ? 0 : i - 1]);
                    return; // Exit the loop once the active section is found
                }
            }

            // If scrolled to the last section
            if (scrollPosition >= sectionPositions[sectionPositions.length - 1]) {
                setActiveSection("contact");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Text transition effect
    useEffect(() => {
        const interval = setInterval(() => {
            setFade("fade-out");

            setTimeout(() => {
                setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                setFade("fade-in-start");
                setTimeout(() => setFade("fade-in"), 500);
            }, 500);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // Scroll into view function
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div>
            <Helmet>
                <title>{sectionTitles[activeSection]}</title>
                <meta name="description" content="We Are K&G Electric. We are an Electrical Engineering Company Located near Cleveland Ohio." />
                <meta name="keywords" content="Electrician, Electrical, Industrial Electrician, North East Ohio, Ohio Electrician" />
            </Helmet>

            {/* Hero Section (Home) */}
            <div 
                id="home" 
                className='home-container' 
                style={{ backgroundPositionY: `calc(50% + ${scrollY * 0.5}px)` }}
            >
                <Link className='logoWrapper' to={"/"}>
                    <img className='logo' src={logo} alt="K&G Electric logo" />
                </Link>
                <div className='home-text-container'>
                    <h3>Welcome to K&G{" "}
                        <span className={`word-transition ${fade}`} style={{ color: colors[currentWordIndex] }}>
                            {words[currentWordIndex]}
                        </span>
                    </h3>
                    <h1>We are an electrical engineering company that excels in bringing your visions to life</h1>
                    <div className='button-container'>
                        <h2 className='contactbtn' onClick={() => scrollToSection("contact")}>START A PROJECT</h2>
                        <h2 className='contactbtn' onClick={() => scrollToSection("about")}>LEARN MORE</h2>
                    </div>
                </div>
                <div className='scroll' onClick={() => scrollToSection("about")}>
                    <div className='arrow'></div>
                    <h2>SCROLL DOWN</h2>
                </div>
            </div>

            {/* Sections */}
            <div id="about">
                <About />
            </div>

            <div id="services">
                <Services />
            </div>

            <div id="projects">
                <ProjectPannels />
            </div>

            <div id="contact">
                <Contact />
            </div>
        </div>
    );
};

export default Home;
