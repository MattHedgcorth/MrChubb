import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

const ContactContainer = styled.div`
  .form-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #ffd700;
  }

  input, textarea {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.05);
    color: #ffffff;
    font-size: 1rem;

    &:focus {
      outline: none;
      border-color: #ffd700;
    }
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }

  button {
    background: #ffd700;
    color: #121212;
    border: none;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: 100%;

    &:hover {
      background: #ffed4a;
    }

    &:disabled {
      background: #666;
      cursor: not-allowed;
    }
  }

  .message {
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 4px;
    text-align: center;
  }

  .success {
    background: rgba(0, 255, 0, 0.1);
    color: #00ff00;
  }

  .error {
    background: rgba(255, 0, 0, 0.1);
    color: #ff0000;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      // Replace these with your EmailJS service details
      const result = await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          to_email: 'matt@hedgcorth.com',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message
        },
        'YOUR_PUBLIC_KEY'
      );

      if (result.status === 200) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        
        // Send thank you email
        await emailjs.send(
          'YOUR_SERVICE_ID',
          'YOUR_THANK_YOU_TEMPLATE_ID',
          {
            to_email: formData.email,
            name: formData.name
          },
          'YOUR_PUBLIC_KEY'
        );
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContactContainer className="page-container">
      <h1 className="page-heading">Contact Us</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
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
            <label htmlFor="email">Email</label>
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
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        {status === 'success' && (
          <div className="message success">
            Thank you for your message! We'll get back to you soon.
          </div>
        )}
        {status === 'error' && (
          <div className="message error">
            Sorry, there was an error sending your message. Please try again later.
          </div>
        )}
      </div>
    </ContactContainer>
  );
};

export default Contact;
