import { useEffect } from "react";

export default function DogCursor() {
  useEffect(() => {
    const cursor = document.getElementById("dog-cursor");

    let x = 0;
    let y = 0;

    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
    };

    const loop = () => {
      cursor.style.left = x + "px";
      cursor.style.top = y + "px";
      requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", move);
    requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      id="dog-cursor"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "90px",
        height: "90px",
        backgroundImage: 'url("/kuta.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        pointerEvents: "none",
        zIndex: 2147483647,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}
