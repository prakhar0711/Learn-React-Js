In this section we will see how we integrate and use Tailwind in React<br>

You can see installation guides for different frameworks [here](https://tailwindcss.com/docs/installation/framework-guides)<br>

For project initialization with Vite the process to install tailwind into the project is :-<br>

1. Run `npm install -D tailwindcss postcss autoprefixer` in the terminal<br>
2. Then run `npx tailwindcss init -p` in the terminal.This will create a file 'tailwind.config.js' in the project root directory.<br>
3. Configure your template paths.
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

4 .Add the Tailwind directives to your CSS.
Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. Now to verify if tailwind is installed properly or not.Write some code in the App.jsx file that renders some html tags such as `h1` and give it a className of tailwind for eg- `<h1 className="bg-green-300"></h1>`<br>

Understanding props start here<br>
1.Go to [devui.io](https://www.devui.io/components) and copy any card component from there to your App.jsx
2.Do use the same card multiple times we will have to copy and paste again and again. So to make it reusable we will a seperate component of it.
3.Create a new folder and name it as "components" in the src directory.<br>
4.Inside it create a file 'Card.jsx' that will contain our card component.<br>
5.Paste the code of your component card in the Card.jsx file and save it.
6.Now import the Card.jsx component in your App.jsx file.<br>
7.When we use the same component multiple times it has the same content as the original.<br>
8.Using props we can pass data from one component to another.<br>
9.Props is passed to your component function as an object,see below
`function Card(props){}` 10. We can pass values from one component to another by using props.<br>
