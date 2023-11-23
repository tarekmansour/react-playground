import { useState } from "react";

export default function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
   setCount(count + 1);
  }
  
return (
    <button onClick={handleClick}>
      {/* UI updates when state (count value) changes */}
      Clicked {count} times
    </button>
  );
}
