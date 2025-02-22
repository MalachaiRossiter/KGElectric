import { useState } from "react";
import "../CSS/ProjectBox.css";

const ProjectBox = ({ icon, title, summary, description }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openDisplay = () => setIsOpen(true);
    const closeDisplay = () => setIsOpen(false);
    
    return (
        <div className="project-box">
            <img className="project-icon" src={icon} alt={`${title} Icon`} />
            <div className="dark-overlay" /> 
            <div className="plus-icon">+</div>
            <div className="project-overlay">
                <h4>{title}</h4>
                <h6>{summary}</h6>
            </div>
            <div className="project-display">
                <img className="project-img" src={icon} alt={`${title} Icon`} />
                <div className="project-display-text">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectBox;