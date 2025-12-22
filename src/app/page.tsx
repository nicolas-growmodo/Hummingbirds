"use client";

import { Header } from '../components/shared';
import { Footer } from '../components/shared';
import {
    HeroVerzuimgo,
    ServiceSelection,
    PricingComparison,
    ExtraServices,
    WhyItWorks,
    TestimonialsSection,
    FAQSection,
    FinalCTA
} from '../components/home';

export default function Home() {
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
}
