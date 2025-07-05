# WoodSool Landing Page

A modern, responsive landing page for a wood furniture business built with React and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Scroll Animations**: Smooth fade-in animations triggered by scroll position
- **Component-Based Architecture**: Modular components for easy maintenance
- **Modern UI**: Clean, professional design with orange accent colors
- **Interactive Elements**: Hover effects, mobile menu, and product interactions

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── TopBar.jsx       # Top contact bar with phone and social media
│   ├── Navbar.jsx       # Navigation bar with logo, menu, and search
│   ├── HeroSection.jsx  # Hero section with typing animation
│   ├── TopWoodSection.jsx # Top wood furniture showcase
│   ├── ProductGrid.jsx  # Product grid display
│   ├── NewArrivalsSection.jsx # New arrivals carousel
│   ├── FeaturesSection.jsx # Features grid with icons
│   ├── PromoBannerSection.jsx # Promotional banner
│   ├── NewsletterSection.jsx # Newsletter signup
│   └── Footer.jsx       # Footer with company info and links
├── hooks/               # Custom React hooks
│   └── useScrollAnimation.js # Scroll animation logic
├── styles/              # CSS styles
│   └── animations.css   # Animation keyframes and utilities
├── assets/              # Images and static assets
└── LandingPage.jsx      # Main landing page component
```

## 🎨 Components Overview

### TopBar
- Displays contact information and social media links
- Orange background with white text

### Navbar
- Logo, navigation menu, and search functionality
- Responsive mobile menu with hamburger icon
- Smooth transitions and hover effects

### HeroSection
- Animated typing effect for "WOOD SOOL"
- Background image with overlay
- Decorative floating element

### TopWoodSection
- Showcases top wood furniture
- Call-to-action button
- Product image display

### ProductGrid
- Grid layout for product display
- Responsive columns (1 on mobile, 2 on tablet, 3 on desktop)
- Product images with titles and prices

### NewArrivalsSection
- Horizontal scrollable product carousel
- Favorite/heart functionality
- Product tags and discount badges

### FeaturesSection
- Four feature cards with icons
- Free shipping, payment, security, and support info

### PromoBannerSection
- Promotional content with image
- Sale information and call-to-action

### NewsletterSection
- Email signup form
- Background image overlay

### Footer
- Company information and links
- Social media icons
- QR code display

## 🎭 Animations

The landing page uses Intersection Observer API for scroll-triggered animations:

- **Fade-in-up**: Sections animate from bottom with opacity transition
- **Typing Effect**: Hero text types out character by character
- **Cursor Blink**: Animated cursor in hero section
- **Slide-in**: Decorative elements slide in from left

## 🛠️ Custom Hook

### useScrollAnimation
Manages scroll animations using Intersection Observer:
- Tracks which sections have been animated
- Provides refs for all major sections
- Handles animation state management

## 🎯 Usage

1. Import the main component:
```jsx
import LandingPage from './components/LandingPage';
```

2. Use in your app:
```jsx
function App() {
  return <LandingPage />;
}
```

## 🎨 Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Responsive Design**: Mobile-first approach
- **Custom Animations**: CSS keyframes for smooth transitions
- **Color Scheme**: Orange (#f97316) primary color with gray accents

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔧 Development

To run the project:

```bash
npm install
npm run dev
```

## 📄 License

This project is part of the WoodSool furniture business website. 