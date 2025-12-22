import React from 'react';
import { Container } from '../ui';
import { FAQ } from '../ui';
import './FAQSection.css';

export const FAQSection: React.FC = () => {
    const faqItems = [
        {
            question: "Wanneer starten jullie?",
            answer: "Binnen 7 dagen na betaling en onboarding."
        },
        {
            question: "Kan ik opzeggen?",
            answer: "Ja, je kunt het abonnement maandelijks opzeggen. We geloven in onze kwaliteit en binden klanten liever met resultaten dan met wurgcontracten."
        },
        {
            question: "Moet ik zelf veel doen?",
            answer: "Nee, wij nemen het meeste werk uit handen. We hebben enkel input nodig bij de start en periodieke checks. Je kunt je blijven focussen op je zaak."
        },
        {
            question: "Is advertentiebudget inbegrepen?",
            answer: "Nee, advertentiebudget betaal je rechtstreeks aan Google. Wij adviseren een startbudget van €15/dag, maar dit is volledig flexibel en aanpasbaar."
        }
    ];

    return (
        <section className="faq-section">
            <Container>
                <div className="faq-header">
                    <h2 className="faq-title">
                        <span className="title-main">Veelgestelde</span>
                        <span className="title-watermark">vragen</span>
                    </h2>
                </div>
                <div className="faq-container">
                    <FAQ items={faqItems} />
                </div>

                <div className="faq-cta">
                    <h3>Nog meer vragen?</h3>
                    <p>Neem contact op met ons team</p>
                    <button className="btn-contact">Contact</button>
                </div>
            </Container>
        </section>
    );
};
