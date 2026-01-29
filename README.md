# Phoenix Comics & Collectibles Website

A modern, award-winning website for Phoenix Comics & Collectibles - Long Island's premier comic book shop.

## Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generation for blazing fast performance
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Animations**: [GSAP](https://greensock.com/gsap/) - Professional-grade animations
- **CMS**: [Decap CMS](https://decapcms.org/) - Git-based content management

## Design Concept: "Enter the Panel"

The website is designed as a living comic book experience:

- **Panel-based navigation** - Each section is a comic panel
- **Phoenix mascot** - Animated Phoenix that responds to scroll and interactions
- **Fire cursor effects** - Ember particles follow the cursor
- **Easter eggs** - Hidden surprises throughout the site
- **Mobile webcomic experience** - Optimized for vertical scrolling on phones

## Getting Started

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

## Content Management

Access the CMS at `/admin` after deployment. The CMS allows editing:

- **Blog/News posts**
- **Events**
- **Store hours**
- **Contact information**
- **About page content**

## Deployment

The site is configured for deployment to Vercel, Netlify, or Cloudflare Pages.

### Environment Variables

For production with Decap CMS (Netlify Identity):
- Enable Git Gateway in Netlify Identity settings

For local CMS development:
```bash
npx decap-server
```

## Project Structure

```
/
├── public/
│   ├── admin/          # Decap CMS admin interface
│   ├── images/         # Static images
│   └── favicon.svg     # Phoenix favicon
├── src/
│   ├── components/
│   │   ├── effects/    # Phoenix, cursor effects, scroll indicators
│   │   ├── sections/   # Page sections
│   │   └── ui/         # Reusable UI components (Panel, Button, etc.)
│   ├── content/
│   │   ├── blog/       # Blog posts (Markdown)
│   │   └── events/     # Events (Markdown)
│   ├── data/           # JSON data files for CMS
│   ├── layouts/        # Page layouts
│   ├── pages/          # Route pages
│   └── styles/         # Global CSS
└── package.json
```

## Credits

- **Owner**: Peter Gong - 30+ years serving the Long Island comic community
- **Design & Development**: Created with passion for the comic book community

---

Phoenix Comics & Collectibles  
107-5 Stewart Avenue, Hicksville, NY 11801  
(516) 939-9129 | ph.rebirth@gmail.com

*Rising from the ashes since 1993.*
