import './App.css'
import { Outlet } from "react-router-dom";

function App() {


  return (
    <div className='App'><Outlet/>
    <h1>HEllo WOrld!</h1>
    </div>
  )
}

export default App
