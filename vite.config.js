import react from "@vitejs/plugin-react";
import babel from "vite-plugin-babel";
import { defineConfig } from "vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    rollupOptions: {
      external: ["react", "react-dom", "@paciolan/remote-component", "bootstrap", "styled-jsx"],
      output: { exports: "named" },
    },
    lib: {
      entry: resolve(__dirname, "src/remoteEntry.jsx"),
      fileName: "remote",
      formats: ["cjs"],
    },
    outDir: "docs",
  },
  plugins: [
    react(),
    babel({
      babelConfig: {
        plugins: ["styled-jsx/babel"],
        configFile: false,
        babelrc: false,
      },
    }),
  ],
  define: mode === "production" ? { "process.env.NODE_ENV": '"production"' } : {},
  base: "",
}));
