import "./App.css";
import Profile from "./Profile";

function MyButton() {
  return <button>I'm a button</button>;
}

function App() {
  return (
    <div className="App">
      <h1>Welcome to my app</h1>
      <MyButton />
      <Profile />
    </div>
  );
}

export default App;
