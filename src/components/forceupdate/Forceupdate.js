import { useState } from "react";

export default function Forceupdate() {
  let [counter, updateCounter] = useState(0);

  let increment = () => {
    updateCounter(++counter);
    console.log(counter);
  };

  return (
    <>
      <div>
        <h1>Forceupdate Demo</h1>
      </div>
      <button onClick={increment}> increment {counter} </button>
    </>
  );
}
