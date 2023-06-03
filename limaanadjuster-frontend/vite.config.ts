import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const otherConfig = {
  globals: true,
  environment: "happy-dom",
  setupFiles: ".vitest/setup",
  include: ["**/test.{ts,tsx}"],
};

// https://vitejs.dev/config https://vitest.dev/config
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  ...otherConfig,
});
