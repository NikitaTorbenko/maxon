import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: "dist", // Папка сборки
  },
  server: {
    host: true, // Доступ по локальной сети
    port: 3000,
  },
});
