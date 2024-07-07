import React, { useRef, useState, useEffect } from "react";

interface ResizeLineProps {
  onHeightChange: (index: number, delta: number) => void;
  index: number;
  color1: string;
  color2: string;
}

export const ResizeLine: React.FC<ResizeLineProps> = ({
  onHeightChange,
  index,
  color1,
  color2,
}) => {
  const [dragging, setDragging] = useState(false);
  const startYRef = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    startYRef.current = e.clientY;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!dragging) return;
    const delta = e.clientY - startYRef.current;
    startYRef.current = e.clientY;
    onHeightChange(index, delta);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  return (
    <div
      className="relative w-full h-0.5 cursor-grab"
      style={{ background: `linear-gradient(${color1}, ${color2})` }}
      onMouseDown={handleMouseDown}
    >
      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100">
        <div className="w-full h-px bg-white opacity-30"></div>
      </div>
    </div>
  );
};
