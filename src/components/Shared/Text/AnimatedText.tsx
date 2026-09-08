import React from "react";
import PlasmaWave from "../../PlasmaWave";

export default function AnimatedText() {
  return (
    <div className="relative overflow-hidden">
      <PlasmaWave
        colors={["#A855F7", "#06B6D4"]}
        speed1={0.05}
        speed2={0.05}
        focalLength={0.8}
        bend1={1}
        bend2={0.5}
        dir2={1}
        rotationDeg={0}
      />

      <h1
        className="
      relative z-10
      text-8xl font-black
      text-transparent
      bg-clip-text
      bg-white
    "
      >
        FormMint
      </h1>
    </div>
  );
}
