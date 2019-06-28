import React from 'react';
import icons from './icons';

const Icon = ({
  width = '3rem',
  height = '3rem',
  viewBox = '0 0 20 20',
  color = 'currentColor',
  title,
  children,
  type,
}) => (
  <svg width={width} height={height} viewBox={viewBox}>
    <title>{title}</title>
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
        <stop stopColor="#F1541B" offset="0%"></stop>
        <stop stopColor="#DF2A0B" offset="100%"></stop>
      </linearGradient>
    </defs>
    {children || icons(type)}
    <style>{`
      svg {
        vertical-align: middle;
        fill: ${color};
      }
      svg g.animate path {
        transition: all .6s;
        will-change: all;
      }
    `}</style>
  </svg>
);

export default Icon;
