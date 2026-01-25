# CLAUDE_SESSION.md — Creative Integrations Site Development

**Last Updated:** January 7, 2026  
**Project:** creativeintegrations.ai  
**Repo:** https://github.com/timnagle74/creativeintegrations.ai-site  
**Hosting:** Vercel (auto-deploys on push)

---

## Project Overview

Marketing website for Creative Integrations — an AI Employee service for local businesses (HVAC, Roofing, Plumbing, Equine Transport). Built with Astro + Tailwind CSS for performance and SEO.

### Brand Details
- **Name:** Creative Integrations (two words)
- **Demo Phone:** 877-482-4368
- **Sales Phone:** 469-249-8057
- **Primary Color:** Navy/Slate (`#0f172a` - `#1e293b`)
- **Accent Color:** Orange (`#f97316`) — matches logo
- **Fonts:** Outfit (display), Inter (body)

### Pricing Tiers
| Plan | Price | Key Features |
|------|-------|--------------|
| Pro | $397/mo | AI Voice, Webchat, Review Responses |
| Premium | $697/mo | + AI Chat, CRM, Mobile App, Live Transfers |
| Elite | $997/mo | + Appointment Booking, Custom Actions, Newsletters |

---

## Tech Stack

- **Framework:** Astro 5.0
- **Styling:** Tailwind CSS 3.4
- **Integrations:** @astrojs/tailwind, @astrojs/mdx, @astrojs/sitemap
- **Hosting:** Vercel
- **Forms/Chat/Calendar:** GHL embeds

---

## What's Built

### Pages (17 total)

| Page | Path | Status |
|------|------|--------|
| Homepage | `/` | ✅ Complete |
| Features | `/features` | ✅ Complete |
| Pricing | `/pricing` | ✅ Complete |
| Contact | `/contact` | ✅ Complete (GHL form + calendar embedded) |
| FAQ | `/faq` | ✅ Complete |
| Industries Index | `/industries` | ✅ Complete |
| Roofing | `/industries/roofing` | ✅ Complete |
| HVAC | `/industries/hvac` | ✅ Complete |
| Plumbing | `/industries/plumbing` | ✅ Complete |
| Equine Transport | `/industries/equine-transport` | ✅ Complete |
| Learn Index | `/learn` | ✅ Complete |
| What is AI Receptionist | `/learn/what-is-ai-receptionist` | ✅ Complete |
| AI vs Live Answering | `/learn/ai-answering-service-vs-live-answering` | ✅ Complete |
| AI Receptionist Cost | `/learn/ai-receptionist-cost` | ✅ Complete |
| Speed to Lead | `/learn/speed-to-lead-statistics` | ✅ Complete |
| Missed Call Calculator | `/learn/missed-call-revenue-calculator` | ✅ Complete (interactive JS) |
| Setup Guide | `/learn/ai-receptionist-setup-guide` | ✅ Complete |

### Components (11 total)

| Component | Purpose | Status |
|-----------|---------|--------|
| `Header.astro` | Nav with logo, mobile menu, CTA | ✅ Complete |
| `Footer.astro` | Multi-column links, phone numbers | ✅ Complete |
| `Hero.astro` | Homepage hero with demo CTA | ✅ Complete |
| `StatsSection.astro` | Problem statistics (67%, 85%, 93%) | ✅ Complete |
| `FeatureGrid.astro` | 9-feature card grid (legacy) | ✅ Complete |
| `FeatureShowcase.astro` | Alternating feature blocks with scroll animations | ✅ NEW |
| `TabbedChatShowcase.astro` | Tabbed AI Chat section (SMS/Webchat/Meta/Missed Call) | ✅ NEW |
| `IndustriesSection.astro` | 4 industry cards | ✅ Complete |
| `PricingTable.astro` | 3-tier pricing | ✅ Complete |
| `FAQSection.astro` | Expandable FAQ with schema | ✅ Complete |
| `CTASection.astro` | Reusable CTA (dark/light/gradient variants) | ✅ Complete |

### Integrations

| Integration | Location | Status |
|-------------|----------|--------|
| GHL Chat Widget | BaseLayout (all pages) | ✅ Active |
| GHL Contact Form | `/contact` | ✅ Active |
| GHL Calendar Booking | `/contact#schedule` | ✅ Active |

---

## File Structure

```
creativeintegrations-site/
├── public/
│   ├── images/
│   │   ├── logo.png              # Color logo (dark text)
│   │   ├── logo-white.png        # White logo (for dark backgrounds)
│   │   └── og-default.png        # Social sharing image
│   ├── favicon.svg               # Orange burst favicon
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── StatsSection.astro
│   │   ├── FeatureGrid.astro         # Legacy grid (still on features page)
│   │   ├── FeatureShowcase.astro     # NEW - alternating blocks
│   │   ├── TabbedChatShowcase.astro  # NEW - tabbed chat section
│   │   ├── IndustriesSection.astro
│   │   ├── PricingTable.astro
│   │   ├── FAQSection.astro
│   │   └── CTASection.astro
│   ├── layouts/
│   │   └── BaseLayout.astro      # SEO, meta, schema, chat widget
│   ├── pages/
│   │   ├── index.astro
│   │   ├── features.astro
│   │   ├── pricing.astro
│   │   ├── contact.astro
│   │   ├── faq.astro
│   │   ├── industries/
│   │   │   ├── index.astro
│   │   │   ├── roofing.astro
│   │   │   ├── hvac.astro
│   │   │   ├── plumbing.astro
│   │   │   └── equine-transport.astro
│   │   └── learn/
│   │       ├── index.astro
│   │       ├── what-is-ai-receptionist.astro
│   │       ├── ai-answering-service-vs-live-answering.astro
│   │       ├── ai-receptionist-cost.astro
│   │       ├── speed-to-lead-statistics.astro
│   │       ├── missed-call-revenue-calculator.astro
│   │       └── ai-receptionist-setup-guide.astro
│   └── styles/
│       └── global.css            # Tailwind + custom classes
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

---

## Recent Changes (This Session)

1. **Added `FeatureShowcase.astro`** — Alternating left/right feature blocks with:
   - Scroll-triggered slide-in animations
   - Badge + headline + description layout
   - CSS mockup placeholders for visuals
   - Covers: Voice AI, Chat AI, Reviews AI, 24/7 Availability, Workflow AI, Calendar, Mobile App

2. **Added `TabbedChatShowcase.astro`** — Dark background section with:
   - 4 tabs: SMS, Missed Call Text Back, Webchat, Meta Ad
   - Interactive phone mockup with chat bubbles
   - Description card that updates per tab
   - "See a Free Demo" CTA

3. **Updated Homepage** — New section order:
   - Hero
   - StatsSection
   - FeatureShowcase (NEW)
   - TabbedChatShowcase (NEW)
   - IndustriesSection
   - PricingTable
   - FAQSection
   - CTASection

---

## Pending / Not Built Yet

### Pages Needed
- [ ] `/about` — Company story
- [ ] `/blog` — Blog index
- [ ] `/blog/[slug]` — Blog post template
- [ ] `/privacy` — Privacy policy
- [ ] `/terms` — Terms of service
- [ ] `/compare/smith-ai` — Competitor comparison
- [ ] `/compare/ruby-receptionist` — Competitor comparison
- [ ] `/case-studies` — Customer success stories

### Assets Needed (for Nano Banana)

**Tabbed Chat Section (4 images):**
- iPhone mockup with SMS conversation
- iPhone mockup with Missed Call Text Back
- iPhone mockup with Webchat widget
- iPhone mockup with Meta/Messenger chat

**Feature Block Visuals (7 images):**
| Feature | Visual Description |
|---------|-------------------|
| Voice AI | Woman with headset + phone showing call + call queue cards |
| Chat AI | Phone with text conversation, tilted with shadow |
| Reviews AI | Person with phone + floating 5-star review cards |
| 24/7 Availability | Person with tablet + chat interface background |
| Workflow AI | Browser showing workflow builder UI |
| Calendar | Calendar interface with contact form popup |
| Mobile App | 3 phones at angles showing CRM dashboard |

**Specs:** 
- 4:3 aspect ratio for feature blocks
- Light gradient backgrounds (blues, soft grays)
- PNG with transparency where possible
- Modern SaaS aesthetic

---

## GHL Embed Codes (Current)

### Chat Widget (all pages via BaseLayout)
```html
<script 
  src="https://beta.leadconnectorhq.com/loader.js"  
  data-resources-url="https://beta.leadconnectorhq.com/chat-widget/loader.js" 
  data-widget-id="695f093b4ab7322b5eb0a126">
</script>
```

### Contact Form
```html
<iframe
  src="https://updates.creativeintegrations.com/widget/form/5ua6U0PYMdk87cU1a4ge"
  id="inline-5ua6U0PYMdk87cU1a4ge"
  ...
></iframe>
```

### Calendar Booking (Personalized Demo)
```html
<iframe 
  src="https://updates.creativeintegrations.com/widget/booking/y9ck0MyOEOAz1S15u1Zl"
  ...
></iframe>
```

---

## Deployment

```bash
# Local development
npm install
npm run dev        # http://localhost:4321

# Deploy (auto via Vercel on push)
git add .
git commit -m "Your message"
git push
```

Vercel auto-builds and deploys on every push to `main`.

---

## Future Plans Discussed

### Template System
Convert this site into a config-driven template where:
1. Client fills GHL intake form
2. Webhook triggers Claude Code agent
3. Agent clones template, populates `site.config.ts`
4. Auto-deploys to Vercel
5. Client can request changes via form or self-serve portal

### CMS / GHL Marketplace App
Build a content management app that:
1. Lives in GHL sidebar
2. Manages Astro site content
3. Can be sold to other agencies via GHL Marketplace

---

## Commands Reference

```bash
# Development
npm run dev          # Start dev server
npm run build        # Production build
npm run preview      # Preview production build

# Git
git add .
git commit -m "message"
git push

# Astro
npx astro add [integration]   # Add integrations
npx astro check               # Type checking
```

---

## Notes

- All pages have SEO meta tags and schema markup
- Mobile responsive throughout
- Scroll animations use Intersection Observer
- Chat widget loads on all pages
- Sitemap auto-generated at `/sitemap-index.xml`
