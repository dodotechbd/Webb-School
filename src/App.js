import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Courses from "./Components/Course/Courses";
import Home from "./Components/Home/Home";
import Footer from "./Components/Shared/Footer";
import Header from "./Components/Shared/Header/Header";

function App() {
  return (
    <div data-theme="mytheme">
<Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/courses" element={<Courses></Courses>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
