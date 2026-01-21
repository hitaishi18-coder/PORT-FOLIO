import { useEffect } from "react";

export default function DogCursor() {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    const cursorDot = document.getElementById("custom-cursor-dot");

    let x = 0, y = 0;
    let curX = 0, curY = 0;

    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (cursorDot) {
        cursorDot.style.left = x + "px";
        cursorDot.style.top = y + "px";
      }
    };

    const loop = () => {
      const ease = 0.15;
      curX += (x - curX) * ease;
      curY += (y - curY) * ease;

      if (cursor) {
        cursor.style.left = curX + "px";
        cursor.style.top = curY + "px";
      }
      requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", move);
    requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <div
        id="custom-cursor"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "40px",
          height: "40px",
          border: "2px solid #5b21b6",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 2147483647,
          transform: "translate(-50%, -50%)",
          transition: "transform 0.1s ease-out, width 0.3s, height 0.3s, border-color 0.3s",
        }}
      />
      <div
        id="custom-cursor-dot"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "6px",
          height: "6px",
          backgroundColor: "#7c3aed",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 2147483647,
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
}
