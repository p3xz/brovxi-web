# Brovxi: Connected Motorcycle Telemetry & Cockpit Engine

> **Notice:** This repository contains the official **Brovxi Pre-Launch Web Platform & Interactive Simulator**. The full native mobile applications (iOS & Android) and hardware sensor integrations are currently under active development.

---

## What It Is

**Brovxi** is an advanced motorcycle telemetry, navigation intelligence, and audio cockpit engine engineered specifically for two wheels. Built around real motorcycle dynamics, Brovxi combines 6-axis IMU sensor fusion, Google/Apple Maps speed camera radar warnings, post-ride ETA pace delta analytics, and an integrated Spotify Web API Intercom Cockpit.

Instead of just recording a ride, **Brovxi helps you master it.**

---

## Why It Was Built

Built as the pre-launch web platform and interactive simulator for Brovxi: a place for riders to see and feel the cockpit experience now, while the native mobile apps and hardware sensor integrations are under active development.

---

## When

Built in **September 2026**.

---

## Key Pre-Launch Web Features

### 1.  Spotify Web API Intercom Cockpit
- **Discord-Style OAuth 2.0 PKCE**: End users connect their Spotify accounts via Spotify's official login screen with zero developer setup required for website visitors.
- **Live Currently Playing Telemetry**: Displays live album artwork, song title, artist, album name, progress scrubber bar, and play/pause status.
- **Speed-Adaptive Volume Boost**: Auto-adjusts audio gain (+15%) at speeds ≥ 100 km/h to counteract helmet wind noise.
- **Radar Warning Auto-Ducking**: Automatically ducks playback volume by -12 dB when speed camera alerts trigger.
- **Curated Rider Playlists**: Quick one-tap launcher for motorcycle soundtracks (*Mountain Twisties Heavy Beat*, *Highway Cruise Synthwave*, *Night Ride Lo-Fi*, *Track Day High Octane*).
- **Recently Played List**: Shows recent tracks with relative played timestamps.

### 2.  Post-Ride Telemetry & ETA Pace Delta
- **Pace Comparison**: Compares actual ride duration against initial Google Maps / Apple Maps ETA estimates (e.g. *Beta to Delta: 10 min ETA vs 6 min actual = 4 min faster *).
- **Velocity Curve & Analytics**: Tracks distance, top speed, average speed, max lean angle, and ride smoothness score.

### 3.  Mounting-Independent Gyroscope Calibration
- **6-Axis Sensor Fusion**: Auto-zeroes pitch offsets whether mounted on handlebars, flat in a tank bag, or inside your jacket pocket.
- **Cornering Lean Angle HUD Simulator**: Interactive real-time telemetry simulator computing lateral G-forces and traction safety thresholds.

### 4.  Speed Camera Radar Alerts
- **Speed Trap Warning Engine**: Real-time alerts for highway speed cameras, enforcement zones, and local speed limit thresholds.

### 5.  Multiplayer & Friends Leaderboard
- **Crew Rankings**: Compare weekly distance, top speed, max lean angles, and smoothness scores with your riding group.

### 6.  Tour & Fuel Intelligence Calculator
- **Trip Cost Estimator**: Calculates total fuel consumption (km/L), estimated cost, and required fuel stops based on machine profiles (e.g., Royal Enfield Hunter 350, Bajaj Dominar 400, Honda CB350).

---

## Upcoming Mobile App & Hardware Roadmap (Future Release)

The Brovxi ecosystem is expanding into a full hardware & mobile suite:

-  **Native iOS & Android Mobile Apps**: High-frequency background GPS & IMU logging.
-  **Bluetooth 5.3 IMU Hardware Node**: Dedicated low-latency 6-axis IMU sensor pod for ultra-precise lean angle capture.
-  **ECU OBD-II Data Integration**: Real-time RPM, throttle position (WOT), gear selection, and engine temperature telemetry.
-  **Helmet Intercom Mesh Sync**: Voice HUD navigation alerts and group rider voice mesh integration.
-  **Brovxi Cloud Vault**: Cloud route sharing, twisties discovery, and telemetry archiving.

---

## What We Used

![TypeScript](https://skillicons.dev/icons?i=ts) ![React](https://skillicons.dev/icons?i=react) ![Vite](https://skillicons.dev/icons?i=vite) ![Tailwind CSS](https://skillicons.dev/icons?i=tailwind) ![Three.js](https://skillicons.dev/icons?i=threejs) ![Node.js](https://skillicons.dev/icons?i=nodejs) ![Express](https://skillicons.dev/icons?i=express)

- **Frontend Core**: React 19, TypeScript, Vite 8
- **Styling**: Tailwind CSS v4, Vanilla CSS Design System, Glassmorphism UI
- **Animations & Graphics**: GSAP (GreenSock), Three.js / OGL (WebGL Hyperspeed & TubesCursor interactive canvas)
- **Icons**: Lucide React
- **Audio & Telemetry API**: Spotify Web API OAuth 2.0 (PKCE Authorization Code Flow)
- **Backend Proxy Server (Optional)**: Node.js, Express, Cookie-Parser, CORS

## Why We Used This

- **React 19 + TypeScript**: component-driven cockpit HUDs with type safety across telemetry state.
- **Vite**: fast dev server and production builds for the single-page app.
- **Tailwind CSS v4 + Vanilla CSS**: the glassmorphism design system behind the cockpit UI.
- **GSAP + Three.js / OGL**: the interactive WebGL canvases (HyperSpeed, TubesCursor) and animations used in the pre-launch showcase.
- **Spotify Web API with PKCE**: streams the rider's own music into the cockpit without exposing secrets or passwords to the browser.
- **Express proxy server (server/ + api/)**: handles the Spotify OAuth exchange and keeps the client secret server-side.
- **Lucide React**: one consistent icon set across every HUD.

---

## How It Works

- The Vite single-page app renders the cockpit: Spotify music, lean angle simulator, navigation alerts, post-ride summary, sensor calibration, multiplayer leaderboard, and trip calculator.
- Spotify login flows through the Express proxy or the Vercel API routes using the OAuth 2.0 PKCE authorization code flow; tokens are held server-side in cookies.
- Currently playing, playback controls, and recently played data are all fetched through the proxy, so the client secret never reaches the browser.
- Lean angle, speed, and pace analytics are computed client-side in the interactive simulator. Real sensor hardware arrives with the future mobile apps.
- Legal pages (privacy, terms, cookies) and a cookie consent banner ship with the frontend.

---

## Local Development & Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0 or higher recommended)
- `npm` or `yarn`

### Installation Steps

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/p3xz/brovxi-web.git
   cd brovxi-web
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Copy `.env.example` to create your local `.env` file:
   ```bash
   cp .env.example .env
   ```

   Add your **Spotify Application Credentials** registered in the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard):
   ```env
   SPOTIFY_CLIENT_ID=your_spotify_client_id_here
   SPOTIFY_CLIENT_SECRET=your_spotify_client_secret_here
   SPOTIFY_REDIRECT_URI=https://brovxi-seven.vercel.app/api/spotify/callback
   ```
   *(Make sure to register `https://brovxi-seven.vercel.app/api/spotify/callback` under Redirect URIs in your Spotify Dashboard).*

4. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   (`npm run dev` starts both the Express proxy server and the Vite dev server via concurrently.)
   Open `http://localhost:5173/` in your browser.

5. **Build for Production:**
   ```bash
   npm run build
   ```

---

## Contact & Creator

- **Creator:** Namish Yadav
- **GitHub:** [https://github.com/p3xz](https://github.com/p3xz)
- **LinkedIn:** [https://www.linkedin.com/in/namish-yadav-639769408/](https://www.linkedin.com/in/namish-yadav-639769408/)
- **Instagram:** [@nam7sh](https://instagram.com/nam7sh)
- **Email:** `contactphoenixfy@gmail.com`

---

<p align="center">
  <strong>One ride. One experience. Brovxi. </strong>
</p>
