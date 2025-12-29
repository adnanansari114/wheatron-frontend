import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Brain, 
  Code, 
  Smartphone, 
  Cloud, 
  Bot, 
  Users,
  ChevronDown
} from "lucide-react";
import "./Services.css";

const servicesData = [
  {
    icon: Brain,
    title: "IT Consulting & Advisory",
    desc: "We provide strategic IT roadmaps, architecture design, and digital transformation consulting to help organizations make smarter technology decisions.",
    features: ["Technology roadmap planning", "Digital transformation strategy", "Architecture design", "IT cost optimization", "Product consulting for startups"]
  },
  {
    icon: Code,
    title: "Custom Software Development",
    desc: "From SaaS platforms to enterprise web applications, we build scalable, secure, and modern digital products tailored to business needs.",
    features: ["Web applications", "Enterprise solutions", "SaaS platforms", "API development & integrations"]
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "We design and develop intuitive, high-performance Android, iOS, and hybrid apps for startups and enterprises.",
    features: ["iOS & Android native apps", "Hybrid & cross-platform apps", "UI/UX design & prototyping"]
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Our team helps you migrate, automate, and optimize using AWS, Azure, and GCP technologies.",
    features: ["Cloud migration (AWS, Azure, GCP)", "CI/CD automation", "Infrastructure setup & optimization", "Monitoring & scalability solutions"]
  },
  {
    icon: Bot,
    title: "Data, AI & Automation",
    desc: "We implement AI-powered solutions including chatbots, automation workflows, and predictive analytics for smarter business operations.",
    features: ["AI model integration & automation", "Data engineering & analytics", "Chatbot & process automation", "Predictive insights for business"]
  },
  {
    icon: Users,
    title: "Staff Augmentation & Dedicated Teams",
    desc: "Hire expert developers, designers, QA engineers, DevOps professionals, and project managers—available on flexible contracts.",
    features: ["Full-time & contract developers", "Remote/hybrid/on-site resources", "Tech stacks: React, Node, Python, Java, DevOps, Mobile, QA, PM, etc.", "Minimum 40–80% cost advantage vs in-house hiring"]
  }
];

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  const toggleService = (index) => {
    setActiveService(activeService === index ? null : index);
  };

  return (
    <div className="services_main_container">
      {/* Hero */}
      {/* <section className="services_hero_section">
        <div className="services_hero_overlay"></div>

        <div className="container">
          <motion.div className="services_hero_text_wrapper">
            <motion.h1 className="services_page_title">
              Our Services
            </motion.h1>
            <motion.p className="services_page_subtitle">
              Innovative solutions crafted for your success
            </motion.p>
          </motion.div>
        </div>
      </section> */}
      <section className="services_hero_section">
        {/* Video Background */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="services_hero_video"
        >
          <source src="/images/service.mp4" type="video/mp4" />
          Your browser does not support video.
        </video>

        {/* Overlay for readability */}
        <div className="services_hero_overlay"></div>

        <div className="container">
          <motion.div className="services_hero_text_wrapper">
            <motion.h1 className="services_page_title">
              Our Services
            </motion.h1>
            <motion.p className="services_page_subtitle">
              Innovative solutions crafted for your success
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Accordion Panels */}
      <section className="services_accordion_area">
        <div className="container">
          <div className="services_panels_wrapper">
            {servicesData.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeService === index;

              return (
                <motion.div
                  key={index}
                  layout
                  onClick={() => toggleService(index)}
                  className={`service_accordion_panel ${isActive ? "panel_expanded" : ""}`}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <div className="panel_header_section">
                    <motion.div 
                      className="panel_icon_container"
                      animate={{ rotate: isActive ? 360 : 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      <Icon size={48} />
                    </motion.div>

                    <h3 className="panel_service_title">{service.title}</h3>

                    <motion.div 
                      className="panel_expand_icon"
                      animate={{ rotate: isActive ? 180 : 0 }}
                    >
                      <ChevronDown size={28} />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.6 }}
                        className="panel_expanded_content"
                      >
                        <p className="panel_service_description">{service.desc}</p>
                        <ul className="panel_feature_list">
                          {service.features.map((feature, fIdx) => (
                            <motion.li
                              key={fIdx}
                              initial={{ opacity: 0, x: -30 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: fIdx * 0.1 }}
                            >
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}