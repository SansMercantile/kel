import React, { useState, useEffect, useRef } from 'react';
import { INITIAL_METRICS } from '../kelData';

// Ported from initializeMetrics/renderMetricsDashboard/updateMetrics and the three
// drawXChart methods in js/kel-agricultural.js — same real metric data, same 5s
// update cadence, same canvas-drawing math (no charting library, matches the original).

function drawLineChart(ctx, data, options) {
  const { width, height } = ctx.canvas;
  const padding = 40;
  const chartWidth = width - 2 * padding;
  const chartHeight = height - 2 * padding;
  ctx.clearRect(0, 0, width, height);
  ctx.strokeStyle = '#ddd';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(padding, padding);
  ctx.lineTo(padding, height - padding);
  ctx.lineTo(width - padding, height - padding);
  ctx.stroke();
  ctx.strokeStyle = options.color;
  ctx.lineWidth = 2;
  ctx.beginPath();
  data.forEach((point, index) => {
    const x = padding + (index / (data.length - 1)) * chartWidth;
    const y = height - padding - (point.value / 100) * chartHeight;
    if (index === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.stroke();
  ctx.fillStyle = '#333';
  ctx.font = '16px Arial';
  ctx.textAlign = 'center';
  ctx.fillText(options.title, width / 2, 20);
}

function drawBarChart(ctx, data, options) {
  const { width, height } = ctx.canvas;
  const padding = 40;
  const chartWidth = width - 2 * padding;
  const chartHeight = height - 2 * padding;
  const barWidth = (chartWidth / data.length) * 0.8;
  const barSpacing = (chartWidth / data.length) * 0.2;
  ctx.clearRect(0, 0, width, height);
  ctx.strokeStyle = '#ddd';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(padding, padding);
  ctx.lineTo(padding, height - padding);
  ctx.lineTo(width - padding, height - padding);
  ctx.stroke();
  data.forEach((item, index) => {
    const x = padding + index * (barWidth + barSpacing) + barSpacing / 2;
    const barHeight = (item.value / 100) * chartHeight;
    const y = height - padding - barHeight;
    ctx.fillStyle = options.color;
    ctx.fillRect(x, y, barWidth, barHeight);
    ctx.fillStyle = '#666';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(item.label, x + barWidth / 2, height - padding + 20);
  });
  ctx.fillStyle = '#333';
  ctx.font = '16px Arial';
  ctx.textAlign = 'center';
  ctx.fillText(options.title, width / 2, 20);
}

function drawPieChart(ctx, data, options) {
  const { width, height } = ctx.canvas;
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = Math.min(width, height) / 2 - 40;
  ctx.clearRect(0, 0, width, height);
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = -Math.PI / 2;
  data.forEach((item, index) => {
    const sliceAngle = (item.value / total) * 2 * Math.PI;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
    ctx.lineTo(centerX, centerY);
    ctx.fillStyle = options.colors[index % options.colors.length];
    ctx.fill();
    const labelAngle = currentAngle + sliceAngle / 2;
    const labelX = centerX + Math.cos(labelAngle) * (radius * 0.7);
    const labelY = centerY + Math.sin(labelAngle) * (radius * 0.7);
    ctx.fillStyle = 'white';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(`${Math.round((item.value / total) * 100)}%`, labelX, labelY);
    currentAngle += sliceAngle;
  });
  ctx.fillStyle = '#333';
  ctx.font = '16px Arial';
  ctx.textAlign = 'center';
  ctx.fillText(options.title, width / 2, 20);
}

function generateCropGrowthData() {
  const data = [];
  for (let i = 0; i < 30; i++) {
    data.push({ day: i + 1, value: Math.min(100, 15 + i * 2.5 + Math.random() * 10) });
  }
  return data;
}

function zonePerformanceData() {
  return [
    { label: 'Lab', value: 92 + Math.random() * 8 },
    { label: 'Greenhouse', value: 88 + Math.random() * 12 },
    { label: 'Harvest', value: 95 + Math.random() * 5 },
    { label: 'Processing', value: 90 + Math.random() * 10 },
    { label: 'Factory', value: 93 + Math.random() * 7 },
    { label: 'Storage', value: 96 + Math.random() * 4 },
  ];
}

function resourceUsageData() {
  return [
    { label: 'Water', value: 35 },
    { label: 'Energy', value: 25 },
    { label: 'Fertilizer', value: 20 },
    { label: 'Labor', value: 15 },
    { label: 'Other', value: 5 },
  ];
}

export function MetricsDashboard() {
  const [metrics, setMetrics] = useState(INITIAL_METRICS);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) =>
        prev.map((m) => {
          const change = (Math.random() - 0.5) * m.value * 0.02;
          const value = Math.max(0, m.value + change);
          const trendChange = Math.random() > 0.5 ? '+' : '-';
          const trendValue = (Math.random() * 5).toFixed(1);
          return { ...m, value, trend: `${trendChange}${trendValue}%` };
        })
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="kel-metrics-dashboard" className="kel-grid kel-grid-4">
      {metrics.map((m) => (
        <div className="kel-metric" key={m.key}>
          <span className="kel-metric-value">{Math.round(m.value)}{m.unit}</span>
          <span className="kel-metric-label">{m.label}</span>
          <div className={`kel-metric-trend ${m.trend.startsWith('+') ? 'kel-trend-positive' : 'kel-trend-negative'}`}>
            {m.trend}
          </div>
        </div>
      ))}
    </div>
  );
}

export function KelCharts() {
  const cropRef = useRef(null);
  const zoneRef = useRef(null);
  const resourceRef = useRef(null);

  useEffect(() => {
    const draw = () => {
      if (cropRef.current) {
        drawLineChart(cropRef.current.getContext('2d'), generateCropGrowthData(), {
          title: 'Crop Growth Progress', color: '#4CAF50',
        });
      }
      if (zoneRef.current) {
        drawBarChart(zoneRef.current.getContext('2d'), zonePerformanceData(), {
          title: 'Zone Performance', color: '#2E7D32',
        });
      }
      if (resourceRef.current) {
        drawPieChart(resourceRef.current.getContext('2d'), resourceUsageData(), {
          title: 'Resource Usage Distribution',
          colors: ['#2E7D32', '#4CAF50', '#8BC34A', '#FFC107', '#FF9800'],
        });
      }
    };
    draw();
    const interval = setInterval(draw, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="kel-card">
        <h3>Crop Growth Progress</h3>
        <canvas ref={cropRef} id="kel-crop-growth-chart" width="300" height="200" />
      </div>
      <div className="kel-card">
        <h3>Zone Performance</h3>
        <canvas ref={zoneRef} id="kel-zone-performance-chart" width="300" height="200" />
      </div>
      <div className="kel-card">
        <h3>Resource Usage</h3>
        <canvas ref={resourceRef} id="kel-resource-usage-chart" width="300" height="200" />
      </div>
    </>
  );
}

