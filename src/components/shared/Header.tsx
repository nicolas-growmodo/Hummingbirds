import React, { useState, useEffect } from 'react';
import { Container } from '../ui';
import './Header.css';
const logo = '/assets/images/logo.png';

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <header className="header">
            <Container className="header__container">
                <div className="header__logo">
                    <img src={logo} alt="" srcSet="" style={{ maxWidth: '210px' }} />
                </div>

                <div className="header__right">
                    <div className="header__lang desktop-only">
                        <span className="lang-active">NL</span>
                        <span className="lang-sep"> </span>
                        <span>EN</span>
                    </div>

                    <button className="header__jobs-btn desktop-only">
                        JOBS <span className="arrow">→</span>
                    </button>

                    <button className={`header__icon-btn ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} style={{ zIndex: 60 }}>
                        {isMenuOpen ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        )}
                    </button>

                    <button className="header__icon-btn footer-match desktop-only">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                    </button>
                </div>
            </Container>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu__content">
                    <nav className="mobile-nav">
                        <a href="#" className="mobile-nav__link">Diensten</a>
                        <a href="#" className="mobile-nav__link">Bedrijf</a>
                        <a href="#" className="mobile-nav__link">Cases</a>
                        <a href="#" className="mobile-nav__link">Contact</a>
                    </nav>

                    <div className="mobile-menu__footer">
                        <div className="mobile-actions">
                            <button className="header__jobs-btn">
                                JOBS <span className="arrow">→</span>
                            </button>
                            <div className="header__lang">
                                <span className="lang-active">NL</span>
                                <span className="lang-sep"> </span>
                                <span>EN</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
