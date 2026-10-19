import { useEffect, useRef, useState } from "react";
// npm i react-icons
import {
  SiFigma, SiReact, SiTypescript, SiNodedotjs, SiNextdotjs, SiJavascript, 
  SiGit, SiTailwindcss, SiGraphql, SiPostgresql, SiDocker, SiJest,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa"; // safer than SiCss3, which was renamed in newer versions
 
/* Edit the tech list: n = name, Icon = react-icons component, c = brand/glow color */
const TECH = [
  { n: "Figma", Icon: SiFigma, c: "#f24e1e" }, { n: "React", Icon: SiReact, c: "#61dafb" },
  { n: "TypeScript", Icon: SiTypescript, c: "#3b82f6" }, { n: "Node.js", Icon: SiNodedotjs, c: "#7fc65b" },
  { n: "Next.js", Icon: SiNextdotjs, c: "#ffffff" }, { n: "JavaScript", Icon: SiJavascript, c: "#f7df1e" },
  { n: "CSS", Icon: FaCss3Alt, c: "#2d9cf0" }, { n: "Git", Icon: SiGit, c: "#f1502f" },
  { n: "Tailwind", Icon: SiTailwindcss, c: "#38bdf8" }, { n: "GraphQL", Icon: SiGraphql, c: "#e535ab" },
  { n: "PostgreSQL", Icon: SiPostgresql, c: "#6f9bd1" }, { n: "Docker", Icon: SiDocker, c: "#2496ed" },
  { n: "Jest", Icon: SiJest, c: "#c21325" },
];
 
/* One 1000 x 560 coordinate space keeps lines and icons aligned at any width */
const W = 1000, H = 560, CX = 500, CY = 420;
const place = TECH.map((t, i) => {
  const row = i < 7 ? 0 : 1;
  const idx = row ? i - 7 : i;
  const x = CX + (idx - (row ? 2.5 : 3)) * 66;
  const y = row ? 205 : 135;
  return { ...t, x, y, d: `M${x} ${y} C${x} ${y + 150} ${CX} 270 ${CX} 345` };
});
 
const RINGS = [
  { rx: 440, ry: 92, rot: -4 }, { rx: 370, ry: 76, rot: 3 }, { rx: 300, ry: 60, rot: -2 },
];
const ringPath = (rx, ry) =>
  `M${CX - rx} ${CY} a${rx} ${ry} 0 1 0 ${2 * rx} 0 a${rx} ${ry} 0 1 0 ${-2 * rx} 0`;
const SATS = [
  { r: 0, Icon: SiReact, dur: 46, off: 0 }, { r: 0, Icon: SiTypescript, dur: 46, off: 23 },
  { r: 1, Icon: SiGit, dur: 38, off: 6 }, { r: 1, Icon: SiJavascript, dur: 38, off: 24 },
  { r: 2, Icon: SiFigma, dur: 30, off: 4 }, { r: 2, Icon: SiNodedotjs, dur: 30, off: 19 },
];
 
const css = `
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap");
.orbit { --accent:#b57cff; --text:#efe9ff; font-family:"Space Grotesk",system-ui,sans-serif; color:var(--text);
  position:relative; width:100%; max-width:1000px; margin:0 auto; aspect-ratio:${W}/${H}; container-type:inline-size; }
.orbit *, .orbit *::before, .orbit *::after { box-sizing:border-box; }
.orbit :focus-visible { outline:2px solid var(--accent); outline-offset:3px; border-radius:6px; }
.orbit-svg { position:absolute; inset:0; width:100%; height:100%; overflow:visible; }
.orbit-line { fill:none; stroke:#8f5cf0; stroke-width:1.2; opacity:.28; transition:opacity .25s, stroke .25s; }
.orbit-flow { fill:none; stroke:#cbaeff; stroke-width:1.6; stroke-dasharray:3 38; stroke-linecap:round; opacity:.55; animation:orbit-flow 3.2s linear infinite; }
.orbit-on .orbit-line { opacity:1; stroke:#d7bcff; stroke-width:1.8; }
@keyframes orbit-flow { to { stroke-dashoffset:-82; } }
.orbit-ring { fill:none; stroke:#8f5cf0; stroke-opacity:.55; stroke-width:1; }
.orbit-sat circle { fill:#1b0f3a; stroke:#8f5cf0; stroke-opacity:.7; }
.orbit-sat { color:#c9b2ff; }
.orbit-tech { position:absolute; width:5.6%; aspect-ratio:1; transform:translate(-50%,-50%); border-radius:50%;
  display:grid; place-items:center; border:1px solid #3a2a63; background:#1a0f35; cursor:pointer; padding:0;
  transition:transform .2s, box-shadow .2s, border-color .2s; }
.orbit-tech:hover, .orbit-tech:focus-visible { transform:translate(-50%,-50%) scale(1.22); border-color:var(--c); box-shadow:0 0 22px -2px var(--c); }
.orbit-tech svg { width:46%; height:46%; }
.orbit-tip { position:absolute; left:50%; bottom:calc(100% + 8px); transform:translateX(-50%); white-space:nowrap; background:#27184a;
  border:1px solid #3a2a63; color:var(--text); font:500 .8rem "Space Grotesk",sans-serif; padding:.2rem .6rem; border-radius:6px; opacity:0; pointer-events:none; transition:opacity .15s; }
.orbit-tech:hover .orbit-tip, .orbit-tech:focus-visible .orbit-tip { opacity:1; }
.orbit-orb { position:absolute; left:50%; top:${(CY / H) * 100}%; width:13%; aspect-ratio:1; border-radius:50%;
  transform:translate(calc(-50% + var(--px,0)*10px), calc(-50% + var(--py,0)*6px)); transition:transform .25s ease-out;
  background:radial-gradient(circle at 50% 40%, #a360ff 0%, #6a2bd0 70%); box-shadow:0 0 0 10px rgba(122,53,232,.12), 0 0 90px 30px rgba(122,53,232,.45);
  display:grid; place-items:center; animation:orbit-pulse 5s ease-in-out infinite; }
.orbit-orb svg { width:48%; filter:drop-shadow(0 0 8px #fff); }
@keyframes orbit-pulse { 50% { box-shadow:0 0 0 14px rgba(122,53,232,.08), 0 0 120px 44px rgba(122,53,232,.55); } }
@media (prefers-reduced-motion:reduce){ .orbit *,.orbit *::before,.orbit *::after { animation:none !important; transition:none !important; } }
`;
 
export default function TechOrbit() {
  const stage = useRef(null);
  const svg = useRef(null);
  const [hot, setHot] = useState(-1);
 
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) svg.current?.pauseAnimations?.();
  }, []);
 
  const onMove = (e) => {
    const r = stage.current.getBoundingClientRect();
    stage.current.style.setProperty("--px", ((e.clientX - r.left) / r.width - 0.5) * 2);
    stage.current.style.setProperty("--py", ((e.clientY - r.top) / r.height - 0.5) * 2);
  };
 
  return (
    <div className="orbit" ref={stage} onMouseMove={onMove} role="group" aria-label="Tech stack">
      <style>{css}</style>
      <svg className="orbit-svg" ref={svg} viewBox={`0 0 ${W} ${H}`} aria-hidden="true">
        {RINGS.map((r, i) => (
          <ellipse key={i} className="orbit-ring" cx={CX} cy={CY} rx={r.rx} ry={r.ry} transform={`rotate(${r.rot} ${CX} ${CY})`} />
        ))}
        {place.map((p, i) => (
          <g key={p.n} className={hot === i ? "orbit-on" : ""}>
            <path className="orbit-line" d={p.d} />
            <path className="orbit-flow" d={p.d} style={{ animationDelay: `${i * -0.4}s` }} />
          </g>
        ))}
        {SATS.map((s, i) => (
          <g key={i} className="orbit-sat" transform={`rotate(${RINGS[s.r].rot} ${CX} ${CY})`}>
            <g>
              <circle r="13" />
              <g transform="translate(-6.5 -6.5)"><s.Icon size={13} /></g>
              <animateMotion dur={`${s.dur}s`} begin={`-${s.off}s`} repeatCount="indefinite" path={ringPath(RINGS[s.r].rx, RINGS[s.r].ry)} />
            </g>
          </g>
        ))}
      </svg>
 
      {place.map((p, i) => (
        <button
          key={p.n}
          className="orbit-tech"
          style={{ left: `${p.x / 10}%`, top: `${(p.y / H) * 100}%`, color: p.c, "--c": p.c }}
          aria-label={p.n}
          onMouseEnter={() => setHot(i)} onMouseLeave={() => setHot(-1)}
          onFocus={() => setHot(i)} onBlur={() => setHot(-1)}
        >
          <p.Icon aria-hidden="true" />
          <span className="orbit-tip">{p.n}</span>
        </button>
      ))}
 
      <div className="orbit-orb" aria-hidden="true">
        {/* Swap this stroke glyph for your own initial or logo */}
        <svg viewBox="-30 -30 60 60" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 -22 H-18 L8 0 L-18 22 H22" />
        </svg>
      </div>
    </div>
  );
}