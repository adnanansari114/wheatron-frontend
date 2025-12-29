import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "./About.css";

export default function About() {


  const journey = [
    { year: "Wheatron Technologies", title: "Strong technology expertise across cloud, AI, automation, and modern frameworks", desc: "is a next-generation IT consultancy helping businesses unlock growth with the right technology choices. We work as a strategic partner, understanding your business challenges, designing smart solutions, and ensuring seamless execution." },
    { year: "Mission", title: "Flexible business models", desc: "To deliver intelligent, scalable, and efficient IT solutions that enable organizations to innovate faster, operate smarter, and achieve sustainable growth." },
    { year: "Vision", title: "Proven ability to deliver both short-term and long-term projects", desc: "To become a globally trusted IT consulting partner known for quality, transparency, and technological excellence." },
    { year: "Vision", title: "Customer-first mindset", desc: "To become a globally trusted IT consulting partner known for quality, transparency, and technological excellence." },
  ];
  // const journey = [
  //   { year: "2011", title: "Foundation", desc: "Started as a small team passionate about solving complex IT challenges with clean code." },
  //   { year: "2015", title: "Global Expansion", desc: "Began serving clients across USA, Europe, and Middle East with remote talent." },
  //   { year: "2018", title: "Cloud Expertise", desc: "Deep dive into AWS, Azure, GCP — building scalable and secure infrastructure." },
  //   { year: "2021", title: "AI Revolution", desc: "Launched dedicated AI/ML division for intelligent, data-driven solutions." },
  //   { year: "2024", title: "Enterprise Scale", desc: "Partnered with Fortune 500 companies for large-scale digital transformation." },
  //   { year: "Today", title: "Future Ready", desc: "14+ years of excellence in talent, technology, and transformation." }
  // ];

  const values = [
    { title: "Transparency", desc: "Clear processes and honest communication." },
    { title: "Innovation", desc: "Delivering future-ready solutions." },
    { title: "Quality", desc: "Every solution meets global standards." },
    { title: "Commitment", desc: "We take ownership of our client's success." },
    { title: "Collaboration", desc: "Working together for impactful outcomes." }
    // { title: "Integrity", desc: "Honest, transparent, and ethical in everything" }
  ];

  const stats = [
    { number: "200+", label: "Happy Clients" },
    { number: "98%", label: "Retention Rate" },
    { number: "18+", label: "Years Experience" },
    // { number: "500+", label: "Projects Delivered" }
  ];

  return (
    <div className="about-main-wrapper">
      {/* Hero */}
      <section className="about-main-hero">
        <video autoPlay muted loop playsInline className="about-hero-video">
          <source src="/images/about.mp4" type="video/mp4" />
        </video>
        <div className="about-hero-overlay"></div>

        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="about-hero-text"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="about-main-heading"
            >
              About Wheatron Technologies
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="about-main-subheading"
            >
              We work as a strategic partner, understanding your business challenges, designing smart solutions, and ensuring seamless execution.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="who-we-are-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="who-we-are-content"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="who-we-are-title"
            >
              Who We Are
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="who-we-are-desc"
            >
              Wheatron Technologies is a next-generation IT consultancy helping businesses unlock growth with the right technology choices. We work as a strategic partner, understanding your business challenges, designing smart solutions, and ensuring seamless execution.
            </motion.p>

            <div className="mission-vision-grid">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ y: -15 }}
                className="mission-card"
              >
                <h3 className="mv-title">Mission</h3>
                <p className="mv-desc">
                  To deliver intelligent, scalable, and efficient IT solutions that enable organizations to innovate faster, operate smarter, and achieve sustainable growth.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                whileHover={{ y: -15 }}
                className="vision-card"
              >
                <h3 className="mv-title">Vision</h3>
                <p className="mv-desc">
                  To become a globally trusted IT consulting partner known for quality, transparency, and technological excellence.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Journey - Horizontal Scroll Slider */}
      <section className="about-journey-slider">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="journey-slider-header"
          >
            <h2 className="journey-slider-title">Our Journey</h2>
            <p className="journey-slider-note">Scroll horizontally to explore</p>
          </motion.div>

          <div className="journey-slider-container">
            <div className="journey-slider-track">
              {journey.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="journey-milestone-card"
                >
                  {i < journey.length - 1 && <div className="journey-connector-line"></div>}
                  {/* <div className="journey-year-badge"> */}
                    {/* <span>{item.year}</span> */}
                  {/* </div> */}
                  <div className="journey-milestone-info">
                    <h3>{item.title}</h3>
                    {/* <p>{item.desc}</p> */}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values - Floating Glow Icons (No Box) */}
      <section className="about-values-floating">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="values-floating-header"
          >
            <h2 className="values-floating-title">Our Core Values</h2>
          </motion.div>

          <div className="values-floating-layout">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: i * 0.15, type: "spring", stiffness: 80 }}
                whileHover={{ scale: 1.15, y: -20 }}
                viewport={{ once: true }}
                className="value-floating-element"
              >
                <motion.div
                  className="value-glow-ring"
                  animate={{
                    boxShadow: [
                      "0 0 30px rgba(35,158,250,0.3)",
                      "0 0 60px rgba(76,201,240,0.5)",
                      "0 0 30px rgba(35,158,250,0.3)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats - Single Card with Background Image */}
      <section className="about-stats-bg">
        <div className="stats-bg-layer"></div>
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="stats-bg-title"
          >
            Trusted by Industry Leaders
          </motion.h2>

          <div className="stats-bg-numbers">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="stats-bg-item"
              >
                <h3 className="stats-bg-number">{stat.number}</h3>
                <p className="stats-bg-label">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="about-final-cta">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="final-cta-box"
          >
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's discuss how we can help you achieve your goals with technology.</p>
            <a href="/contact" className="final-cta-button">
              Get in Touch <ArrowRight className="final-arrow" />
            </a>
          </motion.div>
        </div>
      </section> */}

      {/* Certifications Section */}
<section className="certifications-section">
  <div className="container">
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="certs-header"
    >
      <h2 className="certs-title">Certifications & Compliance</h2>
      <p className="certs-subtitle">
        We maintain the highest standards of quality, security, and professionalism
      </p>
    </motion.div>

    <div className="certs-grid">
      <motion.div 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        whileHover={{ y: -20, scale: 1.05 }}
        viewport={{ once: true }}
        className="cert-card"
      >
        <div className="cert-check">✔</div>
        <h3>ISO 9001</h3>
        <p>Quality Management System</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        whileHover={{ y: -20, scale: 1.05 }}
        viewport={{ once: true }}
        className="cert-card"
      >
        <div className="cert-check">✔</div>
        <h3>ISO 27001</h3>
        <p>Information Security Management</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        whileHover={{ y: -20, scale: 1.05 }}
        viewport={{ once: true }}
        className="cert-card"
      >
        <div className="cert-check">✔</div>
        <h3>MSME Registered</h3>
        <p>Government of India Recognition</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        whileHover={{ y: -20, scale: 1.05 }}
        viewport={{ once: true }}
        className="cert-card"
      >
        <div className="cert-check">✔</div>
        <h3>Cloud Certified Team</h3>
        <p>AWS, Azure & GCP Experts</p>
      </motion.div>
    </div>
  </div>
</section>


    </div>
  );
}