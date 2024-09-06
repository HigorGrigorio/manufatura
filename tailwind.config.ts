const config = {
    darkMode: 'class',
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            'solutia-light': '#FF5412',
            'solutia-mid': '#ff6a3a',
            'solutia-dark': '#de480e',
            'solutia-low': '#be3c0a',

            'info-light': '#6A80FF',
            'info-base': '#4863F7',
            'discover-low': '#182049',

            'success-light': '#04D361',
            'success-base': '#1B873F',
            'success-low': '#051B0D',

            'danger-light': '#F75A68',
            'danger-base': '#CC2937',
            'danger-low': '#2D090C',

            'warning-light': '#FBA94C',
            'warning-base': '#EB8A1D',
            'warning-low': '#2E1B06',

            'new-light': '#1EF7D0',
            'new-base': '#07847E',
            'new-low': '#163840',

            'gray-100': '#f1f1f6',
            'gray-200': '#C4C4CC',
            'gray-300': '#8D8D99',
            'gray-400': '#7C7C8A',
            'gray-500': '#505059',
            'gray-600': '#323238',
            'gray-700': '#29292E',
            'gray-800': '#202024',
            'gray-900': '#121214',
            'gray-950': '#09090A',

            black: '#000000',
            white: '#ffffff',
        },
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        fontFamily: {
            sans: 'Inter, sans-serif',
        },
        extend: {
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
