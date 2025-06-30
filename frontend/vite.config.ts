import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { tempo } from "tempo-devtools/dist/vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  optimizeDeps: {
    entries: ["src/main.tsx", "src/tempobook/**/*"],
  },
  plugins: [react(), tempo()],
  resolve: {
    preserveSymlinks: true,
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true, // Allows access from external network (0.0.0.0)
    port: 5173, // Default Vite port
    strictPort: true, // Avoid automatic port switching
    watch: {
      usePolling: true, // Fixes HMR issues in some cloud/dev environments
    },
    allowedHosts: "all", // Fixes blocked request error in Tempo
  },
});
