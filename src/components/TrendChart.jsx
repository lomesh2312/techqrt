import React from 'react';

const TrendChart = ({ data, width = 80, height = 30 }) => {
  if (!data || data.length === 0) return null;

  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * width;
    const y = height - ((value - min) / range) * height;
    return `${x},${y}`;
  }).join(' ');

  // Determine trend direction
  const firstValue = data[0];
  const lastValue = data[data.length - 1];
  const isIncreasing = lastValue > firstValue;
  const strokeColor = isIncreasing ? '#10B981' : '#EF4444'; // Green for up, red for down
  const fillColor = isIncreasing ? '#10B98120' : '#EF444420'; // Light green/red with transparency

  return (
    <div className="inline-block">
      <svg width={width} height={height} className="overflow-visible">
        {/* Area fill */}
        <polygon
          points={`0,${height} ${points} ${width},${height}`}
          fill={fillColor}
          className="transition-all duration-300"
        />
        {/* Line */}
        <polyline
          points={points}
          fill="none"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-all duration-300"
        />
        {/* Data points */}
        {data.map((value, index) => {
          const x = (index / (data.length - 1)) * width;
          const y = height - ((value - min) / range) * height;
          return (
            <circle
              key={index}
              cx={x}
              cy={y}
              r="2"
              fill={strokeColor}
              className="opacity-0 hover:opacity-100 transition-opacity duration-200"
            />
          );
        })}
      </svg>
    </div>
  );
};

export default TrendChart;