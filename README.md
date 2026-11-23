# FixMate - Client

FixMate client is the front-end of the role-based repair service platform built with Next.js, Express, MongoDB, BetterAuth, JWT, and Stripe.

Verified Technicians list the repair services they offer (smartphone screen replacement, laptop servicing, AC servicing, refrigerator, TV, washing machine, electrical wiring, etc.). Customers browse those services, send a repair request with a problem description, track the job step by step, and pay online only after the job is completed.

Admins approve service listings, manage users, monitor all repair jobs, and track Stripe revenue.

## Live Site & Repositories

- **Live Site:** [Fixmate by Shariul](https://fixmate-shariul.vercel.app)
- **Client Repository:** [shariult/fixmate-client](https://github.com/shariult/fixmate-client)
- **Server Repository:** [shariult/fixmate-server](https://github.com/shariult/fixmate-server)

## Examiner Credentials

| Role       | Email                | Password  |
| ---------- | -------------------- | --------- |
| Admin      | admin@fixmate.com    | Abc123456 |
| Technician | tech@fixmate.com     | Abc123456 |
| Customer   | customer@fixmate.com | Abc123456 |

## Features

### Public

- Modern landing page with a hero section, the 6 latest approved services, a "How FixMate Works" flow, and popular categories with trust points.
- Browse all approved services in a responsive grid with **server-side search, category and service mode filters, and sorting** (price low to high, price high to low, newest). Filters persist after reload, and category cards on the home page open `/services` already filtered.
- Service details page with full information and a technician summary (name, photo, area, bio).
- Sticky, responsive navbar with active route highlighting, a profile dropdown with a role badge, and a hamburger menu on mobile.
- Custom loading skeletons, a themed 404 page, and an error boundary page.

### Authentication & Authorization

- Sign up and sign in with email and password using **BetterAuth** with the MongoDB adapter.
- Role selection at sign-up (Customer or Technician). Admin accounts can't be created from the sign-up form, and the role is validated on the server.
- Password validation (at least 6 characters, one uppercase and one lowercase letter) with inline error messages.
- Optional Google social login.
- Protected dashboard routes with role-based redirects. Logged-in users stay signed in when reloading private routes.
- JWT-based requests to the Express API, with role-based middlewares on the server.

### Customer

- Send a repair request with phone, address, preferred date, and problem description. Duplicate active requests for the same service are blocked.
- Dashboard overview with stats cards and charts.
- My Bookings with status and payment badges, and cancellation (with a confirmation modal) while a job is still `requested`.
- **Pay Now** with **Stripe Checkout** (test mode) only after the job is `completed` and `unpaid`.
- Payment history with transaction IDs and payment dates.

### Technician

- Add services with image upload through **ImgBB**. New services stay `pending` until an admin approves them.
- Full CRUD on My Services: edit (which resets approval to `pending`), delete with a confirmation modal, and an availability toggle.
- Manage requests with only the valid actions for each status: Accept / Reject, Start Work, and Mark Completed with a final amount.
- Filter requests by status.

### Admin

- Overview with stats cards and charts.
- Manage users and change roles (an admin can't change their own role).
- Approve or reject services, with pending services easy to find.
- Monitor every booking on the platform with a status filter.
- Transactions table with total revenue.

### Job Status Pipeline

`Requested → Accepted → In Progress → Completed → Paid`, with `Rejected` (by the technician) and `Cancelled` (by the customer) branching off from `Requested`. Invalid status changes are rejected by the server.

### General

- Update profile (name, phone, area, bio, and photo upload). Changes show up in the navbar and dashboard top bar without logging out.
- Responsive dashboard layout with a collapsible sidebar and a menu that changes by role.
- Consistent status badge colors across all dashboards.
- Toast notifications for sign up, sign in, sign out, CRUD actions, status updates, payments, and errors.
- Friendly empty states and confirmation modals for destructive actions.
- Fully responsive for mobile, tablet, and desktop.

## Technologies Used

- **Framework:** Next.js (App Router), React
- **Language:** TypeScript
- **Styling:** Tailwind CSS, DaisyUI
- **Database:** MongoDB
- **Authentication:** Better Auth (Email, Google), JWT
- **Payments:** Stripe Checkout (test mode)
- **Image Upload:** ImgBB API
- **Backend (separate repo):** Node.js, Express.js
- **Package Manager:** pnpm

## Project Dependencies

### Dependencies

- `next` – React framework for routing, rendering, and API routes
- `react`, `react-dom` – UI library
- `better-auth` – authentication (email/password and social login)
- `@better-auth/mongo-adapter` – stores auth data in MongoDB
- `mongodb` – official MongoDB driver
- `jose` – JWT signing and verification
- `stripe` – Stripe server-side SDK for Checkout Sessions
- `@stripe/stripe-js` – Stripe client-side library
- `react-hot-toast` – error and success notifications
- `react-icons` – icon library
- `motion` – animations and transitions
- `swiper` – carousels and sliders
- `slugify` – generates URL-friendly slugs
- `uuid` – generates unique identifiers
- `xss` – sanitizes user input to prevent XSS attacks

### Dev Dependencies

- `typescript`, `@types/node`, `@types/react`, `@types/react-dom` – TypeScript and type definitions
- `tailwindcss`, `@tailwindcss/turbopack` – utility-first CSS
- `daisyui` – Tailwind component library
- `@faker-js/faker` – generates realistic seed data
- `eslint`, `eslint-config-next` – linting

## Running Locally

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or later)
- [pnpm](https://pnpm.io/)
- A [MongoDB](https://www.mongodb.com/) database (local or MongoDB Atlas)
- A [Stripe](https://stripe.com/) account (test mode)
- An [ImgBB](https://imgbb.com/) API key
- A Google OAuth app (optional, for Google sign-in)
- The [FixMate server](https://github.com/shariult/fixmate-server) running locally or deployed

### 1. Clone the repository

```bash
git clone https://github.com/shariult/fixmate-client.git
cd fixmate-client
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Set up environment variables

Create a `.env.local` file in the project root:

```env
# API URL (FixMate server)
NEXT_PUBLIC_API_URL=your_server_url

# Database
MONGODB_URI=your_mongodb_connection_string

# Better Auth
BETTER_AUTH_SECRET=your_random_secret
BETTER_AUTH_URL=http://localhost:3000

# Google OAuth (optional)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Stripe (test mode)
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

# ImgBB
NEXT_PUBLIC_IMGBB_API_KEY=your_imgbb_api_key
```

Generate a secret with:

```bash
openssl rand -base64 32
```

If you use Google sign-in, set the callback URL in your OAuth app to:

- Google: `http://localhost:3000/api/auth/callback/google`

### 4. Start the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Payments in test mode

Use the Stripe test card `4242 4242 4242 4242` with any future expiry date and any CVC.

### Other scripts

```bash
pnpm build   # Create a production build
pnpm start   # Run the production build
pnpm lint    # Run ESLint
```

## 📬 Let's Connect & Collaborate!

I am currently open to freelance projects, remote positions, and collaborative opportunities.

[<img src="https://img.shields.io/badge/Website-shariul.com-blue?style=for-the-badge&logo=google-chrome&logoColor=white" />](https://shariul.com) [<img src="https://img.shields.io/badge/LinkedIn-shariul-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" />](https://www.linkedin.com/in/shariul/) [<img src="https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white" />](https://discord.gg/9q5GRgVS2)
