import { defineConfig } from "vite";

export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
      components: "/src/components",
      routes: "/src/routes",
    },
  },
  server: {
    port: 3000,
  },
});
