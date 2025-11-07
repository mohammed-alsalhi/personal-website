# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A modern personal portfolio website built with React 19 and Vite, featuring a minimalist black and white design with smooth animations and interactive effects. The project uses Framer Motion for animations and implements a split-panel layout architecture.

## Development Commands

```bash
# Navigate to the React project directory first
cd personal-website-react

# Start development server (runs on http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint code
npm run lint

# Deploy to GitHub Pages
npm run deploy
```

## Architecture

### Component Structure

The application follows a modular component architecture organized by purpose:

- **`backgrounds/`** - Visual effects components (GridBackground, ParticleBackground)
- **`layout/`** - Structural components (Sidebar, Footer)
- **`sections/`** - Content sections (Projects, Skills, AboutSection, BioSection)
- **`ui/`** - Reusable UI components (LoadingScreen, ThemeToggle, ContactLinks, TypingText)

### Layout System

The app uses a **split-panel layout** ([App.jsx:32-40](personal-website-react/src/App.jsx#L32-L40)):
- **Left panel (Sidebar)**: Fixed position containing bio, navigation, theme toggle, and contact links
- **Right panel (main-content)**: Scrollable content with Projects, Skills, About sections, and Footer

### Theme System

Theme management is handled by the `useTheme` hook ([src/hooks/useTheme.js](personal-website-react/src/hooks/useTheme.js)):
- Stores preference in localStorage
- Applies `data-theme` attribute to document root
- CSS custom properties defined in [index.css:7-43](personal-website-react/src/index.css#L7-L43) provide theme colors
- Strictly monochrome: black text on white (light) or white text on black (dark)

### Custom Hooks

- **`useTheme`** - Theme state management with localStorage persistence
- **`useTypingEffect`** - Animated typing/deleting text effect with configurable speeds and pause times

### Background Effects

Two layered background components:
- **GridBackground** - Static grid pattern
- **ParticleBackground** - Animated particles (toggleable via sidebar button)

Both render as fixed-position overlays with low z-index to stay behind content.

### Styling Approach

Global styles use CSS custom properties for theming. All colors are strictly black and white - no grays are used for primary design elements. The design emphasizes clean lines, subtle borders, and minimal shadows.

Font stacks:
- Body/Headings: Inter with system font fallbacks
- Code/Mono: JetBrains Mono with monospace fallbacks

### Icons

Custom SVG icon components in [src/assets/icons/](personal-website-react/src/assets/icons/) for social links (Email, GitHub, LinkedIn). Icons are exported as React components, not static assets.

## Important Configuration

### Vite Configuration

The [vite.config.js](personal-website-react/vite.config.js) sets `base: '/personal-website/'` for GitHub Pages deployment. **Change this if deploying elsewhere** or to root path.

### ESLint Rules

Custom rule in [eslint.config.js:26](personal-website-react/eslint.config.js#L26): unused variables starting with capital letters are ignored (common for React component imports).

## Deployment

The project is configured for GitHub Pages deployment:
- Build artifacts go to `dist/` folder
- Base path is set to `/personal-website/`
- Use `npm run deploy` to deploy (uses gh-pages package)

## Design Principles

When adding features or components:
- Maintain the monochrome (black/white only) color scheme
- Follow the existing component organization structure
- Ensure responsive design for mobile and desktop
- Use CSS custom properties for any color values
- Support both light and dark themes
- Keep animations subtle and performance-conscious