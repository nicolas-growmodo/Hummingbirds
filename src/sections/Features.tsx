import React from 'react';
import { Container } from '../components/common';
import './Features.css';

interface Feature {
    icon: string;
    title: string;
    description: string;
}

const features: Feature[] = [
    {
        icon: '⚡',
        title: 'Lightning Fast',
        description: 'Optimized performance for the best user experience',
    },
    {
        icon: '🎨',
        title: 'Beautiful Design',
        description: 'Modern, clean aesthetics that captivate your audience',
    },
    {
        icon: '📱',
        title: 'Fully Responsive',
        description: 'Perfect on all devices, from mobile to desktop',
    },
    {
        icon: '🔒',
        title: 'Secure & Reliable',
        description: 'Built with security and reliability in mind',
    },
];

export const Features: React.FC = () => {
    return (
        <section className="features">
            <Container>
                <div className="features__header">
                    <h2 className="features__title">Why Choose Us</h2>
                    <p className="features__subtitle">
                        Everything you need to create an amazing landing page
                    </p>
                </div>
                <div className="features__grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-card__icon">{feature.icon}</div>
                            <h3 className="feature-card__title">{feature.title}</h3>
                            <p className="feature-card__description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
