//defining customRender
/**
 * Renders the given React element into the specified container
 * @param {Object} reactElement - The React element to render
 * @param {Element} container - The container element to render the React element into
 */
function customRender(reactElement, container) {
  // Create a new DOM element based on the type of the React element
  const reactDOM = document.createElement(reactElement.type);

  // Set the inner HTML of the new DOM element to the children of the React element
  reactDOM.innerHTML = reactElement.children;

  // Set the href and target attributes of the new DOM element based on the props of the React element
  //   reactDOM.setAttribute("href", reactElement.props.href);
  //   reactDOM.setAttribute("target", reactElement.props.target);
  //we can also apply loop for multiple setAttributes. See below for implementation
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    reactDOM.setAttribute(prop, reactElement.props[prop]);
  }
  // Append the new DOM element to the specified container
  container.appendChild(reactDOM);
}

//creating custom reactElement
const reactElement = {
  type: "a",
  //properties
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "click me to go to google",
};
// targeting the html id-root
const mainContainer = document.getElementById("root");
//calling custom render which will render the reactElement into the mainContainer
customRender(reactElement, mainContainer);
