"use client";

export default function AnimatedChemicalBackground() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {/* Animated molecular structures */}
      <div className="absolute inset-0 opacity-40">
        {/* Molecule 1 - Benzene Ring */}
        <div className="absolute top-[8%] left-[8%] animate-float">
          <svg width="90" height="90" viewBox="0 0 90 90" className="text-[#5F7693]">
            <circle cx="45" cy="20" r="6" fill="currentColor" opacity="0.5" />
            <circle cx="70" cy="35" r="6" fill="currentColor" opacity="0.5" />
            <circle cx="70" cy="55" r="6" fill="currentColor" opacity="0.5" />
            <circle cx="45" cy="70" r="6" fill="currentColor" opacity="0.5" />
            <circle cx="20" cy="55" r="6" fill="currentColor" opacity="0.5" />
            <circle cx="20" cy="35" r="6" fill="currentColor" opacity="0.5" />
            <path d="M 45 20 L 70 35 L 70 55 L 45 70 L 20 55 L 20 35 Z" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4" />
            <circle cx="45" cy="45" r="3" fill="currentColor" opacity="0.3" />
          </svg>
        </div>

        {/* Molecule 2 - Tetrahedral Methane */}
        <div className="absolute top-[15%] right-[12%] animate-float-delayed">
          <svg width="100" height="100" viewBox="0 0 100 100" className="text-[#5F7693]">
            <circle cx="50" cy="30" r="7" fill="currentColor" opacity="0.55" />
            <circle cx="25" cy="65" r="6" fill="currentColor" opacity="0.5" />
            <circle cx="75" cy="65" r="6" fill="currentColor" opacity="0.5" />
            <circle cx="50" cy="75" r="6" fill="currentColor" opacity="0.5" />
            <line x1="50" y1="30" x2="25" y2="65" stroke="currentColor" strokeWidth="1.5" opacity="0.45" />
            <line x1="50" y1="30" x2="75" y2="65" stroke="currentColor" strokeWidth="1.5" opacity="0.45" />
            <line x1="50" y1="30" x2="50" y2="75" stroke="currentColor" strokeWidth="1.5" opacity="0.45" />
            <line x1="25" y1="65" x2="75" y2="65" stroke="currentColor" strokeWidth="1" opacity="0.4" />
            <line x1="25" y1="65" x2="50" y2="75" stroke="currentColor" strokeWidth="1" opacity="0.4" />
            <line x1="75" y1="65" x2="50" y2="75" stroke="currentColor" strokeWidth="1" opacity="0.4" />
          </svg>
        </div>

        {/* Molecule 3 - Linear Chain */}
        <div className="absolute bottom-[20%] left-[10%] animate-float-slow">
          <svg width="115" height="60" viewBox="0 0 120 60" className="text-[#5F7693]">
            <circle cx="20" cy="30" r="7" fill="currentColor" opacity="0.55" />
            <circle cx="45" cy="30" r="6" fill="currentColor" opacity="0.5" />
            <circle cx="70" cy="30" r="6" fill="currentColor" opacity="0.5" />
            <circle cx="95" cy="30" r="7" fill="currentColor" opacity="0.55" />
            <line x1="20" y1="30" x2="45" y2="30" stroke="currentColor" strokeWidth="2" opacity="0.45" />
            <line x1="45" y1="30" x2="70" y2="30" stroke="currentColor" strokeWidth="2" opacity="0.45" />
            <line x1="70" y1="30" x2="95" y2="30" stroke="currentColor" strokeWidth="2" opacity="0.45" />
          </svg>
        </div>

        {/* Molecule 4 - Water (Bent Structure) */}
        <div className="absolute top-[45%] left-[50%] animate-float" style={{ animationDelay: '2s' }}>
          <svg width="70" height="70" viewBox="0 0 70 70" className="text-[#5F7693]">
            <circle cx="35" cy="25" r="7" fill="currentColor" opacity="0.55" />
            <circle cx="20" cy="50" r="6" fill="currentColor" opacity="0.5" />
            <circle cx="50" cy="50" r="6" fill="currentColor" opacity="0.5" />
            <line x1="35" y1="25" x2="20" y2="50" stroke="currentColor" strokeWidth="1.5" opacity="0.45" />
            <line x1="35" y1="25" x2="50" y2="50" stroke="currentColor" strokeWidth="1.5" opacity="0.45" />
          </svg>
        </div>

        {/* Molecule 5 - Double Bond (Ethene) */}
        <div className="absolute bottom-[25%] right-[8%] animate-float-delayed" style={{ animationDelay: '3s' }}>
          <svg width="100" height="60" viewBox="0 0 100 60" className="text-[#5F7693]">
            <circle cx="30" cy="30" r="7" fill="currentColor" opacity="0.55" />
            <circle cx="70" cy="30" r="7" fill="currentColor" opacity="0.55" />
            <circle cx="30" cy="15" r="5" fill="currentColor" opacity="0.5" />
            <circle cx="30" cy="45" r="5" fill="currentColor" opacity="0.5" />
            <circle cx="70" cy="15" r="5" fill="currentColor" opacity="0.5" />
            <circle cx="70" cy="45" r="5" fill="currentColor" opacity="0.5" />
            <line x1="30" y1="30" x2="70" y2="30" stroke="currentColor" strokeWidth="2" opacity="0.45" />
            <line x1="30" y1="28" x2="70" y2="28" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
            <line x1="30" y1="30" x2="30" y2="15" stroke="currentColor" strokeWidth="1" opacity="0.4" />
            <line x1="30" y1="30" x2="30" y2="45" stroke="currentColor" strokeWidth="1" opacity="0.4" />
            <line x1="70" y1="30" x2="70" y2="15" stroke="currentColor" strokeWidth="1" opacity="0.4" />
            <line x1="70" y1="30" x2="70" y2="45" stroke="currentColor" strokeWidth="1" opacity="0.4" />
          </svg>
        </div>

        {/* Molecule 6 - Triple Bond (Acetylene) */}
        <div className="absolute top-[30%] left-[35%] animate-float-slow" style={{ animationDelay: '1.5s' }}>
          <svg width="80" height="50" viewBox="0 0 80 50" className="text-[#5F7693]">
            <circle cx="25" cy="25" r="6" fill="currentColor" opacity="0.55" />
            <circle cx="55" cy="25" r="6" fill="currentColor" opacity="0.55" />
            <circle cx="25" cy="10" r="4" fill="currentColor" opacity="0.5" />
            <circle cx="55" cy="10" r="4" fill="currentColor" opacity="0.5" />
            <line x1="25" y1="25" x2="55" y2="25" stroke="currentColor" strokeWidth="2" opacity="0.45" />
            <line x1="25" y1="23" x2="55" y2="23" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
            <line x1="25" y1="27" x2="55" y2="27" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
            <line x1="25" y1="25" x2="25" y2="10" stroke="currentColor" strokeWidth="1" opacity="0.4" />
            <line x1="55" y1="25" x2="55" y2="10" stroke="currentColor" strokeWidth="1" opacity="0.4" />
          </svg>
        </div>

        {/* Molecule 7 - Ammonia (Pyramidal) */}
        <div className="absolute bottom-[12%] left-[60%] animate-float" style={{ animationDelay: '2.5s' }}>
          <svg width="75" height="75" viewBox="0 0 75 75" className="text-[#5F7693]">
            <circle cx="37.5" cy="25" r="7" fill="currentColor" opacity="0.55" />
            <circle cx="20" cy="55" r="6" fill="currentColor" opacity="0.5" />
            <circle cx="55" cy="55" r="6" fill="currentColor" opacity="0.5" />
            <circle cx="37.5" cy="60" r="6" fill="currentColor" opacity="0.5" />
            <line x1="37.5" y1="25" x2="20" y2="55" stroke="currentColor" strokeWidth="1.5" opacity="0.45" />
            <line x1="37.5" y1="25" x2="55" y2="55" stroke="currentColor" strokeWidth="1.5" opacity="0.45" />
            <line x1="37.5" y1="25" x2="37.5" y2="60" stroke="currentColor" strokeWidth="1.5" opacity="0.45" />
          </svg>
        </div>

        {/* Molecule 8 - Cyclohexane (Chair) */}
        <div className="absolute top-[65%] left-[20%] animate-float-delayed" style={{ animationDelay: '4s' }}>
          <svg width="85" height="85" viewBox="0 0 85 85" className="text-[#5F7693]">
            <circle cx="42.5" cy="20" r="5" fill="currentColor" opacity="0.5" />
            <circle cx="65" cy="30" r="5" fill="currentColor" opacity="0.5" />
            <circle cx="65" cy="55" r="5" fill="currentColor" opacity="0.5" />
            <circle cx="42.5" cy="65" r="5" fill="currentColor" opacity="0.5" />
            <circle cx="20" cy="55" r="5" fill="currentColor" opacity="0.5" />
            <circle cx="20" cy="30" r="5" fill="currentColor" opacity="0.5" />
            <path d="M 42.5 20 L 65 30 L 65 55 L 42.5 65 L 20 55 L 20 30 Z" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4" />
            <line x1="42.5" y1="20" x2="42.5" y2="65" stroke="currentColor" strokeWidth="1" opacity="0.3" />
          </svg>
        </div>

        {/* Additional varied scattered molecules */}
        {[...Array(12)].map((_, i) => {
          const moleculeTypes = [
            // Type 1: Simple diatomic (O2, N2)
            <svg key={`diatomic-${i}`} width="50" height="50" viewBox="0 0 50 50" className="text-[#5F7693] opacity-40">
              <circle cx="15" cy="25" r="5" fill="currentColor" />
              <circle cx="35" cy="25" r="5" fill="currentColor" />
              <line x1="15" y1="25" x2="35" y2="25" stroke="currentColor" strokeWidth="1" />
            </svg>,
            // Type 2: Linear triatomic (CO2)
            <svg key={`linear-${i}`} width="60" height="40" viewBox="0 0 60 40" className="text-[#5F7693] opacity-40">
              <circle cx="15" cy="20" r="5" fill="currentColor" />
              <circle cx="30" cy="20" r="6" fill="currentColor" />
              <circle cx="45" cy="20" r="5" fill="currentColor" />
              <line x1="15" y1="20" x2="30" y2="20" stroke="currentColor" strokeWidth="1.2" />
              <line x1="30" y1="20" x2="45" y2="20" stroke="currentColor" strokeWidth="1.2" />
            </svg>,
            // Type 3: Triangle structure
            <svg key={`triangle-${i}`} width="55" height="55" viewBox="0 0 55 55" className="text-[#5F7693] opacity-40">
              <circle cx="27.5" cy="15" r="5" fill="currentColor" />
              <circle cx="15" cy="40" r="5" fill="currentColor" />
              <circle cx="40" cy="40" r="5" fill="currentColor" />
              <line x1="27.5" y1="15" x2="15" y2="40" stroke="currentColor" strokeWidth="1" />
              <line x1="27.5" y1="15" x2="40" y2="40" stroke="currentColor" strokeWidth="1" />
              <line x1="15" y1="40" x2="40" y2="40" stroke="currentColor" strokeWidth="1" />
            </svg>,
            // Type 4: Cross-shaped (4 bonds)
            <svg key={`cross-${i}`} width="60" height="60" viewBox="0 0 60 60" className="text-[#5F7693] opacity-40">
              <circle cx="30" cy="30" r="6" fill="currentColor" />
              <circle cx="30" cy="10" r="4" fill="currentColor" />
              <circle cx="50" cy="30" r="4" fill="currentColor" />
              <circle cx="30" cy="50" r="4" fill="currentColor" />
              <circle cx="10" cy="30" r="4" fill="currentColor" />
              <line x1="30" y1="30" x2="30" y2="10" stroke="currentColor" strokeWidth="1" />
              <line x1="30" y1="30" x2="50" y2="30" stroke="currentColor" strokeWidth="1" />
              <line x1="30" y1="30" x2="30" y2="50" stroke="currentColor" strokeWidth="1" />
              <line x1="30" y1="30" x2="10" y2="30" stroke="currentColor" strokeWidth="1" />
            </svg>,
            // Type 5: Bent structure (H2O-like)
            <svg key={`bent-${i}`} width="50" height="50" viewBox="0 0 50 50" className="text-[#5F7693] opacity-40">
              <circle cx="25" cy="20" r="6" fill="currentColor" />
              <circle cx="15" cy="40" r="5" fill="currentColor" />
              <circle cx="35" cy="40" r="5" fill="currentColor" />
              <line x1="25" y1="20" x2="15" y2="40" stroke="currentColor" strokeWidth="1.2" />
              <line x1="25" y1="20" x2="35" y2="40" stroke="currentColor" strokeWidth="1.2" />
            </svg>,
            // Type 6: Small branched (3 atoms)
            <svg key={`branched-${i}`} width="50" height="50" viewBox="0 0 50 50" className="text-[#5F7693] opacity-40">
              <circle cx="25" cy="25" r="5" fill="currentColor" />
              <circle cx="25" cy="10" r="4" fill="currentColor" />
              <circle cx="40" cy="35" r="4" fill="currentColor" />
              <line x1="25" y1="25" x2="25" y2="10" stroke="currentColor" strokeWidth="1" />
              <line x1="25" y1="25" x2="40" y2="35" stroke="currentColor" strokeWidth="1" />
            </svg>,
          ];
          
          // Strategic positioning to fill gaps between main molecules
          const positions = [
            { top: '5%', left: '25%' },   // Gap between molecule 1 and 6
            { top: '22%', left: '50%' },  // Gap between molecule 1 and 2
            { top: '38%', left: '15%' },  // Gap between molecule 1 and 8
            { top: '55%', left: '30%' },  // Gap between molecule 4 and 8
            { top: '72%', left: '45%' },  // Gap between molecule 4 and 7
            { top: '12%', left: '70%' },  // Gap between molecule 2 and 5
            { top: '50%', left: '75%' },  // Gap between molecule 4 and 5
            { top: '68%', left: '8%' },   // Gap between molecule 3 and 8
            { top: '25%', left: '85%' },  // Gap near molecule 2
            { top: '80%', left: '65%' },  // Gap near molecule 7
            { top: '40%', left: '5%' },   // Gap near molecule 1
            { top: '85%', left: '35%' },  // Bottom gap filler
          ];
          
          return (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                top: positions[i].top,
                left: positions[i].left,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${9 + i * 1.2}s`,
              }}
            >
              {moleculeTypes[i % moleculeTypes.length]}
            </div>
          );
        })}
      </div>
    </div>
  );
}

