import React from 'react';
import { Container, Button } from '../components/common';
import './HeroVerzuimgo.css';

export const HeroVerzuimgo: React.FC = () => {
    return (
        <section className="hero-v">
            <Container>
                <div className="hero-v__content">
                    <h1 className="hero-v__title">
                        Meer aanvragen of meer<br />
                        sollicitanten voor bouwbedrijven.
                    </h1>
                    <p className="hero-v__subtitle">
                        Pak onnodige kosten en zorgen over verzuim aan.<br />
                        Ontdek hoe wij je helpen met effectieve preventie en re-integratie.
                    </p>
                    <p className="hero-v__description">
                        Kies hieronder wat je wilt verbeteren en start gelukkig vandaag nog.
                    </p>
                    <div className="hero-v__actions">
                        <Button variant="primary" size="large">Start nu direct</Button>
                        <Button variant="outline" size="large">Meer informatie</Button>
                    </div>
                </div>
            </Container>
        </section>
    );
};
