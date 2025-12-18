import React from 'react';
import './TestimonialCard.css';

interface TestimonialCardProps {
    quote: string;
    author: string;
    role: string;
    rating?: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
    quote,
    author,
    role,
    rating = 5,
}) => {
    return (
        <div className="testimonial-card">
            <div className="testimonial-card__stars">
                {[...Array(rating)].map((_, i) => (
                    <span key={i} className="testimonial-card__star">★</span>
                ))}
            </div>
            <blockquote className="testimonial-card__quote">
                "{quote}"
            </blockquote>
            <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">
                    {author.charAt(0)}
                </div>
                <div className="testimonial-card__info">
                    <div className="testimonial-card__name">{author}</div>
                    <div className="testimonial-card__role">{role}</div>
                </div>
            </div>
        </div>
    );
};
