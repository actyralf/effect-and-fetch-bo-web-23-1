import { useState } from "react";
import Joke from "./components/Joke";
import "./styles.css";

export default function App() {
  const [showJoke, setShowJoke] = useState(false);
  return (
    <>
      {showJoke && <Joke />}
      <button
        onClick={() => {
          setShowJoke(!showJoke);
        }}
      >
        {showJoke
          ? '"Unmount" the <Joke/> component'
          : '"Mount" the <Joke/> component'}
      </button>
    </>
  );
}
