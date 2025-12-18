import React from 'react';
import { Container, Button } from '../components/common';
import './ExtraServices.css';

export const ExtraServices: React.FC = () => {
    return (
        <section className="extra-services">
            <Container>
                <div className="extra-services__header">
                    <h2>Extra werk nodig naast je abonnement?</h2>
                    <p>
                        Geen probleem, wij helpen je graag verder.<br />
                        Kies eenvoudig extra modules wanneer je ze nodig hebt.
                    </p>
                </div>

                <div className="extra-cards">
                    <div className="extra-card">
                        <div className="extra-card__badge">1-malig</div>
                        <div className="extra-card__price">€475</div>
                        <h3>Re-integratie</h3>
                        <Button variant="primary" size="small" className="extra-card__btn">Bestellen</Button>
                    </div>

                    <div className="extra-card">
                        <div className="extra-card__badge">1-malig</div>
                        <div className="extra-card__price">€950</div>
                        <h3>Spoor 2 traject</h3>
                        <Button variant="primary" size="small" className="extra-card__btn">Bestellen</Button>
                    </div>

                    <div className="extra-card">
                        <div className="extra-card__badge">1-malig</div>
                        <div className="extra-card__price">€1.800</div>
                        <h3>Arbeidsdeskundig</h3>
                        <Button variant="primary" size="small" className="extra-card__btn">Bestellen</Button>
                    </div>
                </div>

                <div className="extra-disclaimer">
                    <p>Prijzen zijn exclusief BTW. Facturatie vindt plaats na afronding van de werkzaamheden.</p>
                </div>
            </Container>
        </section>
    );
};
