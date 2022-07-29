import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Admin from "./Components/Admin/Admin";
import Admins from "./Components/Admin/Admins";
import Live from "./Components/Admin/Live";
import Manage from "./Components/Admin/Manage";
import Payments from "./Components/Admin/Payments";
import Post from "./Components/Admin/Post";
import Users from "./Components/Admin/Users";
import AllAdmission from "./Components/AllAdmission/AllAdmission";
import AllCourses from "./Components/AllCourses/AllCourses";
import AllCourseView from "./Components/AllCourses/AllCourseView";
import AllJobCourse from "./Components/AllJobCourses/AllJobCourse";
import Blogs from "./Components/Blogs/Blogs";
import AcadamicDetail from "./Components/BookStore/AcadamicDetails/AcadamicDetail";
import SkillDetail from "./Components/BookStore/SkillDetail/SkillDetail";
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
    <div data-theme="mytheme" className="mt-16 font-header">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/acadamicbook/:acadamicbookId" element={<AcadamicDetail></AcadamicDetail>} ></Route>
        <Route path="/skillbook/:skillbookId" element={<SkillDetail></SkillDetail>} ></Route>
        <Route path="/courses" element={<AllCourses></AllCourses>}></Route>
        <Route
          path="/admission"
          element={<AllAdmission></AllAdmission>}
        ></Route>
        <Route path="/jobs" element={<AllJobCourse></AllJobCourse>}></Route>
        <Route path="/developer" element={<Developer></Developer>}></Route>
        <Route path="/bookstore" element={<BookStore></BookStore>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/admin" element={<Admin></Admin>}>
          <Route path="/admin" element={<Admins></Admins>}></Route>
          <Route path="/admin/manage" element={<Manage></Manage>}></Route>
          <Route path="/admin/post" element={<Post></Post>}></Route>
          <Route path="/admin/live" element={<Live></Live>}></Route>
          <Route path="/admin/users" element={<Users></Users>}></Route>
          <Route path="/admin/payments" element={<Payments></Payments>}></Route>
        </Route>
        <Route path="/course/:id" element={<AllCourseView></AllCourseView>}></Route>
        <Route path="/SignUp" element={<SignUp></SignUp>}></Route>

        <Route path="*" element={<NoteFound></NoteFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
