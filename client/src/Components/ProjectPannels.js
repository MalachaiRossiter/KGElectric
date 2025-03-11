import SwitchGear from '../Assets/3PhaseSwitchGearInside.jpg';
import BannerSafetyInstall from '../Assets/BannerSafetyInstall.jpg';
import EquipmentTesting from '../Assets/EquipmentTestingTroubleshooting.jpg';
import phaseDistrubution from '../Assets/480volt3phasedistubution.jpg';
import ProjectBox from './ProjectBox';

import { useEffect, useRef, useState} from 'react';
import '../CSS/ProjectPannels.css';


const ProjectPannels = () => {
    const projectsRef = useRef(null);
    const [isProjectsVisible, setIsProjectsVisible] = useState(false);

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
    
        const projectsObserverCleanup = createObserver(projectsRef, setIsProjectsVisible);
    
        return () => {
            projectsObserverCleanup();
        };
    }, []);

    const projectBoxData = [
        { title: "3 Phase Transformer", 
        summary: "480 Volt 3 Phase sub-pannels with a 400 amp transfer switch",
        description: "480 Volt 3 Phase sub-pannels with a 400 amp transfer switch",
        icon: phaseDistrubution
    },
    { title: "Banner Programmable Safety Relay", 
        summary: "Installed for safety interlocks of MCR contactors, safety doors and gates",
        description: "Installed for safety interlocks of MCR contactors, safety doors and gates",
        icon: BannerSafetyInstall
    },
    { title: "Troubleshooting Induction Heat System", 
        summary: "Troubleshooting work with heating system",
        description: "We needed to locate problems with IGBT's causing firing issues in the system",
        icon: EquipmentTesting
    },
    { title: "Switch Gear", 
        summary: "Inside image of 6000 AMP switch gear",
        description: "We installed this 6000 AMP switch gear to handle power produced by 6.5 Megawatt generating system",
        icon: SwitchGear
    }];

    return (
        <section className="projects-container">
            <header ref={projectsRef} className={`projects-header ${isProjectsVisible ? "fade-in" : ""}`}> 
                <h3>Check Out Our Work</h3>
                <h2>We're making some pretty cool things and hope that you'll think so too</h2>
            </header>
            <div className={`project-box-container`}>
                {projectBoxData.map((projects, index) => (
                    <ProjectBox
                        key={index}
                        icon={projects.icon}
                        title={projects.title}
                        summary={projects.summary}
                        description={projects.description}
                    />
                ))}
            </div>
        </section>
    );
}

export default ProjectPannels;
