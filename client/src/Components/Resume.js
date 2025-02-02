import { useState, useEffect} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const Resume = (props) => {

    const [formItems, setFormItems] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const [file, setFile] = useState(null);
    const [errors, setErrors] = useState({});

    //handles change in any form inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormItems((prevItems) => ({
            ...prevItems,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]); //Store Selected File
    }


    //handles form submitions and displays errors if needed
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formItems);

        //appends formfields
        const formData = new FormData();
        Object.keys(formItems).forEach(key => {
            formData.append(key, formItems[key]);
        });

        //append file if available
        if (file) {
            formData.append('file', file);
        }
        try { 
            const response = await axios.post('http://localhost:5000/api/email/sendResumeForm', formData, {
                headers: {'Content-Type': 'multipart/form-data' }
            });

            //If form is submitted successfully it will reset error logs and display log success message
            setFormItems({ firstName: '', lastName: '', email: '', message: '' });
            setFile(null);
            setErrors({});
            console.log('Form subbmitted Successfully: ', response.data);
        } catch (error) {
            //ff request fails, will check for validation errors in responce
            if(error.response && error.response.data.errors) {
                setErrors(error.response.data.errors);
                console.log('Validation Errors: ', error.response.data.errors);
            } else {
                console.error('Error submitting form: ', error);
            }
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
                        <p>Email</p>
                        {errors.message && <p className="error">{errors.email}</p>}
                    </div>
                    <input type='text' name={'email'} value={formItems.email} placeholder={"Email*"} onChange={handleChange}/>
                    <div className='field-descriptor'>
                                <p>Message</p>
                                {errors.message && <p className="error">{errors.message}</p>}
                            </div>
                    <textarea name={'message'} value={formItems.message} placeholder={"Please tell us about your project*"} onChange={handleChange}/>
                    <input type="file" onChange={handleFileChange}/>
                    <input type={'submit'}/>
                </form>
            </div>
        </div>
    )
}
export default Resume;