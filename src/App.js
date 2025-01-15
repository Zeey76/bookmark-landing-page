import React, { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero";
import Features from "./components/FeaturesFolder.js/Features";
import Extensions from "./components/Extensions";
import Faq from "./components/FAQsection/FAQ";
import TopFooter from "./components/Footer/TopFooter";
import BottomFooter from "./components/Footer/BottomFooter";
import NavBar from "./components/Header/NavBar";

function App() {
  const [showNavBar, setShowNavBar] = useState(false);
  return (
    <div
      className={`m-auto justify-center relative ${
        showNavBar ? "h-screen overflow-hidden" : "min-h-screen"
      }`}
    >
      <Header setShowNavBar={setShowNavBar} />
      {showNavBar && <NavBar setShowNavBar={setShowNavBar} />}
      <Hero />
      <Features />
      <Extensions />
      <Faq />
      <TopFooter />
      <BottomFooter />
    </div>
  );
}

export default App;
