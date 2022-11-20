/*
 * @Date: 2022-11-20 22:58:55
 * @LastEditors: aibo chang aibochang@163.com
 * @LastEditTime: 2022-11-21 00:17:39
 * @FilePath: \VScodeWork\vue_project\try-something-new\vite.config.ts
 * @Description:
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: "127.0.0.1",
    port: 5173,
    proxy: {
      "/api": {
        target: "https://api.uomg.com/api/rand.qinghua",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
