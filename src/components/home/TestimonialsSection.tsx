import React from 'react';
import { Container } from '../ui';
import { TestimonialCard } from '../ui';
import './TestimonialsSection.css';
const logo = '/assets/images/testimonials-bg.svg';

export const TestimonialsSection: React.FC = () => {
    return (
        <section className="testimonials-section">
            <div className="testimonials-bg">
                <img src={logo} alt="" />
            </div>
            <Container>
                <div className="testimonials-header">
                    <h2 className="testimonials-title">Wat klanten <span className="opacity-text">zeggen</span></h2>
                </div>

                <div className="testimonials-grid">
                    <TestimonialCard
                        title="De 360° aanpak van Hummingbirds"
                        quote="van strategie tot uitvoering – zorgt ervoor dat alles perfect op elkaar is afgestemd. Ze zetten sterk in op AI-automatisatie en denken proactief mee om steeds de beste resultaten te behalen."
                        author="Rahul MF"
                        role="Local Guide"
                        rating={5}
                    />
                    <TestimonialCard
                        title="Kennis van zaken!"
                        quote="Wij zijn zeer tevreden van het resultaat van onze website inzake Medisource. Bovendien steeds vriendelijk en vlot bereikbaar wanneer nodig. Professionele hulp van een team met kennis..."
                        author="Kim Garcia Miranda"
                        role="Local Guide"
                        rating={5}
                    />
                    <TestimonialCard
                        title="Zeer goede ervaringen"
                        quote="Zeer goede ervaringen met Hummingbirds. Juiste en snelle communicatie met doeltreffende resultaten. Onze warme leads zijn exponentieel gestegen!"
                        author="Harold Herreman"
                        role="Local Guide"
                        rating={5}
                    />
                </div>
            </Container>
        </section>
    );
};
