import React, { useState } from 'react';
import './Dock.css';

export default function Dock({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const middleIndex = Math.floor(items.length / 2);
  const leftItems = items.slice(0, middleIndex);
  const centerItem = items[middleIndex];
  const rightItems = items.slice(middleIndex + 1);

  const handleItemClick = (item, index) => {
    setActiveIndex(index);
    if (item.onClick) item.onClick();
  };

  return (
    <div className="mobile-tab-bar-wrapper">
      {/* Dark background with curved cutout */}
      <div className="mobile-tab-bar-bg" />

      {/* Tab items row */}
      <div className="mobile-tab-bar-content">
        {leftItems.map((item, i) => (
          <div
            key={i}
            className={`tab-item ${activeIndex === i ? 'active' : ''}`}
            onClick={() => handleItemClick(item, i)}
          >
            <div className="tab-icon">{item.icon}</div>
            <span className="tab-label">{item.label}</span>
          </div>
        ))}

        {/* Empty center slot to space around the FAB */}
        <div className="tab-item center-placeholder" />

        {rightItems.map((item, i) => {
          const idx = middleIndex + 1 + i;
          return (
            <div
              key={idx}
              className={`tab-item ${activeIndex === idx ? 'active' : ''}`}
              onClick={() => handleItemClick(item, idx)}
            >
              <div className="tab-icon">{item.icon}</div>
              <span className="tab-label">{item.label}</span>
            </div>
          );
        })}
      </div>

      {/* FAB — direct child of wrapper so positioning is simple */}
      <div
        className={`center-fab ${activeIndex === middleIndex ? 'active' : ''}`}
        onClick={() => handleItemClick(centerItem, middleIndex)}
      >
        {centerItem.icon}
      </div>
    </div>
  );
}
