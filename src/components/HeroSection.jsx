import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="hero-compact">
      {/* Background Video */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="hero-video"
      >
        <source src="/images/bannertwo.mp4" type="video/mp4" />
        Your browser does not support video.
      </video>
      {/* Light Overlay */}
      <div className="hero-overlay"></div>

      <div className="hero-container">
        <motion.div className="hero-content">
          {/* Title - Medium size, line-by-line */}
          <motion.h1 className="hero-title">
            <motion.span 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Empowering Businesses with
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="highlight"
            >
              Smart IT Consulting & Modern Technology Solutions
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="hero-desc"
          >
            At Wheatron Technologies, we help companies transform their ideas into scalable, efficient, and future-ready digital systems. From IT strategy to development, optimization, and long-term support — we guide you through the entire technology lifecycle.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="hero-btns"
          >
            {/* <a href="/contact" className="btn-main">
              Contact Us <ArrowRight size={18} className="arrow" />
            </a> */}
            <button className="cta-main"><Link to="/contact">Contact Us</Link></button>
            {/* <a href="/services" className="btn-outline">
              Our Services
            </a> */}
            <button className="cta-outline"><Link to="/services">Our Services</Link></button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}