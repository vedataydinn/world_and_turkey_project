import React from 'react';
import { generateLegendItems } from '../utils/mapUtils';

interface LegendProps {
  metric: 'internetAccess' | 'education' | 'growthRate';
  title: string;
}

const Legend: React.FC<LegendProps> = ({ metric, title }) => {
  const legendItems = generateLegendItems(metric);

  return (
    <div className="legend">
      <h4>{title}</h4>
      {legendItems.map((item, index) => (
        <div key={index} className="legend-item">
          <div
            className="legend-color"
            style={{ backgroundColor: item.color }}
          />
          <span>{`${item.value.toFixed(1)}%`}</span>
        </div>
      ))}
    </div>
  );
};

export default Legend;
