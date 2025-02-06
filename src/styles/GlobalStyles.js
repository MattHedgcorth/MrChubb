import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #000000;
    color: #ffffff;
    font-family: 'Montserrat', sans-serif;
    line-height: 1.6;
    min-height: 100vh;
    letter-spacing: 0.5px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 1.5rem;
  }

  .page-container {
    padding: 60px 40px 40px;
    max-width: 1400px;
    margin: 0 auto;
  }

  .page-heading {
    font-size: 2.5rem;
    color: #ffffff;
    text-align: center;
    margin: 3rem 0;
    font-weight: 200;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    color: #ffffff;
    text-decoration: none;
    transition: opacity 0.3s ease;
    
    &:hover {
      opacity: 0.7;
    }
  }

  @media (max-width: 768px) {
    .page-container {
      padding: 50px 20px 20px;
    }

    .page-heading {
      font-size: 2rem;
    }
  }
`;

export default GlobalStyles;
