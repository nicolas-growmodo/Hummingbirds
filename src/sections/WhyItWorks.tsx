import React from 'react';
import { Container, Button } from '../components/common';
import './WhyItWorks.css';

export const WhyItWorks: React.FC = () => {
    return (
        <section className="why-it-works">
            <Container>
                <div className="why-content">
                    <div className="why-text">
                        <h2>Waarom dit werkt</h2>
                        <p className="why-lead">
                            Geen gedoe, direct actie.
                        </p>
                        <ul className="why-list">
                            <li>✓ Snel online: Binnen 24u actief</li>
                            <li>✓ Alles onder één login</li>
                            <li>✓ Vaste lage prijs per jaar</li>
                            <li>✓ Preventie, re-integratie en meer ondergebracht</li>
                        </ul>
                        <div className="why-actions">
                            <Button variant="primary">Start nu</Button>
                            <Button variant="outline">Meer info</Button>
                        </div>
                    </div>
                    <div className="why-image">
                        {/* Placeholder for the image in the design */}
                        <div className="image-placeholder">
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Consultant meeting" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
