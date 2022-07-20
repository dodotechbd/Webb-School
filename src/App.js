import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./Components/Home/Home";
import Review from "./Components/Home/Review/Review";

function App() {
  return (
    <div data-theme="light">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
      <Review></Review>
    </div>
  );
}

export default App;
