import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true);

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
        <div>
            <div className='open-button' onClick={() =>setIsOpen(true)}>
                <h3>MENU</h3>
                <div className='hamburger-menu'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className={`navbar ${isOpen ? 'open' : 'closed'}`}>
                <div className='header-box'>
                    <h3>NAVIGATION</h3>
                    <div className="close-button" onClick={() => setIsOpen(false)}></div>
                </div>
                <Link className='nav-link' to={"/"}><h2>About Us</h2></Link>
                <Link className='nav-link' to={"/"}><h2>Services</h2></Link>
                <Link className='nav-link' to={"/"}><h2>Clients</h2></Link>
                <Link className='nav-link' to={"/"}><h2>Works</h2></Link>
                <Link className='nav-link' to={"/contact"}><h2>Contact Us</h2></Link>
                <Link className='nav-link' to={"/resume"}><h2>We're Hiring</h2></Link>
                <p onClick={handleCopy}>(440) 812-9963</p>
            </div>
        </div>
    );
};

export default Navbar;