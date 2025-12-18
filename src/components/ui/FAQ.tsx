import React, { useState } from 'react';
import './FAQ.css';

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
            <button
                className="faq-item__toggle"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span className="faq-item__question">{question}</span>
                <span className="faq-item__icon">{isOpen ? '−' : '+'}</span>
            </button>
            <div className="faq-item__content">
                <div className="faq-item__answer">{answer}</div>
            </div>
        </div>
    );
};

interface FAQProps {
    items: Array<{ question: string; answer: string }>;
}

export const FAQ: React.FC<FAQProps> = ({ items }) => {
    return (
        <div className="faq">
            {items.map((item, index) => (
                <FAQItem key={index} {...item} />
            ))}
        </div>
    );
};
