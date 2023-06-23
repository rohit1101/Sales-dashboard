/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-violet": "#5D5FEF",
        "dark-green": "#3dd756",
        "dark-blue": "#1495FF",
        "dark-yellow": "#fe947a",
        "dark-purple": "#bf84ff",
      },
      backgroundColor: {
        "light-yellow": "#FEFAF2",
        "light-red": "#ffe2e6",
        "light-green": "#DCFCE7",
        "light-purple": "#F4E8FF",
        "light-blue": "#CDE7FF",
        "dark-red": "#fa5b7d",
        "dark-yellow": "#fe947a",
        "dark-green": "#3dd756",
        "dark-purple": "#bf84ff",
        "dark-blue": "#1495FF",
      },
      backgroundImage: {
        "sidebar-footer-image": "url('/src/assets/sidebar-img.svg')",
        "inp-image": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E")`,
      },
    },
  },
  plugins: [],
};
