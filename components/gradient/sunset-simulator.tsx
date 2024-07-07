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
    { color1: "#34347F", color2: "#4B5DFF", height: 0 }, // Dark blue to Light blue
    { color1: "#4B5DFF", color2: "#7EC8E3", height: 0 }, // Light blue to Sky blue
    { color1: "#7EC8E3", color2: "#E0FFC2", height: 0 }, // Sky blue to Light green
    { color1: "#E0FFC2", color2: "#F4E0A8", height: 0 }, // Light green to Light yellow
    { color1: "#F4E0A8", color2: "#FFAB76", height: 0 }, // Light yellow to Peach
    { color1: "#FFAB76", color2: "#FF6347", height: 0 }, // Peach to Light coral
    { color1: "#FF6347", color2: "#8B0000", height: 0 }, // Light coral to Dark red
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
    const newGradients = [...gradients];
    newGradients[index].height += delta;
    if (index + 1 < newGradients.length) {
      newGradients[index + 1].height -= delta;
    }
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
            <ResizeLine
              index={index}
              onHeightChange={handleHeightChange}
              color1={gradient.color2}
              color2={gradients[index + 1].color1}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
