import '../CSS/About.css';
import electric from '../Assets/lighting.png';
import engineering from '../Assets/setting.png';
import automation from '../Assets/bot.png';

// Reusable Specialties Component
const SpecialtyBox = ({ icon, title, description }) => {
    return (
        <div className='specialties-box'>
            <div className='specialties-box-header'>
                <img className='specialties-icon' src={icon} alt={`${title} Icon`} />
                <h3>{title}</h3>
            </div>
            <p>{description}</p>
        </div>
    );
};

const About = () => {
    const specialtiesData = [
        { title: "Electric", description: "Velit enim sint aliqua ad nisi incididunt exercitation fugiat veniam ipsum mollit ex dolore enim.", icon: electric },
        { title: "Engineering", description: "Velit enim sint aliqua ad nisi incididunt exercitation fugiat veniam ipsum mollit ex dolore enim.", icon: engineering },
        { title: "Automation", description: "Velit enim sint aliqua ad nisi incididunt exercitation fugiat veniam ipsum mollit ex dolore enim.", icon: automation }
    ];

    return (
        <div className='about-container'>
            <div className='about-content'>
                <div className='about-header'>
                    <h3>HELLO THERE</h3>
                    <h1>We are K&G Electric</h1>
                </div>
                <p>
                    Eiusmod aute reprehenderit ea enim minim magna quis eu 
                    ut duis reprehenderit officia. Est dolore labore duis aliquip
                    culpa Lorem nostrud voluptate voluptate culpa irure. Culpa tempor 
                    mollit Lorem id id in voluptate nisi ex. Esse exercitation ipsum 
                    esse officia duis duis. Anim dolor duis cupidatat consectetur non 
                    excepteur veniam consequat ipsum dolore ad labore. Mollit magna nisi 
                    aliquip aute commodo anim aliquip veniam ad exercitation laboris 
                    mollit proident.
                </p>
            </div>
            
            <div className='specialties-container'>
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