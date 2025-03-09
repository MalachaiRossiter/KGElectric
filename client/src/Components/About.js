import '../CSS/About.css';
import electric from '../Assets/lighting.png';
import engineering from '../Assets/setting.png';
import automation from '../Assets/bot.png';
import { useEffect, useRef, useState } from "react";


// Reusable component to display each specialty
const SpecialtyBox = ({ icon, title, description }) => {
    return (
        <div className='specialties-box'>
            <div className='specialties-box-header'>
                <img className='specialties-icon' src={icon} alt={`Icon representing ${title}`} />
                <h3>{title}</h3>
            </div>
            <p>{description}</p>
        </div>
    );
};

const About = () => {
    const aboutRef = useRef(null);
    const specialtiesRef = useRef(null);
    const [isAboutVisible, setIsAboutVisible] = useState(false);
    const [isSpecialtiesVisible, setIsSpecialtiesVisible] = useState(false);

    useEffect(() => {
        // IntersectionObserver to track visibility of sections
        const createObserver = (ref, setState) => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setState(true);  // Update state when section is in view
                        observer.disconnect();  // Stop observing after first appearance
                    }
                },
                { threshold: 0.25 }  // Trigger when 25% of the section is in view
            );

            if (ref.current) observer.observe(ref.current);  // Observe the section
            return () => observer.disconnect();  // Cleanup observer
        };

        // Create observers for both sections
        const aboutObserverCleanup = createObserver(aboutRef, setIsAboutVisible);
        const specialtiesObserverCleanup = createObserver(specialtiesRef, setIsSpecialtiesVisible);

        // Cleanup observers on component unmount
        return () => {
            aboutObserverCleanup();
            specialtiesObserverCleanup();
        };
    }, []);  // Run effect once when the component mounts

    // Data for specialties
    const specialtiesData = [
        { title: "Electric", description: "Handles electrical needs under 1,000 volts", icon: electric },
        { title: "Automation", description: "Automates processes and provides data acquisition", icon: automation },
        { title: "Engineering", description: "Designs and constructs custom equipment", icon: engineering }
    ];

    return (
        <div className='about-container'>
            {/* About Section */}
            <div ref={aboutRef} className={`about-content ${isAboutVisible ? "fade-in" : ""}`}>
                <div className='about-header'>
                    <h3>HELLO THERE</h3>
                    <h1>We are K&G Electric</h1>
                </div>
                <p>
                    K&G Electric, Automation and Engineering is your go-to engineering and technical support service...
                </p>
            </div>
            
            {/* Specialties Section */}
            <div ref={specialtiesRef} className={`specialties-container ${isSpecialtiesVisible ? "fade-in" : ""}`}>
                {specialtiesData.map((specialty, index) => (
                    <SpecialtyBox 
                        key={index} 
                        icon={specialty.icon} 
                        title={specialty.title} 
                        description={specialty.description} 
                    />
                ))}
            </div>
        </div>
    );
};

export default About;