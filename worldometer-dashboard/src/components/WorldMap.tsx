import React from 'react';
import worldMapImage from '../assets/world-map.png';

interface WorldMapProps {
  data: any; // We'll define proper types later
}

const WorldMap: React.FC<WorldMapProps> = ({ data }) => {
  return (
    <div className="static-map-container">
      <div className="map-header">
        <h2>Global Internet Access & Education Levels</h2>
        <div className="global-stats">
          <div className="stat-item">
            <label>Global Internet Access Rate:</label>
            <span>{data?.internetStats?.accessRate || '59.5'}%</span>
          </div>
          <div className="stat-item">
            <label>Global Literacy Rate:</label>
            <span>{data?.educationStats?.literacyRate || '86.5'}%</span>
          </div>
        </div>
      </div>
      <div className="static-map">
        <img 
          src={worldMapImage} 
          alt="World Map showing internet access and education levels" 
          className="world-map-image"
        />
        <div className="map-overlay">
          <div className="legend">
            <h3>Legend</h3>
            <div className="legend-item">
              <span className="color-box high"></span>
              <span>High Access (&gt;80%)</span>
            </div>
            <div className="legend-item">
              <span className="color-box medium"></span>
              <span>Medium Access (40-80%)</span>
            </div>
            <div className="legend-item">
              <span className="color-box low"></span>
              <span>Low Access (&lt;40%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

