/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "sm-max": { max: "374.99px" },
      md: "768px",
      lg: "1440px",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        sm: "0 6px 8px #ffffff0d",
        md: "0 8px 10px #ffffff1a",
        xl: "0 4px 6px #2860411a",
        "shadow-box": "0 -1px 14px 0 rgba(29, 30, 33, 0.02)",
        "shadow-link": "0 8px 8px #ffffff1a",
        scroll: "0 0 12px 4px #59b17a",
      },
    },
  },

  corePlugins: {
    container: false,
  },
  plugins: [
    ({ addComponents }) => {
      addComponents({
        ".container": {
          minWidth: "320px",
          maxWidth: "375px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "20px",
          paddingRight: "20px",
          "@screen md": {
            paddingLeft: "32px",
            paddingRight: "32px",
            maxWidth: "768px",
          },
          "@screen lg": {
            paddingLeft: "128px",
            paddingRight: "128px",
            maxWidth: "1440px",
          },
        },
      });
    },
    daisyui,
  ],
  daisyui: {
    themes: ["light"],
  },
};
