import { useState, useEffect } from "react";

const jokeApiUrl = "https://example-apis.vercel.app/api/bad-jokes";

export default function Joke() {
  const [joke, setJoke] = useState(null);
  const [currentJoke, setCurrentJoke] = useState(0);

  console.log(`Component has been rendered with: ${joke}`);

  useEffect(() => {
    async function fetchJoke() {
      try {
        const response = await fetch(`${jokeApiUrl}/${currentJoke}`);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setJoke(data);
        } else {
          // in a production environment you should react on this error and inform the user
          console.log("Response returned status code:", response.status);
        }
      } catch (error) {
        // in a production environment you should react on this error and inform the user
        console.log("Caught Error: ", error);
      }
    }

    fetchJoke();

    // The callback function we return will be called when the component "unmounts" (i.e. when we remove it from the DOM)
    return () => {
      console.log("<Joke/> Component unmounted");
    };
  }, [currentJoke]);

  if (!joke) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>{joke?.joke}</h1>
      <button
        onClick={() => {
          setCurrentJoke(joke.nextId);
        }}
        type="button"
      >
        Next Joke
      </button>
    </>
  );
}
