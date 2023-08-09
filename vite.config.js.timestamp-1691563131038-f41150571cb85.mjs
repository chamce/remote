// vite.config.js
import react from "file:///C:/Users/Chamce/Desktop/vite-remote-component/remote/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { resolve, extname } from "path";
import babel from "file:///C:/Users/Chamce/Desktop/vite-remote-component/remote/node_modules/vite-plugin-babel/dist/index.mjs";
import { defineConfig } from "file:///C:/Users/Chamce/Desktop/vite-remote-component/remote/node_modules/vite/dist/node/index.js";
var __vite_injected_original_dirname = "C:\\Users\\Chamce\\Desktop\\vite-remote-component\\remote";
var vite_config_default = defineConfig(({ mode }) => ({
  plugins: [
    react(),
    babel({
      babelConfig: {
        plugins: ["styled-jsx/babel"],
        configFile: false,
        babelrc: false
      },
      // uses the jsx loader for .jsx files
      loader: (path) => {
        if (extname(path) === ".jsx") {
          return "jsx";
        }
      }
    })
  ],
  build: {
    rollupOptions: {
      external: ["@paciolan/remote-component", "bootstrap", "react", "styled-jsx"],
      output: { exports: "named" }
    },
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/remoteEntry.jsx"),
      fileName: "remote",
      formats: ["cjs"]
    },
    outDir: "docs"
  },
  define: mode === "production" ? { "process.env.NODE_ENV": '"production"' } : {},
  server: { open: true },
  base: ""
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxDaGFtY2VcXFxcRGVza3RvcFxcXFx2aXRlLXJlbW90ZS1jb21wb25lbnRcXFxccmVtb3RlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxDaGFtY2VcXFxcRGVza3RvcFxcXFx2aXRlLXJlbW90ZS1jb21wb25lbnRcXFxccmVtb3RlXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9DaGFtY2UvRGVza3RvcC92aXRlLXJlbW90ZS1jb21wb25lbnQvcmVtb3RlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IHsgcmVzb2x2ZSwgZXh0bmFtZSB9IGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgYmFiZWwgZnJvbSBcInZpdGUtcGx1Z2luLWJhYmVsXCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4gKHtcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgYmFiZWwoe1xuICAgICAgYmFiZWxDb25maWc6IHtcbiAgICAgICAgcGx1Z2luczogW1wic3R5bGVkLWpzeC9iYWJlbFwiXSxcbiAgICAgICAgY29uZmlnRmlsZTogZmFsc2UsXG4gICAgICAgIGJhYmVscmM6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIC8vIHVzZXMgdGhlIGpzeCBsb2FkZXIgZm9yIC5qc3ggZmlsZXNcbiAgICAgIGxvYWRlcjogKHBhdGgpID0+IHtcbiAgICAgICAgaWYgKGV4dG5hbWUocGF0aCkgPT09IFwiLmpzeFwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwianN4XCI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGJ1aWxkOiB7XG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFtcIkBwYWNpb2xhbi9yZW1vdGUtY29tcG9uZW50XCIsIFwiYm9vdHN0cmFwXCIsIFwicmVhY3RcIiwgXCJzdHlsZWQtanN4XCJdLFxuICAgICAgb3V0cHV0OiB7IGV4cG9ydHM6IFwibmFtZWRcIiB9LFxuICAgIH0sXG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL3JlbW90ZUVudHJ5LmpzeFwiKSxcbiAgICAgIGZpbGVOYW1lOiBcInJlbW90ZVwiLFxuICAgICAgZm9ybWF0czogW1wiY2pzXCJdLFxuICAgIH0sXG4gICAgb3V0RGlyOiBcImRvY3NcIixcbiAgfSxcbiAgZGVmaW5lOiBtb2RlID09PSBcInByb2R1Y3Rpb25cIiA/IHsgXCJwcm9jZXNzLmVudi5OT0RFX0VOVlwiOiAnXCJwcm9kdWN0aW9uXCInIH0gOiB7fSxcbiAgc2VydmVyOiB7IG9wZW46IHRydWUgfSxcbiAgYmFzZTogXCJcIixcbn0pKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMFYsT0FBTyxXQUFXO0FBQzVXLFNBQVMsU0FBUyxlQUFlO0FBQ2pDLE9BQU8sV0FBVztBQUNsQixTQUFTLG9CQUFvQjtBQUg3QixJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssT0FBTztBQUFBLEVBQ3pDLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxNQUNKLGFBQWE7QUFBQSxRQUNYLFNBQVMsQ0FBQyxrQkFBa0I7QUFBQSxRQUM1QixZQUFZO0FBQUEsUUFDWixTQUFTO0FBQUEsTUFDWDtBQUFBO0FBQUEsTUFFQSxRQUFRLENBQUMsU0FBUztBQUNoQixZQUFJLFFBQVEsSUFBSSxNQUFNLFFBQVE7QUFDNUIsaUJBQU87QUFBQSxRQUNUO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyw4QkFBOEIsYUFBYSxTQUFTLFlBQVk7QUFBQSxNQUMzRSxRQUFRLEVBQUUsU0FBUyxRQUFRO0FBQUEsSUFDN0I7QUFBQSxJQUNBLEtBQUs7QUFBQSxNQUNILE9BQU8sUUFBUSxrQ0FBVyxxQkFBcUI7QUFBQSxNQUMvQyxVQUFVO0FBQUEsTUFDVixTQUFTLENBQUMsS0FBSztBQUFBLElBQ2pCO0FBQUEsSUFDQSxRQUFRO0FBQUEsRUFDVjtBQUFBLEVBQ0EsUUFBUSxTQUFTLGVBQWUsRUFBRSx3QkFBd0IsZUFBZSxJQUFJLENBQUM7QUFBQSxFQUM5RSxRQUFRLEVBQUUsTUFBTSxLQUFLO0FBQUEsRUFDckIsTUFBTTtBQUNSLEVBQUU7IiwKICAibmFtZXMiOiBbXQp9Cg==
