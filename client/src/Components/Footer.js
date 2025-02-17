import { useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Assets/YouTube_logo.png';
import '../CSS/Footer.css';

const Footer = (props) => {

    useEffect(() => {
        if (Notification.permission !== 'granted') {
            Notification.requestPermission();
        }
    }, []);

    const handleCopy = () => {
        navigator.clipboard.writeText('(440) 594-1460')
        .then(() => {
            if (Notification.permission === 'granted') {
                new Notification('Success', {
                    body: 'Phone number copied to clipboard!',
                });
            } else {
                alert('Phone number copied to clipboard!');
            }
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
    };

    return (
        <div className='footer'>
            <Link className='logoWrapperFooter' to={"/"}>
                <img className='logo' src={logo} alt={'logo'} />
            </Link>
            <div className='footer-links-container'>
                <Link to={"/Resume"} className='footer-links'><p>We're Hiring</p></Link>
                <Link to={"/contact"} className='footer-links'><p>Contact Us</p></Link>
                <div className='footer-links'>
                        <p onClick={handleCopy} id='phone-number'>PHONE NUMBER:<br/>
                        (440) 594-1460</p>
                    </div>
                    <div className='footer-links'>
                        <p>ADDRESS:<br/>
                        7012 Hatches Corners RD, CONNEAUT OH</p>
                    </div>
            </div>
        </div>
    )
}

export default Footer;