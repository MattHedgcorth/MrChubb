import React from 'react';
import styled from 'styled-components';

const MediaContainer = styled.div`
  .media-content {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    text-align: center;
  }

  p {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.7);
  }
`;

const Media = () => {
  return (
    <MediaContainer className="page-container">
      <h1 className="script-heading">Media</h1>
      <div className="media-content">
        <p>Coming Soon!</p>
      </div>
    </MediaContainer>
  );
};

export default Media;
