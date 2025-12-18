import React from 'react';
import { Container } from '../components/common';
import { PricingCard } from '../components/ui';
import './PricingComparison.css';

export const PricingComparison: React.FC = () => {
    return (
        <section className="pricing-comparison">
            <Container>
                <div className="pricing-grid">
                    <PricingCard
                        title="Voor kleine bedrijven"
                        price="690"
                        period="jaar"
                        features={[
                            "Direct 24/7 bereikbaar",
                            "Persoonlijke case manager",
                            "Verzuimbegeleiding op maat",
                            "Wettelijke verplichtingen gedekt"
                        ]}
                        variant="lime"
                    />
                    <PricingCard
                        title="Voor grote bedrijven"
                        price="690"
                        period="jaar"
                        features={[
                            "Alles van klein bedrijf",
                            "Extra preventie advies",
                            "Management rapportages",
                            "Inhouse trainingen"
                        ]}
                        variant="lime"
                    />
                </div>

                <div className="pricing-details">
                    <div className="pricing-detail-column">
                        <h3>Alles inbegrepen:</h3>
                        <ul>
                            <li>✓ Wet verbetering poortwachter</li>
                            <li>✓ Case management</li>
                            <li>✓ Bedrijfsarts consulten</li>
                            <li>✓ Re-integratie plannen</li>
                        </ul>
                    </div>
                    <div className="pricing-detail-column">
                        <h3>Extra voordelen:</h3>
                        <ul>
                            <li>✓ Geen onverwachte kosten</li>
                            <li>✓ Landelijke dekking</li>
                            <li>✓ Direct inzetbaar</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    );
};
