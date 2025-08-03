import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Proxy API requests to your friend's Node.js backend
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // <--- IMPORTANT: Replace 3000 if your friend's backend uses a different port
        changeOrigin: true, // Needed for virtual hosted sites
        rewrite: (path) => path.replace(/^\/api/, ''), // Removes '/api' prefix when forwarding to backend
      },
    },
  },
});