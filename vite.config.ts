import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  root: ".", // Ensure Vite recognizes the root
  server: {
    port: 5000, // Ensure correct port
    open: true, // Automatically open browser
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Alias support
    },
  },
  build: {
    outDir: "dist",
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/assets/styles/Colors.scss" as *;`
      }
    }
  },
});
