import { useState, useEffect} from 'react';
import { Link, useNavigate} from 'react-router-dom';

const Contact = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [business, setBusiness] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [timeFrame, setTimeFrame] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }



    return (
        <div className='body'>
            <div className='left-column'>
                <h1>How can we help</h1>
                <p>Start by telling us a little about you and your project.
                    Within one business day, one of our teammembers will reach out
                    to gather some more information about your project and see how
                    we can help to get your project underway as well as provide you
                    with a project estimate.
                </p>
                <h3>Meet our Engineers</h3>
                <div className='engineer-blocks'>
                    {/* get pictures of people*/}
                </div>
                <h3>We're excited and ready to help!</h3>
            </div>
            <div className='right-column'>
                <form onSubmit={handleSubmit} className='project-form'>
                    <h1>Tell us how we can help</h1>
                    <div className='double-input'>
                        {/*https://www.youtube.com/watch?v=f6ocDCkCmhM*/}
                        <input type='text' value={firstName} placeholder={"First Name*"}/>
                        <input type='text' value={lastName} placeholder={"Last Name*"}/>
                    </div>
                    <input type='text' value={business} placeholder={"Business"}/>
                    <input type='text' value={email} placeholder={"Email*"}/>
                    <div className='double-input'>
                        <input type='text' value={phone} placeholder={"Phone"}/>
                        <input type='text' value={zipCode} placeholder={"Zip Code"}/>
                    </div>
                    <h1>When would you like to start this project?</h1>
                    <select value={timeFrame}>
                        <option value={''}></option>
                        <option value={'2 to 3 weeks'}>2 to 3 weeks</option>
                        <option value={'1 to 2 months'}>1 to 2 months</option>
                        <option value={'6 months'}>6 months</option>
                        <option value={'1 year +'}>1 year +</option>
                    </select>
                    <textarea value={message} placeholder={"Please tell us about your project"}/>
                    <input type={'submit'}/>
                </form>
            </div>
        </div>
    )
}
export default Contact;