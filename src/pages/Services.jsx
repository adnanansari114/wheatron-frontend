import React from "react";
import { motion } from "framer-motion";
import './Services.css';

const journey = [
  { year: "2011", title: "Foundation", desc: "Started as a small team passionate about solving complex IT challenges with clean code." },
  { year: "2015", title: "Global Expansion", desc: "Began serving clients across USA, Europe, and Middle East with remote talent." },
  { year: "2018", title: "Cloud Expertise", desc: "Deep dive into AWS, Azure, GCP — building scalable and secure infrastructure." },
  { year: "2021", title: "AI Revolution", desc: "Launched dedicated AI/ML division for intelligent, data-driven solutions." },
  { year: "2024", title: "Enterprise Scale", desc: "Partnered with Fortune 500 companies for large-scale digital transformation." },
  { year: "Today", title: "Future Ready", desc: "14+ years of excellence in talent, technology, and transformation." }
];

export default function JourneySection() {
  return (
    <section className="journey-horizontal-scroll">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="journey-header"
        >
          <h2 className="journey-title">Our Journey</h2>
          <p className="journey-subtitle">From vision to global impact — scroll to explore</p>
        </motion.div>

        <div className="journey-scroll-container">
          <div className="journey-timeline">
            {journey.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                viewport={{ once: true }}
                className="journey-milestone"
              >
                {/* Connecting Line */}
                {i < journey.length - 1 && (
                  <div className="timeline-line"></div>
                )}

                {/* Year Circle */}
                <motion.div 
                  className="milestone-circle"
                  whileHover={{ scale: 1.15 }}
                >
                  <span className="milestone-year">{item.year}</span>
                </motion.div>

                {/* Content Card */}
                <motion.div 
                  className="milestone-content"
                  whileHover={{ y: -10 }}
                >
                  <h3 className="milestone-title">{item.title}</h3>
                  <p className="milestone-desc">{item.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}