import React from 'react';
import { Container } from '../components/common';
import { TestimonialCard } from '../components/ui';
import './TestimonialsSection.css';

export const TestimonialsSection: React.FC = () => {
    return (
        <section className="testimonials-section">
            <Container>
                <h2 className="testimonials-title">Wat klanten <span className="text-outline">zeggen</span></h2>

                <div className="testimonials-grid">
                    <TestimonialCard
                        quote="Perfecte service en snelle reactietijd. We zijn erg tevreden met de gang van zaken."
                        author="Jan de Vries"
                        role="Directeur Bouwbedrijf"
                        rating={5}
                    />
                    <TestimonialCard
                        quote="Sinds we met Verzuimgo werken is ons verzuimpercentage met 2% gedaald."
                        author="Sophie Janssen"
                        role="HR Manager"
                        rating={5}
                    />
                    <TestimonialCard
                        quote="Duidelijke communicatie en geen verborgen kosten. Precies wat we zochten."
                        author="Peter Bakker"
                        role="Eigenaar Aannemersbedrijf"
                        rating={5}
                    />
                </div>
            </Container>
        </section>
    );
};
