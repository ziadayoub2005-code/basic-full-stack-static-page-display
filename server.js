const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const { checkDatabaseConfig } = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// Middleware configuration
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Public Directory for static assets (HTML, CSS, JS, Images)
const publicDir = path.join(__dirname, 'public');
app.use(express.static(publicDir, {
  maxAge: '1d',
  etag: true
}));

// API Endpoint: Health & Environment Status
app.get('/api/health', (req, res) => {
  const dbStatus = checkDatabaseConfig();
  res.json({
    status: 'online',
    appName: 'Basic Full Stack Static Page Display',
    environment: NODE_ENV,
    stack: 'Node.js + Express (MEAN Stack Baseline)',
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor(process.uptime()),
    database: dbStatus
  });
});

// API Endpoint: Static Content Information
app.get('/api/content', (req, res) => {
  res.json({
    title: 'Nexus • Architectural & Digital Design Showcase',
    subtitle: 'A modern, responsive static web page powered by Full Stack Node.js & Express',
    items: [
      {
        id: 'arch-01',
        title: 'Minimalist Architectural Pavilion',
        category: 'Architecture & Form',
        description: 'Exploring light, expansive glass geometry, and organic cast concrete within tranquil natural surroundings.',
        image: '/images/architecture.jpg',
        specs: ['Reinforced Concrete', 'Low-E Insulated Glass', 'Golden Hour Orientation']
      },
      {
        id: 'sculpt-02',
        title: 'Iridescent Kinetic Fluid Sculpture',
        category: 'Digital 3D Art',
        description: 'Raytraced reflective chrome and fluid glass refraction suspended in dynamic balance under cinematic rim light.',
        image: '/images/abstract-sculpture.jpg',
        specs: ['Chromatic Dispersion', 'Curvature Continuity', 'Dual-Phase Surface']
      },
      {
        id: 'studio-03',
        title: 'Nordic Creative Design Studio',
        category: 'Interior & Workspace',
        description: 'Warm oak timber, artisanal ceramic forms, and tactile drafting surfaces bathed in soft morning sunlight.',
        image: '/images/studio-interior.jpg',
        specs: ['Solid White Oak', 'Handmade Stoneware', 'Acoustic Fabric Baffles']
      }
    ]
  });
});

// Fallback route to serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

// Start Express Server with graceful fallback for busy ports
const server = app.listen(PORT, () => {
  console.log('========================================================');
  console.log(`🚀 Full Stack Server running on http://localhost:${PORT}`);
  console.log(`📦 Environment: ${NODE_ENV}`);
  console.log(`📂 Static Assets: ${publicDir}`);
  console.log('========================================================');
  checkDatabaseConfig();
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    const fallbackPort = Number(PORT) + 1;
    console.warn(`⚠️  Port ${PORT} is in use. Automatically falling back to http://localhost:${fallbackPort}...`);
    app.listen(fallbackPort, () => {
      console.log('========================================================');
      console.log(`🚀 Full Stack Server running on http://localhost:${fallbackPort}`);
      console.log(`📦 Environment: ${NODE_ENV}`);
      console.log(`📂 Static Assets: ${publicDir}`);
      console.log('========================================================');
      checkDatabaseConfig();
    });
  } else {
    console.error('Server error:', err);
  }
});
