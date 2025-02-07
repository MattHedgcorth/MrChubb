import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  position: relative;
  overflow: hidden;
  background-color: black;
`;

const HeroSection = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.7)
    );
    z-index: 1;
  }
`;

const HeroImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: grayscale(30%) contrast(120%);
  
  @media (max-width: 768px) {
    width: auto;
    height: 100%;
    object-fit: cover;
  }
`;

const ContentOverlay = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 2rem;
  max-width: 800px;
`;

const BandName = styled.h1`
  font-size: 5rem;
  font-weight: 200;
  letter-spacing: 15px;
  text-transform: uppercase;
  margin-bottom: 2rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 3rem;
    letter-spacing: 8px;
  }
`;

const Tagline = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  letter-spacing: 3px;
  text-transform: uppercase;
  opacity: 0.8;
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroImage 
          src="/images/chubb-fort-adams.png" 
          alt="Mr. Chubb at Fort Adams"
        />
        <ContentOverlay>
          <BandName>Mr. Chubb</BandName>
          <Tagline>Brass, Class, and a Whole lot of Sass!</Tagline>
        </ContentOverlay>
      </HeroSection>
    </HomeContainer>
  );
};

export default Home;
