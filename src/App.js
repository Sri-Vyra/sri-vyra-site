import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import WhyVyra from './components/WhyVyra';
import CoursesPage from './components/CoursesPage';
import CourseDetails from './components/CourseDetails';
import AboutPage from './components/AboutPage';
import RegistrationForm from './components/RegistrationForm';
import { AuthProvider } from './components/AuthContext';
import AuthPage from './components/AuthPage';
import { Toaster } from 'react-hot-toast';
import ProfilePage from './components/ProfilePage';
import EliteTrack from './components/EliteTrack';
import PremiumTrack from './components/PremiumTrack';
import MentorshipTrack from './components/MentorshipTrack';
import ContentPage from './components/Practice/ContentPage';
import PracticePage from './components/Practice/PracticePage';
import ProblemsListPage from './components/Practice/ProblemsListPage'; 
import ProblemPage from './components/Practice/ProblemPage';     
import ScrollToTop from './components/ScrollToTop';    
import AnnouncementBar from './components/AnnouncementBar';

function AppRoutes() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <Navbar />
      {isHome && <AnnouncementBar />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<><HeroSection /><WhyVyra /></>} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<AuthPage isLogin={true} />} />
        <Route path="/signup" element={<AuthPage isLogin={false} />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/courses/elite" element={<EliteTrack />} />
        <Route path="/courses/premium" element={<PremiumTrack />} />
        <Route path="/courses/mentorship" element={<MentorshipTrack />} />
        <Route path="/practice" element={<PracticePage />} />
        <Route path="/practice/:track" element={<ProblemsListPage />} />
        <Route path="/practice/:track/problem/:problemId" element={<ProblemPage />} />
        <Route path="/content/:id" element={<ContentPage />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="font-sans">
          <Toaster position="top-right" />
          <AppRoutes />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
