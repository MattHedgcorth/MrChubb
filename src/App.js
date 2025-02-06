import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import NavBar from './components/NavBar';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Calendar = React.lazy(() => import('./pages/Calendar'));
const Media = React.lazy(() => import('./pages/Media'));
const Contact = React.lazy(() => import('./pages/Contact'));

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #121212;
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #fff;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <GlobalStyles />
        <NavBar />
        <Suspense fallback={<Loading>Loading...</Loading>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/media" element={<Media />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </AppContainer>
    </Router>
  );
}

export default App;
