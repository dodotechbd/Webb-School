import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Blogs from "./Components/Blogs/Blogs";
import Bookstore from "./Components/Bookstore/Bookstore";
import Courses from "./Components/Courses/Courses";
import Jobs from "./Components/Jobs/Jobs";
import Login from "./Components/Login/Login";
import Home from "./Home/Home";
import Navbar from "./Shard/Navbar";


function App() {
  return (
    <div className="px-12" data-theme="light">
      <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="courses" element={<Courses></Courses>}></Route>
      <Route path="Bookstore" element={<Bookstore></Bookstore>}></Route>
      <Route path="jobs" element={<Jobs></Jobs>}></Route>
      <Route path="blogs" element={<Blogs></Blogs>}></Route>
      <Route path="login" element={<Login></Login>}></Route>
    </Routes>
    </div>
  );
}

export default App;
