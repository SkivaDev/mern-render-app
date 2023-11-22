import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");

  return (
    <>
      <h1>MERN Render</h1>
      <button
        onClick={async () => {
          const res = await fetch("http://localhost:3000/ping");
          const data = await res.json();
          console.log(data);
          setResult(JSON.stringify(data));
        }}
      >
        Users
      </button>

      <pre>
        {result}
      </pre>
    </>
  );
}

export default App;
