import { Link, useNavigate } from 'react-router-dom';
import logo from '../Assets/LogoFullText.png';
import '../CSS/Footer.css';

const Footer = (props) => {

    // Function to handle copying the phone number to the clipboard and providing feedback to the user
    const handleCopy = () => {
        // Check if the browser has not yet granted or denied notification permissions
        if (Notification.permission !== 'granted' && Notification.permission !== 'denied') {
            Notification.requestPermission().then(permission => {
                // If permission is granted, show a notification
                if (permission === 'granted') {
                    new Notification('Success', {
                        body: 'Phone number copied to clipboard!',
                    });
                } else {
                    // If permission is denied, show an alert
                    alert('Phone number copied to clipboard!');
                }
            });
        } else {
            // Copy the phone number to the clipboard and show an alert on success
            navigator.clipboard.writeText('(440) 594-1460')
            .then(() => alert('Phone number copied to clipboard!'))
            .catch(err => console.error('Failed to copy:', err));  // Log any errors to the console
        }
    };

    return (
        <footer className='footer'>
            {/* Link to the homepage */}
            <Link className='logoWrapperFooter' to={"/"}>
                <img className='logo' src={logo} alt={'logo'} />
            </Link>
            <div className='footer-links-container'>
                {/* Link to the resume page */}
                <Link to={"/Resume"} className='footer-links' rel="noopener noreferrer">
                    <p>We're Hiring</p>
                </Link>
                {/* Link to the contact page */}
                <Link to={"/contact"} className='footer-links' rel="noopener noreferrer">
                    <p>Contact Us</p>
                </Link>
                {/* Clickable phone number to copy it to clipboard */}
                <div className='footer-links'>
                    <p onClick={handleCopy} id='phone-number'>
                        PHONE NUMBER:<br/>
                        (440) 594-1460
                    </p>
                </div>
                {/* Displaying the company address */}
                <div className='footer-links'>
                    <p>ADDRESS:<br/>
                    7012 Hatches Corners RD, CONNEAUT OH</p>
                    <p>DUNS: 801335774</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;