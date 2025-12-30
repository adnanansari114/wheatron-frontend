import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="cta-video-bg">
      {/* Background Video */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="cta-bg-video"
      >
        <source src="/images/cta.mp4" type="video/mp4" />
        Your browser does not support video.
      </video>

      {/* Light Overlay */}
      <div className="cta-overlay"></div>

      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="cta-video-content"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9 }}
            viewport={{ once: true }}
            className="cta-video-title"
          >
            Ready to Scale Your Team?
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="cta-video-subtitle"
          >
            Let's build something extraordinary together. 
            Access senior talent that delivers real results — fast and reliably.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            viewport={{ once: true }}
            className="cta-video-action"
          >
            <motion.Link
              to="/contact" 
              className="cta-video-btn"
              whileHover={{ 
                scale: 1.08, 
                boxShadow: "0 25px 50px rgba(35,158,250,0.3)" 
              }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us 
              <ArrowRight className="cta-video-arrow" size={22} />
            </motion.Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}