"use client";

import { useEffect, useRef } from "react";

export default function HeroVisuals() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Animate floating elements
    const style = document.createElement("style");
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }
      
      @keyframes rotate {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      
      @keyframes pulse-glow {
        0%, 100% { r: 3px; opacity: 0.6; }
        50% { r: 5px; opacity: 0.2; }
      }
      
      @keyframes line-draw {
        0% { stroke-dashoffset: 1000; }
        100% { stroke-dashoffset: 0; }
      }
      
      .float-shape-1 { animation: float 6s ease-in-out infinite; }
      .float-shape-2 { animation: float 7s ease-in-out infinite 1s; }
      .float-shape-3 { animation: float 8s ease-in-out infinite 2s; }
      .rotating { animation: rotate 20s linear infinite; }
      .pulse { animation: pulse-glow 3s ease-in-out infinite; }
      .code-panel { animation: float 5s ease-in-out infinite; }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a52] via-[#0B1220] to-[#0B1220] rounded-3xl opacity-50" />

      <svg
        ref={svgRef}
        viewBox="0 0 500 500"
        className="w-full h-full max-w-md max-h-md"
        style={{ filter: "drop-shadow(0 0 40px rgba(59, 130, 246, 0.15))" }}
      >
        {/* Background circles */}
        <circle
          cx="250"
          cy="250"
          r="180"
          fill="none"
          stroke="#3B82F6"
          strokeWidth="0.5"
          opacity="0.2"
        />
        <circle
          cx="250"
          cy="250"
          r="140"
          fill="none"
          stroke="#60A5FA"
          strokeWidth="0.5"
          opacity="0.15"
        />

        {/* Floating geometric shapes */}
        {/* Cube 1 */}
        <g className="float-shape-1">
          <rect
            x="80"
            y="100"
            width="60"
            height="60"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="2"
          />
          <line x1="80" y1="100" x2="100" y2="85" stroke="#3B82F6" strokeWidth="2" />
          <line x1="140" y1="100" x2="160" y2="85" stroke="#3B82F6" strokeWidth="2" />
          <line x1="100" y1="85" x2="160" y2="85" stroke="#3B82F6" strokeWidth="2" />
          <line x1="100" y1="85" x2="120" y2="145" stroke="#3B82F6" strokeWidth="2" />
          <line x1="160" y1="85" x2="180" y2="145" stroke="#3B82F6" strokeWidth="2" />
        </g>

        {/* Cube 2 */}
        <g className="float-shape-2">
          <rect
            x="330"
            y="150"
            width="50"
            height="50"
            fill="none"
            stroke="#60A5FA"
            strokeWidth="2"
          />
          <line x1="330" y1="150" x2="345" y2="135" stroke="#60A5FA" strokeWidth="2" />
          <line x1="380" y1="150" x2="395" y2="135" stroke="#60A5FA" strokeWidth="2" />
          <line x1="345" y1="135" x2="395" y2="135" stroke="#60A5FA" strokeWidth="2" />
        </g>

        {/* Central sphere with network */}
        <g className="rotating">
          <circle
            cx="250"
            cy="250"
            r="40"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="1.5"
            opacity="0.6"
          />
          <circle
            cx="250"
            cy="250"
            r="25"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="1.5"
            opacity="0.8"
          />
        </g>

        {/* Network nodes */}
        <g className="nodes">
          {/* Top node */}
          <circle cx="250" cy="120" r="4" fill="#60A5FA" opacity="0.8" />
          <circle cx="250" cy="120" r="6" className="pulse" fill="#60A5FA" />

          {/* Right node */}
          <circle cx="370" cy="250" r="4" fill="#38BDF8" opacity="0.8" />
          <circle cx="370" cy="250" r="6" className="pulse" fill="#38BDF8" />

          {/* Bottom node */}
          <circle cx="250" cy="380" r="4" fill="#3B82F6" opacity="0.8" />
          <circle cx="250" cy="380" r="6" className="pulse" fill="#3B82F6" />

          {/* Left node */}
          <circle cx="130" cy="250" r="4" fill="#60A5FA" opacity="0.8" />
          <circle cx="130" cy="250" r="6" className="pulse" fill="#60A5FA" />
        </g>

        {/* Connection lines */}
        <g stroke="#3B82F6" strokeWidth="1" opacity="0.4" strokeDasharray="1000">
          <line x1="250" y1="120" x2="370" y2="250" />
          <line x1="370" y1="250" x2="250" y2="380" />
          <line x1="250" y1="380" x2="130" y2="250" />
          <line x1="130" y1="250" x2="250" y2="120" />
        </g>

        {/* Code editor panel (bottom right) */}
        <g className="code-panel">
          <rect
            x="300"
            y="350"
            width="140"
            height="100"
            rx="8"
            fill="#14243D"
            stroke="#3B82F6"
            strokeWidth="1.5"
            opacity="0.9"
          />
          <line x1="300" y1="370" x2="440" y2="370" stroke="#263B59" strokeWidth="1" />
          <circle cx="310" cy="360" r="2" fill="#60A5FA" />
          <circle cx="320" cy="360" r="2" fill="#60A5FA" />
          <circle cx="330" cy="360" r="2" fill="#60A5FA" />

          {/* Code lines */}
          <line
            x1="310"
            y1="380"
            x2="350"
            y2="380"
            stroke="#60A5FA"
            strokeWidth="1"
            opacity="0.7"
          />
          <line
            x1="310"
            y1="390"
            x2="360"
            y2="390"
            stroke="#38BDF8"
            strokeWidth="1"
            opacity="0.7"
          />
          <line
            x1="310"
            y1="400"
            x2="340"
            y2="400"
            stroke="#60A5FA"
            strokeWidth="1"
            opacity="0.7"
          />
          <line
            x1="310"
            y1="410"
            x2="355"
            y2="410"
            stroke="#38BDF8"
            strokeWidth="1"
            opacity="0.7"
          />
          <line
            x1="310"
            y1="420"
            x2="345"
            y2="420"
            stroke="#60A5FA"
            strokeWidth="1"
            opacity="0.7"
          />
        </g>

        {/* Terminal window (bottom left) */}
        <g className="float-shape-3">
          <rect
            x="50"
            y="340"
            width="140"
            height="110"
            rx="8"
            fill="#101D32"
            stroke="#38BDF8"
            strokeWidth="1.5"
            opacity="0.9"
          />
          <line x1="50" y1="365" x2="190" y2="365" stroke="#263B59" strokeWidth="1" />
          <circle cx="60" cy="353" r="1.5" fill="#38BDF8" opacity="0.6" />
          <circle cx="68" cy="353" r="1.5" fill="#38BDF8" opacity="0.6" />
          <circle cx="76" cy="353" r="1.5" fill="#38BDF8" opacity="0.6" />

          {/* Terminal text */}
          <text
            x="60"
            y="382"
            fontSize="8"
            fill="#38BDF8"
            fontFamily="monospace"
            opacity="0.8"
          >
            $ npm run build
          </text>
          <text
            x="60"
            y="395"
            fontSize="7"
            fill="#60A5FA"
            fontFamily="monospace"
            opacity="0.7"
          >
            ✓ Build complete
          </text>
          <text
            x="60"
            y="408"
            fontSize="8"
            fill="#38BDF8"
            fontFamily="monospace"
            opacity="0.6"
          >
            $ _
          </text>
        </g>

        {/* Accent particles */}
        <g fill="#60A5FA" opacity="0.5">
          <circle cx="100" cy="300" r="2" className="float-shape-1" />
          <circle cx="400" cy="320" r="2.5" className="float-shape-2" />
          <circle cx="150" cy="420" r="1.5" className="float-shape-3" />
          <circle cx="350" cy="100" r="2" className="float-shape-1" />
        </g>
      </svg>

      {/* Floating gradient orb (background) */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-[#3B82F6] to-transparent rounded-full blur-3xl opacity-10 animate-pulse" />
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-tr from-[#38BDF8] to-transparent rounded-full blur-3xl opacity-10 animate-pulse" />
    </div>
  );
}
