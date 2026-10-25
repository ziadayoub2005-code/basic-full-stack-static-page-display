# Basic Full Stack Static Page Display 🚀

A modern, high-performance single web page built using full stack technologies (Node.js & Express) that delivers curated static text and imagery with zero database overhead.

---

## 📌 Project Overview & Gig Requirements

This project fulfills all criteria of the freelance gig:
- **Full Stack Environment**: Configured with Node.js and Express.js baseline environment.
- **Static Content Delivery**: Displays curated static typography, descriptions, and high-resolution images.
- **Zero Database Interaction**: Self-contained architecture operating with zero external database dependencies, ensuring instant startup and 0ms query latency.
- **Single Page Architecture**: No complex routing or multiple nested paths; all content is structured cleanly in a single page layout.
- **Extensible Architecture**: Includes environment configuration (`.env.example`), database readiness check (`config/db.js`), and health check endpoints (`/api/health`, `/api/content`).

---

## 📂 Project Structure

```text
جيجز٣/
├── config/
│   └── db.js              # MEAN environment readiness & database configuration check
├── public/
│   ├── css/
│   │   └── style.css      # Modern dark-mode design system (Glassmorphism, animations)
│   ├── js/
│   │   └── main.js        # Client-side interactions & real-time server health check
│   ├── images/            # High-resolution showcase assets
│   │   ├── architecture.jpg
│   │   ├── abstract-sculpture.jpg
│   │   └── studio-interior.jpg
│   └── index.html         # Semantic single-page HTML5 showcase
├── .env.example           # Environment variables template
├── .gitignore             # Standard git ignore rules
├── package.json           # Node.js project manifest & scripts
├── README.md              # Project documentation & delivery guide
└── server.js              # Express.js backend server
```

---

## 🚀 Quick Start Guide

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v18.x or newer, tested on Node.js v24.x)
- npm (v9.x or newer)

### 2. Installation
Clone or open the project folder in your terminal, then install dependencies:
```bash
npm install
```

### 3. Run the Server
To start the production server:
```bash
npm start
```

Or start with auto-reload in development mode:
```bash
npm run dev
```

### 4. View in Browser
Open your browser and navigate to:
```
http://localhost:3000
```

---

## 🌐 API & Endpoints

| Endpoint | Method | Description |
| :--- | :--- | :--- |
| `/` | `GET` | Serves the single-page application (`index.html`) |
| `/api/health` | `GET` | Returns server status, uptime, environment, and stack details |
| `/api/content` | `GET` | Returns JSON data for the showcase items and metadata |

---

## 🎨 Design & Feature Highlights

1. **Aesthetic Excellence**: Built with a sleek, dark-slate visual identity inspired by modern design studios, featuring ambient lighting orbs, backdrop blur glassmorphism, and responsive CSS grid cards.
2. **Interactive Lightbox**: Click any artwork or architecture card to open the interactive modal view for high-definition inspection.
3. **Real-time Server Ping**: The top navigation pill pings `/api/health` to confirm active communication between the Express backend and the client browser.
4. **Mobile Responsive**: Fully fluid layout using CSS clamp, flexbox, and grid, ensuring seamless display across mobile, tablet, and desktop viewports.

---

## 📄 License & Delivery Note

Created for project milestone delivery as agreed. Ready for direct deployment to platforms such as Render, Railway, Vercel, or traditional VPS.
