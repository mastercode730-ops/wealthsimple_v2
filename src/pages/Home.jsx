import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeatureLinks from '../components/FeatureLinks';
import ChequingShowcase from '../components/ChequingShowcase';
import CreditCardShowcase from '../components/CreditCardShowcase';
import TradingShowcase from '../components/TradingShowcase';
import PortfolioShowcase from '../components/PortfolioShowcase';
import ClassicPortfolioShowcase from '../components/ClassicPortfolioShowcase';
import ShowcaseCard from '../components/ShowcaseCard';
import WelcomeSection from '../components/WelcomeSection';
import FeatureCards from '../components/FeatureCards';
import TldrSection from '../components/TldrSection';
import StatsSection from '../components/StatsSection';
import ComparisonTable from '../components/ComparisonTable';
import Footer from '../components/Footer';

const Home = ({ onLoginClick, onSignupClick }) => {
  const [activeSolution, setActiveSolution] = useState('Chequing');

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const map = {
        chequing: 'Chequing',
        trade: 'Trade',
        invest: 'Invest',
        advice: 'Advice',
        business: 'Business',
      };
      if (map[hash]) {
        setActiveSolution(map[hash]);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <div className="min-h-screen bg-[#090a0f] font-sans text-white">
      <Navbar 
        onLoginClick={onLoginClick} 
        onSignupClick={onSignupClick}
        onSelectSolution={(solution) => setActiveSolution(solution)}
        activeSolution={activeSolution}
      />
      <main>
        <HeroSection onSignupClick={onSignupClick} />
        <FeatureLinks 
          onSignupClick={onSignupClick} 
          activeTab={activeSolution}
          setActiveTab={setActiveSolution}
        />
        <CreditCardShowcase />
        <WelcomeSection />
        <TradingShowcase />
        <PortfolioShowcase />
        <ClassicPortfolioShowcase />
        <TldrSection />
        <StatsSection onSignupClick={onSignupClick} />
      </main>
      <Footer onSignupClick={onSignupClick} />
    </div>
  );
};

export default Home;
