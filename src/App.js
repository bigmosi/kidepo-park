import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import AboutUsPage from './pages/aboutUS';
import ActivitiesPage from './pages/activities';
import ContactPage from './pages/contactPage';
import WildlifePage from './pages/wildLifePage';
import EventsPage from './pages/EventsPage';
import Footer from './components/footer';
import Navigation from './components/nav';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/parks" element={<WildlifePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/activities" element={<ActivitiesPage activities={['Hiking', 'Safari Tours', 'Bird Watching', 'Photography', 'Camping']} />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
