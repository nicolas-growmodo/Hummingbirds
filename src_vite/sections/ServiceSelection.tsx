import React from 'react';
import { Container, Button } from '../components/common';
import './ServiceSelection.css';
import icon1 from '../assets/images/services/card-1-icon.svg';
import icon2 from '../assets/images/services/card-2-icon.svg';

export const ServiceSelection: React.FC = () => {
    return (
        <section className="service-selection">
            <Container>
                <div className="service-selection__header">
                    <h2 className="section-title">
                        <span className="title-main">Wat wil je</span>
                        <span className="title-watermark">verbeteren?</span>
                    </h2>
                </div>

                <div className="service-selection__grid">
                    {/* Card 1 */}
                    <div className="service-card">
                        <div className="service-card__icon">
                            <img src={icon1} alt="Verzuim verlagen icon" />
                        </div>
                        <h3 className="service-card__title">Verzuim verlagen</h3>
                        <p className="service-card__description">
                            Via Google en je website, gericht op betere klanten.
                        </p>
                        <div className="service-card__actions">
                            <Button variant="primary" size="small">Selecteer</Button>
                            <Button variant="outline" size="small">Meer &gt;</Button>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="service-card">
                        <div className="service-card__icon">
                            <img src={icon2} alt="Hulp bij beheer icon" />
                        </div>
                        <h3 className="service-card__title">Hulp bij beheer</h3>
                        <p className="service-card__description">
                            Meer kandidaten, zonder afhankelijk te zijn van interimkantoren.
                        </p>
                        <div className="service-card__actions">
                            <Button variant="primary" size="small">Selecteer</Button>
                            <Button variant="outline" size="small">Meer &gt;</Button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
