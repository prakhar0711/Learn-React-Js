In this section we will see how we integrate and use Tailwind in React<br>

You can see installation guides for different frameworks [here](https://tailwindcss.com/docs/installation/framework-guides)<br>

For project initialization with Vite the process to install tailwind into the project is :-<br>
1. Run ```npm install -D tailwindcss postcss autoprefixer``` in the terminal<br>
2. Then run ```npx tailwindcss init -p``` in the terminal.This will create a file 'tailwind.config.js' in the project root directory.<br>
3. Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file.
```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```