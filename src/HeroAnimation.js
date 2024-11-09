import React from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Figtree:wght@800&display=swap');
`;

const appearLetter = keyframes`
  0% { 
    opacity: 0; 
    transform: translateY(20px);
  }
  100% { 
    opacity: 1; 
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  0% { 
    opacity: 1; 
    transform: scale(1);
  }
  100% { 
    opacity: 0; 
    transform: scale(1.05);
  }
`;

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const slideUpFadeIn = keyframes`
  0% { 
    opacity: 0;
    transform: translateY(50px);
  }
  100% { 
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const TextContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  z-index: 3;
  animation: ${fadeOut} 1s ease-in-out forwards;
  animation-delay: 2s;
`;

const Letter = styled.span`
  font-size: clamp(20rem, 40vw, 40rem);
  font-family: 'Figtree', sans-serif;
  font-weight: 800;
  background: linear-gradient(180deg, #C084FC, #60A5FA, #7CE7F5);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 0;
  padding: 0;
  opacity: 0;
  animation: ${appearLetter} 0.5s ease-in-out forwards;
  animation-delay: ${props => props.$delay}s;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://content.leadermarketing.com.au/assets/uploads/AI-PC-2_KV_background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: 2.5s;
  z-index: 1;

  @media (max-width: 768px) {
    background-size: contain;
    top: -20%;
    left: -25%;
    width: 150%;
    height: 100%;
  }
`;

const KVImage = styled.img`
  position: relative;
  max-width: 100vw;
  max-height: 100%;
  opacity: 0;
  animation: ${slideUpFadeIn} 1.2s ease-out forwards;
  animation-delay: 3s;
  z-index: 2;
  object-fit: contain;
  pointer-events: none;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 70%;
  transform: translate(-50%, -50%);
  z-index: 10;
  pointer-events: all;

  @media (max-width: 768px) {
    top: 64%;
  }
`;

const ShopNowButton = styled.button`
  padding: 1rem 3rem;
  font-family: 'Figtree', sans-serif;
  font-weight: 600;
  font-size: 2rem;
  color: white;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 3rem;
  cursor: pointer;
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: 3.5s;
  pointer-events: auto;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    padding: 0.75rem 2rem;
    font-size: 1rem;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const Logo = styled.img`
  position: relative;
  opacity: 0;
  animation: ${slideUpFadeIn} 1.2s ease-out forwards;
  animation-delay: 3.5s;
  z-index: 2;
  width: auto;
  max-width: 100%;
  height: auto;
  margin-top: 2rem;
  pointer-events: none;

  @media (max-width: 768px) {
    max-width: 90%;
  }

  @media (max-width: 480px) {
    max-width: 90%;
  }
`;

const HeroAnimation = () => {
  const scrollToShop = () => {
    console.log('Button clicked!'); // Debug log
    const shopSection = document.getElementById('shop-section');
    if (shopSection) {
      shopSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      <GlobalStyle />
      <HeroSection>
        <TextContainer>
          <Letter $delay={0}>A</Letter>
          <Letter $delay={0.3}>I</Letter>
          <Letter $delay={0.6}>P</Letter>
          <Letter $delay={0.9}>C</Letter>
        </TextContainer>
        <Background />
        <ContentWrapper>
          <KVImage 
            src="https://content.leadermarketing.com.au/assets/uploads/Leader_AI-Laptops_KV.png"
            alt="Leader AI PC"
          />
          <Logo
            src="https://content.leadermarketing.com.au/assets/uploads/leader-intel-copilot-ai-pc-logos.png"
            alt="Leader Copilot AI PC Logo"
          />
        </ContentWrapper>
        <ButtonWrapper>
          <ShopNowButton onClick={scrollToShop}>
            SHOP NOW
          </ShopNowButton>
        </ButtonWrapper>
      </HeroSection>
    </>
  );
};

export default HeroAnimation;
