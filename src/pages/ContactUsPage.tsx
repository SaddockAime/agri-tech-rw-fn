// ContactUsPage.tsx
import React, { useState } from "react";
import { Meta } from "../components/Meta";
import emailjs from 'emailjs-com';

const ContactUsPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const result = await emailjs.sendForm(
                'YOUR_SERVICE_ID',
                'YOUR_TEMPLATE_ID',
                e.target as HTMLFormElement,
                'YOUR_USER_ID'
            );
            console.log('Email sent successfully:', result.text);
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            });
            alert('Message sent successfully!');
        } catch (error) {
            console.error('Failed to send email:', error);
            alert('Failed to send message. Please try again.');
        }
    };

    return (
        <div className="page-wrapper">
            <Meta title="Contact Us - AgriConnect Rwanda" />
            <div className="contact-us-container">
                <div className="form-container">
                    <h1>Contact Us</h1>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="input-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <textarea
                                name="message"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                            />
                        </div>
                        <button type="submit" className="submit-button">
                            Submit
                        </button>
                    </form>
                </div>
                <div className="image-container">
                    <div className="pattern-background"></div>
                    <img 
                        src="https://res.cloudinary.com/djrmfg6k9/image/upload/v1739287412/markus-winkler-q3QPw37J6Xs-unsplash_lccuk3.jpg" 
                        alt="Contact Us" 
                        className="contact-us-image" 
                    />
                </div>
            </div>
        </div>
    );
}

export default ContactUsPage;