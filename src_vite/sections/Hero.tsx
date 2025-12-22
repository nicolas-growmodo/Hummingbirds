import React from 'react';
import { Container, Button } from '../components/common';
import './Hero.css';

export const Hero: React.FC = () => {
    return (
        <section className="hero">
            <Container>
                <div className="hero__content">
                    <h1 className="hero__title">
                        Build Amazing Landing Pages
                        <span className="hero__title-gradient"> That Convert</span>
                    </h1>
                    <p className="hero__description">
                        Create stunning, professional landing pages with our modern framework.
                        Fast, responsive, and designed to wow your visitors.
                    </p>
                    <div className="hero__cta">
                        <Button variant="primary" size="large">
                            Get Started
                        </Button>
                        <Button variant="outline" size="large">
                            Learn More
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
};
