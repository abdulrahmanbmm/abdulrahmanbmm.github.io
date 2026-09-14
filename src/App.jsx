import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickPitch from './components/QuickPitch';
import Services from './components/Services';
import SkillsMatrix from './components/SkillsMatrix';
import FeaturedProjects from './components/FeaturedProjects';
import Experience from './components/Experience';
import Leadership from './components/Leadership';
import Education from './components/Education';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { CheckCircle } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('ab_portfolio_theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('ab_portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  return (
    <div className="app-layout">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero onOpenContact={() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }} />
        <QuickPitch />
        <Services />
        <SkillsMatrix />
        <FeaturedProjects />
        <Experience />
        <Leadership />
        <Education />
        <Testimonials />
        <Contact onShowToast={showToast} />
      </main>

      <Footer />

      {/* Animated Toast Notification */}
      {toastMessage && (
        <div className="toast-notice" role="status" aria-live="polite">
          <CheckCircle size={18} />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
