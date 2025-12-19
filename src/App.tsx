import React from 'react';
import { Header, Footer } from './components/ui';
import {
  HeroVerzuimgo,
  ServiceSelection,
  PricingComparison,
  ExtraServices,
  WhyItWorks,
  TestimonialsSection,
  FAQSection,
  FinalCTA
} from './sections';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <HeroVerzuimgo />
      <ServiceSelection />
      <PricingComparison />

      <ExtraServices />
      <WhyItWorks />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default App;

