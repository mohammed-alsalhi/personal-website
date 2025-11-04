# Personal Website - React Version

A modern, responsive personal portfolio website built with React and Vite, featuring a fully black and white design with dark mode and light mode support.

## Features

- **React Components**: Modular component-based architecture
- **Dark/Light Mode**: Toggle between black and white themes with localStorage persistence
- **Custom Hook**: `useTheme` hook for theme management
- **Fully Responsive**: Mobile-first design that works on all devices
- **Modern Stack**: Built with React 18 + Vite for optimal performance
- **Smooth Animations**: CSS transitions and hover effects
- **Clean Design**: Minimalist black and white aesthetic

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      # Navigation bar with theme toggle
│   ├── Hero.jsx        # Hero/landing section
│   ├── About.jsx       # About section
│   ├── Projects.jsx    # Projects showcase
│   ├── Skills.jsx      # Skills display
│   ├── Contact.jsx     # Contact links
│   └── Footer.jsx      # Footer
├── hooks/
│   └── useTheme.js     # Custom hook for theme management
├── App.jsx             # Main app component
└── index.css           # Global styles with CSS variables
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation & Development

1. Install dependencies (already done):
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Personal Information

Edit the component files to update your personal information:
- **Navbar.jsx**: Your name in the logo
- **Hero.jsx**: Your introduction and call-to-action
- **About.jsx**: Your bio and interests
- **Projects.jsx**: Your project portfolio
- **Skills.jsx**: Your technical skills
- **Contact.jsx**: Your contact information and social links

### Styling

The website uses CSS custom properties (variables) for easy theming. Modify `src/index.css` to adjust:
- Colors (currently black and white)
- Spacing and layout
- Typography
- Animations

## Theme System

The theme toggle automatically:
- Switches between light and dark modes
- Saves preference to localStorage
- Applies theme on page load
- Updates all components seamlessly

## Technologies Used

- React 18
- Vite
- CSS3 with Custom Properties
- JavaScript ES6+
