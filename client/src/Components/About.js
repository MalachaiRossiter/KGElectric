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
        <section className='about-container'>
            {/* About Section */}
            <div ref={aboutRef} className={`about-content ${isAboutVisible ? "fade-in" : ""}`}>
                <header className='about-header'>
                    <h3>HELLO THERE</h3>
                    <h1>We are K&G Electric</h1>
                </header>
                <p>
                K&G Electric, Automation and Engineering is the go to engineering and technical support service for
                    industrial components, factory and process control. We have been servicing North East Ohio and the 
                    East Coast of the United States for over 2 decades. Our in-house team of engineers and technical experts have over 65 years of experience
                    in services such as expert engineering; technical support for factory and process control; automating systems;
                    electric, hydraulic, and pneumatic equipment; and heat transfer / pumping and cooling applications. Our services have earned the
                    trust of high exposure customers in the Greater Cleveland area and we hope that we will earn your trust too!
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
        </section>
    );
};

export default About;