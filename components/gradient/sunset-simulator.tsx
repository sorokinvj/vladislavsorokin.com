import React, { useState, useEffect } from "react";
import { GradientSection } from "./gradient-section";
import { ResizeLine } from "./resize-line";

interface Gradient {
  color1: string;
  color2: string;
  height: number;
}

export const SunsetSimulator: React.FC = () => {
  const [gradients, setGradients] = useState<Gradient[]>([
    { color1: "#34347F", color2: "#0047AB", height: 0 },
    { color1: "#0047AB", color2: "#00BFFF", height: 0 },
    { color1: "#00BFFF", color2: "#E0ffC2", height: 0 },
    { color1: "#E0ffC2", color2: "#F4e0a8", height: 0 },
    { color1: "#F4e0a8", color2: "#FF4500", height: 0 },
    { color1: "#FF4500", color2: "#FF6347", height: 0 },
  ]);

  useEffect(() => {
    const screenHeight = window.innerHeight;
    setGradients((prevGradients) =>
      prevGradients.map((gradient) => ({
        ...gradient,
        height: screenHeight / prevGradients.length,
      }))
    );
  }, []);

  const handleHeightChange = (index: number, delta: number) => {
    const adjustment = delta / 10; // Reduce sensitivity
    const newGradients = [...gradients];
    newGradients[index].height += adjustment;
    newGradients[index + 1].height -= adjustment;
    setGradients(newGradients);
  };

  const handleColorChange = (index: number, color1: string, color2: string) => {
    const newGradients = [...gradients];
    newGradients[index].color1 = color1;
    newGradients[index].color2 = color2;

    // Ensure that adjacent colors are the same
    if (index > 0) {
      newGradients[index - 1].color2 = color1;
    }
    if (index < gradients.length - 1) {
      newGradients[index + 1].color1 = color2;
    }

    setGradients(newGradients);
  };

  return (
    <div className="h-screen">
      {gradients.map((gradient, index) => (
        <React.Fragment key={index}>
          <GradientSection
            index={index}
            color1={gradient.color1}
            color2={gradient.color2}
            height={gradient.height}
            onColorChange={handleColorChange}
          />
          {index < gradients.length - 1 && (
            <ResizeLine index={index} onHeightChange={handleHeightChange} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
