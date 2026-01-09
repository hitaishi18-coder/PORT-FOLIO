import { useState } from "react";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import LearningJourney from "./components/LearningJourney";
import Background from "./components/Background";


export default function Home() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "bg-[#0b0b14] text-white" : "bg-pink-50 text-gray-900"}>
      <Navbar dark={dark} setDark={setDark} />
      <Background/>
      <Introduction />
      <LearningJourney/>
      <Skills />
      <Projects />
      <Certifications />
      <Achievements />
      <Footer dark={dark} />
    </div>
  );
}
