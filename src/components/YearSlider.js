import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const SliderContainer = styled.div`
  height: 100%;
  padding: 0 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SliderSection = styled.div`
  position: relative;
  display: flex;
  height: 525px;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  width: 100%;
`;

const SliderArea = styled.div`
  position: relative;
  width: 24px;
  height: 100%;
  margin-left: 1rem;
`;

const SliderTrack = styled.div`
  height: 100%;
  width: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  touch-action: none;
  user-select: none;
`;

const SliderProgress = styled.div`
  position: absolute;
  width: 100%;
  background: linear-gradient(180deg, #4a90e2, #63b3ed);
  border-radius: 2px;
  bottom: 0;
  height: ${props => props.$percentage}%;
`;

const SliderHandle = styled.div`
  width: 20px;
  height: 20px;
  background: #63b3ed;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  bottom: ${props => props.$percentage}%;
  transform: translate(-50%, 50%);
  cursor: grab;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.1s;
  z-index: 2;

  &:hover {
    transform: translate(-50%, 50%) scale(1.1);
  }

  &:active {
    cursor: grabbing;
  }
`;

const YearDisplay = styled.div`
  font-size: 2rem;
  font-weight: 200;
  text-align: center;
  color: #fff;
  letter-spacing: 2px;
  margin-bottom: 0.75rem;
`;

const YearMarkers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-left: 1.5rem;
  flex-grow: 1;
`;

const YearMarker = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.75rem;
  letter-spacing: 0.5px;
  height: 0;
  position: relative;

  svg {
    font-size: 0.6rem;
    color: rgba(255, 255, 255, 0.3);
  }
`;

const ClickArea = styled.div`
  position: absolute;
  top: 0;
  left: -10px;
  right: -10px;
  bottom: 0;
  cursor: pointer;
`;

const YearSlider = ({ minYear = 1996, maxYear = 2026, onYearChange }) => {
  const [currentYear, setCurrentYear] = useState(maxYear);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);

  const calculatePercentage = (year) => {
    return ((year - minYear) / (maxYear - minYear)) * 100;
  };

  const updateSliderPosition = useCallback((e) => {
    const rect = sliderRef.current.getBoundingClientRect();
    const y = e.clientY - rect.top;
    const percentage = Math.min(100, Math.max(0, (y / rect.height) * 100));
    
    const invertedPercentage = 100 - percentage;
    const year = Math.round((invertedPercentage * (maxYear - minYear)) / 100 + minYear);
    const calculatedYear = Math.max(minYear, Math.min(maxYear, year));
    
    if (calculatedYear !== currentYear) {
      setCurrentYear(calculatedYear);
      onYearChange(calculatedYear);
    }
  }, [currentYear, maxYear, minYear, onYearChange]);

  const handleMouseMove = useCallback((e) => {
    if (isDragging) {
      updateSliderPosition(e);
    }
  }, [isDragging, updateSliderPosition]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    updateSliderPosition(e);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const direction = e.deltaY > 0 ? -1 : 1; // -1 for scroll down (year decrease), 1 for scroll up (year increase)
    const newYear = Math.max(minYear, Math.min(maxYear, currentYear + direction));
    
    if (newYear !== currentYear) {
      setCurrentYear(newYear);
      onYearChange(newYear);
    }
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove]);

  const percentage = calculatePercentage(currentYear);

  const getYearMarkers = () => {
    const markers = [];
    // Generate only even years from maxYear down to minYear
    for (let year = maxYear; year >= minYear; year--) {
      if (year % 2 === 0) {
        markers.push(year);
      }
    }
    return markers;
  };

  return (
    <SliderContainer>
      <YearDisplay>{currentYear}</YearDisplay>
      <SliderSection>
        <SliderArea>
          <SliderTrack ref={sliderRef} onWheel={handleWheel}>
            <ClickArea onClick={updateSliderPosition} />
            <SliderProgress $percentage={percentage} />
            <SliderHandle
              $percentage={percentage}
              onMouseDown={handleMouseDown}
            />
          </SliderTrack>
        </SliderArea>
        <YearMarkers>
          {getYearMarkers().map(year => (
            <YearMarker key={year}>
              <FontAwesomeIcon icon={faChevronRight} />
              {year}
            </YearMarker>
          ))}
        </YearMarkers>
      </SliderSection>
    </SliderContainer>
  );
};

export default YearSlider;