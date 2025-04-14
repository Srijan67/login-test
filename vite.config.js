import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // if you're using this plugin for React

export default defineConfig({
  plugins: [
    react(),
  ]
});
