import React from 'react';
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
  return (
    <div className="min-h-screen bg-ws-off-white font-sans text-ws-dark">
      <Navbar onLoginClick={onLoginClick} onSignupClick={onSignupClick} />
      <main>
        <HeroSection onSignupClick={onSignupClick} />
        <FeatureLinks />
        <ChequingShowcase />
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
