import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeInOut = keyframes`
  0% { opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { opacity: 0; }
`;

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const HeroSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-color: #000;
`;

const AIText = styled.h1`
  font-size: 40rem;
  font-family: 'Figtree', sans-serif;
  font-weight: 800;
  background: linear-gradient(180deg, #C084FC, #60A5FA, #7CE7F5);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  position: absolute;
  margin: 0;
  padding: 0;
  animation: ${fadeInOut} 3s ease-in-out forwards;
  z-index: 3;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://content.leadermarketing.com.au/assets/uploads/Leader-AI-PC_KV_Background.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: 3s;
  z-index: 1;
`;

const KVImage = styled.img`
  position: relative;
  max-width: 80%;
  max-height: 80%;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: 4s;
  z-index: 2;
`;

const HeroAnimation = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    // Load Figtree font
    const font = new FontFace(
      'Figtree',
      'url(https://fonts.googleapis.com/css2?family=Figtree:wght@800&display=swap)'
    );

    font.load().then(() => {
      document.fonts.add(font);
      setFontLoaded(true);
    });
  }, []);

  if (!fontLoaded) {
    return null;
  }

  return (
    <HeroSection>
      <AIText>AI PC</AIText>
      <Background />
      <KVImage 
        src="https://content.leadermarketing.com.au/assets/uploads/Leader-AI-PC_KV.png"
        alt="Leader AI PC"
      />
    </HeroSection>
  );
};

export default HeroAnimation;