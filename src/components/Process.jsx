import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import './Process.css';

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "Understand business goals and requirements.",
    tasks: ["Market Research & Analysis", "Competitive Benchmarking", "Project Scope Definition", "Technical Feasibility Study"]
  },
  {
    num: "02",
    title: "Design",
    desc: "Create modern user experiences and architecture.",
    tasks: ["Wireframing & Prototyping", "UI/UX Design Systems", "Interactive Mockups", "Brand Identity Integration"]
  },
  {
    num: "03",
    title: "Develop",
    desc: "Build scalable and optimized applications.",
    tasks: ["Frontend Engineering", "Backend & API Development", "Database Architecture", "Performance Optimization"]
  },
  {
    num: "04",
    title: "Launch",
    desc: "Deploy, monitor, and grow.",
    tasks: ["Quality Assurance Testing", "CI/CD Pipeline Setup", "Cloud Deployment", "Post-Launch Monitoring"]
  }
];

const Process = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="process-section section">
      <div className="container">
        <div className="process-header text-center">
          <span className="section-tag glow-text">How We Work</span>
          <h2 className="section-title">Our <span>Process</span></h2>
        </div>

        <div className="process-timeline-container" ref={containerRef}>
          <div className="timeline-track">
            <motion.div className="timeline-fill" style={{ height: lineHeight }}></motion.div>
          </div>

          <div className="process-steps">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                className="process-step-item"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="step-content glass glow">
                  <span className="step-num text-gold">{step.num}</span>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.desc}</p>
                  {step.tasks && (
                    <ul className="step-details">
                      {step.tasks.map((task, i) => (
                        <li key={i}>
                          <FaCheckCircle className="step-icon" /> {task}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
