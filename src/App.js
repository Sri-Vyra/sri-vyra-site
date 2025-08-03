import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import WhyVyra from './components/WhyVyra';
import CoursesPage from './components/CoursesPage';
import CourseDetails from './components/CourseDetails';
import AboutPage from './components/AboutPage';
import RegistrationForm from './components/RegistrationForm';
import { AuthProvider } from './components/AuthContext'; // ✅ Import the Auth context
import AuthPage from './components/AuthPage';
import { Toaster } from 'react-hot-toast';
import ProfilePage from './components/ProfilePage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="font-sans">
          <Toaster position="top-right" />
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
            <Route path="/courses/:id" element={<CourseDetails />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/login" element={<AuthPage isLogin={true} />} />
            <Route path="/signup" element={<AuthPage isLogin={false} />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;