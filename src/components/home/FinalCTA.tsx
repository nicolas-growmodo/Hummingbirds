import React from 'react';
import { Container, Button } from '../ui';
import './FinalCTA.css';

export const FinalCTA: React.FC = () => {
    return (
        <section className="final-cta">
            <Container>
                <div className="final-cta__content">
                    <h2>Klaar om te groeien?</h2>
                    <p>Start vandaag nog met een abonnement en zie binnen 7 dagen de eerste resultaten. Of vraag eerst een gratis scan aan om te zien waar jouw grootste kansen liggen.</p>
                    <div className="final-cta__actions">
                        <Button variant="black" size="large">Start een abonnement</Button>
                        <Button variant="outline" size="large" className="btn-scan">Vraag de gratis scan</Button>
                    </div>
                </div>
            </Container>
        </section>
    );
};
