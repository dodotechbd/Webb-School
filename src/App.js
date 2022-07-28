import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import AllAdmission from "./Components/AllAdmission/AllAdmission";
import AllCourses from "./Components/AllCourses/AllCourses";
import AllJobCourse from "./Components/AllJobCourses/AllJobCourse";
import Blogs from "./Components/Blogs/Blogs";
import AcadamicDetail from "./Components/BookStore/AcadamicDetails/AcadamicDetail";
import BookStore from "./Components/BookStore/BookStore";
import Developer from "./Components/Developer";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Login/SingUp";
import Footer from "./Components/Shared/Footer";
import Header from "./Components/Shared/Header/Header";
import NoteFound from "./Components/WrongRoute/NoteFound";

function App() {
  return (
    <div data-theme="mytheme" className="mt-16">
<Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/acadamicbook/:acadamicbookId" element={<AcadamicDetail></AcadamicDetail>} ></Route>
        <Route path="/courses" element={<AllCourses></AllCourses>}></Route>
        <Route path="/admission" element={<AllAdmission></AllAdmission>}></Route>
        <Route path="/jobs" element={<AllJobCourse></AllJobCourse>}></Route>
        <Route path="/developer" element={<Developer></Developer>}></Route>
        <Route path="/bookstore" element={<BookStore></BookStore>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/SignUp" element={<SignUp></SignUp>}></Route>

        <Route path="*" element={<NoteFound></NoteFound>}></Route>
        
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
