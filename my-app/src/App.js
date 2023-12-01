import "./App.css";
import Profile from "./Profile";
import ShoppingList from "./List";
import MyButton from "./Button";
import User from "./User";
import Blog from "./Blog";

function App() {
  return (
    <div className="App">
      <h1>Welcome to my playground</h1>
      <MyButton />
      <Profile />
      <ShoppingList />
      <br />
      <User />
      <br />
      <Blog />
    </div>
  );
}

export default App;
