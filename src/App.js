import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import AllAdmission from "./Components/AllAdmission/AllAdmission";
import BookStore from "./Components/BookStore/BookStore";
import Courses from "./Components/Course/Courses";
import Developer from "./Components/Developer";
import Home from "./Components/Home/Home";
import Footer from "./Components/Shared/Footer";
import Header from "./Components/Shared/Header/Header";

function App() {
  return (
    <div data-theme="mytheme" className="mt-16">
<Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/courses" element={<Courses></Courses>}></Route>
        <Route path="/admission" element={<AllAdmission></AllAdmission>}></Route>
        <Route path="/developer" element={<Developer></Developer>}></Route>
        <Route path="/bookstore" element={<BookStore></BookStore>}></Route>
        
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
