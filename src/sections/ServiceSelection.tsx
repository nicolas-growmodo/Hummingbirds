import React from 'react';
import { Container, Button } from '../components/common';
import './ServiceSelection.css';

export const ServiceSelection: React.FC = () => {
    return (
        <section className="service-selection">
            <Container>
                <div className="service-selection__header">
                    <h2 className="section-title">Wat wil je<br />verbeteren?</h2>
                </div>

                <div className="service-selection__grid">
                    {/* Card 1 */}
                    <div className="service-card">
                        <div className="service-card__icon">📋</div>
                        <h3 className="service-card__title">Verzuim verlagen</h3>
                        <p className="service-card__description">
                            Minder ziekmeldingen, lagere kosten
                        </p>
                        <div className="service-card__actions">
                            <Button variant="primary" size="small">Selecteer</Button>
                            <Button variant="outline" size="small">Info</Button>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="service-card">
                        <div className="service-card__icon">💪</div>
                        <h3 className="service-card__title">Hulp bij beheer</h3>
                        <p className="service-card__description">
                            Re-integratie en case management
                        </p>
                        <div className="service-card__actions">
                            <Button variant="primary" size="small">Selecteer</Button>
                            <Button variant="outline" size="small">Info</Button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
