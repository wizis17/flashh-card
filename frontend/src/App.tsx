import React from "react";
import { HeroSection } from "./components/hero-section-3";
import { WordsSection } from "./components/WordsSection";

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-[#1b1b1b] text-white">
      <HeroSection />
      <WordsSection />
    </div>
  );
};

export default App;