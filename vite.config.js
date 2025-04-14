import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // if you're using this plugin for React
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['ie >= 11'],
      // Optionally, include additional polyfills if needed:
    })
  ]
});
