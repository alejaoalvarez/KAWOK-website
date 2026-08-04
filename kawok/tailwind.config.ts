import type { Config } from "tailwindcss";

/**
 * The whole design system lives here. Change a colour in this file and it
 * changes everywhere on the site — nothing is hard-coded in the pages.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        parchment: "#EFE9DC",   // page background — warm limestone
        limestone: "#DFD5C1",   // second background, for alternating bands
        sandshadow: "#D3C7AF",
        ink: "#14180F",         // near-black forest — dark sections and body text
        jungle: "#22301F",
        cacao: "#4A3728",
        terracotta: "#A8502A",  // the single accent. Used sparingly, on purpose.
        jade: "#4C7A63",        // glass colours — only ever used to talk about glass
        amber: "#C68A2C",
      },
      fontFamily: {
        display: ["var(--font-display)", "Archivo", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "Newsreader", "Georgia", "serif"],
      },
      maxWidth: {
        content: "78rem",
        measure: "36rem",
      },
      letterSpacing: {
        eyebrow: "0.26em",
      },
    },
  },
  plugins: [],
};

export default config;
