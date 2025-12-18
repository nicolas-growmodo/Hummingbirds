# Hummingbirds Landing Page

A professional, modern landing page built with React, TypeScript, and Vite.

## 🚀 Features

- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎨 **Beautiful Design** - Modern aesthetics with smooth animations
- 📱 **Fully Responsive** - Perfect on all devices
- 🔧 **TypeScript** - Type-safe development
- 🎯 **Component-Based** - Reusable, modular architecture

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── common/         # Common components (Button, Container, etc.)
│   └── ui/             # UI-specific components
├── sections/           # Landing page sections
│   ├── Hero.tsx        # Hero section
│   └── Features.tsx    # Features section
├── assets/             # Static assets
│   ├── images/         # Image files
│   ├── icons/          # Icon files
│   └── fonts/          # Custom fonts
├── styles/             # Global styles and design system
│   ├── variables.css   # CSS custom properties (design tokens)
│   └── utilities.css   # Utility classes
├── utils/              # Utility functions
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── constants/          # App-wide constants
├── App.tsx             # Main App component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## 🎨 Design System

The project uses a comprehensive design system with:

- **CSS Variables** - Consistent colors, spacing, typography
- **Utility Classes** - Rapid UI development
- **Component Library** - Reusable, styled components
- **Modern Animations** - Smooth transitions and micro-interactions

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🏗️ Adding New Sections

1. Create a new component in `src/sections/`
2. Import and use in `App.tsx`
3. Add corresponding styles

Example:
```tsx
// src/sections/About.tsx
import React from 'react';
import { Container } from '../components/common';
import './About.css';

export const About: React.FC = () => {
  return (
    <section className="about">
      <Container>
        {/* Your content */}
      </Container>
    </section>
  );
};
```

## 🎯 Component Usage

### Button Component

```tsx
import { Button } from './components/common';

<Button variant="primary" size="large">
  Click Me
</Button>
```

### Container Component

```tsx
import { Container } from './components/common';

<Container maxWidth="lg">
  {/* Your content */}
</Container>
```

## 🎨 Styling Guidelines

- Use CSS variables from `variables.css` for consistency
- Leverage utility classes from `utilities.css` when appropriate
- Keep component-specific styles in separate CSS files
- Follow BEM naming convention for CSS classes

## 📝 License

MIT

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
