/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      boxShadow: {
        card: '0px 4px 12px 0px rgba(0, 0, 0, 0.05)'
      },
      colors: {
        White: "#FFFFFF",

        Grey000: "#FFFFFF",
        Grey50: "#F8FAFB",
        Grey100: "#F3F4F6",
        Grey200: "#E5E7EB",
        Grey300: "#D1D5DB",
        Grey400: "#9CA3AF",
        Grey500: "#6B7280",
        Grey600: "#4B5563",
        Grey700: "#374151",
        Grey800: "#1F2937",
        Grey900: "#111827",

        Green50: "#F3F8F1",
        Green100: "#E3F0DD",
        Green200: "#C9E2C3",
        Green300: "#B0D0AB",
        Green400: "#90BC92",
        Green500: "#6AA376",
        Green600: "#3F8262",
        Green700: "#2F6F58",
        Green800: "#064E3D",
        Green900: "#032922",

        Beige100: "#FCFAF7",
        Beige200: "#F8F5F0",
        Beige300: "#F3EEE4",
        Beige400: "#E9E1D5",
        Beige500: "#DDD4C5",
        Beige600: "#D0C5B3",
        Beige700: "#C3B7A3",
        Beige800: "#A7967A",
        Beige900: "#6D5C3E",
        Beige1000: "#6D5C3E",

        Red50: "#FEF2F2",
        Red100: "#FEE2E2",
        Red200: "#FECACA",
        Red300: "#FCA5A5",
        Red400: "#F87171",
        Red500: "#EF4444",
        Red600: "#DC2626",
        Red700: "#B91C1C",
        Red800: "#991B1B",
        Red900: "#7F1D1D",

        Yellow50: "#FFFBEB",
        Yellow100: "#FEF3C7",
        Yellow200: "#FDE68A",
        Yellow300: "#FCD34D",
        Yellow400: "#FBBF24",
        Yellow500: "#F59E0B",
        Yellow600: "#D97706",
        Yellow700: "#B45309",
        Yellow800: "#92400E",
        Yellow900: "#78350F",

        Blue50: "#F0F9FF",
        Blue100: "#E0F2FE",
        Blue200: "#BAE6FD",
        Blue300: "#7DD3FC",
        Blue400: "#38BDF8",
        Blue500: "#0EA5E9",
        Blue600: "#0284C7",
        Blue700: "#0369A1",
        Blue800: "#075985",
        Blue900: "#0C4A6E",
      },
    },
  },
  plugins: [],
};
