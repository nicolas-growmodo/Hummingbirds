import React from 'react';
import { Container, Button } from '../components/common';
import './ExtraServices.css';

export const ExtraServices: React.FC = () => {
    return (
        <section className="extra-services">
            <Container>
                <div className="extra-services__header">
                    <h2>Extra werk nodig naast je abonnement?</h2>
                    <p>
                        Met credits kan je flexibel extra werk laten uitvoeren:<br />
                        copywriting, design, social content, extra pagina's, e-mail, campagnes, optimalisaties.<br />
                        Credits werken altijd met een korte scope-check vooraf, zodat alles duidelijk blijft.
                    </p>
                </div>

                <div className="extra-cards">
                    {/* Card 1 */}
                    <div className="extra-card">
                        <div className="extra-card__credits-pill">
                            <span className="extra-card__credits-icon">Graphic</span>
                            5 Credits (5 uur)
                        </div>
                        <div className="extra-card__price">€475</div>
                        <p className="extra-card__desc">Voor grotere projecten en campagnes</p>
                        <Button variant="black" size="medium" className="extra-card__btn">Koop credits</Button>
                    </div>

                    {/* Card 2 - Popular */}
                    <div className="extra-card extra-card--popular">
                        <div className="extra-card__badge-pop">Meest populair</div>
                        <div className="extra-card__credits-pill">
                            <span className="extra-card__credits-icon">Graphic</span>
                            10 Credits (10 uur)
                        </div>
                        <div className="extra-card__price">€950</div>
                        <p className="extra-card__desc">Voor grotere projecten en campagnes</p>
                        <Button variant="black" size="medium" className="extra-card__btn">Koop credits</Button>
                    </div>

                    {/* Card 3 */}
                    <div className="extra-card">
                        <div className="extra-card__credits-pill">
                            <span className="extra-card__credits-icon">Graphic</span>
                            20 Credits (20 uur)
                        </div>
                        <div className="extra-card__price">€1.800</div>
                        <p className="extra-card__desc">Voor grotere projecten en campagnes</p>
                        <Button variant="black" size="medium" className="extra-card__btn">Koop credits</Button>
                    </div>
                </div>

                <div className="extra-disclaimer">
                    <h4>Voorwaarden</h4>
                    <p>Credits zijn 6 maanden geldig. Planning na korte scope-check. Niet voor complexe strategische trajecten.</p>
                </div>
            </Container>
        </section>
    );
};
