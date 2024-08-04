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
        navigator.clipboard.writeText('(440) 812-9963')
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
            <a className='logoWrapper' href="#">
                <img className='logo' src={logo} alt={'logo'} />
            </a>
            <div className='linkWrapper'>
                <div className='dropDown'>
                    <button className='dropbtn'>Our Specialties
                        <i className='fa fa-caret-down'></i>
                    </button>
                    <div className='dropDown-content'>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                <a href="#">About Us</a>
                <a href="#">We're Hiring</a>
                <a onClick={handleCopy}>(440) 812-9963</a>
                <a className='contactbtn' href="#" >Contact Us</a>
            </div>
        </div>
    )
}
export default Navbar;