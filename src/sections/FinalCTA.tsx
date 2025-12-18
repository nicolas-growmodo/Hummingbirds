import React from 'react';
import { Container, Button } from '../components/common';
import './FinalCTA.css';

export const FinalCTA: React.FC = () => {
    return (
        <section className="final-cta">
            <Container>
                <div className="final-cta__content">
                    <h2>Klaar om te groeien?</h2>
                    <p>Start vandaag met een professionele aanpak van verzuim.</p>
                    <Button variant="primary" size="large">Start nu direct</Button>
                </div>
            </Container>
        </section>
    );
};
