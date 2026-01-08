# Creative Integrations Website

AI Employees for Local Businesses - Marketing website built with Astro.

## Tech Stack

- **Framework**: [Astro](https://astro.build)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Hosting**: [Vercel](https://vercel.com) (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
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

### Development

The dev server runs at `http://localhost:4321`

## Project Structure

```
/
├── public/
│   └── images/           # Static images
├── src/
│   ├── components/       # Reusable components
│   ├── layouts/          # Page layouts
│   ├── pages/            # Routes (file-based routing)
│   │   ├── industries/   # Industry landing pages
│   │   └── learn/        # Educational content
│   └── styles/           # Global styles
├── astro.config.mjs      # Astro configuration
├── tailwind.config.mjs   # Tailwind configuration
└── package.json
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repo to Vercel
3. Deploy automatically

### Manual Build

```bash
npm run build
```

Output is in the `dist/` folder.

## Customization

### Colors

Edit `tailwind.config.mjs` to change brand colors:

- `primary` - Dark navy/slate (main brand color)
- `accent` - Electric teal/cyan (CTAs and highlights)
- `warm` - Neutral warm tones (backgrounds)

### Content

- **Homepage**: `src/pages/index.astro`
- **Industry pages**: `src/pages/industries/`
- **Pricing**: `src/components/PricingTable.astro`
- **FAQs**: `src/components/FAQSection.astro`

### Adding Industries

1. Create new file in `src/pages/industries/[slug].astro`
2. Update industry list in `src/components/IndustriesSection.astro`
3. Update footer links in `src/components/Footer.astro`

## SEO

- All pages have meta tags via `BaseLayout.astro`
- Schema markup included on relevant pages
- Sitemap generated automatically
- Robots.txt in `/public/`

## Contact

- Demo Line: 877-482-4368
- Sales: 469-249-8057
