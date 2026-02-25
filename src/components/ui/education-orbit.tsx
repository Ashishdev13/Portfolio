"use client";

import {
  SiPython, SiGnubash, SiWireshark, SiLinux,
} from "react-icons/si";
import {
  FaShieldAlt, FaNetworkWired, FaLock, FaCode,
  FaServer, FaDatabase, FaBug, FaUserSecret,
  FaTerminal, FaCloud,
} from "react-icons/fa";
import { GraduationCap } from "lucide-react";

const iconConfigs = [
  { Icon: SiPython, color: "#3776AB" },
  { Icon: FaShieldAlt, color: "#E53E3E" },
  { Icon: SiGnubash, color: "#4EAA25" },
  { Icon: FaNetworkWired, color: "#38B2AC" },
  { Icon: FaLock, color: "#D69E2E" },
  { Icon: FaCode, color: "#63B3ED" },
  { Icon: SiWireshark, color: "#1679A7" },
  { Icon: FaServer, color: "#A0AEC0" },
  { Icon: FaDatabase, color: "#ED8936" },
  { Icon: SiLinux, color: "#FCC624" },
  { Icon: FaBug, color: "#FC8181" },
  { Icon: FaUserSecret, color: "#B794F4" },
  { Icon: FaTerminal, color: "#68D391" },
  { Icon: FaCloud, color: "#90CDF4" },
];

interface EducationOrbitProps {
  degree: string;
  school: string;
  period: string;
  grade: string;
  coursework: string;
}

export default function EducationOrbit({
  degree,
  school,
  period,
  grade,
  coursework,
}: EducationOrbitProps) {
  const orbitCount = 3;
  const orbitGap = 8;
  const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);

  return (
    <section className="relative max-w-5xl mx-auto pl-6 md:pl-10 flex items-center justify-between h-[30rem] border border-white/[0.1] bg-card/40 backdrop-blur-sm overflow-hidden rounded-3xl">
      <div className="w-full md:w-1/2 z-10 pr-4">
        <div className="flex items-center gap-2 mb-4">
          <span className="p-2 rounded-lg bg-primary/10 text-primary">
            <GraduationCap className="w-5 h-5" />
          </span>
          <span className="text-sm text-muted-foreground font-medium">{period}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-white">
          {degree}
        </h2>
        <p className="text-primary font-medium mb-1">{school}</p>
        <p className="text-muted-foreground text-sm mb-4">{grade}</p>
        <div className="flex flex-wrap gap-1.5">
          {coursework.split(", ").map((c) => (
            <span
              key={c}
              className="px-2.5 py-1 text-xs rounded-full bg-white/[0.05] text-white/70 border border-white/[0.1]"
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      <div className="hidden md:flex relative w-1/2 h-full items-center justify-start overflow-hidden">
        <div className="relative w-[50rem] h-[50rem] translate-x-[50%] flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
            <GraduationCap className="w-10 h-10 text-primary" />
          </div>

          {[...Array(orbitCount)].map((_, orbitIdx) => {
            const size = `${12 + orbitGap * (orbitIdx + 1)}rem`;
            const angleStep = (2 * Math.PI) / iconsPerOrbit;

            return (
              <div
                key={orbitIdx}
                className="absolute rounded-full border border-dotted border-white/[0.15]"
                style={{
                  width: size,
                  height: size,
                  animation: `eduSpin ${14 + orbitIdx * 8}s linear infinite${orbitIdx % 2 === 1 ? " reverse" : ""}`,
                }}
              >
                {iconConfigs
                  .slice(orbitIdx * iconsPerOrbit, orbitIdx * iconsPerOrbit + iconsPerOrbit)
                  .map((cfg, iconIdx) => {
                    const angle = iconIdx * angleStep;
                    const x = 50 + 50 * Math.cos(angle);
                    const y = 50 + 50 * Math.sin(angle);

                    return (
                      <div
                        key={iconIdx}
                        className="absolute bg-card/80 rounded-full p-1.5 shadow-md border border-white/[0.1]"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: "translate(-50%, -50%)",
                          animation: `eduCounterSpin ${14 + orbitIdx * 8}s linear infinite${orbitIdx % 2 === 1 ? " reverse" : ""}`,
                        }}
                      >
                        <cfg.Icon className="w-6 h-6" style={{ color: cfg.color }} />
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes eduSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes eduCounterSpin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(-360deg); }
        }
      `}</style>
    </section>
  );
}
