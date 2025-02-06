import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  .about-content {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  p {
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    line-height: 1.8;
  }

  .highlight {
    color: #ffd700;
    font-weight: 500;
  }
`;

const About = () => {
  return (
    <AboutContainer className="page-container">
      <h1 className="script-heading">About Mr. Chubb</h1>
      <div className="about-content">
        <p>
          <span className="highlight">Mr. Chubb</span> is a dynamic musical ensemble that brings together talented musicians with a passion for creating unforgettable performances. Our unique sound blends various genres, creating an experience that resonates with audiences of all backgrounds.
        </p>
        <p>
          Founded with the vision of bringing fresh, innovative music to the scene, we've been entertaining crowds and pushing musical boundaries. Our performances are known for their energy, creativity, and the genuine connection we establish with our audience.
        </p>
        <p>
          Whether we're performing at intimate venues or large festivals, we bring the same level of enthusiasm and professionalism to every show. Our goal is to create memorable experiences through our music, leaving audiences with lasting impressions and unforgettable moments.
        </p>
        <p>
          We're constantly evolving, exploring new sounds, and working on original material while paying homage to the music that inspires us. Join us at our next performance and be part of our musical journey!
        </p>
      </div>
    </AboutContainer>
  );
};

export default About;
