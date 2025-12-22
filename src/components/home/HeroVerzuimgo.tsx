import React from 'react';
import { Container, Button } from '../ui';
import './HeroVerzuimgo.css';

export const HeroVerzuimgo: React.FC = () => {
    return (
        <section className="hero-v">
            <Container>
                <div className="hero-v__content">
                    <h1 className="hero-v__title">
                        Meer aanvragen of meer sollicitanten voor bouwbedrijven.
                    </h1>
                    <p className="hero-v__subtitle">
                        Vaste maandelijkse abonnementen met concrete output.
                        Wij doen het werk, jij ziet resultaat.
                        Start binnen 7 dagen. Maandelijks opzegbaar.
                    </p>
                    <div className="hero-v__actions">
                        <Button variant="primary" size="large">Start een abonnement</Button>
                        <Button variant="outline" size="large">Vraag de gratis scan</Button>
                    </div>
                    <p className="hero-v__description">
                        Powered by Hummingbirds – voor maatwerk en grotere trajecten: hummingbirds.be
                    </p>
                </div>
            </Container>
        </section>
    );
};
