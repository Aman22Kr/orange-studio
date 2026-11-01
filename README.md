# Orange Studio (`orangestudio`)

> A multi-disciplinary creative arts, dance, yoga, movement, and wellness sanctuary in Bandra West, Mumbai.

**Recreation of**: [Tangerine Arts Studio](https://www.tangerineartsstudio.com/)  
**New Brand Identity**: **Orange Studio** (`orangestudio`)  
**GitHub Owner**: [Aman22kr](https://github.com/Aman22kr)  
**Primary Deployment**: GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)  
**Routing Architecture**: React Router with `HashRouter` (`base: './'`)

---

## 1. What the Website Does

Orange Studio is a static multi-page web application providing an immersive digital sanctuary for urban artists, dancers, yogis, and ceramic enthusiasts. The application faithfully recreates the information architecture, intimate atmosphere, and community offerings of the reference sanctuary, while rebranding it as **Orange Studio**.

Key capabilities:
- **Workshops & Classes Directory**: Interactive catalog for wheel pottery, Ashtanga & Iyengar yoga, contemporary dance floorwork, Himalayan sound baths, botanical watercolors, and children's creative movement.
- **Dynamic Search & Filtering**: Filter by category, skill level (Beginner Friendly, Open Level, Intermediate/Advanced), duration, and live keyword search.
- **Detailed Workshop Pages**: Full curricula, materials provided, what to bring, instructor profiles, reviews, and an interactive slot & attendee booking widget.
- **Weekly Live Timetable**: Day-by-day (Monday to Sunday) schedule with period filtering (Morning, Afternoon, Evening) and 1-click slot reservation.
- **Studio Space Rental & Production**: Detailed specs of the Teakwood Movement Sanctuary, Glass Garden Atelier, and Zen Pod, accompanied by an interactive hourly cost calculator and inquiry form.
- **Immersive Multi-Day Retreats**: Detailed itineraries and reservation requests for Goa Coastal Somatics and Rishikesh Himalayan Breathwork retreats.
- **Studio Journal & Essays**: Editorial articles exploring the neuropsychology of clay centering, gravity in contemporary dance, and sound wave healing.
- **Browser LocalStorage Persistence**: Client-side storage for booking cart items, confirmed reservations with booking IDs, wishlist/saved items, rental inquiries, and newsletter subscriptions.
- **Compliant Video Placeholders**: Blank 16:9 aspect-ratio video showcase cards as requested without embedding third-party YouTube scripts.
- **Compact Advertisement Sections**: Reusable, aesthetic `<AdBanner />` component placed unobtrusively near the bottom of all major pages.

---

## 2. Reference Website & Brand Transformation

| Parameter | Original Reference | Recreated Application |
|---|---|---|
| **Brand Name** | Tangerine Arts Studio | **Orange Studio** (`orangestudio`) |
| **Reference URL** | `https://www.tangerineartsstudio.com/` | Fully ported static application |
| **Location** | Bandra West, Mumbai, India | Villa A, Wilfred Heritage, St. Leo Road, Bandra West, Mumbai |
| **Visual Tone** | Earthy, organic, sunlit, warm terracotta | Terracotta (`#ea580c`), Warm Linen (`#faf7f2`), Teakwood, Sage |
| **Typography** | Editorial Serif + Contemporary Sans | Playfair Display + Plus Jakarta Sans |
| **Brand Scope** | Complete accessible website + subpages | Homepage, Classes, Detail, Schedule, Rental, Retreats, About, Journal, Cart, My Bookings, Contact, FAQ, 404 |

---

## 3. Main Pages & Implemented Features

1. **Homepage (`#/`)**
   - Immersive hero section with quick statistics and CTA buttons
   - Category filter pills (Wheel Pottery, Yoga & Pranayama, Dance & Movement, Sound Baths, Botanical Arts)
   - Featured upcoming masterclasses grid with direct booking
   - Studio Video Showcase using a compliant 16:9 blank placeholder
   - Teakwood Sanctuary space rental highlight
   - Resident instructor cards and student testimonials
   - Compact advertisement placeholder (`<AdBanner />`)

2. **Workshops & Classes (`#/classes`)**
   - Full catalog of regular sessions and weekend masterclasses
   - Live search input matching titles, teachers, and descriptions
   - Multi-select category pills and skill level dropdown
   - Sort by Featured, Price (Ascending/Descending), and Rating
   - Favorite / wishlist heart toggle on every card

3. **Workshop Detail Page (`#/classes/:id`)**
   - Photo gallery with thumbnail switcher
   - Detailed course description, "What You Will Learn", and materials provided
   - Resident teacher profile and credentials
   - Interactive booking widget: Date picker, time slot selector, attendee counter, and live price recalculation
   - Direct "Book Workshop" and "Add to Bag" flows

4. **Weekly Class Schedule (`#/schedule`)**
   - Monday through Sunday day-by-day tabs
   - Time of day filter (Morning, Afternoon, Evening) and category dropdown
   - Studio room details, remaining spot counters, and 1-click slot booking

5. **Studio Space Rental (`#/rental`)**
   - Detailed architectural specs (Canadian maple flooring, natural sunlight, Manduka props, sound isolation)
   - Interactive rental cost calculator with duration sliders and add-on toggles (wireless audio rig, herbal tea bar)
   - Reservation inquiry form persisted to `localStorage`

6. **Retreats & Immersions (`#/retreats`)**
   - Multi-day retreat itineraries for Goa and Rishikesh
   - Package inclusions, room choices, pricing, and reservation inquiry modal

7. **About Us (`#/about`)**
   - The Orange Studio founding story in Bandra West
   - Philosophy, pillars, and resident artist directory

8. **Studio Journal (`#/journal` & `#/journal/:id`)**
   - Editorial articles on mindful pottery, contemporary dance, and sound therapy
   - Clean reading typography with sharing actions

9. **Booking Bag / Cart (`#/cart`)**
   - Persistent booking bag items from `localStorage`
   - Attendee contact details form
   - Promo discount validation (`ORANGE10` for 10% off, `WELCOME20` for 20% off)
   - Order confirmation with auto-generated booking code (e.g. `OS-2026-8841`)

10. **My Studio Pass & Saved (`#/bookings`)**
    - Tab 1: Confirmed Workshop Bookings with cancellation support
    - Tab 2: Saved Favorites / Wishlist
    - Tab 3: Studio Rental Inquiries

11. **Visit & Contact (`#/contact`)**
    - Address, landmark directions, and transit instructions (local train / car)
    - Inquiry form with instant validation and submission feedback

12. **Frequently Asked Questions (`#/faq`)**
    - Searchable categorized accordions for First-Timers, Bookings, Pottery, Etiquette, and Space Rental

13. **Custom 404 Page (`*`)**
    - Graceful error page guiding users back to Homepage or Weekly Schedule

---

## 4. Project Structure

```
orangestudio/
├── .github/
│   └── workflows/
│       └── deploy.yml              # Authoritative GitHub Actions deployment
├── public/
├── src/
│   ├── components/
│   │   ├── AdBanner.tsx            # Compact advertisement placeholder
│   │   ├── ClassCard.tsx           # Reusable workshop card
│   │   ├── Footer.tsx              # Footer with brand & contact info
│   │   ├── Header.tsx              # Sticky navigation & responsive drawer
│   │   ├── QuickSettingsModal.tsx  # Project parameter & storage inspect modal
│   │   ├── Toast.tsx               # Floating visual notifications
│   │   └── VideoPlaceholder.tsx    # 16:9 blank YouTube embed placeholder
│   ├── context/
│   │   └── StudioContext.tsx       # LocalStorage state management
│   ├── data/
│   │   └── studioData.ts           # Mock data layer for classes, schedule & faculty
│   ├── pages/
│   │   ├── AboutPage.tsx
│   │   ├── CartPage.tsx
│   │   ├── ClassDetailPage.tsx
│   │   ├── ClassesPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── FaqPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── JournalDetailPage.tsx
│   │   ├── JournalPage.tsx
│   │   ├── MyBookingsPage.tsx
│   │   ├── NotFoundPage.tsx
│   │   ├── RentalPage.tsx
│   │   ├── RetreatsPage.tsx
│   │   └── SchedulePage.tsx
│   ├── App.tsx                     # HashRouter root
│   ├── index.css                   # Tailwind v4 theme & typography
│   └── main.tsx                    # React DOM entry
├── .gitignore                      # Includes dist/ and node_modules; keeps package-lock.json
├── index.html                      # Page title, meta tags, and fonts
├── metadata.json                   # AI Studio applet metadata
├── package.json                    # Project scripts & dependencies
├── package-lock.json               # Committed npm lockfile
├── tsconfig.json                   # Strict TypeScript compiler options
└── vite.config.ts                  # Vite config with base: './'
```

---

## 5. Prerequisites

- **Node.js**: `v20.x` or `v22.x` (LTS recommended)
- **npm**: `v10.x` or higher
- **Git**

---

## 6. How to Install Dependencies

```bash
# Clone the repository
git clone https://github.com/Aman22kr/orangestudio.git
cd orangestudio

# Clean install using the committed package-lock.json
npm ci
```

---

## 7. How to Run the Development Server

```bash
npm run dev
```
Open your browser at `http://localhost:3000`.

---

## 8. How to Generate & Preview the Production Build

```bash
# Generate optimized production build in dist/
npm run build

# Preview the built static assets locally
npm run preview
```

---

## 9. LocalStorage Persistence & Limitations

The app uses browser `localStorage` with safety fallbacks for state persistence:
- `orangestudio_cart`: Cart items, selected workshop date, and attendee count.
- `orangestudio_favorites`: Saved workshop IDs.
- `orangestudio_bookings`: Confirmed reservations with unique reservation codes.
- `orangestudio_rentals`: Submitted space hire inquiries.
- `orangestudio_newsletter`: Guest list email subscriptions.

**Limitations**:
1. **Device-Specific**: Data saved in `localStorage` exists solely within the user's current browser and device. It does not synchronize to remote servers or across different browsers.
2. **Mock Transactions**: Payment checkouts and workshop confirmations are simulations; no real financial transactions take place.
3. **Storage Reset**: You can reset all demo data at any time via the settings button (gear icon in the top header).

---

## 10. Configuring the GitHub Repository for Aman22kr

1. Initialize git and commit all files (including `package-lock.json` and `.github/workflows/deploy.yml`):
   ```bash
   git init
   git add .
   git commit -m "feat: complete orangestudio sanctuary web app with GitHub Actions"
   ```
2. Create a new repository named `orangestudio` on GitHub under your account `Aman22kr`.
3. Link the remote and push to `main`:
   ```bash
   git remote add origin https://github.com/Aman22kr/orangestudio.git
   git branch -M main
   git push -u origin main
   ```

---

## 11. Enabling GitHub Pages using GitHub Actions

1. On GitHub, navigate to `https://github.com/Aman22kr/orangestudio/settings/pages`.
2. Under **Build and deployment** > **Source**, select **GitHub Actions** (do NOT select "Deploy from a branch").
3. The `.github/workflows/deploy.yml` workflow will automatically trigger on every push to `main`.
4. Once completed, your live site will be available at:  
   `https://aman22kr.github.io/orangestudio/`

---

## 12. Pushing Changes & Automatic Deployment

Whenever you update pages or mock data:
```bash
git add .
git commit -m "Update workshop schedule and retreat dates"
git push origin main
```
GitHub Actions will run `npm ci`, execute `npm run build`, and deploy the resulting `dist/` directory directly to GitHub Pages.

---

## 13. Troubleshooting Common Deployment Problems

- **Assets returning 404 on GitHub Pages**: Ensure `base: './'` is set in `vite.config.ts`. This allows asset paths (`./assets/...`) to resolve correctly under sub-paths like `/orangestudio/`.
- **404 on page refresh**: Orange Studio uses `HashRouter` (`#/classes`, `#/schedule`, etc.). Hash routes are completely client-side and never cause 404 errors on static hosts like GitHub Pages.
- **npm ci failure during GitHub Action**: Ensure `package-lock.json` is committed to the repository and matches `package.json`.
- **Missing workflow permissions**: Verify that `permissions: { pages: write, id-token: write, contents: read }` is present in `.github/workflows/deploy.yml`.

---

## 14. Rebranding & Customizing Quick Settings

To adapt this codebase for another brand:
1. Open `src/context/StudioContext.tsx` and adjust:
   ```ts
   const brandName = 'Your Brand Name';
   const githubUser = 'YourGitHubUser';
   const referenceUrl = 'https://your-reference.com/';
   ```
2. Open `src/data/studioData.ts` to replace workshop disciplines, instructors, room rates, and schedule slots.
3. Open `index.html` and `metadata.json` to update `<title>` and `<meta name="description">`.
4. Open `src/index.css` to update accent colors (e.g. replacing `--primary-orange: #ea580c;` with your brand's color).

---

## 15. Mock Implementations & Limitations Summary

- **Payments & Bookings**: Generated booking reference codes (`OS-2026-XXXX`) and confirmed states are client-side simulations.
- **Space Rental**: Cost calculations reflect realistic studio rates; inquiries are stored locally for review.
- **Video Placeholders**: Blank 16:9 placeholder cards are intentionally used in place of third-party YouTube embeds to ensure clean, compliant static hosting without external tracking scripts.
- **Advertisements**: Subtle, unobtrusive partner banner placeholders (`<AdBanner />`) are rendered near page bottoms without loading external ad networks.
