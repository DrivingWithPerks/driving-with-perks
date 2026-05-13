import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Middleware
app.use(express.json());
app.use(express.static(join(__dirname, '../dist/public')));

// API routes - import from built server
try {
  const serverModule = await import('../dist/index.js');
  if (serverModule.setupRoutes) {
    serverModule.setupRoutes(app);
  }
} catch (err) {
  console.error('Failed to load server routes:', err);
}

// SPA fallback
app.get('*', (req, res) => {
  const indexPath = join(__dirname, '../dist/public/index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('Not found');
  }
});

export default app;
