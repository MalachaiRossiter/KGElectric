import SwitchGear from '../Assets/3PhaseSwitchGearInside.jpg';
import BannerSafetyInstall from '../Assets/BannerSafetyInstall.jpg';
import EquipmentTesting from '../Assets/EquipmentTestingTroubleshooting.jpg';
import SmallDrive from '../Assets/SmallDrivePanel.jpg';
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
        { title: "Beans", 
        summary: "Labore est dolor culpa aute deserunt aliqua id esse ea minim officia.",
        description: "Anim qui magna minim eu exercitation nulla. Do mollit fugiat esse ex ut non ad. Et occaecat officia reprehenderit elit ut nulla dolore eu ad ad ea. Velit anim occaecat veniam laborum velit esse sit exercitation officia cupidatat adipisicing nostrud dolore. Labore aliqua fugiat sunt minim velit ad. Consequat enim eu adipisicing sunt laborum eu elit deserunt sunt voluptate ut est.",
        icon: SmallDrive
    },
    { title: "Beans", 
        summary: "Labore est dolor culpa aute deserunt aliqua id esse ea minim officia.",
        description: "Anim qui magna minim eu exercitation nulla. Do mollit fugiat esse ex ut non ad. Et occaecat officia reprehenderit elit ut nulla dolore eu ad ad ea. Velit anim occaecat veniam laborum velit esse sit exercitation officia cupidatat adipisicing nostrud dolore. Labore aliqua fugiat sunt minim velit ad. Consequat enim eu adipisicing sunt laborum eu elit deserunt sunt voluptate ut est.",
        icon: BannerSafetyInstall
    },
    { title: "Beans", 
        summary: "Labore est dolor culpa aute deserunt aliqua id esse ea minim officia.",
        description: "Anim qui magna minim eu exercitation nulla. Do mollit fugiat esse ex ut non ad. Et occaecat officia reprehenderit elit ut nulla dolore eu ad ad ea. Velit anim occaecat veniam laborum velit esse sit exercitation officia cupidatat adipisicing nostrud dolore. Labore aliqua fugiat sunt minim velit ad. Consequat enim eu adipisicing sunt laborum eu elit deserunt sunt voluptate ut est.",
        icon: EquipmentTesting
    },
    { title: "Beans", 
        summary: "Labore est dolor culpa aute deserunt aliqua id esse ea minim officia.Labore est dolor culpa aute deserunt aliqua id esse ea minim officia",
        description: "Anim qui magna minim eu exercitation nulla. Do mollit fugiat esse ex ut non ad. Et occaecat officia reprehenderit elit ut nulla dolore eu ad ad ea. Velit anim occaecat veniam laborum velit esse sit exercitation officia cupidatat adipisicing nostrud dolore. Labore aliqua fugiat sunt minim velit ad. Consequat enim eu adipisicing sunt laborum eu elit deserunt sunt voluptate ut est.",
        icon: SwitchGear
    }];

    return (
        <div className="projects-container">
            <div ref={projectsRef} className={`projects-header ${isProjectsVisible ? "fade-in" : ""}`}> 
                <h3>Check Out Our Work</h3>
                <h2>We have made some pretty cool things and hope that you'll think so too</h2>
            </div>
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
        </div>
    );
}

export default ProjectPannels;
