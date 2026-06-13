import React from 'react';
import { 
  SiReact, SiJavascript, SiHtml5, SiCss, SiFramer, 
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, 
  SiVercel, SiDocker, SiNginx, SiGithubactions 
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import './TechStack.css';

const techs = [
  { name: 'React.js', icon: <SiReact /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'HTML5', icon: <SiHtml5 /> },
  { name: 'CSS3', icon: <SiCss /> },
  { name: 'Framer', icon: <SiFramer /> },
  { name: 'Node.js', icon: <SiNodedotjs /> },
  { name: 'Express.js', icon: <SiExpress /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'AWS', icon: <FaAws /> },
  { name: 'Vercel', icon: <SiVercel /> },
  { name: 'Docker', icon: <SiDocker /> },
  { name: 'Nginx', icon: <SiNginx /> },
  { name: 'GitHub Actions', icon: <SiGithubactions /> },
];

const TechStack = () => {
  return (
    <section className="techstack-section section">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-tag glow-text">Core Technologies</span>
        </div>
      </div>
      
      <div className="marquee-container">
        <div className="marquee-content">
          {techs.map((tech, index) => (
            <div key={`tech1-${index}`} className="tech-item">
              <span className="tech-icon">{tech.icon}</span>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
          {/* Duplicate for infinite scroll */}
          {techs.map((tech, index) => (
            <div key={`tech2-${index}`} className="tech-item">
              <span className="tech-icon">{tech.icon}</span>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
