import React from "react";
import { motion } from "framer-motion";
import { Brain, Cloud, Code, Shield, Zap, Users } from "lucide-react";

const services = [
  { icon: Brain, title: "Artificial Intelligence", desc: "Machine learning, NLP, computer vision for intelligent applications" },
  { icon: Cloud, title: "Cloud Solutions", desc: "AWS, Azure, GCP — scalable & secure infrastructure" },
  { icon: Code, title: "Custom Development", desc: "Web, mobile, and enterprise applications built to spec" },
  { icon: Users, title: "Staff Augmentation", desc: "Vetted senior talent with seamless onboarding" },
  { icon: Shield, title: "Cyber Security", desc: "Proactive protection and compliance expertise" },
  { icon: Zap, title: "DevOps & Automation", desc: "CI/CD pipelines, IaC, and monitoring" }
];

export default function ServicesSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.7,
        ease: "easeOut"
      }
    }),
    hover: {
      y: -16,
      scale: 1.05,
      transition: { duration: 0.5 }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section className="services-premium">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="services-header"
        >
          <h2 className="services-title">Our Services</h2>
          <p className="services-subtitle">
            End-to-end digital solutions powered by expertise and innovation
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                variants={cardVariants}
                className="service-card"
              >
                <motion.div 
                  className="service-icon-wrapper"
                  variants={iconVariants}
                >
                  <Icon size={48} />
                </motion.div>

                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}