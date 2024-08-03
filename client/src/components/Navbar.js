import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../CSS/Navbar.css';

const Navbar = (props) => {


    return (
        <div className='navbar'>
            <div className='dropDown'>
                <button className='Dropbtn'>Our Specialties
                    <i className='fa fa-caret-down'></i>
                </button>
                <div className='dropDown-content'>
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
        </div>
    )
}
export default Navbar