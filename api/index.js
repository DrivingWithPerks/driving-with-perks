import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import the built server
const distPath = join(__dirname, '../dist/index.js');

if (!fs.existsSync(distPath)) {
  throw new Error(`Server file not found at ${distPath}`);
}

const { app } = await import(distPath);

export default app;
