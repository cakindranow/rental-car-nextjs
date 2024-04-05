import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins : ["var(--font-poppins)"],
      },
    },
    colors : {
      color : {
        'primary' : '#8380FE',
        'secondary' : '#E9E9EC',
        'white' : '#FFFFFF',
        'gray' : '#F2F2F5',
        'gray-border' : '#D0D0D0',
        'EEF5FF' : '#EEF5FF',
        'DFF5FF':'#DFF5FF',
        'E2F4C5' : '#E2F4C5',
        'green-brown': '#8DC65B',
        'green' : '#4DB339',
        'yellow' : '#FAF320',
        'orange' : '#E9A00D',
        'red' : '#E62929',
        'red-bg-alert' : '#FFF2F2',
        'blue-dark' : '#2b2e6b',
        'green-black' : '#253a2c'
      },
      backgroundImage: {
        'hero-pattern':
          "linear-gradient(to right bottom, rgba(43, 108, 176, 0.9), rgba(43, 108, 176, 0.9)), url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.eAFxNBriFW8k0jCNOTCe6gHaHs%26pid%3DApi&f=1')",
      },
    
    }
  },
  plugins: [nextui()],
};
export default config;
