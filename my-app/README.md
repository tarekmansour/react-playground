# My Notes

- React component names must always start with a capital letter, while html tags must be lowercase.
- The `export default` keyword specify the main component in the file.
- Components can not return multiple **JSX** tags.
  - You have to wrap them into a shared parent, like a `<div>...</div>` or an empty `<>...</>` wrapper.
- `var` vs `let`: var is used to declare a variable whose value can be changed later, while let is used to declare a variable whose value can be changed later and whose scope is limited to the block in which it is declared.
- Functions starting with "use" are called Hooks. `useState` is a built-in Hook provided by React.
  - `const [state, setState] = useState(initialState);`


## Other references
- [Destructuring assignment.](https://javascript.info/destructuring-assignment)
