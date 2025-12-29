import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import statsbgone from "../../public/images/statsbgone.jpg"; // Image import for 100% loading

const stats = [
  { value: 200, suffix: "+", label: "Happy Clients" },
  { value: 98, suffix: "%", label: "Retention Rate" },
  { value: 18, suffix: "+", label: "Years Experience" },
  // { value: 500, suffix: "+", label: "Projects Delivered" }
];

export default function StatsSection() {
  const countersRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            const target = +counter.dataset.target;
            const suffix = counter.dataset.suffix || "";
            let count = 0;
            const increment = target / 100;

            const timer = setInterval(() => {
              count += increment;
              if (count >= target) {
                counter.textContent = target + suffix;
                clearInterval(timer);
              } else {
                counter.textContent = Math.ceil(count) + suffix;
              }
            }, 20);

            observer.unobserve(counter);
          }
        });
      },
      { threshold: 0.4 }
    );

    countersRef.current.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-full-bg">
      {/* Full Background Image */}
      <div 
        className="stats-bg-full" 
        style={{ backgroundImage: `url(${statsbgone})` }}
      ></div>

      {/* Blur + Low Opacity Overlay */}
      <div className="stats-blur-overlay"></div>

      <div className="container">
        <div className="stats-row-content">
          {/* Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="stats-title"
          >
            Our Impact in Numbers
          </motion.h2>

          {/* 4 Stats in One Row */}
          <div className="stats-row">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                viewport={{ once: true }}
                className="stat-item"
              >
                <h3
                  ref={(el) => (countersRef.current[index] = el)}
                  data-target={stat.value}
                  data-suffix={stat.suffix}
                  className="stat-value"
                >
                  0{stat.suffix}
                </h3>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}