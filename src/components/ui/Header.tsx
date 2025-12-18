import React from 'react';
import { Container } from '../common';
import './Header.css';

export const Header: React.FC = () => {
    return (
        <header className="header">
            <Container className="header__container">
                <div className="header__logo">
                    {/* Replaced Icon with requested LOGO text structure, keeping icon for visual balance if needed, but user asked for word LOGO */}
                    {/* Based on screenshot, there is a bird icon. I will keep a placeholder icon and adding LOGO word. */}
                    <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="header__logo-icon">
                        <path d="M8 16L14 22L32 6" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="header__logo-text-group">
                        <span className="header__logo-main">LOGO</span>
                        <span className="header__logo-sub">branding meets digital</span>
                    </div>
                </div>

                <div className="header__right">
                    <div className="header__lang">
                        <span className="lang-active">NL</span>
                        <span className="lang-sep"> </span>
                        <span>EN</span>
                    </div>

                    <button className="header__jobs-btn">
                        JOBS <span className="arrow">→</span>
                    </button>

                    <button className="header__icon-btn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </button>

                    <button className="header__icon-btn footer-match">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                    </button>
                </div>
            </Container>
        </header>
    );
};
