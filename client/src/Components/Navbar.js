import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../CSS/Navbar.css';
import logo from '../Assets/YouTube_logo.png';

const Navbar = (props) => {
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
        <div className='navbar'>
            <Link className='logoWrapper' to={"/"}>
                <img className='logo' src={logo} alt={'logo'} />
            </Link>
            <div className='linkWrapper'>
                <div className='dropDown'>
                    <button className='dropbtn'>Our Specialties
                        <i className='fa fa-caret-down'></i>
                    </button>
                    <div className='dropDown-content'>
                        <Link to={"/"}><h2>Link 3</h2></Link>
                        <Link to={"/"}><h2>Link 3</h2></Link>
                        <Link to={"/"}><h2>Link 3</h2></Link>
                    </div>
                </div>
                <Link to={"/"}><h2>About Us</h2></Link>
                <Link to={"/Resume"}><h2>We're Hiring</h2></Link>
                <a onClick={handleCopy}>(440) 812-9963</a>
                <Link className='contactbtn' to={"/contact"}><h2>Contact Us</h2></Link>
            </div>
        </div>
    )
}
export default Navbar;