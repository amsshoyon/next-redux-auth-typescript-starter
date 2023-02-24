/** @type {import('tailwindcss').Config} */
module.exports = {
    corePlugins: {
        preflight: true,
    },
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            sm: "640px",
            md: "768px",
            lg: "992px",
            xl: "1200px",
            "2xl": "1500px",
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "1.2rem",
            },
            screens: {
                xl: "1280px",
                "2xl": "1520px",
            },
        },
        extend: {
            fontFamily: {
                sfpro: ["sf pro display", "sans-serif"],
            },
            colors: {
                primary: "#2d79fd",
                light: "#828282",
                dark: "#4f4f4f",
            },
            fontSize: {
                72: "72px",
                62: "62px",
                52: "52px",
                48: "48px",
                42: "42px",
                32: "32px",
                24: "24px",
                20: "20px",
                18: "18px",
                16: "16px",
            },
            transitionTimingFunction: {
                image: "cubic-bezier(.215,.61,.355,1)",
            },
            animation: {
                ping: "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
                spin: "spin 5s linear infinite",
            },
        },
    },
    plugins: [],
};
