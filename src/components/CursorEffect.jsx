import useMousePosition from "../hooks/useMousePosition";
const CursorEffect = () => {
  const { coordinates, isMouseOutside } = useMousePosition();
  return isMouseOutside ? null : (
    <div
      className="absolute rounded-full pointer-events-none bg-iOrange h-28 w-28 z-[-999] blur-3xl "
      style={{
        top: `${coordinates.y - 46}px`,
        left: `${coordinates.x - 46}px`,
      }}
    />
  );
};

export default CursorEffect;
