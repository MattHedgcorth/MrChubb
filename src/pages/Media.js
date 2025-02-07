import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import YearSlider from '../components/YearSlider';
import { mediaData } from '../data/sampleMedia';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faVideo, faFile, faCalendar } from '@fortawesome/free-solid-svg-icons';

const MediaContainer = styled.div`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  min-height: calc(100vh - 100px);
`;

const MediaLayout = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 2rem;
  margin-top: 2rem;
  height: calc(100vh - 200px);
`;

const SliderSection = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentSection = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 2rem;
  height: 100%;
  overflow-y: auto;
`;

const NoContent = styled.div`
  text-align: center;
  padding: 3rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.2rem;

  svg {
    font-size: 3rem;
    margin-bottom: 1rem;
    opacity: 0.5;
  }
`;

const MediaSection = styled.div`
  margin: 2rem 0;
  &:first-child {
    margin-top: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: #63b3ed;
  }
`;

const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`;

const MediaCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

const MediaPreview = styled.div`
  background: rgba(0, 0, 0, 0.2);
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 2rem;
    color: rgba(255, 255, 255, 0.5);
  }
`;

const MediaInfo = styled.div`
  padding: 1rem;
`;

const MediaTitle = styled.h3`
  font-size: 1rem;
  color: #fff;
  margin: 0;
  margin-bottom: 0.5rem;
`;

const MediaDescription = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
`;

const YearInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.1rem;

  svg {
    color: #63b3ed;
  }
`;

const Media = () => {
  const [selectedYear, setSelectedYear] = useState(2025);
  const [yearContent, setYearContent] = useState(null);

  useEffect(() => {
    setYearContent(mediaData[selectedYear] || null);
  }, [selectedYear]);

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  const renderMediaSection = (title, items, icon) => {
    if (!items || items.length === 0) return null;

    return (
      <MediaSection>
        <SectionTitle>
          <FontAwesomeIcon icon={icon} />
          {title}
        </SectionTitle>
        <MediaGrid>
          {items.map((item) => (
            <MediaCard key={item.id}>
              <MediaPreview>
                <FontAwesomeIcon icon={icon} />
              </MediaPreview>
              <MediaInfo>
                <MediaTitle>{item.title}</MediaTitle>
                <MediaDescription>{item.description}</MediaDescription>
              </MediaInfo>
            </MediaCard>
          ))}
        </MediaGrid>
      </MediaSection>
    );
  };

  return (
    <MediaContainer>
      <h1 className="page-heading">Media Archive</h1>
      <MediaLayout>
        <SliderSection>
          <YearInfo>
            <FontAwesomeIcon icon={faCalendar} />
            Selected Year
          </YearInfo>
          <YearSlider onYearChange={handleYearChange} />
        </SliderSection>
        <ContentSection>
          {yearContent ? (
            <>
              {renderMediaSection('Photos', yearContent.photos, faImage)}
              {renderMediaSection('Videos', yearContent.videos, faVideo)}
              {renderMediaSection('Documents', yearContent.documents, faFile)}
            </>
          ) : (
            <NoContent>
              <FontAwesomeIcon icon={faCalendar} />
              <p>No content available for {selectedYear}</p>
            </NoContent>
          )}
        </ContentSection>
      </MediaLayout>
    </MediaContainer>
  );
};

export default Media;
