const config = {
    plugins: ["@tailwindcss/postcss"],
    theme: {
        extend: {
            colors: {
                tangerine: {
                    50: "#FFF9F5",
                    100: "#FFE8D9",
                    200: "#FFD29D",
                    300: "#FFB878",
                    400: "#FF9E5C",
                    500: "#FF8C42", // main
                    600: "#FF7A29",
                    700: "#E56D24",
                    800: "#BF5B1D",
                    900: "#8F4114",
                },
                surface: {
                    light: "#FFFFFF",
                    dark: "#1C1B1A",
                },
                background: {
                    light: "#FFF9F5",
                    dark: "#0F0E0E",
                },
                text: {
                    light: "#1A1A1A",
                    dark: "#F5F5F5",
                },
                border: {
                    light: "#E4E4E4",
                    dark: "#2C2C2C",
                },
            },
        },
    },
};

export default config;
