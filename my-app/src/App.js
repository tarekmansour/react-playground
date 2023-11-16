import "./App.css";
import Profile from "./Profile";
import ShoppingList from "./List";
import MyButton from "./Button";

function App() {
  return (
    <div className="App">
      <h1>Welcome to my app</h1>
      <MyButton />
      <Profile />
      <ShoppingList />
    </div>
  );
}

export default App;
