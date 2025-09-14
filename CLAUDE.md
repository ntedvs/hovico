# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Vite + React + TypeScript project with shadcn/ui components, built for a Hovico website. The project is configured to work with the Lovable platform for collaborative development.

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query for server state
- **Routing**: React Router DOM
- **UI Components**: Radix UI primitives via shadcn/ui
- **Build Tool**: Vite with SWC for fast compilation
- **Package Manager**: PNPM (note: package-lock.json exists but pnpm-lock.yaml is used)

## Development Commands

```bash
# Install dependencies
npm i

# Start development server (runs on port 8080)
npm run dev

# Build for production
npm run build

# Build for development mode
npm run build:dev

# Lint code
npm run lint

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── ui/           # shadcn/ui components (don't modify these directly)
│   └── *.tsx         # Custom page components (HeroSection, AboutSection, etc.)
├── hooks/            # Custom React hooks
├── lib/
│   └── utils.ts      # Utility functions (includes cn() for className merging)
├── pages/            # Route components
│   ├── Index.tsx     # Main landing page
│   └── NotFound.tsx  # 404 page
├── assets/           # Static assets (images, etc.)
├── App.tsx           # Main app component with providers
└── main.tsx          # React entry point
```

## Architecture Notes

- **Single Page Application**: The Index page renders all sections as a single scrollable landing page
- **Component-based Architecture**: Each section (Hero, About, Services, etc.) is a separate component
- **shadcn/ui Integration**: UI components are pre-configured with custom design tokens
- **Path Aliases**: Uses `@/` alias for src directory imports
- **Toast System**: Dual toast setup with both shadcn/ui toaster and Sonner
- **Query Client**: TanStack Query is set up but not currently used for API calls

## Styling System

- **Custom Design Tokens**: Extended Tailwind config with custom colors (beige theme, green accents)
- **Typography**: Custom font families (Playfair Display for serif, Nunito for body)
- **CSS Variables**: Uses HSL-based CSS variables for theming
- **Component Styling**: Components use Tailwind classes with shadcn/ui variants

## Development Notes

- **Hot Reloading**: Vite dev server with fast refresh enabled
- **Type Safety**: Full TypeScript setup with strict configuration
- **Code Quality**: ESLint configured with React-specific rules
- **Import Organization**: Use absolute imports with `@/` prefix for src directory
- **Component Development**: Follow existing patterns for new components (props interface, export default)

## Lovable Integration

This project is configured to work with Lovable platform:
- Changes made via Lovable are automatically committed
- `lovable-tagger` plugin is enabled in development mode
- Project URL: https://lovable.dev/projects/76679e1c-3b0a-4938-a059-11e7777ab2b9

## Important Files

- `components.json`: shadcn/ui configuration
- `tailwind.config.ts`: Custom design tokens and theme configuration
- `vite.config.ts`: Build configuration with path aliases
- `src/lib/utils.ts`: Utility functions including className merging