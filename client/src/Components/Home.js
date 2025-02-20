import {useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import logo from '../Assets/LogoFullText.png';
import '../CSS/Home.css';

import About from '../Components/About';
import Services from '../Components/Services';

const words = ["Electric", "Engineering", "Automation"];
const colors = ["#fb8500", "#fb8500", "#fb8500"];

const Home = (props) => {
    const [scrollY, setScrollY] = useState(0);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [fade, setFade] = useState("fade-in"); //Start with fade in

    //used to create a parallax effect on background image of home container
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    //used to create fade in and out of Spanned Text
    useEffect(() => {
        const interval = setInterval(() => {
            setFade("fade-out"); // Start fade out effect
    
            setTimeout(() => {
                setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                setFade("fade-in-start"); // Start above before falling
                setTimeout(() => setFade("fade-in"), 500); // Small delay to trigger animation properly
            }, 500); // Wait for fade-out before switching text
        }, 3000); // Change word every 3 seconds
    
        return () => clearInterval(interval);
    }, []);

    return (
    <div>
        <div className='home-container' style={{ backgroundPositionY: `calc(50% + ${scrollY * 0.5}px)` }}>
            <Link className='logoWrapper' to={"/"}>
                <img className='logo' src={logo} alt={'logo'} />
            </Link>
            <div className='home-text-container'>
                <h3>Welcome to K&G{" "}
                    <span
                        className={`word-transition ${fade}`}
                        style={{ color: colors[currentWordIndex] }}
                    >
                    {words[currentWordIndex]}
                    </span>
                </h3>
                {/* Electric, Automation, Engineering  cylce through*/}
                <h1>We are an electrical engineering company that excels in bringing your visions to life</h1>
                <div className='button-container'>
                    <Link className='contactbtn' to={"/contact"}><h2>START A PROJECT</h2></Link>
                    <Link className='contactbtn' to={"/contact"}><h2>LEARN MORE</h2></Link>
                </div>
            </div>
                <Link className='scroll' to={'#about'}>
                    <div className='arrow'></div>
                    <h2>SCROLL DOWN</h2>
                </Link>
        </div>
        <About/>
        <Services/>
    </div>
    )
}
export default Home;