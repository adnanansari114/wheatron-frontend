import React from "react";
import { motion } from "framer-motion";
import { Zap, Shield, Globe, CheckCircle } from "lucide-react";


const features = [
  { icon: Zap, title: "15+ Years of Multidisciplinary IT Expertise" },
  { icon: Shield, title: "Trusted by Startups, SMEs, and Global Enterprises" },
  { icon: Globe, title: "End-to-End Consulting: Strategy → Execution → Support" },
  { icon: CheckCircle, title: "Cost-Optimized, High-Quality Delivery" },
  { icon: Zap, title: "Transparent Processes & Strong Communication" },
];

export default function FeaturesSection() {
  return (
    <section className="features-open-light">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="features-header"
        >
          <h2 className="features-title">Why Choose Wheatron Technologies?</h2>
        </motion.div>

        <div className="features-floating-list">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isEven ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2, duration: 0.9, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: isEven ? 5 : -5 }}
                className={`feature-floating-item ${isEven ? "left-float" : "right-float"}`}
              >
                <motion.div 
                  className="feature-icon-glow"
                  animate={{ 
                    boxShadow: [
                      "0 0 20px rgba(35,158,250,0.3)",
                      "0 0 40px rgba(76,201,240,0.5)",
                      "0 0 20px rgba(35,158,250,0.3)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Icon size={60} />
                </motion.div>

                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 + 0.3 }}
                >
                  {feature.title}
                </motion.h3>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 + 0.5 }}
                >
                  {/* {feature.desc} */}
                </motion.p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}