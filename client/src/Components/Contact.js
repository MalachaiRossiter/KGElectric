import { useState, useEffect} from 'react';
import { Link, useNavigate} from 'react-router-dom';

const Contact = (props) => {

    const [formItems, setFormItems] = useState({
        firstName: '',
        lastName: '',
        business: '',
        email: '',
        phone: '',
        zipCode: '',
        timeFrame: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        console.log("penis");
        const { name, value } = e.target;
        setFormItems((prevItems) => ({
            ...prevItems,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            console.log(validationErrors);
        } else {
            setErrors({});
            console.log('Form Submitted Successfully: ', formItems);
        }
    };

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
                        <div className='field-container'>
                            <div className='field-descriptor'>
                                <p>FirstName</p>
                                {errors.message && <p className="error">{errors.firstName}</p>}
                            </div>
                            <input type='text' name={'firstName'} value={formItems.firstName} placeholder={"First Name*"} onChange={handleChange}/>
                        </div>
                        <div className='field-container'>
                            <div className='field-descriptor'>
                                <p>LastName</p>
                                {errors.message && <p className="error">{errors.lastName}</p>}
                            </div>
                            <input type='text' name={'lastName'} value={formItems.lastName} placeholder={"last Name*"} onChange={handleChange}/>
                        </div>
                    </div>
                    <div className='field-descriptor'>
                        <p>Business</p>
                        {errors.message && <p className="error">{errors.business}</p>}
                    </div>
                    <input type='text' name={'business'} value={formItems.business} placeholder={"Business*"} onChange={handleChange}/>
                    <div className='field-descriptor'>
                        <p>Email</p>
                        {errors.message && <p className="error">{errors.email}</p>}
                    </div>
                    <input type='text' name={'email'} value={formItems.email} placeholder={"Email*"} onChange={handleChange}/>
                    <div className='double-input'>
                        <div className='field-container'>
                            <div className='field-descriptor'>
                                <p>Phone</p>
                                {errors.message && <p className="error">{errors.phone}</p>}
                            </div>
                            <input type='text' name={'phone'} value={formItems.phone} placeholder={"***-***-****"} onChange={handleChange}/>
                        </div>
                        <div className='field-container'>
                            <div className='field-descriptor'>
                                <p>Zip Code</p>
                                {errors.message && <p className="error">{errors.zipCode}</p>}
                            </div>
                            <input type='text' name={'zipCode'} value={formItems.zipCode} placeholder={"Zip Code"} onChange={handleChange}/>
                        </div>
                    </div>
                    <p>When would you like to start this project?</p>
                    <select name={'timeFrame'} value={formItems.timeFrame} onChange={handleChange}>
                        <option value={''}></option>
                        <option value={'2 to 3 weeks'}>2 to 3 weeks</option>
                        <option value={'1 to 2 months'}>1 to 2 months</option>
                        <option value={'6 months'}>6 months</option>
                        <option value={'1 year +'}>1 year +</option>
                    </select>
                    <div className='field-descriptor'>
                                <p>Message</p>
                                {errors.message && <p className="error">{errors.message}</p>}
                            </div>
                    <textarea name={'message'} value={formItems.message} placeholder={"Please tell us about your project*"} onChange={handleChange}/>
                    <input type={'submit'}/>
                </form>
            </div>
        </div>
    )
}
export default Contact;