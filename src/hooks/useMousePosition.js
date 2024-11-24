import { useState, useEffect } from "react";
const useMousePosition = () => {
  const [coordinates, setCoordinates] = useState({ x: null, y: null });
  const [isMobileDevice, setIsMobileDevice] = useState(undefined);
  const detectMob = () => {
    const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i,
    ];
    return toMatch.some((toMatchItem) =>
      navigator.userAgent.match(toMatchItem)
    );
  };
  useEffect(() => {
    const updateMousePosition = (e) => {
      const xCord = e.clientX + window.scrollX;
      const yCord = e.clientY + window.scrollY;
      setCoordinates({ x: xCord, y: yCord });
    };
    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("wheel", updateMousePosition);
    setIsMobileDevice(detectMob());
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.addEventListener("wheel", updateMousePosition);
    };
  }, []);
  return { isMobileDevice, coordinates };
};

export default useMousePosition;
