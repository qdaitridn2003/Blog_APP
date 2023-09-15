/** @type {import('tailwindcss').Config} */
module.exports = {
    important: true,
    content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                'poppins-thin': 'Poppins-Thin',
                'poppins-extlight': 'Poppins-ExtraLight',
                'poppins-light': 'Poppins-Light',
                poppins: 'Poppins-Regular',
                'poppins-medium': 'Poppins-Medium',
                'poppins-semibold': 'Poppins-SemiBold',
                'poppins-bold': 'Poppins-Bold',
                'poppins-extbold': 'Poppins-ExtraBold',
                'poppins-black': 'Poppins-Black',
            },
            colors: {
                primary: { normal: '#0d6efd', subtle: '#031633', emphasis: '#6ea1e9' },
                success: { normal: '#198754', subtle: '#051b11', emphasis: '#61b798' },
                danger: { normal: '#dc3545', subtle: '#2c0b0e', emphasis: '#ea8080' },
                warning: { normal: '#ffc107', subtle: '#332701', emphasis: '#ffda6a' },
                info: { normal: '#0dcaf0', subtle: '#032830', emphasis: '#6edff6' },
                light: { normal: '#f8f9fa', subtle: '#343a40', emphasis: '#def9fa' },
                dark: { normal: '#212529', subtle: '#1a1d20', emphasis: '#dee2e6 ' },
                screen: '#f1f1f1',
            },
        },
    },
    plugins: [],
};
