const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Dosis', ...defaultTheme.fontFamily.sans],
                'abereto': ['Aboreto', 'cursive'],
                'dancing-script': ['Dancing Script', 'cursive'],
            },
            backgroundImage: {
                'hero-home': "url('/assets/forest.jpg')",
                'hero-accommodation': 'url("/assets/forest2.jpg")',
                'hero-info': "url('/assets/deer.jpg')",
                'hero-prices': "url('/assets/mushroom.jpg')",
                'hero-contact': "url('/assets/trees.jpg')",
                'home-collage': "url('/assets/home_collage.png')",
                'home-map': "url('/assets/map.png')",
                'half-taken': "url('/assets/calendar-half-taken.png')",
                'gradient-home': 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 15%, rgba(255,255,255,0) 85%, rgba(255,255,255,1) 100%), url("/assets/map.png");'
            }
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
