// need to work on this logic.
import { useState, useEffect } from "react";
const useMousePosition = () => {
  const [coordinates, setCoordinates] = useState({ x: null, y: null });
  const [isMouseOutside, setIsMouseOutside] = useState(false);
  useEffect(() => {
    const updateMousePosition = (e) => {
      const xCord = e.clientX + window.scrollX;
      const yCord = e.clientY + window.scrollY;
      setCoordinates({ x: xCord, y: yCord });
      const docHeight = document.documentElement.clientHeight;
      const docWidth = document.documentElement.clientWidth;
      if (xCord < 0 || xCord > docWidth || yCord < 0 || yCord > docHeight) {
        setIsMouseOutside(true);
      } else {
        setIsMouseOutside(false);
      }
    };
    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("wheel", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.addEventListener("wheel", updateMousePosition);
    };
  }, []);
  return { coordinates, isMouseOutside };
};

export default useMousePosition;
