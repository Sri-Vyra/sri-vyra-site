import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import WhyVyra from './components/WhyVyra';
import Contact from './components/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Courses />
      <WhyVyra />
      <Contact />
    </div>
  );
}

export default App;
