## Creating a Simple Counter App

In this project, we'll create a basic counter app using React.

### Project Setup

1. Create a heading tag to display the counter value.
2. Create two buttons for adding and removing values.
3. Initialize a variable `counter` to hold the counter value.
4. Display the `counter` variable in the counter heading tag.
5. Implement click event handlers for the buttons.
6. Create functions to handle the logic for adding and removing values.

### UI Update Issue

7. Observe that the UI doesn't update even though the counter value changes.
8. To solve this issue, we'll use the `useState` hook.
9. React controls UI updates.

### Using useState Hook

10. Import the `useState` hook.
11. Initialize a state variable using `useState`.
12. Provide a default value of 0 for the counter (as it's initially set to 0).
13. Syntax: `const [counter, setCounter] = useState(0)`.
14. `useState` returns an array with two elements: a variable and a function.
15. In our case, `counter` and `setCounter` are obtained at the 0th and 1st index, respectively.
16. `setCounter` is a function used to update the value of `counter`.
17. `counter` is used to display the current value of the counter.

### Updating State and UI

18. Use the `setCounter` function inside the click event handlers to update the counter value.
19. Remember to declare the state variable with `let` instead of `const` as its value will change.
20. The `setCounter` function should be called within the click event handlers to update the counter value.
21. Place the logic for incrementing/decrementing the counter inside the `setCounter` function.
22. While naming the state variable and its setter function, follow meaningful conventions.

By following these steps, you'll create a simple counter app with React, addressing the issue of UI updates using the `useState` hook.
