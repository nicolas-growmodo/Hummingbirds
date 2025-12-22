import React from 'react';
import { Container, Button } from '../common';

import './Footer.css';

export const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <Container>
                {/* Massive Title */}
                <h1 className="footer-title">contact</h1>

                <div className="footer-content">
                    {/* Left Column */}
                    <div className="footer-left">
                        <h2>Let's grow<br />together</h2>
                        <div className="footer-text">
                            <p>Heb je de ambitie om te groeien met je onderneming en zoek je daarvoor een gedreven marketingpartner, dan zit je helemaal goed bij Hummingbirds. Van strategie en branding tot het uitrollen van je digitale marketing, wij staan voor je klaar. Contacteer ons gerust bij verdere vragen of voor een kennismakingsgesprek.</p>
                        </div>
                        <Button variant="black" className="footer-btn">CONTACT &rarr;</Button>
                    </div>

                    {/* Right Column */}
                    <div className="footer-right">
                        <div className="footer-contact-info">
                            <a href="mailto:info@hummingbirds.be" className="footer-email">
                                <span className="star-icon">★</span> info@hummingbirds.be
                            </a>
                            <a href="tel:+3256310041" className="footer-phone">+32 56 31 00 41</a>
                        </div>

                        <div className="footer-socials">
                            <span>f</span> <span>📷</span> <span>in</span> <span>P</span> <span>WA</span>
                        </div>

                        <div className="footer-reviews">
                            <div className="stars">★★★★★</div>
                            <span className="review-text">32 Google recensies</span>
                        </div>

                        <div className="footer-legal">
                            <div className="legal-col">
                                HUMMINGBIRDS BV<br />
                                MORINNESTRAAT 7<br />
                                8500<br />
                                KORTRIJK<br />
                                BE 0684 696 967
                            </div>
                            <div className="legal-col">
                                <a href="#">PRIVACY & COOKIES</a><br />
                                <a href="#">ONZE REGIO'S</a><br />
                                <a href="#">ALGEMENE VOORWAARDEN</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
