import React from "react";
import HeroSection from "./HeroSection";
import NavigationBar from "./NavigationBar";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavigationBar />
      <main>
        <HeroSection />
      </main>
    </div>
  );
};

export default Home;
