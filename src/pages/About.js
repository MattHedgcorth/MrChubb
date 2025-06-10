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
      <h1 className="page-heading">About Mr. Chubb</h1>
      <div className="about-content">
        <p>

          For over 25 years, <span className="highlight">Mr. Chubb</span> has been captivating audiences with a sound that’s both timeless and utterly fresh. We’re not just a band; we’re a powerhouse of musical energy, built on a foundation of incredible talent and a genuine love for connecting with people through music.
        </p><p>
          At our core, you’ll find a solid rhythm section driving every beat, supported by an impressive and highly skilled keys and guitar lineup. But that’s just the beginning! Our powerful and tight horn section adds a distinctive punch, while our striking vocals and deep multi-part harmonies will truly move you.
        </p><p>
          Over the years, we’ve proudly played hundreds of shows and events – from intimate clubs and private parties to massive festivals – consistently delivering a fun, positive, and performance-centric attitude that shines through every single song. We’re a team of seasoned, talented musicians who bring decades of experience and passion to every performance.
        </p><p>
          We’re constantly evolving, exploring new sonic landscapes while staying true to the influences that inspire us, and we can’t wait to share our journey with you!
        </p> </div>
    </AboutContainer>
  );
};

export default About;
