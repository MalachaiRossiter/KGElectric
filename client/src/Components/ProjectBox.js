import { useState, useEffect } from "react";
import "../CSS/ProjectBox.css";

const ProjectBox = ({ icon, title, summary, description }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isFading, setIsFading] = useState(false);

    const openDisplay = () => {
        setIsOpen(true);
    };

    const closeDisplay = () => {
        setIsFading(false);
        setTimeout(() => setIsOpen(false), 300); // Delay hiding the component to match fade-out duration
    };

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => setIsFading(true), 10); // Small delay to trigger fade-in
        }
    }, [isOpen]);

    return (
        <>
            <div className="project-box" onClick={openDisplay}>
                <img className="project-icon" src={icon} alt={`${title} Icon`} />
                <div className="dark-overlay" /> 
                <div className="plus-icon">+</div>
                <div className="project-overlay">
                    <h4>{title}</h4>
                    <h6>{summary}</h6>
                </div>
            </div>

            {isOpen && (
                <div className={`project-display ${isFading ? "show" : "hide"}`} onClick={closeDisplay}>
                    <button className="close-btn" onClick={closeDisplay}>✖</button>
                    <div className="project-display-content" onClick={(e) => e.stopPropagation()}>
                        <img className="project-img" src={icon} alt={`${title} Icon`} />
                        <div className="project-display-text">
                            <h3>{title}</h3>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectBox;