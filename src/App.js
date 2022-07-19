import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./Home/Home";
import Navbar from "./Shard/Navbar";


function App() {
  return (
    <div className="px-12" data-theme="light">
      <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
    
    </Routes>
    </div>
  );
}

export default App;
