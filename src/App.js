import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import WhyVyra from './components/WhyVyra';
import CoursesPage from './components/CoursesPage';
import CourseDetails from './components/CourseDetails'; // ✅ NEW
import AboutPage from './components/AboutPage';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <WhyVyra />
              </>
            }
          />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:id" element={<CourseDetails />} /> {/* ✅ NEW route */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/register" element={<RegistrationForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
