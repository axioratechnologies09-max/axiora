import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiTerminal, FiDatabase, FiArrowRight } from 'react-icons/fi';
import ShinyText from './ShinyText';
import Lightfall from './Lightfall';
import './Hero.css';

const Hero = () => {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element && window.lenis) {
      window.lenis.scrollTo(element, { offset: -80, duration: 1.4 });
    } else if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <Lightfall
          dpr={1}
          colors={['#000000', '#222222', '#444444']}
          backgroundColor="#FAFAFA"
          speed={0.5}
          streakCount={3}
          streakWidth={1}
          streakLength={1.5}
          glow={0.5}
          density={0.7}
          twinkle={1}
          zoom={2}
          backgroundGlow={0}
          opacity={0.3}
          mouseInteraction={false}
        />
      </div>
      <div className="grid-pattern" style={{ zIndex: 1 }}></div>
      

      <div className="container hero-container">
        <div className="hero-content">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="hero-title">
              Building <br/>
              <ShinyText text="Next Generation" color="var(--gold-dark)" shineColor="#FFFFFF" speed={3} />
              <br/>
              Digital Experiences
            </h1>
            <p className="hero-subtitle">
              Premium web development, scalable software solutions, and full-stack engineering for ambitious brands.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => handleScrollTo('contact')}>Start a Project</button>
              <button className="btn btn-secondary" onClick={() => handleScrollTo('portfolio')}>View Work</button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="code-editor-ui glass">
            <div className="editor-header">
              <div className="dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="editor-title">app/core/engine.tsx</div>
            </div>
            <div className="editor-body">
              <div className="line"><span className="keyword">import</span> {'{'} <span className="variable">ScalableSystem</span> {'}'} <span className="keyword">from</span> <span className="string">'@axiora/core'</span>;</div>
              <div className="line"><span className="keyword">import</span> {'{'} <span className="variable">AI_Engine</span> {'}'} <span className="keyword">from</span> <span className="string">'@axiora/ai'</span>;</div>
              <div className="line"><br/></div>
              <div className="line"><span className="keyword">export default async function</span> <span className="function">Bootstrap</span>() {'{'}</div>
              <div className="line indent">
                <span className="keyword">const</span> system = <span className="keyword">await</span> ScalableSystem.<span className="function">init</span>({'{'}
              </div>
              <div className="line indent-2">architecture: <span className="string">'serverless'</span>,</div>
              <div className="line indent-2">performance: <span className="string">'edge-optimized'</span>,</div>
              <div className="line indent-2">reliability: <span className="number">99.999</span></div>
              <div className="line indent">{'}'});</div>
              <div className="line"><br/></div>
              <div className="line indent">
                <span className="keyword">return</span> system.<span className="function">deploy</span>();
              </div>
              <div className="line">{'}'}</div>
            </div>
            
            {/* Floating Elements around editor */}
            <motion.div 
              className="floating-badge badge-1 glass"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <FiCode className="badge-icon text-gold" />
              <span>Clean Code</span>
            </motion.div>
            
            <motion.div 
              className="floating-badge badge-2 glass"
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
            >
              <FiTerminal className="badge-icon" />
              <span>CLI Native</span>
            </motion.div>
            
            <motion.div 
              className="floating-badge badge-3 glass"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
            >
              <FiDatabase className="badge-icon" />
              <span>Edge DB</span>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
