import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  server: {
    hmr: false, // Désactive le hot module replacement en mode développement
  },
});
/* 
  Content-Security-Policy: script-src 'self' 'unsafe-eval' 
*/
