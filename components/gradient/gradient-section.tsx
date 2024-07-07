import React from "react";

interface GradientSectionProps {
  color1: string;
  color2: string;
  onColorChange: (index: number, color1: string, color2: string) => void;
  index: number;
  height: number;
}

export const GradientSection: React.FC<GradientSectionProps> = ({
  color1,
  color2,
  onColorChange,
  index,
  height,
}) => {
  const handleColorChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    colorIndex: number
  ) => {
    const newColor = e.target.value;
    if (colorIndex === 1) {
      onColorChange(index, newColor, color2);
    } else {
      onColorChange(index, color1, newColor);
    }
  };

  return (
    <div
      className="relative w-full flex flex-col justify-center items-center"
      style={{
        height: `${height}px`,
        background: `linear-gradient(${color1}, ${color2})`,
      }}
    >
      <input
        type="color"
        value={color1}
        onChange={(e) => handleColorChange(e, 1)}
        className="m-2 rounded-full opacity-50"
      />
      <input
        type="color"
        value={color2}
        onChange={(e) => handleColorChange(e, 2)}
        className="m-2 rounded-full opacity-50"
      />
    </div>
  );
};
