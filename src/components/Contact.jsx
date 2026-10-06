import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { personalInfo, emailJsConfig } from '../data/portfolioData';

export default function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setStatusMessage('Please fill in all required fields.');
      return;
    }

    setStatus('sending');
    setStatusMessage('Sending your message...');

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      reply_to: formData.email,
    };

    try {
      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        templateParams,
        emailJsConfig.publicKey
      );

      // Successful submission
      setStatus('success');
      setStatusMessage('Thank you! Your message has been sent successfully. I will get back to you shortly.');
      setFormData({ name: '', email: '', message: '' });

      // Automatically reset button state after 6 seconds to allow new submissions
      setTimeout(() => {
        setStatus('idle');
        setStatusMessage('');
      }, 6000);
    } catch (error) {
      console.error('EmailJS submission error:', error);
      // Submission failed: keep entered info intact & allow retry
      setStatus('error');
      setStatusMessage('Failed to send message. Please verify your details or reach out directly via email or WhatsApp.');
    }
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <i className="fa-solid fa-envelope-open-text" aria-hidden="true"></i>
            Get In Touch
          </span>
          <h2 className="section-title">
            Let's Build Something <span className="text-gradient">Together</span>
          </h2>
          <p className="section-description">
            Have an opportunity, project idea, or just want to connect? Feel free to reach out.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Info Cards & Social Links */}
          <div className="contact-info-panel">
            <h3 className="panel-title">Contact Information</h3>
            <p className="panel-subtitle">
              I am open to discussions regarding internships, entry-level opportunities, and software projects.
            </p>

            <div className="info-cards-list">
              {/* Email */}
              <a href={`mailto:${personalInfo.email}`} className="info-card glass-card">
                <div className="info-card-icon">
                  <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                </div>
                <div className="info-card-text">
                  <span className="info-label">Email</span>
                  <span className="info-value">{personalInfo.email}</span>
                </div>
              </a>

              {/* Phone */}
              <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="info-card glass-card">
                <div className="info-card-icon">
                  <i className="fa-solid fa-phone" aria-hidden="true"></i>
                </div>
                <div className="info-card-text">
                  <span className="info-label">Phone</span>
                  <span className="info-value">{personalInfo.phone}</span>
                </div>
              </a>

              {/* WhatsApp */}
              <a 
                href={personalInfo.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="info-card glass-card"
              >
                <div className="info-card-icon whatsapp-icon">
                  <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
                </div>
                <div className="info-card-text">
                  <span className="info-label">WhatsApp</span>
                  <span className="info-value">{personalInfo.phone}</span>
                </div>
              </a>
            </div>

            {/* Social Links Group */}
            <div className="contact-socials-group">
              <span className="socials-label">Connect on professional networks:</span>
              <div className="social-pills">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                  aria-label="GitHub Profile"
                >
                  <i className="fa-brands fa-github" aria-hidden="true"></i>
                  <span>GitHub</span>
                </a>

                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                  aria-label="LinkedIn Profile"
                >
                  <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
                  <span>LinkedIn</span>
                </a>

                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                  aria-label="WhatsApp"
                >
                  <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
                  <span>WhatsApp</span>
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="social-pill"
                  aria-label="Email"
                >
                  <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="contact-form-panel">
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form glass-card" noValidate>
              <h3 className="form-title">Send a Direct Message</h3>

              {/* Status Banner */}
              {statusMessage && (
                <div 
                  className={`status-banner ${status === 'success' ? 'status-success' : 'status-error'}`}
                  role="alert"
                >
                  <i 
                    className={status === 'success' ? 'fa-solid fa-circle-check' : 'fa-solid fa-circle-exclamation'} 
                    aria-hidden="true" 
                  />
                  <span>{statusMessage}</span>
                </div>
              )}

              {/* Name Input */}
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  Your Name <span className="required-star">*</span>
                </label>
                <div className="input-with-icon">
                  <i className="fa-regular fa-user input-icon" aria-hidden="true"></i>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. John Doe"
                    className="form-input"
                    disabled={status === 'sending' || status === 'success'}
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  Your Email <span className="required-star">*</span>
                </label>
                <div className="input-with-icon">
                  <i className="fa-regular fa-envelope input-icon" aria-hidden="true"></i>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="e.g. johndoe@example.com"
                    className="form-input"
                    disabled={status === 'sending' || status === 'success'}
                  />
                </div>
              </div>

              {/* Message Input */}
              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  Your Message <span className="required-star">*</span>
                </label>
                <div className="input-with-icon textarea-wrapper">
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                    placeholder="Write your message or project inquiry here..."
                    className="form-textarea"
                    disabled={status === 'sending' || status === 'success'}
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="form-submit-row">
                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'success'}
                  className="btn btn-primary btn-full submit-btn"
                >
                  {status === 'sending' ? (
                    <>
                      <i className="fa-solid fa-spinner fa-spin" aria-hidden="true"></i>
                      <span>Sending Message...</span>
                    </>
                  ) : status === 'success' ? (
                    <>
                      <i className="fa-solid fa-check" aria-hidden="true"></i>
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-paper-plane" aria-hidden="true"></i>
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
