import '../CSS/Services.css';
import automation from '../Assets/bot.png';
import { useEffect, useRef, useState} from 'react';

// Reusable ServiceBox Component
const ServiceBox = ({ img, title, description }) => {
    return (
        <div className='service-items-box'>
            <img className='specialties-icon' src={img} alt={`${title} Icon`} />
            <div className='service-text'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

const servicesData = [
    { title: "Apple", description: "Cupidatat consectetur excepteur excepteur dolore sunt enim in tempor veniam enim commodo deserunt magna. Labore anim eiusmod elit consequat deserunt dolore. Irure aliqua ut commodo laborum ea. Dolore tempor ex adipisicing nostrud ea adipisicing aliqua officia.", img: automation },
    { title: "Banana", description: "Consectetur excepteur Lorem sit quis adipisicing. Qui quis minim aliquip proident duis dolor. Adipisicing ad nulla Lorem ad. Voluptate ad ex ut duis eu exercitation ipsum ut enim. Nisi occaecat id exercitation proident in consectetur cillum ullamco incididunt ipsum quis.", img: automation },
    { title: "Orange", description: "Cupidatat consectetur excepteur excepteur dolore sunt enim in tempor veniam enim commodo deserunt magna. Labore anim eiusmod elit consequat deserunt dolore. Irure aliqua ut commodo laborum ea. Dolore tempor ex adipisicing nostrud ea adipisicing aliqua officia.", img: automation },
    { title: "Grapes", description: "Consectetur excepteur Lorem sit quis adipisicing. Qui quis minim aliquip proident duis dolor. Adipisicing ad nulla Lorem ad. Voluptate ad ex ut duis eu exercitation ipsum ut enim. Nisi occaecat id exercitation proident in consectetur cillum ullamco incididunt ipsum quis.", img: automation },
    { title: "Mango", description: "Cupidatat consectetur excepteur excepteur dolore sunt enim in tempor veniam enim commodo deserunt magna. Labore anim eiusmod elit consequat deserunt dolore. Irure aliqua ut commodo laborum ea. Dolore tempor ex adipisicing nostrud ea adipisicing aliqua officia.", img: automation },
    { title: "Pineapple", description: "Cupidatat consectetur excepteur excepteur dolore sunt enim in tempor veniam enim commodo deserunt magna. Labore anim eiusmod elit consequat deserunt dolore. Irure aliqua ut commodo laborum ea. Dolore tempor ex adipisicing nostrud ea adipisicing aliqua officia.", img: automation }
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