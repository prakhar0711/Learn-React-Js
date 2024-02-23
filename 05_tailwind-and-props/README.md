## Integrating Tailwind CSS with React

In this section, we will explore how to integrate and use Tailwind CSS in a React project.

You can find installation guides for different frameworks [here](https://tailwindcss.com/docs/installation/framework-guides).

### Project Initialization with Vite

Follow these steps to install Tailwind CSS into your project:

1. Run `npm install -D tailwindcss postcss autoprefixer` in the terminal.
2. Then run `npx tailwindcss init -p` in the terminal. This will create a file `tailwind.config.js` in the project root directory.
3. Configure your template paths by adding them to the `content` array in `tailwind.config.js`.
   
```js
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

4. Add the Tailwind directives to your CSS. Add the `@tailwind` directives for each of Tailwind’s layers to your `./src/index.css` file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. To verify if Tailwind is installed properly, write some code in the `App.jsx` file that renders HTML tags with Tailwind classes, for example: `<h1 className="bg-green-300"></h1>`.

### Understanding Props

Now let's dive into understanding props:

1. Go to [devui.io](https://www.devui.io/components) and copy any card component from there to your `App.jsx`.
2. Instead of duplicating the same card component, let's create a reusable component.
3. Create a new folder named `components` in the `src` directory.
4. Inside it, create a file named `Card.jsx` that will contain our card component.
5. Paste the code of your card component into the `Card.jsx` file and save it.
6. Now import the `Card.jsx` component in your `App.jsx` file.
7. When we use the same component multiple times, it has the same content as the original.
8. Using props, we can pass data from one component to another.
9. Props are passed to your component function as an object.
10. We can pass values from one component to another by using props.

By following these steps, you'll be able to integrate Tailwind CSS into your React project and understand the usage of props for creating reusable components.
