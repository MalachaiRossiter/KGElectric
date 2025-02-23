import { useState, useRef } from 'react';
import axios from 'axios';
import '../CSS/Form.css';
import { Helmet } from 'react-helmet';

const Resume = (props) => {
    const [formItems, setFormItems] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState(''); // State to store file name
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const fileInputRef = useRef(null); // Reference to file input

    // Handles change in any form inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormItems((prevItems) => ({
            ...prevItems,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0]; // Store Selected File
        setFile(selectedFile);
        setFileName(selectedFile ? selectedFile.name : ''); // Set file name
    };

    // Handles form submissions and displays errors if needed
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formItems);

        // Appends form fields
        const formData = new FormData();
        Object.keys(formItems).forEach(key => {
            formData.append(key, formItems[key]);
        });

        // Append file if available
        if (file) {
            formData.append('file', file);
        }
        try {
            const response = await axios.post('http://localhost:5000/api/email/sendResumeForm', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            // If form is submitted successfully, reset form fields and display success message
            setFormItems({ firstName: '', lastName: '', email: '', message: '' });
            setFile(null);
            setFileName(''); // Clear file name
            setErrors({});
            setSuccessMessage('Your resume has been submitted successfully!'); // Set success message

            // Clear the file input field
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }
            console.log('Form submitted Successfully: ', response.data);
        } catch (error) {
            // If request fails, check for validation errors in response
            if (error.response && error.response.data.errors) {
                setErrors(error.response.data.errors);
                console.log('Validation Errors: ', error.response.data.errors);
            } else {
                console.error('Error submitting form: ', error);
            }
            setSuccessMessage(''); // Clear success message on error
        }
    };

    return (
        <div className='contact-container'>
            <Helmet>
                <title>Apply to K&G Electric</title>
                <meta name="description" content="Apply to be an Electrical Engineer with K&G Electric" />
                <meta name="keywords" content="Electrician, Electrical, Industrial Electrian, North East Ohio, Ohio Electrician" />
            </Helmet>
            <div className='contact-form-header'>
                <h3>CONTACT US</h3>
                <h1>Looking for work? We're looking for you!</h1>
            </div>
            <div className='contact-form-container'>
                <form onSubmit={handleSubmit} className='contact-form'>
                    <h3>SEND US A MESSAGE</h3>
                    {successMessage && <p className="success-message">{successMessage}</p>} {/* Success message */}
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
                            name='email' 
                            value={formItems.email} 
                            placeholder="Email*" 
                            onChange={handleChange} 
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className='field-container'>
                        <textarea 
                            name='message' 
                            value={formItems.message} 
                            placeholder="Please let us know what position/skills you'd like to work with*" 
                            onChange={handleChange} 
                        />
                        {errors.message && <p className="error">{errors.message}</p>}
                    </div>
                    <div className='field-container'>
                        <label className="custom-file-upload">
                            <input 
                                type="file" 
                                ref={fileInputRef} 
                                onChange={handleFileChange} 
                            />
                            Browse File
                        </label>
                        {fileName && <span className="file-name">{fileName}</span>} {/* Display file name */}
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
        </div>
    );
}

export default Resume;
