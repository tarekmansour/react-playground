# What I learned with React playground

## Table of contents
- [Basics](#basics)
- [Hooks](#hooks)
- [Component Lifecycle (with Class components)](#component-lifecycle-with-class-components)
- [Javascript](#javascript)
- [Other references](#other-references)

## Basics
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
    - `setCount` is a setter function, we can call it to handle changes you want. e.g `onClick= {() => setCount(count + 1)}`.
    
    **Initial state**:
    1. Providing a Function Directly as Initial State:
    ```javascript
      const [state, setState] = useState(() => { return 0; });
    ```
       In this example, you are providing a function directly as the initial state. **This function will be executed once**, during the initial render of the component. The return value of this function will be set as the initial state. This pattern is often used when the initial state needs to be calculated based on some logic or if you want to defer the computation until the component is rendered.

    2. Passing a Function Result:
    ```javascript
      const computeInitialState = () => {return 0};
      const [state, setState] = useState(computeInitialState());
    ```
       In this example, the `computeInitialState` function is called outside of the useState call, so its result is determined before the component renders and it will be **executed every time the component renders**. Passing a function result is useful when you have a separate, reusable function to compute the initial state.



## Component Lifecycle (with Class components)

### Mounting Phase
**constructor()**
- This is the first method called when a component is created.
- Used for initializing state and binding event handlers.

**static getDerivedStateFromProps()**
- This method is called before every render.
- Used to update the state based on changes in props.

**render()**
-This is where the component renders UI.
-It should be a pure function without side effects.

**componentDidMount()**
- Invoked once the component is mounted to the DOM.
- Used for performing actions like fetching data from a server.

### Updating Phase

**static getDerivedStateFromProps()**
- Similar to the mounting phase, but called before every update.

**shouldComponentUpdate()**
- Returns a boolean to indicate whether the component should re-render.
- Used for performance optimization.

**render()**
Renders the updated UI.

**getSnapshotBeforeUpdate()**
- Called right before the changes from the virtual DOM are to be reflected in the DOM.
- Used for tasks like saving scroll position before an update.

**componentDidUpdate()**
- Invoked after the component is updated in the DOM.
- Useful for tasks that need the DOM after an update.

### Unmounting Phase
**componentWillUnmount()**
- Invoked immediately before a component is unmounted and destroyed.
- Used for cleanup tasks like canceling network requests or cleaning up subscriptions.

### Error Handling

**static getDerivedStateFromError()**
- Used to render a fallback UI after an error is thrown in a descendant component.

**componentDidCatch()**
- Invoked after an error has been thrown by a descendant component.


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