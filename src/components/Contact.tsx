import React, { useState } from 'react';
import { useTheme } from './ThemeProvider';
import emailjs from 'emailjs-com';

const Contact = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Thanks for your message! We will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, (error) => {
        console.log('FAILED...', error);
        alert('Failed to send the message. Please try again later.');
      });
  };

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="mb-8">We'd love to hear from you! Please fill out the form below and we'll get in touch with you shortly.</p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="p-4 border border-gray-300 rounded-md"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="p-4 border border-gray-300 rounded-md"
              required
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="p-4 border border-gray-300 rounded-md"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="p-4 border border-gray-300 rounded-md"
              rows={6}
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full py-4 bg-primary font-bold rounded-md hover:bg-primary-dark transition duration-300 ${theme === 'dark' ? 'text-black' : 'text-white'}`}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;