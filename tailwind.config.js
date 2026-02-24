/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                dancing: ["Dancing Script", "cursive"],
                gabriel: ["Gabriel Weiss Friends Font", "sans-serif"],
                varela: ["Varela Round", "sans-serif"],
            },
            colors: {
                purple: {
                    600: "#7c3aed",
                    700: "#6d28d9",
                },
                teal: {
                    500: "#14b8a6",
                },
            },
        },
    },
    plugins: [],
};
