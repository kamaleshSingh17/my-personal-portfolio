import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function WhatsAppFloat() {
  return (
    <a
      href={personalInfo.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float-btn"
      aria-label="Chat with Kamalesh Singh D on WhatsApp"
      title="Chat on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
      <span className="whatsapp-tooltip">Chat on WhatsApp</span>
    </a>
  );
}
