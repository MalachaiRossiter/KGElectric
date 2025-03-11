import { useState } from 'react';
import axios from 'axios';
import '../CSS/Form.css';

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
    const [successMessage, setSuccessMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // handles change in any form inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormItems((prevItems) => ({
            ...prevItems,
            [name]: value,
        }));
    };

    // handles form submissions and displays errors if needed
    const validateForm = () => {
        let newErrors = {};
        if (!formItems.firstName.trim()) newErrors.firstName = "First name is required";
        if (!formItems.lastName.trim()) newErrors.lastName = "Last name is required";
        if (!formItems.email.trim() || !/\S+@\S+\.\S+/.test(formItems.email)) newErrors.email = "Valid email required";
        if (!formItems.business.trim()) newErrors.business = "Business name is required";
        if (!formItems.message.trim()) newErrors.message = "Message cannot be empty";
        return newErrors;
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Start loading animation
        setSuccessMessage(''); // Clear previous messages
        setErrors({}); // Reset errors
    
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setIsLoading(false); // Stop loading if validation fails
            return;
        }
    
        try {
            const response = await axios.post(`https://kgelectric.onrender.com/api/email/sendContactForm`, formItems, {
                headers: { 'Content-Type': 'application/json' },
            });
    
            setSuccessMessage(response.data.message);
            setFormItems({
                firstName: '',
                lastName: '',
                business: '',
                email: '',
                phone: '',
                zipCode: '',
                timeFrame: '',
                message: '',
            });
            console.log('Form submitted successfully:', response.data);
        } catch (error) {
            if (error.response && error.response.data.errors) {
                setErrors(error.response.data.errors);
                console.log('Validation Errors: ', error.response.data.errors);
            } else {
                console.error('Error submitting form:', error);
            }
            setSuccessMessage('');
        }
    
        setIsLoading(false); // Stop loading animation
    };

    return (
        <section className='contact-container'>
            <header className='contact-form-header'>
                <h3>CONTACT US</h3>
                <h1>Let's work together to improve your business</h1>
            </header>
            <div className='contact-form-container'>
                <form onSubmit={handleSubmit} className='contact-form'>
                <h3>SEND US A MESSAGE</h3>
                {isLoading ? (
                    <p className="processing-message">Processing... this may take a minute</p>
                    ) : (
                    successMessage && <p className="success-message">{successMessage}</p>
                    )}
                    <div className='double-input'>
                        <div className='field-container'>
                            <input 
                                type='text' 
                                name='firstName' 
                                value={formItems.firstName} 
                                placeholder="First Name*" 
                                onChange={handleChange} 
                            />
                            {errors.firstName && <p className="error">{errors.firstName}</p>}
                        </div>
                        <div className='field-container'>
                            <input 
                                type='text' 
                                name='lastName' 
                                value={formItems.lastName} 
                                placeholder="Last Name*" 
                                onChange={handleChange} 
                            />
                            {errors.lastName && <p className="error">{errors.lastName}</p>}
                        </div>
                    </div>
                    <div className='field-container'>
                        <input 
                            type='text' 
                            name='business' 
                            value={formItems.business} 
                            placeholder="Business*" 
                            onChange={handleChange} 
                        />
                        {errors.business && <p className="error">{errors.business}</p>}
                    </div>
                    <div className='field-container'>
                        <input 
                            type='text' 
                            name='email' 
                            value={formItems.email} 
                            placeholder="Email*" 
                            onChange={handleChange} 
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className='double-input'>
                        <div className='field-container'>
                            <input 
                                type='text' 
                                name='phone' 
                                value={formItems.phone} 
                                placeholder="Phone-Number" 
                                onChange={handleChange} 
                            />
                            {errors.phone && <p className="error">{errors.phone}</p>}
                        </div>
                        <div className='field-container'>
                            <input 
                                type='text' 
                                name='zipCode' 
                                value={formItems.zipCode} 
                                placeholder="Zip Code" 
                                onChange={handleChange} 
                            />
                            {errors.zipCode && <p className="error">{errors.zipCode}</p>}
                        </div>
                    </div>
                    <div className='field-container'>
                        <input 
                            type='text' 
                            name='timeFrame' 
                            value={formItems.timeFrame} 
                            placeholder="When would you like to start this project?" 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className='field-container'>
                        <textarea 
                            name='message' 
                            value={formItems.message} 
                            placeholder="Your Message*" 
                            onChange={handleChange} 
                        />
                        {errors.message && <p className="error">{errors.message}</p>}
                    </div>
                    <button className='submitbtn' type='submit'>SUBMIT</button>
                </form>
                <div className='contact-info'>
                    <h3>CONTACT INFO</h3>
                    <div className='contact-block'>
                        <h4>Come Say Hi</h4>
                        <p>7012 Hatches Corners RD</p>
                        <p>CONNEAUT OH</p>
                        <p>44030 US</p>
                    </div>
                    <div className='contact-block'>
                        <h4>Get In Touch At</h4>
                        <p>KRossiter@kgelectricautomation.com</p>
                        <p>GRossiter@kgelectricautomation.com</p>
                    </div>
                    <div className='contact-block'>
                        <h4>Call Us</h4>
                        <p>(440) 594-1460</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
