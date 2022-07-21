import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import BookStore from "./Components/BookStore/BookStore/BookStore";
import Courses from "./Components/Course/Courses";
import Home from "./Components/Home/Home";
import Footer from "./Components/Shared/Footer";

function App() {
  return (
    <div data-theme="mytheme">
      

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/courses" element={<Courses></Courses>}></Route>
        <Route path="/bookstore" element={<BookStore></BookStore>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
