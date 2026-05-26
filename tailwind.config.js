/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#4F46E5', // Indigo-600 for main branding
        'brand-secondary': '#EEF2FF', // Indigo-50 for light backgrounds
        'exception-danger': '#DC2626', // Red-600 for critical exceptions
        'exception-warning': '#F59E0B', // Amber-500 for warnings/pending review
        'status-success': '#16A34A', // Green-600 for approved/resolved status
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}