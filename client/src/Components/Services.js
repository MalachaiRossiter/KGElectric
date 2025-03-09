import '../CSS/Services.css';
import bottomLine from '../Assets/BottomLine.png';
import buildingAutomation from '../Assets/BuildingAutomation.png';
import construction from '../Assets/Construction.png'
import industrialMaintenance from '../Assets/IndustrialMaintenance.png';
import safety from '../Assets/Safety.png';
import important from '../Assets/Important.png';

import { useEffect, useRef, useState} from 'react';

// Reusable ServiceBox Component
const ServiceBox = ({ img, title, description }) => {
    return (
        <div className='service-items-box'>
            <img className='specialties-icon' src={img} alt={`${title} Icon`} />
            <div className='service-text'>
                <h3>{title}</h3>
                {Array.isArray(description) ? (
                    <ol>
                        {description.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ol>
                ) : (
                    <p>{description}</p>
                )}
            </div>
        </div>
    );
};

const servicesData = [
    { 
        title: "Industrial Electrical Maintenance",
        description: "Our experienced team enhances your maintenance staff with expert electrical troubleshooting, repairs, and servicing. We specialize in electrical design and build, power distribution systems (under 1000 volts), PLC and automation programming, production machinery installation, motor control centers, panel controls, and more.",
        img: industrialMaintenance 
    },

    { 
        title: "Facility Automation and Infrastructure",
        description: "We optimize compressed air systems for peak performance and control, ensuring energy efficiency and cost savings. Our services include replacing outdated lighting with high-efficiency LED lighting installations, motion and automation-integrated lighting controls, and complete facility automation solutions for industrial settings.",
        img: buildingAutomation 
    },

    { 
        title: "Industrial Construction",
        description: "We specialize in industrial electrical construction, including equipment installation, renovations, emergency restoration, and uninterrupted power systems. Our team ensures seamless integration of lighting systems, fire alarms, security systems, and communication networks such as PA systems, video conferencing, and conventional/IP phone systems.",
        img: construction 
    },

    { 
        title: "Safety",
        description: "Safety is our top priority at K&G Electric. We are fully compliant with OSHA and NEC standards, and continuously participating in training and certifications. We collaborate with inspectors and government agencies to ensure your facility meets all electrical codes, reducing risks and ensuring a safe working environment.",
        img: safety 
    },

    { 
        title: "Our Commitment to Transparency",
        description: [
            "- We will never withhold documentation.",
            "- We will never lock PLC or HMI programs.",
            "- We will never create proprietary program components.",
            "- We will never intentionally complicate wiring or controls for unnecessary service calls."
        ],
        img: important 
    },

    { 
        title: "Bottom Line",
        description: "At K&G Electric, we believe in building strong partnerships for long-term success. We provide industrial businesses with reliable, efficient, and innovative electrical solutions. By sharing our knowledge and experience, we help our clients optimize operations, enhance productivity, and achieve sustainable growth.",
        img: bottomLine 
    }
];


const Services = () => {
    const servicesRef = useRef(null);
    const [isServiceVisible, setIsServiceVisible] = useState(false);

    useEffect(() => {
        const createObserver = (ref, setState) => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setState(true);
                        observer.disconnect();
                    }
                },
                { threshold: 0.25 }
            );
    
            if (ref.current) observer.observe(ref.current);
            return () => observer.disconnect();
        };
    
        const serviceObserverCleanup = createObserver(servicesRef, setIsServiceVisible);
    
        return () => {
            serviceObserverCleanup();
        };
    }, []);


    return (
        <div className='services-container'>
            <div ref={servicesRef} className={`services-header ${isServiceVisible ? "fade-in" : ""}`}>
                <h3>WHAT WE DO</h3>
                <h2>Our goal is to ensure that your facilities
                    stay up and running around the clock</h2>
            </div>
            <div className='service-items-container'>
                {servicesData.map((service, index) => (
                    <ServiceBox 
                        key={index} 
                        img={service.img} 
                        title={service.title} 
                        description={service.description} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Services;