import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default {
  server: {
    port: 5173,
  },
  build: {
    outDir: "dist",
  },
};
