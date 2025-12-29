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
            <div className="footer-logo">
              <img src="/images/logoone.jpg" alt="" />
            </div>
            <p className="footer-desc">
              Wheatron Technologies is a global IT staffing partner helping businesses scale faster with the right people. With over 18 years of expertise, we specialize in C2C, full-time, and contract hiring.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 className="footer-links-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4 className="footer-contact-title">Get in Touch</h4>
            <div className="contact-items">
              <div className="contact-item">
                <Mail size={20} className="contact-icon" />
                <a href="mailto:pradeep@wheatrontechnologies.com">pradeep@wheatrontechnologies.com</a>
              </div>
              <div className="contact-item">
                <Phone size={20} className="contact-icon" />
                <a href="tel:+919301992993">+91 93019 92993</a>
              </div>
              <div className="contact-item">
                <MapPin size={20} className="contact-icon" />
                <span>213 Landlord State Colony, Nipania Road, Indore, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* NEW: Certifications Section */}
        <div className="footer-certifications-row">
          <div className="cert-item-footer">
            <span className="cert-checkmark">✔</span>
            <span>ISO 9001</span>
          </div>
          <div className="cert-item-footer">
            <span className="cert-checkmark">✔</span>
            <span>ISO 27001</span>
          </div>
          <div className="cert-item-footer">
            <span className="cert-checkmark">✔</span>
            <span>MSME</span>
          </div>
          <div className="cert-item-footer">
            <span className="cert-checkmark">✔</span>
            <span>Cloud Certified Team (AWS/Azure/GCP)</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>&copy; 2025 Wheatron. All rights reserved.</p>
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