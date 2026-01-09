import { useState, useRef, useEffect } from "react";

/*  CUSTOM CURSOR */
import DogCursor from "./components/DogCursor";

import Landing from "./Landing";
import Home from "./Home";
import introMusic from "./assets/audio.mp3";

export default function App() {
  const [entered, setEntered] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.play().catch(() => {
        // autoplay blocked until user interaction (normal browser behavior)
      });
    }
  }, []);

  return (
    <>
      {/*  DOG CURSOR — GLOBAL (LANDING + HOME) */}
      <DogCursor />

      <div className="bg-[#0b0b14] text-white min-h-screen relative">
        
        {/* 🎵 GLOBAL BACKGROUND MUSIC */}
        <audio
          ref={audioRef}
          src={introMusic}
          loop
        />

        {/* PAGE SWITCH */}
        {entered ? (
          <Home />
        ) : (
          <Landing onEnter={() => setEntered(true)} />
        )}
      </div>
    </>
  );
}
