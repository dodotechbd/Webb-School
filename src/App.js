import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Admin from "./Components/Admin/Admin";
import Admins from "./Components/Admin/Admins";

import Live from "./Components/Admin/LivePost/Live";

import Manage from "./Components/Admin/Courses/Manage";
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
import { useEffect, useState } from "react";
import BlogDetails from "./Components/Blogs/BlogDetails";
import CoursePlay from "./Components/AllCourses/CoursePlay";
import CourseVideo from "./Components/AllCourses/CourseVideo";
import Profile from "./Components/Shared/Header/Profile";
import MyCourses from "./Components/AllCourses/MyCourses";
import FooterTwo from "./Components/Shared/FooterTwo";
import Dashboard from "./Components/Dashboard";
import UnderConstruction from "./Components/WrongRoute/UnderConstruction";
import Checkout from "./Components/AllCourses/Checkout";
import PreLoader from "./Components/Shared/Loading/PreLoader";
 
import LiveClass from "./Components/LIveClass/LiveClass";
import Books from "./Components/Admin/Books";
import AddBlogs from "./Components/Admin/AddBlogs";
import Language from "./Components/Admin/Courses/Language";
import Job from "./Components/Admin/Courses/Job";
import Admission from "./Components/Admin/Courses/Admission";

function App() {
  const [theme, setTheme] = useState(false);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    setTheme(JSON.parse(window.localStorage.getItem("theme")));
  }, []);
  const handleThemeChange = () => {
    setTheme(!theme);
    window.localStorage.setItem("theme", !theme);
  };

  return (
    <div
      data-theme={theme && "my_dark"}
      className="pt-16 font-header min-h-screen"
    >
      {loading ? (
        <div
          className="bg-gradient-to-r from-base-300 to-base-200"
          id="preloader"
        >
          <PreLoader></PreLoader>
        </div>
      ) : (
        <Header handleThemeChange={handleThemeChange} theme={theme}></Header>
      )}

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/acadamicbook/:acadamicbookId"
          element={<AcadamicDetail></AcadamicDetail>}
        ></Route>
        <Route
          path="/skillbook/:skillbookId"
          element={<SkillDetail></SkillDetail>}
        ></Route>
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
        <Route path="/LiveClass" element={<LiveClass></LiveClass>}></Route>
        <Route
          path="/blogdetails/:detailsId"
          element={<BlogDetails></BlogDetails>}
        ></Route>
        {/* admim */}
        <Route path="/admin" element={<Admin></Admin>}>
          <Route path="/admin" element={<Admins></Admins>}></Route>
          <Route path="/admin/courses" element={<Manage></Manage>}>
            <Route
              path="/admin/courses/language"
              element={<Language></Language>}
            ></Route>
            <Route
              path="/admin/courses/job"
              element={<Job></Job>}
            ></Route>
            <Route
              path="/admin/courses/admission"
              element={<Admission></Admission>}
            ></Route>
          </Route>
          <Route path="/admin/books" element={<Books></Books>}></Route>
          <Route path="/admin/post" element={<Post></Post>}></Route>
          <Route path="/admin/livePost/live" element={<Live></Live>}></Route>

          <Route path="/admin/blogs" element={<AddBlogs></AddBlogs>}></Route>
          <Route path="/admin/users" element={<Users></Users>}></Route>
          <Route path="/admin/payments" element={<Payments></Payments>}></Route>
        </Route>
        {/* courses  */}
        <Route
          path="/course/:uname"
          element={<AllCourseView></AllCourseView>}
        ></Route>
        <Route path="/course/:uname/:list" element={<CoursePlay></CoursePlay>}>
          <Route
            path="/course/:uname/:list/:fileName"
            element={<CourseVideo></CourseVideo>}
          ></Route>
        </Route>
        <Route path="/checkout/:uname" element={<Checkout></Checkout>}></Route>
        <Route path="/mycourse" element={<MyCourses></MyCourses>}></Route>
        <Route path="/SignUp" element={<SignUp></SignUp>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route
          path="/coming"
          element={<UnderConstruction></UnderConstruction>}
        ></Route>
        <Route path="*" element={<NoteFound></NoteFound>}></Route>
      </Routes>
      <FooterTwo></FooterTwo>
      <Footer></Footer>
    </div>
  );
}

export default App;
