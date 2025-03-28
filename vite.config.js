import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import talwind from "@tailwindcss/vite"
export default defineConfig({
  plugins: [react(), talwind()],
});
