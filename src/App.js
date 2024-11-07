import React from 'react';
import './App.css';
import HeroAnimation from './HeroAnimation.js';
import IntroHero from './IntroHero.js';
import NPUSection from './NPUSection.js';
import CopilotSection from './CopilotSection.js';
import CopilotFeaturesCarousel from './CopilotFeaturesCarousel.js';
import FeatureSection from './FeatureSection.js';
import ProductSection from './ProductSection.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="App">
      <HeroAnimation />
      <IntroHero />
      <NPUSection />
      <CopilotSection />
      <CopilotFeaturesCarousel />
      <FeatureSection />
      <ProductSection />
      <Footer />
    </div>
  );
}

export default App;
