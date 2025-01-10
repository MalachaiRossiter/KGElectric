import { useState, useEffect} from 'react';
import { Link, useNavigate} from 'react-router-dom';

const Contact = (props) => {



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
                
            </div>
        </div>
    )
}
export default Contact;