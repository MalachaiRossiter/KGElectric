import { useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Assets/YouTube_logo.png';

const Footer = (props) => {

    useEffect(() => {
        if (Notification.permission !== 'granted') {
            Notification.requestPermission();
        }
    }, []);

    const handleCopy = () => {
        navigator.clipboard.writeText('(440) 228-0966')
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
        <div className='footer-container'>
            <Link className='logoWrapper' to={"/"}>
                <img className='logo' src={logo} alt={'logo'} />
            </Link>
            <div className='footer-links'>
                <Link to={"/Resume"}><p>We're Hiring</p></Link>
                <Link to={"/contact"}><p>Contact Us</p></Link>
                <a onClick={handleCopy}>(440) 812-9963</a>
                <p>Monday - Friday 8am to 5pm</p>
            </div>
        </div>
    )
}

export default Footer;