import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="home-container">
            <section className="contact-section">
                <div className="container">
                    <h1 className="section-title">Contact Us</h1>
                    <p className="section-subtitle">Get in touch with our team</p>

                    <div className="contact-content">
                        <div className="contact-info">
                            <div className="info-item">
                                <h3>📧 Email</h3>
                                <p>support@findnest7.com</p>
                            </div>
                            <div className="info-item">
                                <h3>📞 Phone</h3>
                                <p>+1 (555) 123-4567</p>
                            </div>
                            <div className="info-item">
                                <h3>📍 Address</h3>
                                <p>123 Commerce Street<br />Business City, BC 12345</p>
                            </div>
                            <div className="info-item">
                                <h3>🕒 Hours</h3>
                                <p>Mon-Fri: 9AM-6PM<br />Sat-Sun: 10AM-4PM</p>
                            </div>
                        </div>

                        <div className="contact-form">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">Subject *</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        required
                                    />
                                </div>

                                <button type="submit" className="submit-btn">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;