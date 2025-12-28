import React from "react";
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
              Grow Faster
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="highlight"
            >
              With Top Talent
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="hero-desc"
          >
            Senior developers and specialists ready to join your team and deliver results.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="hero-btns"
          >
            <a href="/contact" className="btn-main">
              Get Started <ArrowRight size={18} className="arrow" />
            </a>
            <a href="/services" className="btn-outline">
              Our Services
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}