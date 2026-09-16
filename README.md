# Kishor B — Portfolio (React + Tailwind)

A fully responsive recreation of your portfolio site, built with React 18, Vite, and Tailwind CSS.

## Setup

```bash
npm install
npm run dev
```

The dev server runs on `http://localhost:5174` (matching your original project's port).

To build for production:

```bash
npm run build
npm run preview
```

## Structure

```
src/
  components/
    Navbar.jsx           Sticky pill navbar with mobile menu
    Hero.jsx              Phone-frame photo hero + testimonial/stats/CTAs
    Marquee.jsx           Scrolling "Explore my services" text band
    TechStack.jsx         React / Node / Express / MongoDB strip
    Journey.jsx           Development journey + experience/projects-done cards
    Projects.jsx          Project showcase cards with browser mockups
    ExperienceTimeline.jsx Arc-style timeline with company carousel
    SkillsDetail.jsx      Frontend/Backend/Database tabbed detail card
    SkillsGrid.jsx        6-icon skills & expertise grid
    Process.jsx           4-step numbered development process
    LookingFor.jsx        "What I'm looking for" profile/quote card
    WhatIBuild.jsx        Static/Dynamic offering toggle
    FAQ.jsx                Accordion FAQ section
    Contact.jsx            Contact form + social links
  App.jsx                  Assembles all sections in page order
  index.css                Tailwind base + marquee animation
```

## Notes / next steps

- **Hero photo**: `Hero.jsx` currently uses a stock placeholder image. Swap the `backgroundImage` URL for your own photo (drop it in `src/assets/` and import it, or reference a public path).
- **Project screenshots**: `Projects.jsx` uses placeholder gradient panels where your real product screenshots should go — replace with `<img>` tags pointing at your actual project screenshots.
- **Colors**: the lime accent (`#D7FF3F`) and dark background (`#0a0a0a`) are defined as `lime` / `bg` / `panel` in `tailwind.config.js` — tweak there to adjust the whole palette at once.
- **Contact form**: currently client-side only (shows "Sent!" on submit). Wire it up to your email service (e.g. Formspree, EmailJS, or your own backend) to actually receive messages.
- **Fully responsive**: every section uses Tailwind's responsive breakpoints (`sm:`, mobile-first) and has been checked down to small phone widths — resize your browser or use dev tools' device toolbar to verify.
