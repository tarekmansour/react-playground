# General Notes

- React component names must always start with a capital letter, while html tags must be lowercase.
- The `export default` keyword specify the main component in the file.
- Components can not return multiple **JSX** tags.
  - You have to wrap them into a shared parent, like a `<div>...</div>` or an empty `<>...</>` wrapper.

## Hooks
- Functions starting with "use" are called Hooks. `useState` is a built-in Hook provided by React. `const [state, setState] = useState(initialState);`
- **Hooks** we can only call them at the top of functional component, they don't work inside regular javascript functions, nested functions... or anything like that.
- `useState()`:
  - handle reactive data, any data that changes in the application, it's called state and when the state changes react update the UI (re-render UI)
  - the hook take one argument which is the default state `useState(0)`, the function returns an array which contains two values that we can use within the component. 
    - the reason of returning an array is because we can destructure them with javascript to easily assign values to local variables that we can name to whatever we want. e.g `const [count, setCount] = useState(0);`
    - `count` is a Reactive data or state, if it changes in future, react will automatically rebuild the UI to show its new value.
    - `setCount` is a setter function, we can call it to handle changes you want. e.g `onClick= {() => setCount(count + 1)}`

## Javascript
- `var` vs `let`: var is used to declare a variable whose value can be changed later, while let is used to declare a variable whose value can be changed later and whose scope is limited to the block in which it is declared.
- **Destructuring assignment**: takes values from arrays or properties from objects and set them as local variables, it's a technique that can make your javascript code more concise and readable
  ```javascript
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F']
  const numbers = ['1', '2', '3', '4', '5', '6']
  const[a, b, ...rest] = alphabet
  const newArray = [...alphabet, ...numbers]
  ```

## Other references
- [Destructuring assignment.](https://javascript.info/destructuring-assignment)
- [Airbnb/javascript: JavaScript Style Guide](https://github.com/airbnb/javascript)