import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../CSS/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const scrollToSection = (id) => {
        if (id === "home") {
            navigate('/'); // Navigate to the home page
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }, 0);
        } else {
            navigate('/'); // Always navigate to the home page for scrolling
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 0);
        }
        setIsOpen(false); // Close the menu after clicking
    };
    

    return (
        <div>
            <div className='open-button' onClick={() => setIsOpen(true)}>
                <h3>MENU</h3>
                <div className='hamburger-menu'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className={`navbar ${isOpen ? 'open' : 'closed'}`}>
                <div className={`header-box ${isOpen ? 'slide-in' : 'slide-out'}`}>
                    <h3>NAVIGATION</h3>
                    <div className='close-button' onClick={() => setIsOpen(false)}></div>
                </div>
                <div className={`nav-guide-links ${isOpen ? 'fade-in' : 'fade-out'}`}>
                <h2 className='nav-link' onClick={() => scrollToSection("home")}>Home</h2>
                    <h2 className='nav-link' onClick={() => scrollToSection("about")}>About Us</h2>
                    <h2 className='nav-link' onClick={() => scrollToSection("services")}>Services</h2>
                    <h2 className='nav-link' onClick={() => scrollToSection("projects")}>Projects</h2>
                    <h2 className='nav-link' onClick={() => scrollToSection("contact")}>Contact Us</h2>
                    <a className='nav-link' href="/resume" onClick={() => setIsOpen(false)}>
                        <h2>We're Hiring</h2>
                    </a>
                </div>
                <div className={`nav-extra-text ${isOpen ? 'fade-in' : 'fade-out'}`}>
                    <div className='extra-text-container' id='phone-number'>
                        <p>PHONE NUMBER:</p>
                        <p>(440) 594-1460</p>
                    </div>
                    <div className='extra-text-container'>
                        <p>ADDRESS:</p>
                        <p>7012 Hatches Corners RD, CONNEAUT OH</p>
                        <p>DUNS: 801335774</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
