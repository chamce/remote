import react from "@vitejs/plugin-react";
import { resolve, extname } from "path";
import babel from "vite-plugin-babel";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    babel({
      babelConfig: {
        plugins: ["styled-jsx/babel"],
        configFile: false,
        babelrc: false,
      },
      // uses the jsx loader for .jsx files
      loader: (path) => {
        if (extname(path) === ".jsx") {
          return "jsx";
        }
      },
    }),
  ],
  build: {
    rollupOptions: {
      external: ["@paciolan/remote-component", "bootstrap", "react", "styled-jsx"],
      output: { exports: "named" },
    },
    lib: {
      entry: resolve(__dirname, "src/remoteEntry.jsx"),
      fileName: "remote",
      formats: ["cjs"],
    },
    outDir: "docs2",
  },
  define: mode === "production" ? { "process.env.NODE_ENV": '"production"' } : {},
  server: { open: true },
  base: "",
}));
