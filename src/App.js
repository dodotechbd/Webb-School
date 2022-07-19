import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div data-theme="mytheme">
      <Routes>
        <Route path="/" element={<Home></Home>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
