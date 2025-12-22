import React from 'react';
import { Button } from './Button';
import './PricingCard.css';

interface PricingCardProps {
    title: string;
    price: string;
    period?: string;
    features: string[]; // This will map to "Wat we elke maand concreet doen"
    targetAudience: string; // "Voor wie"
    outcome: string; // "Wat dit oplevert"
    adBudget?: {
        title: string;
        description: string;
    };
    limitations?: string[]; // "Grenzen"
    recommended?: boolean;
    buttonText?: string;
    variant?: 'lime' | 'white';
}

export const PricingCard: React.FC<PricingCardProps> = ({
    title,
    price,
    period,
    features,
    targetAudience,
    outcome,
    adBudget,
    limitations,
    recommended = false,
    buttonText = 'Start Meer Aanvragen',
    variant = 'lime',
}) => {
    return (
        <div className={`pricing-card pricing-card--${variant} ${recommended ? 'pricing-card--recommended' : ''}`}>
            {recommended && <div className="pricing-card__badge">Meest gekozen</div>}

            {/* Header Section */}
            <div className="pricing-card__header">
                <h3 className="pricing-card__title">{title}</h3>
                <div className="pricing-card__price-container">
                    <span className="pricing-card__currency">€</span>
                    <span className="pricing-card__price">€{price}</span>
                    <span className="pricing-card__period"><br />{period}</span>
                </div>
            </div>

            <div className="pricing-card__content">
                <div className="pricing-card__button-wrapper">
                    <Button
                        variant="black" // We need to add a black variant or style it manually
                        className="pricing-card__button"
                        size="medium"
                    >
                        {buttonText}
                    </Button>
                </div>

                <div className="pricing-card__body">
                    {/* Voor wie */}
                    <div className="pricing-section">
                        <h4 className="pricing-section__title">Voor wie</h4>
                        <p className="pricing-section__text">{targetAudience}</p>
                    </div>

                    {/* Wat we elke maand concreet doen */}
                    <div className="pricing-section">
                        <h4 className="pricing-section__title">Wat we elke maand concreet doen</h4>
                        <ul className="pricing-card__list">
                            {features.map((feature, index) => (
                                <li key={index} className="pricing-card__item">
                                    <span className="pricing-card__check">✔</span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Wat dit oplevert */}
                    <div className="pricing-section">
                        <h4 className="pricing-section__title">Wat dit oplevert</h4>
                        <p className="pricing-section__text">{outcome}</p>
                    </div>

                    {/* Advertentiebudget */}
                    {adBudget && (
                        <div className="pricing-ad-budget">
                            <h4 className="pricing-section__title">{adBudget.title}</h4>
                            <p className="pricing-section__text">{adBudget.description}</p>
                        </div>
                    )}

                    {/* Grenzen */}
                    {limitations && limitations.length > 0 && (
                        <div className="pricing-section">
                            <h4 className="pricing-section__title">Grenzen</h4>
                            <ul className="pricing-card__limitations">
                                {limitations.map((limit, index) => (
                                    <li key={index} className="pricing-card__limit-item">
                                        <span className="pricing-card__info-icon">ⓘ</span>
                                        <span>{limit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
