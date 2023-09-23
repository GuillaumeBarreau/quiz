/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                'github-regular': '#333',
                'facebook-regular': '#3b5998',
                'twitter-regular': '#00acee',
                'google-regular': '#db3236',
                error: {
                    100: '#ffcccc',
                    200: '#fecaca',
                    300: '#ff9999',
                    400: '#f87171',
                    500: '#ef4444',
                },
                valid: {
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#3b82f6',
                },
            },
        },
    },
    plugins: [],
}
