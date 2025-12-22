// Site Configuration
export const SITE_CONFIG = {
    name: 'Hummingbirds',
    description: 'Build amazing landing pages that convert',
    url: 'https://example.com',
} as const;

// Navigation Items
export const NAV_ITEMS = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
] as const;

// Social Links
export const SOCIAL_LINKS = [
    { platform: 'Twitter', url: 'https://twitter.com', icon: '𝕏' },
    { platform: 'GitHub', url: 'https://github.com', icon: '⚡' },
    { platform: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
] as const;
