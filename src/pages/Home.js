import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  .hero-image {
    width: 100%;
    max-height: 80vh;
    object-fit: cover;
    margin-bottom: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  .hero-container {
    position: relative;
    margin-top: 1rem;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(18, 18, 18, 0.4) 0%, rgba(18, 18, 18, 0.8) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
  }

  .band-name {
    font-size: 5rem;
    color: #ffffff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    text-align: center;
    padding: 0 1rem;
  }

  @media (max-width: 768px) {
    .band-name {
      font-size: 3rem;
    }
  }
`;

const Home = () => {
  return (
    <HomeContainer className="page-container">
      <div className="hero-container">
        <img 
          src="/images/chubb-fort-adams.png" 
          alt="Mr. Chubb at Fort Adams" 
          className="hero-image"
        />
        <div className="overlay">
          <h1 className="band-name script-heading">Mr. Chubb</h1>
        </div>
      </div>
    </HomeContainer>
  );
};

export default Home;
