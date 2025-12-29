import React from "react";
import CTASection from "../components/CTASection";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-page-light">
      {/* Hero Section with Video Background */}
      <section className="contact-hero">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="contact-video-bg" 
        >
          <source src="/images/contact.mp4" type="video/mp4" />
          Your browser does not support video.
        </video>

        <div className="contact-overlay"></div>

        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="contact-hero-content"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="contact-hero-title"
            >
              Get in Touch
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="contact-hero-subtitle"
            >
              Have a project in mind? We're here to help bring your ideas to life.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Details + Form */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Details */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="contact-info"
            >
              <h2 className="contact-info-title">Contact Information</h2>
              <p className="contact-info-desc">
                Reach out to us anytime. We're ready to discuss your project.
              </p>

              <div className="contact-details-list">
                <div className="contact-detail-item">
                  <Mail size={24} className="detail-icon" />
                  <div>
                    <p className="detail-label">Email</p>
                    <a href="mailto:hello@theittalent.com">hello@theittalent.com</a>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <Phone size={24} className="detail-icon" />
                  <div>
                    <p className="detail-label">Phone</p>
                    <a href="tel:+919754364386">+91 97543 64386</a>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <MapPin size={24} className="detail-icon" />
                  <div>
                    <p className="detail-label">Location</p>
                    <p>Indore, Madhya Pradesh, India</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="contact-form-wrapper"
            >
              <h2 className="form-title">Send us a Message</h2>

              <form className="contact-form">
                <div className="form-row">
                  <input type="text" placeholder="Your Name" required />
                  <input type="email" placeholder="Your Email" required />
                </div>

                <input type="text" placeholder="Subject" required />

                <textarea rows="5" placeholder="Your Message" required></textarea>

                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="submit-btn"
                >
                  Send Message <Send className="send-icon" size={20} />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
}