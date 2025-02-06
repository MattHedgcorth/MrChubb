import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Roboto:wght@300;400;500&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #121212;
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    line-height: 1.6;
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Dancing Script', cursive;
    margin-bottom: 1rem;
  }

  .page-container {
    padding: 80px 20px 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .script-heading {
    font-family: 'Dancing Script', cursive;
    font-size: 3rem;
    color: #ffd700;
    text-align: center;
    margin: 2rem 0;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    .page-container {
      padding: 70px 15px 15px;
    }

    .script-heading {
      font-size: 2.5rem;
    }
  }
`;

export default GlobalStyles;
