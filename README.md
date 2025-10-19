# RemoteRecruit - Features Page

A modern, responsive recreation of the RemoteRecruit features page built with Next.js 15, React 19, and Tailwind CSS. This project demonstrates advanced frontend development skills including component composition, responsive design, and modern UI patterns.

**Live Demo**: [https://remoterecruit.vercel.app/](https://remoterecruit.vercel.app/) 

**GitHub Repository**: [https://github.com/BeatriceWambuiMbugua/remote-recruit](https://github.com/BeatriceWambuiMbugua/remote-recruit)

##  Project Overview

This is a technical assessment project for RemoteRecruit, showcasing the recreation of their features page based on provided Figma designs. The application features a clean, modern interface with responsive design for both desktop and mobile views.

## Features

- **Responsive Design**: Fully responsive layout optimized for desktop and mobile devices
- **Modern UI Components**: Built with shadcn/ui and Radix UI primitives
- **Interactive Elements**: Floating cards, hover effects, and smooth animations
- **Scroll Animations**: AOS (Animate On Scroll) library for engaging user interactions
- **Component Architecture**: Modular, reusable components with TypeScript
- **Performance Optimized**: Built with Next.js 15 and React 19 for optimal performance

## Tech Stack

### Core Technologies
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework

### UI & Styling
- **shadcn/ui** - Modern component library built on Radix UI
- **Radix UI** - Accessible, unstyled UI primitives
- **Lucide React** - Beautiful, customizable icons
- **Class Variance Authority** - Component variant management
- **Tailwind Merge** - Intelligent class merging

### Development Tools
- **ESLint** - Code linting and formatting
- **Turbopack** - Fast bundler for development
- **PostCSS** - CSS processing

### Animation & Effects
- **AOS (Animate On Scroll)** - Scroll-triggered animations
- **Tailwind CSS Animations** - Built-in animation utilities
- **Custom CSS Transitions** - Smooth hover and interaction effects

##  Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with AOS provider
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   │   ├── button.tsx
│   │   ├── avatar.tsx
│   │   └── ...           # 40+ UI components
│   ├── navbar.tsx        # Navigation component
│   ├── hero-section.tsx  # Hero banner
│   ├── global-reach.tsx  # Global reach feature
│   ├── pricing-section.tsx # Pricing plans
│   ├── pricing-card.tsx  # Individual pricing card
│   ├── talent-section.tsx # Talent showcase
│   ├── call-to-action.tsx # Call to action section
│   ├── footer.tsx         # Footer component
│   ├── faq-section.tsx   # FAQ section
│   ├── scroll-to-top.tsx # Scroll to top button
│   └── feature-highligt.tsx # Reusable feature component
├── providers/            # Context providers
│   └── AOSProvider.tsx   # AOS animation provider
├── data/                 # Data and constants
│   └── constants.ts      # Application constants
├── hooks/                # Custom React hooks
│   └── use-mobile.ts     # Mobile detection hook
└── lib/                  # Utility functions
    └── utils.ts          # Helper utilities
```

## Design Components

### Hero Section
- Full-screen hero with background image
- Centered content with responsive typography
- Clean, impactful messaging

### Global Reach Feature
- Interactive floating profile cards
- Animated UI elements with gradients
- Responsive card positioning
- Custom shadow effects

### Pricing Section
- Multiple pricing tiers
- Feature comparison tables
- Call-to-action buttons

### Talent Section
- Talent showcase with avatars
- Interactive hover effects
- Responsive grid layout

##  Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/BeatriceWambuiMbugua/remote-recruit
   cd remote-recruit
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
# Development
pnpm dev          # Start development server with Turbopack
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

##  Key Features Implemented

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Breakpoint-specific layouts (sm, md, lg, xl)
- Flexible grid systems and spacing

### Component Architecture
- **FeatureHighlight**: Reusable component for feature sections
- **UI Components**: 40+ accessible components built with shadcn/ui
- **Custom Hooks**: Mobile detection and responsive utilities

### Advanced Styling
- Custom gradients and shadows
- Smooth animations and transitions
- Consistent design system with CSS variables
- Responsive typography scaling

### Animation System
- **AOS Integration**: Scroll-triggered animations for enhanced user experience
- **Component Animations**: Individual elements animate on scroll with custom timing
- **Smooth Transitions**: Hover effects and state changes with CSS transitions
- **Performance Optimized**: Animations use hardware acceleration for smooth performance

### Performance Optimizations
- Next.js Image optimization
- Component lazy loading
- Efficient bundle splitting
- Turbopack for fast development

## Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## Design System

### Colors
- Primary: `#11142D` (Dark blue)
- Secondary: `#52B4DA` (Light blue)
- Accent: `#C2EEFF` (Light cyan)
- Background: `#F6F4FF` (Light purple)

### Typography
- Headings: Poppins font family
- Body: System font stack
- Responsive font scaling

### Spacing
- Consistent spacing scale (4px, 8px, 16px, 24px, 32px, 48px, 64px)
- Responsive padding and margins

## Development Guidelines

### Code Style
- TypeScript for type safety
- ESLint configuration for code quality
- Consistent naming conventions
- Component composition over inheritance

### Component Patterns
- Props interfaces for type safety
- Default props and optional parameters
- Reusable component variants
- Accessible markup with ARIA attributes

## Dependencies

### Core Dependencies
- `next@15.5.6` - React framework
- `react@19.1.0` - UI library
- `typescript@5` - Type system
- `tailwindcss@4` - CSS framework

### UI Dependencies
- `shadcn/ui` - Modern component library
- `@radix-ui/*` - Accessible UI primitives
- `lucide-react` - Icon library
- `class-variance-authority` - Component variants
- `tailwind-merge` - Class merging

### Animation Dependencies
- `aos` - Animate On Scroll library
- `react-aos` - React wrapper for AOS
- Custom animation utilities and providers

## Known Limitations & Challenges

### Design Implementation Challenges
- **Inconsistent Spacing**: Achieving pixel-perfect spacing from Figma designs proved challenging due to differences between design tools and CSS rendering
- **Figma Design Constraints**: Some design elements required creative workarounds to maintain responsiveness while preserving the original design intent
- **Component Customization**: shadcn/ui components required significant customization to match the exact Figma specifications
- **Responsive Breakpoints**: Balancing design fidelity with responsive behavior required careful consideration of spacing and layout adjustments

### Technical Challenges
- **Floating Elements**: Positioning floating profile cards with precise spacing required complex absolute positioning
- **Gradient Implementations**: Matching exact gradient specifications from Figma required custom CSS implementations
- **Shadow Effects**: Replicating complex shadow effects with multiple layers required careful Tailwind configuration
- **Typography Scaling**: Maintaining design consistency across different screen sizes while preserving readability

### Solutions Implemented
- Custom spacing utilities for consistent spacing across components
- Downloaded background patterns and assets directly from Figma to ensure pixel-perfect recreation
- Responsive design patterns that adapt gracefully to different screen sizes
- Component composition strategies to maintain design system consistency
- Careful balance between design fidelity and practical implementation constraints

## Deployment

The application is deployed on:
- **Vercel** (recommended for Next.js)


### Build for Production
```bash
pnpm build
pnpm start
```

## License

This project is created as part of a technical assessment for RemoteRecruit.

## Author

Beatrice Wambui Mbugua

Built with ❤️ using modern web technologies and best practices.

---

**Note**: This is a technical assessment project demonstrating frontend development skills including responsive design, component architecture, and modern React patterns.