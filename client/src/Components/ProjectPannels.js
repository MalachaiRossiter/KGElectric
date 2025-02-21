import SwitchGear from '../Assets/3PhaseSwitchGearInside.jpg';
import BannerSafetyInstall from '../Assets/BannerSafetyInstall.jpg';
import EquipmentTesting from '../Assets/EquipmentTestingTroubleshooting.jpg';
import SmallDrive from '../Assets/SmallDrivePanel.jpg'


const ProjectPannels = () => {
    
    const ProjectBox = ({ icon, title, summary, description}) => {
        return(
            <div className="project-box">
                <img className="project-icon" src={icon} alt={`${title} Icon`} />
                <h4>{title}</h4>
                <h6>{summary}</h6>
            </div>
        )
    }
    
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
        summary: "Labore est dolor culpa aute deserunt aliqua id esse ea minim officia.",
        description: "Anim qui magna minim eu exercitation nulla. Do mollit fugiat esse ex ut non ad. Et occaecat officia reprehenderit elit ut nulla dolore eu ad ad ea. Velit anim occaecat veniam laborum velit esse sit exercitation officia cupidatat adipisicing nostrud dolore. Labore aliqua fugiat sunt minim velit ad. Consequat enim eu adipisicing sunt laborum eu elit deserunt sunt voluptate ut est.",
        icon: SwitchGear
    }];

    return(
        <div className="projects-container">
            <h3>Check Out Our Work</h3>
            <div className={`project-box-conatiner`}>
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
    )
}

export default ProjectPannels;