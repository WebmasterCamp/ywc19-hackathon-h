import { type Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontSize: {
                caption: ["0.75rem", "1.125rem"],
                body2: ["0.875rem", "1.375rem"],
                body1: ["1rem", "1.5rem"],
                subtitle2: ["0.875rem", "1.375rem"],
                subtitle1: ["1rem", "1.5rem"],
                h6: ["1.125rem", "1.75rem"],
                h5: ["1.25rem", "1.875rem"],
                h4: ["1.5rem", "2.25rem"],
                h3: ["2rem", "3rem"],
                h2: ["3rem", "4rem"],
                h1: ["4rem", "5rem"],
                xs: ["0.75rem", "1rem"],
                sm: ["0.875rem", "1.3125rem"],
                base: ["1rem", "1.5rem"],
                lg: ["1.125rem", "1.75rem"],
                xl: ["1.25rem", "1.75rem"],
                "2xl": ["1.5rem", "2rem"],
                "3xl": ["1.875rem", "2.25rem"],
                "4xl": ["2.25rem", "2.5rem"],
                "5xl": ["3rem", "1"],
            },
            colors: {
                primary: {
                    lighter: "#3AEE9A",
                    light: "#11D67A",
                    main: "#09814A",
                    dark: "#0D5A39",
                    darken: "#01321D",
                },
                secondary: {
                    lighter: "#FDC4AB",
                    light: "#FB9C76",
                    main: "#F96E46",
                    dark: "#F64119",
                    darken: "#C01A0E",
                },
                general: {
                    main: "#FFFCF9",
                    dark: "#CBC8C5",
                    darken: "#434241",
                },
                black: {
                    lighter: "#E8E5E5",
                    light: "#6B6668",
                    main: "#231F20",
                },
            },
        },
    },
    plugins: [require("flowbite/plugin")],
} satisfies Config;
