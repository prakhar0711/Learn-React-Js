## Creating Our Own Custom React Renderer

In this section, we will create a custom React renderer to understand how React renders HTML elements behind the scenes.

### Setting Up the Environment

1. Create an HTML file.
2. Add a `div` element with an id of `root` to serve as the container for our custom React rendering.
3. Include a `<script>` tag to import our custom React script (`customReact.js`).

### Defining the Custom React Element

4. In `customReact.js`, grab the `root` element from the HTML document.
5. Define a custom React element (`reactElement`) as an object.
6. The `reactElement` has a `type` representing the HTML tag.
7. It also contains `props` as an object, which includes properties like `href` and `target`.
8. Define the `children` property for the element.

### Implementing the Custom Render Method

9. Define a method `customRender(reactElement, mainContainer)`.
10. Inside `customRender`, create a new DOM element based on the `type` of the `reactElement`.
11. Set the `innerHTML` of the new DOM element to the `children` of the `reactElement`.
12. Set attributes such as `href` and `target` based on the `props` of the `reactElement`.
13. Use `appendChild` to append the new DOM element to the specified container (`mainContainer`).

### Usage Example

14. Call `customRender(reactElement, mainContainer)` to render the `reactElement` into the `mainContainer`.
15. The `reactElement` will be injected into the `root` container, displaying the HTML element with specified properties and children.

By following these steps, you'll gain insights into the inner workings of React rendering and create your own custom React renderer.
