import { scaleLinear } from 'd3-scale';
import { ColorScale, InternetStats, EducationStats } from '../types';

// Color scales for different metrics
export const colorScales: { [key: string]: ColorScale } = {
  internetAccess: {
    min: 0,
    max: 100,
    colors: ['#fee5d9', '#fcae91', '#fb6a4a', '#de2d26', '#a50f15']
  },
  education: {
    min: 0,
    max: 100,
    colors: ['#edf8e9', '#bae4b3', '#74c476', '#31a354', '#006d2c']
  },
  growthRate: {
    min: -5,
    max: 20,
    colors: ['#eff3ff', '#bdd7e7', '#6baed6', '#3182bd', '#08519c']
  }
};

// Create a color scale based on data values
export const getColorScale = (
  metric: 'internetAccess' | 'education' | 'growthRate',
  values: number[]
) => {
  const scale = colorScales[metric];
  const colorScale = scaleLinear<string>()
    .domain([scale.min, scale.max])
    .range([scale.colors[0], scale.colors[scale.colors.length - 1]]);

  return colorScale;
};

// Get color for a specific value
export const getColor = (
  value: number,
  metric: 'internetAccess' | 'education' | 'growthRate'
): string => {
  const scale = colorScales[metric];
  const colorScale = getColorScale(metric, [scale.min, scale.max]);
  return colorScale(value);
};

// Format percentage values
export const formatPercentage = (value: number): string => {
  return `${value.toFixed(1)}%`;
};

// Process data for map visualization
export const processMapData = (
  internetStats: InternetStats[],
  educationStats: EducationStats[]
) => {
  // Combine internet and education data for each country
  const processedData = new Map();
  
  internetStats.forEach(stat => {
    if (!processedData.has(stat.country)) {
      processedData.set(stat.country, {
        internetStats: stat,
        educationStats: null
      });
    } else {
      processedData.get(stat.country).internetStats = stat;
    }
  });

  educationStats.forEach(stat => {
    if (!processedData.has(stat.country)) {
      processedData.set(stat.country, {
        internetStats: null,
        educationStats: stat
      });
    } else {
      processedData.get(stat.country).educationStats = stat;
    }
  });

  return processedData;
};

// Calculate statistics for legend
export const calculateStatistics = (values: number[]) => {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const avg = values.reduce((a, b) => a + b, 0) / values.length;

  return {
    min: min,
    max: max,
    average: avg
  };
};

// Generate legend items
export const generateLegendItems = (
  metric: 'internetAccess' | 'education' | 'growthRate'
) => {
  const scale = colorScales[metric];
  const step = (scale.max - scale.min) / (scale.colors.length - 1);
  
  return scale.colors.map((color, index) => ({
    color,
    value: scale.min + step * index
  }));
};
