/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [react()],
  server: {
    port: 1420,
    strictPort: true,
  },
  envPrefix: ["VITE_"],
  resolve: {
    alias: {
      "@/": path.resolve(__dirname, "src"),
      "@redux": path.resolve(__dirname, "src/Redux/feature/"),
      "@page": path.resolve(__dirname, "src/pages/"),
      "@templates": path.resolve(__dirname, "src/Templates/"),
    },
  },
}));
