import React from 'react';
import { Container, Button } from '../components/common';
import './WhyItWorks.css';
import firstImage from '../assets/images/WhyItWork/row-1.png';
import secondImage from '../assets/images/WhyItWork/row-2.png';

export const WhyItWorks: React.FC = () => {
    return (
        <section className="why-it-works">
            <Container>
                {/* Block 1: Waarom dit werkt */}
                <div className="why-block">
                    <div className="why-content">
                        <h2>Waarom dit werkt</h2>
                        <p className="why-subtitle">
                            Lorem Ipsum dolor sit Amet
                        </p>
                        <ul className="why-list">
                            <li>Geen maatwerk, dus snelle uitvoering</li>
                            <li>Elke maand zichtbaar werk</li>
                            <li>Geen lange contracten</li>
                            <li>Volledige focus op resultaat dat telt voor bouwbedrijven</li>
                        </ul>
                        <div className="why-actions">
                            <Button variant="primary" className="btn-lime">Meer info</Button>
                            <Button variant="outline" className="btn-arrow">Lees meer &gt;</Button>
                        </div>
                    </div>
                    <div className="why-image-wrapper">
                        <img
                            src={firstImage}
                            alt="Consultant meeting"
                            className="why-image"
                        />
                    </div>
                </div>

                {/* Block 2: Voor wie dit niet is */}
                <div className="why-block why-block--reverse">
                    <div className="why-image-wrapper">
                        <img
                            src={secondImage}
                            alt="Busy office"
                            className="why-image"
                        />
                    </div>
                    <div className="why-content">
                        <h2>Voor wie dit niet is</h2>
                        <p className="why-subtitle">
                            Dit aanbod is niet bedoeld voor:
                        </p>
                        <ul className="why-list">
                            <li>complexe marketingtrajecten</li>
                            <li>meerdere landen of merken</li>
                            <li>strategische workshops of intensieve begeleiding</li>
                            <li>Daarvoor werken we via Hummingbirds met een traject op maat</li>
                        </ul>
                        <div className="why-actions">
                            <Button variant="primary" className="btn-lime">Meer info</Button>
                            <Button variant="outline" className="btn-arrow">Lees meer &gt;</Button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
