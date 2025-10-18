// vite.config.ts
import { defineConfig, loadEnv } from "file:///D:/projects/portfolio-abhinav/node_modules/vite/dist/node/index.js";
import react from "file:///D:/projects/portfolio-abhinav/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import { componentTagger } from "file:///D:/projects/portfolio-abhinav/node_modules/lovable-tagger/dist/index.js";
var __vite_injected_original_dirname = "D:\\projects\\portfolio-abhinav";
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    server: {
      proxy: {
        "/api/contact": {
          target: env.VITE_GOOGLE_SCRIPT_URL,
          changeOrigin: true,
          rewrite: (path2) => path2.replace(/^\/api\/contact/, "")
        }
      },
      host: "::",
      port: 8080
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, "./src")
      }
    }
  };
});
export {
  vite_config_default as default
};