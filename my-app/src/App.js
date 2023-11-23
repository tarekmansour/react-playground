import "./App.css";
import Profile from "./Profile";
import ShoppingList from "./List";
import MyButton from "./Button";
import User from "./User";

function App() {
  return (
    <div className="App">
      <h1>Welcome to my playground</h1>
      <MyButton />
      <Profile />
      <ShoppingList />
      <br/>
      <User />
    </div>
  );
}

export default App;
