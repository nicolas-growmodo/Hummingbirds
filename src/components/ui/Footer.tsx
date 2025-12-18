import React from 'react';
import { Container } from '../common';

import './Footer.css';

export const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <Container>
                <div className="footer__grid">
                    <div>
                        <div className="footer__logo">Verzuimgo</div>
                        <p className="footer__desc">De slimme oplossing voor verzuimbeheer.</p>
                    </div>

                    <div className="footer__links">
                        <h4>Diensten</h4>
                        <a href="#">Preventie</a>
                        <a href="#">Re-integratie</a>
                        <a href="#">Advies</a>
                    </div>

                    <div className="footer__links">
                        <h4>Bedrijf</h4>
                        <a href="#">Over ons</a>
                        <a href="#">Contact</a>
                        <a href="#">Vacatures</a>
                    </div>

                    <div className="footer__links">
                        <h4>Legaal</h4>
                        <a href="#">Privacy</a>
                        <a href="#">Voorwaarden</a>
                        <a href="#">Cookies</a>
                    </div>
                </div>
                <div className="footer__bottom">
                    &copy; {new Date().getFullYear()} Verzuimgo. Alle rechten voorbehouden.
                </div>
            </Container>
        </footer>
    );
};
