import React from 'react';
import './TestimonialCard.css';

interface TestimonialCardProps {
    title: string;
    quote: string;
    author: string;
    role: string;
    rating?: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
    title,
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
            <h4 className="testimonial-card__title">{title}</h4>
            <blockquote className="testimonial-card__quote">
                {quote}
            </blockquote>
            <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">
                    {author.split(' ').map(n => n[0]).join('').slice(0, 1)}
                </div>
                <div className="testimonial-card__info">
                    <div className="testimonial-card__name">{author}</div>
                    <div className="testimonial-card__role">{role}</div>
                </div>
            </div>
        </div>
    );
};
