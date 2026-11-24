import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#710ac6",
          "purple-hover": "#5e08a6",
          "purple-light": "#F5EFFF",
          "purple-subtle": "#F9F6FE",
          lime: "#B4E717",
          "lime-light": "#F7FDDF",
          text: "#17152D",
          heading: "#17152D",
          muted: "#5E6075",
          bg: "#FFFFFF",
          alt: "#F7F8FC",
          card: "#FFFFFF",
          border: "#E6E7F0",
        },
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "Cambria", "'Times New Roman'", "serif"],
        sans: ["'DM Sans'", "Inter", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 2px 10px rgba(0, 0, 0, 0.03)",
        card: "0 4px 20px -2px rgba(23, 21, 45, 0.05)",
        "card-hover": "0 10px 30px -4px rgba(113, 10, 198, 0.08)",
        dropdown: "0 10px 30px rgba(23, 21, 45, 0.08)",
      },
      maxWidth: {
        content: "1320px",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
