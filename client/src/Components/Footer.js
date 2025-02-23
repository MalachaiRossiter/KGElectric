import { useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Assets/LogoFullText.png';
import '../CSS/Footer.css';

const Footer = (props) => {

    const handleCopy = () => {
        if (Notification.permission !== 'granted' && Notification.permission !== 'denied') {
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    new Notification('Success', {
                        body: 'Phone number copied to clipboard!',
                    });
                } else {
                    alert('Phone number copied to clipboard!');
                }
            });
        } else {
            navigator.clipboard.writeText('(440) 594-1460')
            .then(() => alert('Phone number copied to clipboard!'))
            .catch(err => console.error('Failed to copy:', err));
        }
    };

    return (
        <footer className='footer'>
            <Link className='logoWrapperFooter' to={"/"}>
                <img className='logo' src={logo} alt={'logo'} />
            </Link>
            <div className='footer-links-container'>
                <Link to={"/Resume"} className='footer-links' rel="noopener noreferrer">
                    <p>We're Hiring</p>
                </Link>
                <Link to={"/contact"} className='footer-links' rel="noopener noreferrer">
                <p>Contact Us</p>
                </Link>
                <div className='footer-links'>
                        <p onClick={handleCopy} id='phone-number'>PHONE NUMBER:<br/>
                        (440) 594-1460</p>
                    </div>
                    <div className='footer-links'>
                        <p>ADDRESS:<br/>
                        7012 Hatches Corners RD, CONNEAUT OH</p>
                    </div>
            </div>
        </footer>
    )
}

export default Footer;