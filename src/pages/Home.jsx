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
import { showcaseItems } from '../data/content';

const Home = ({ onLoginClick }) => {
  return (
    <div className="min-h-screen bg-ws-off-white font-sans text-ws-dark">
      <Navbar onLoginClick={onLoginClick} />
      <main>
        <HeroSection />
        <FeatureLinks />
        <ChequingShowcase />
        <CreditCardShowcase />
       
        
        {/* <section className="py-20">
          {showcaseItems.slice(1).map((item, index) => (
            <ShowcaseCard 
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
              reverse={item.reverse}
              badge={item.badge}
            />
          ))}
        </section> */}
        
        <WelcomeSection />
        <TradingShowcase />
        <PortfolioShowcase />
        <ClassicPortfolioShowcase />
        {/* <FeatureCards /> */}
        <TldrSection />
        <StatsSection />
        {/* <ComparisonTable /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
