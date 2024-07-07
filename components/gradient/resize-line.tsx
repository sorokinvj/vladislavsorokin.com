import React, { useRef, useState, useEffect } from "react";

interface ResizeLineProps {
  onHeightChange: (
    index: number,
    newHeight: number,
    direction: "up" | "down"
  ) => void;
  index: number;
}

export const ResizeLine: React.FC<ResizeLineProps> = ({
  onHeightChange,
  index,
}) => {
  const [dragging, setDragging] = useState(false);
  const startYRef = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    startYRef.current = e.clientY;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!dragging) return;
    const newHeight = e.clientY - startYRef.current;
    onHeightChange(index, newHeight, "down");
    onHeightChange(index + 1, -newHeight, "up");
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
      className="w-full h-1 cursor-row-resize border-t border-dashed border-white"
      onMouseDown={handleMouseDown}
    />
  );
};
