// PieChart.jsx

import React, { useMemo, useState } from "react";
import * as d3 from "d3";
import styles from "./PieChart.module.css";

const MARGIN_X = 150;
const MARGIN_Y = 50;
const INFLEXION_PADDING = 20;

const colors = [
  "#e0ac2b",
  "#e85252",
  "#6689c6",
  "#9a6fb0",
  "#a53253",
  "#69b3a2",
];

const PieChart = ({ width, height, data }) => {
  const [highlightedIndex, setHighlightedIndex] = useState(null);

  const radius = Math.min(width - 2 * MARGIN_X, height - 2 * MARGIN_Y) / 2;

  const pie = useMemo(() => {
    const pieGenerator = d3.pie().value((d) => d.value);
    return pieGenerator(data);
  }, [data]);

  const arcGenerator = d3.arc();

  return (
    <svg width={width} height={height} style={{ display: "inline-block" }}>
      <g
        transform={`translate(${width / 2}, ${height / 2})`}
        className={styles.container}
      >
        {pie.map((grp, i) => {
          const sliceInfo = {
            innerRadius: 0,
            outerRadius: radius,
            startAngle: grp.startAngle,
            endAngle: grp.endAngle,
          };

          const centroid = arcGenerator.centroid(sliceInfo);
          const slicePath = arcGenerator(sliceInfo);

          const isHighlighted = i === highlightedIndex;
          const opacity = isHighlighted ? 1 : 0.7;

          // Calculate the position for the arrow start
          const arrowStart = arcGenerator.centroid({
            innerRadius: radius + INFLEXION_PADDING,
            outerRadius: radius + INFLEXION_PADDING,
            startAngle: (grp.startAngle + grp.endAngle) / 2,
            endAngle: (grp.startAngle + grp.endAngle) / 2,
          });

          // Calculate the position for the arrow end
          const arrowEnd = arcGenerator.centroid({
            innerRadius: radius + INFLEXION_PADDING + 30,
            outerRadius: radius + INFLEXION_PADDING + 30,
            startAngle: (grp.startAngle + grp.endAngle) / 2,
            endAngle: (grp.startAngle + grp.endAngle) / 2,
          });

          // Calculate the position for the data item
          const dataItemPosition = arcGenerator.centroid({
            innerRadius: radius + INFLEXION_PADDING + 50,
            outerRadius: radius + INFLEXION_PADDING + 50,
            startAngle: (grp.startAngle + grp.endAngle) / 2,
            endAngle: (grp.startAngle + grp.endAngle) / 2,
          });

          // Calculate the position for the text showing number and percentage
          const textPosition = arcGenerator.centroid({
            innerRadius: radius / 2,
            outerRadius: radius / 2,
            startAngle: (grp.startAngle + grp.endAngle) / 2,
            endAngle: (grp.startAngle + grp.endAngle) / 2,
          });

          return (
            <g
              key={i}
              onMouseEnter={() => setHighlightedIndex(i)}
              onMouseLeave={() => setHighlightedIndex(null)}
              style={{ cursor: "pointer" }}
            >
              {/* Pie slice */}
              <path
                d={slicePath}
                fill={colors[i]}
                style={{
                  transition: "fill 0.3s",
                  fillOpacity: opacity,
                }}
              />
              {/* Arrow line */}
              <line
                x1={arrowStart[0]}
                y1={arrowStart[1]}
                x2={arrowEnd[0]}
                y2={arrowEnd[1]}
                stroke="#666"
                strokeWidth={1}
                markerEnd="url(#arrowhead)"
                style={{
                  opacity: opacity,
                  transition: "opacity 0.3s",
                }}
              />
              {/* Data item */}
              <text
                x={dataItemPosition[0]}
                y={dataItemPosition[1]}
                textAnchor="middle"
                dy=".35em"
                fontSize={14}
                fontWeight="bold"
                fill={isHighlighted ? "#000" : "#666"}
              >
                {grp.data.name}
              </text>
              {/* Text showing number and percentage */}
              <text
                x={textPosition[0]}
                y={textPosition[1]}
                textAnchor="middle"
                dy=".35em"
                fontSize={12}
                fill={isHighlighted ? "#000" : "#666"}
              >
                {`${grp.data.value} (${(
                  ((grp.endAngle - grp.startAngle) / (2 * Math.PI)) *
                  100
                ).toFixed(1)}%)`}
              </text>
            </g>
          );
        })}
        {/* Arrowhead marker */}
        <defs>
          <marker
            id="arrowhead"
            markerWidth="4"
            markerHeight="4"
            refX="2"
            refY="2"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <polygon points="0,0 0,4 4,2" fill="#666" />
          </marker>
        </defs>
      </g>
    </svg>
  );
};

export default PieChart;
