import React from 'react';
import { Container } from '../components/common';
import { FAQ } from '../components/ui';
import './FAQSection.css';

export const FAQSection: React.FC = () => {
    const faqItems = [
        {
            question: "Wat kost de dienst?",
            answer: "Voor kleine bedrijven hanteren we een vast tarief van €690 per jaar. Dit is inclusief 24/7 bereikbaarheid en een persoonlijke case manager."
        },
        {
            question: "Kan ik opzeggen?",
            answer: "Ja, je kunt het abonnement jaarlijks opzeggen met een opzegtermijn van 1 maand voor het einde van de contractperiode."
        },
        {
            question: "Zijn er verborgen kosten?",
            answer: "Nee, we werken met vaste transparante prijzen. Eventuele extra diensten worden vooraf duidelijk geoffreerd en gefactureerd na uitvoering."
        }
    ];

    return (
        <section className="faq-section">
            <Container>
                <h2 className="faq-title">Veelgestelde <span className="text-gray">vragen</span></h2>
                <div className="faq-container">
                    <FAQ items={faqItems} />
                </div>
            </Container>
        </section>
    );
};
