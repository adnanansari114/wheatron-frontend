import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="premium-footer-light">
      <div className="container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-company-info">
            <h3 className="footer-logo">The IT Talent</h3>
            <p className="footer-desc">
              14+ years of excellence in connecting businesses with world-class remote IT talent. 
              We specialize in AI, cloud, development, and staff augmentation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 className="footer-links-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              {/* <li><a href="/services">Services</a></li> */}
              {/* <li><a href="/blog">Blog</a></li> */}
              {/* <li><a href="/careers">Careers</a></li> */}
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4 className="footer-contact-title">Get in Touch</h4>
            <div className="contact-items">
              <div className="contact-item">
                <Mail size={20} className="contact-icon" />
                <a href="mailto:hello@theittalent.com">hello@theittalent.com</a>
              </div>
              <div className="contact-item">
                <Phone size={20} className="contact-icon" />
                <a href="tel:+919754364386">+91 97543 64386</a>
              </div>
              <div className="contact-item">
                <MapPin size={20} className="contact-icon" />
                <span>Indore, Madhya Pradesh, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>&copy; 2025 The IT Talent. All rights reserved.</p>
          <div className="footer-legal">
            <a href="/privacy">Privacy Policy</a>
            <span className="separator">•</span>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}