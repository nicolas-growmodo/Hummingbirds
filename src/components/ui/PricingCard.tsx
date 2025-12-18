import React from 'react';
import { Button } from '../common';
import './PricingCard.css';

interface PricingCardProps {
    title: string;
    price: string;
    period?: string;
    features: string[];
    recommended?: boolean;
    buttonText?: string;
    variant?: 'lime' | 'white';
}

export const PricingCard: React.FC<PricingCardProps> = ({
    title,
    price,
    period,
    features,
    recommended = false,
    buttonText = 'Selecteer deze',
    variant = 'lime',
}) => {
    return (
        <div className={`pricing-card pricing-card--${variant} ${recommended ? 'pricing-card--recommended' : ''}`}>
            {recommended && <div className="pricing-card__badge">Meest gekozen</div>}
            <div className="pricing-card__header">
                <h3 className="pricing-card__title">{title}</h3>
                <div className="pricing-card__price-container">
                    <span className="pricing-card__currency">€</span>
                    <span className="pricing-card__price">{price}</span>
                    {period && <span className="pricing-card__period">/{period}</span>}
                </div>
            </div>

            <div className="pricing-card__content">
                <Button
                    variant={variant === 'lime' ? 'primary' : 'primary'}
                    className="pricing-card__button"
                    size="medium"
                >
                    {buttonText}
                </Button>

                <div className="pricing-card__features">
                    <p className="pricing-card__features-title">Inclusief:</p>
                    <ul className="pricing-card__list">
                        {features.map((feature, index) => (
                            <li key={index} className="pricing-card__item">
                                <span className="pricing-card__check">✓</span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
