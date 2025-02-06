import React, { useState } from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarContainer = styled.div`
  .calendar-wrapper {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .react-calendar {
    width: 100%;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.1);
    font-family: 'Roboto', sans-serif;
    line-height: 1.125em;
  }

  .react-calendar--doubleView {
    width: 700px;
  }

  .react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
    margin: -0.5em;
  }

  .react-calendar--doubleView .react-calendar__viewContainer > * {
    width: 50%;
    margin: 0.5em;
  }

  .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
    color: #ffffff;
  }

  .react-calendar button:enabled:hover {
    cursor: pointer;
    background-color: rgba(255, 215, 0, 0.1);
  }

  .react-calendar__navigation {
    display: flex;
    height: 44px;
    margin-bottom: 1em;
  }

  .react-calendar__navigation button {
    min-width: 44px;
    background: transparent;
    font-size: 1.2rem;
  }

  .react-calendar__navigation button:disabled {
    background-color: transparent;
    opacity: 0.5;
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: rgba(255, 215, 0, 0.1);
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.9rem;
    color: #ffd700;
  }

  .react-calendar__month-view__weekdays__weekday {
    padding: 0.5em;
  }

  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75em;
    font-weight: bold;
  }

  .react-calendar__month-view__days__day--weekend {
    color: #ff8c8c;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: rgba(255, 255, 255, 0.3);
  }

  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 2em 0.5em;
  }

  .react-calendar__tile {
    max-width: 100%;
    padding: 10px 6.6667px;
    background: none;
    text-align: center;
    line-height: 16px;
  }

  .react-calendar__tile:disabled {
    background-color: transparent;
    opacity: 0.5;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: rgba(255, 215, 0, 0.1);
  }

  .react-calendar__tile--now {
    background: rgba(255, 215, 0, 0.2);
  }

  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: rgba(255, 215, 0, 0.3);
  }

  .react-calendar__tile--hasActive {
    background: #ffd700;
    color: #121212;
  }

  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #ffd700;
  }

  .react-calendar__tile--active {
    background: #ffd700;
    color: #121212;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #ffd700;
  }
`;

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());

  return (
    <CalendarContainer className="page-container">
      <h1 className="page-heading">Upcoming Shows</h1>
      <div className="calendar-wrapper">
        <Calendar
          onChange={setDate}
          value={date}
          locale="en-US"
        />
      </div>
    </CalendarContainer>
  );
};

export default CalendarPage;
