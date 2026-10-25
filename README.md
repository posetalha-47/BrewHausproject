# BrewHaus — Responsive Multi-Page Business Website

![BrewHaus Desktop Preview](images/desktop-preview.png)

## Overview
**BrewHaus** is a fast, pixel-perfect, fully responsive, and accessible multi-page website built for an artisanal coffee house. Designed with a mobile-first approach, the website features an interactive menu filter, photo gallery lightbox popup, accessible navigation, and a functional table reservation form integrated with Formspree.

- **Live Demo:** [https://posetalha-47.github.io/BrewHausproject/](https://posetalha-47.github.io/BrewHausproject/)
- **GitHub Repository:** [https://github.com/posetalha-47/BrewHausproject](https://github.com/posetalha-47/BrewHausproject)

---
## Project Screenshots

### Desktop Preview
![BrewHaus Desktop Preview](images/desktop-preview.png)

### Mobile Preview
![BrewHaus Mobile Preview](images/mobile-preview.png)
## Features
- **Semantic HTML5 Architecture:** Implements `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` tags across all 5 pages (`index.html`, `menu.html`, `gallery.html`, `about.html`, `contact.html`).
- **Responsive Mobile-First Design:** Fluid layout styled with CSS Flexbox, Grid, custom properties, and `clamp()` typography. Tested seamlessly on mobile, tablet, and desktop viewports.
- **Accessibility & Keyboard Navigation (a11y):** Full keyboard support (`Tab`, `Enter`, `Esc`), ARIA attributes (`aria-expanded`, `aria-label`, `aria-pressed`, `aria-current`), visible `:focus-visible` outlines, and `prefers-reduced-motion` compliance.
- **Interactive JavaScript Utilities:**
  - Keyboard-navigable mobile hamburger menu.
  - Category filter tabs on the Menu page.
  - Image gallery modal lightbox with backdrop click and `Escape` key handlers.
- **Table Reservation Form:** HTML5 form validation paired with a live Formspree submission endpoint and Google Maps iframe embed.
- **Performance & SEO Optimization:** Optimized assets, `loading="lazy"` off-screen image rendering, Open Graph meta social cards, and favicon support.

---

## Tech Stack
- **HTML5** (Semantic structure, a11y)
- **CSS3** (Flexbox, CSS Grid, Custom Design Tokens, Mobile-First Media Queries)
- **Vanilla JavaScript (ES6)** (DOM Manipulation, Event Listeners, ARIA Toggles)
- **Formspree API** (Form Backend Service)
- **GitHub Pages** (Deployment)

---

## Lighthouse Performance Audit

| Metric | Score | Target |
| :--- | :--- | :--- |
| **Performance** | **95+** | 90+ |
| **Accessibility** | **100** | 95+ |
| **Best Practices** | **100** | 90+ |
| **SEO** | **100** | 95+ |

---

## Local Setup Instructions
1. Clone the repository:
   ```bash
   git clone [https://github.com/posetalha-47/BrewHausproject.git](https://github.com/posetalha-47/BrewHausproject.git)