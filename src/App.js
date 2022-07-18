import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./Components/Home/Home";
import Footer from "./Components/Shared/Footer";

function App() {
  return (
    <div data-theme="light">
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
