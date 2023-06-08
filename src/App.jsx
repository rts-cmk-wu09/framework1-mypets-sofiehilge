import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
const [context, setContext] = useState({})

  return (
    <div className="App">
      <Outlet context={[context, setContext]}/>
    </div>
  );
}

export default App;

