import React from 'react';
import { Container } from '../ui';
import { PricingCard } from '../ui';
import './PricingComparison.css';

export const PricingComparison: React.FC = () => {
    return (
        <section className="pricing-comparison">
            <Container>
                <div className="pricing-grid">
                    <PricingCard
                        title="Meer Aanvragen – Bouw"
                        price="690"
                        period="maand"
                        targetAudience="Voor aannemers en technische bouwbedrijven (HVAC, elektriciteit, sanitair, schrijnwerk) die structureel meer aanvragen willen via Google en hun website."
                        features={[
                            "1 nieuwe of verbeterde dienstpagina, gericht op aanvragen",
                            "Google Business optimalisatie en zichtbaarheid",
                            "1 project- of bewijsblok toevoegen (vertrouwen en geloofwaardigheid)",
                            "Meten van telefoons en formulieren (of fixen waar nodig)",
                            "Kort maandoverzicht: wat gedaan is en wat de volgende stap is"
                        ]}
                        outcome="Meer zichtbaarheid, meer vertrouwen en meer gerichte offerte-aanvragen."
                        adBudget={{
                            title: "Advertentiebudget",
                            description: "Niet inbegrepen. Minimum aanbevolen budget: 15 euro per dag (Google Ads), rechtstreeks betaald aan Google. Met minder budget focussen we op optimalisatie en basis, niet op snelle instroom."
                        }}
                        limitations={[
                            "1 focus per maand.",
                            "Communicatie asynchroon (mail/WhatsApp)",
                            "Geen strategietraject of eindeloze meetings"
                        ]}
                        buttonText="Start Meer Aanvragen"
                        variant="lime"
                    />
                    <PricingCard
                        title="Meer Sollicitanten – Bouw"
                        price="690"
                        period="maand"
                        targetAudience="Voor bouwbedrijven die sneller en consistenter kandidaten willen aantrekken."
                        features={[
                            "1 sterke vacaturepagina of update",
                            "Vacaturecampagne via social media en retargeting",
                            "Kort en mobiel sollicitatieformulier",
                            "Meten van sollicitaties",
                            "Kort maandoverzicht: wat werkt en wat beter kan"
                        ]}
                        outcome="Meer en betere sollicitaties, zonder afhankelijk te zijn van interimkantoren."
                        adBudget={{
                            title: "Advertentiebudget",
                            description: "Niet inbegrepen. Minimum aanbevolen budget: 15 euro per dag (Meta Ads), rechtstreeks betaald aan Meta."
                        }}
                        limitations={[
                            "1 vacature tegelijk",
                            "Ads-budget niet inbegrepen"
                        ]}
                        buttonText="Start Meer Sollicitanten"
                        variant="lime"
                    />
                </div>
            </Container>
        </section>
    );
};
