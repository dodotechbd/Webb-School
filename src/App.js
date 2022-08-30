import { Routes, Route } from "react-router-dom";
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
import Profile from "./Components/User/Profile";
import MyCourses from "./Components/User/MyCourses";
import FooterTwo from "./Components/Shared/FooterTwo";
import Dashboard from "./Components/User/Dashboard";
import UnderConstruction from "./Components/WrongRoute/UnderConstruction";
import Checkout from "./Components/AllCourses/Checkout";
import PreLoader from "./Components/Shared/Loading/PreLoader";
import LiveClass from "./Components/LIveClass/LiveClass";
import MyLiveClass from "./Components/User/LiveClass";
import AddBlogs from "./Components/Admin/AddBlogs";
import AcademicBookss from "./Components/Admin/AcademicBookss";
import SkillBookss from "./Components/Admin/SkillBookss";
import Language from "./Components/Admin/Courses/Language";
import Job from "./Components/Admin/Courses/Job";
import Admission from "./Components/Admin/Courses/Admission";
import AddLanguage from "./Components/Admin/Courses/AddLanguage";
import AddJob from "./Components/Admin/Courses/AddJob";
import AddAdmission from "./Components/Admin/Courses/AddAdmission";
import Reset from "./Components/Login/Reset";
import RequireAuth from "./Authentication/RequireAuth";
import RequireAdmin from "./Authentication/RequireAdmin";
import Stripe from "./Components/Payments/Stripe";
import Order from "./Components/User/Order";
import Bkash from "./Components/Payments/Bkash";

import AudioBooks from "./Components/AudioBook/AudioBooks";
import AudioBookDetails from "./Components/AudioBook/AudioBookDetails";
import UpdateProfile from "./Components/User/UpdateProfile";
import Message from "./Components/Admin/Message";
import BookDetail from "./Components/BookStore/BookDetail";
import BookCheckout from "./Components/BookStore/BookCheckout";
import Chat from "./Components/Chat/Chat";
import MyBooks from "./Components/User/MyBooks";
import MyEbooks from "./Components/User/MyEbooks";
import MyAudioBooks from "./Components/User/MyAudioBooks";
import ManageReview from "./Components/Admin/ManageReview/ManageReview";
import CourseReview from "./Components/Admin/ManageReview/CourseReview";
import BookReview from "./Components/Admin/ManageReview/BookReview";
import Special from "./Components/Admin/Courses/Special";
import AddTeacher from "./Features/Teachers/AddTeacher";
import EditTeacher from "./Features/Teachers/EditTeacher";
import TeacherView from "./Features/Teachers/TeacherView";

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
          path="/acadamicbook/:bookId"
          element={<BookDetail></BookDetail>}
        ></Route>
        <Route
          path="/skillbook/:bookId"
          element={<BookDetail></BookDetail>}
        ></Route>
        <Route
          path="/audiobook/:bookId"
          element={<AudioBookDetails></AudioBookDetails>}
        ></Route>
        <Route path="/courses" element={<AllCourses></AllCourses>}></Route>
        <Route
          path="/admission"
          element={<AllAdmission></AllAdmission>}
        ></Route>
        <Route path="/jobs" element={<AllJobCourse></AllJobCourse>}></Route>
        <Route path="/developer" element={<Developer></Developer>}></Route>
        <Route path="/bookstore" element={<BookStore></BookStore>}></Route>
        <Route path="/audiobook" element={<AudioBooks></AudioBooks>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/reset" element={<Reset></Reset>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route element={<RequireAuth></RequireAuth>}>
          <Route path="/LiveClass" element={<LiveClass></LiveClass>}></Route>

          {/* <Route path="/chat" element={<Chat></Chat>}></Route> */}
          <Route path="/checkout/stripe" element={<Stripe></Stripe>}></Route>
          <Route
            path="/checkout/bkash/:uname"
            element={<Bkash></Bkash>}
          ></Route>
          <Route path="/orders" element={<Order></Order>}></Route>
          <Route path="/profile" element={<Profile></Profile>}>
            <Route
              path="/profile/update"
              element={<UpdateProfile></UpdateProfile>}
            ></Route>
          </Route>
          <Route
            path="/checkout/:uname"
            element={<Checkout></Checkout>}
          ></Route>
          <Route
            path="/bookcheckout/:bookId"
            element={<BookCheckout></BookCheckout>}
          ></Route>
        </Route>

        <Route
          path="/blogdetails/:detailsId"
          element={<BlogDetails></BlogDetails>}
        ></Route>
        {/* admim */}

        <Route element={<RequireAdmin></RequireAdmin>}>
          <Route path="/admin" element={<Admin></Admin>}>
            <Route path="/admin" element={<Admins></Admins>}></Route>
            <Route path="/admin/courses/manage" element={<Manage></Manage>}>
              <Route
                path="/admin/courses/manage"
                element={<Special></Special>}
              ></Route>
              <Route
                path="/admin/courses/manage/language"
                element={<Language></Language>}
              ></Route>
              <Route path="/admin/courses/manage/job" element={<Job></Job>}></Route>
              <Route
                path="/admin/courses/manage/admission"
                element={<Admission></Admission>}
              ></Route>
            </Route>
            <Route
              path="/admin/skillbookss"
              element={<SkillBookss></SkillBookss>}
            ></Route>
            <Route
              path="/admin/academicbookss"
              element={<AcademicBookss></AcademicBookss>}
            ></Route>
            <Route path="/admin/reviews" element={<ManageReview></ManageReview>}>
              <Route path="/admin/reviews/course" element={<CourseReview></CourseReview>}></Route>
              <Route path="/admin/reviews/book" element={<BookReview></BookReview>}></Route>
            </Route>
            <Route path="/admin/livePost/live" element={<Live></Live>}></Route>
            <Route path="/admin/showTeacher" element={<TeacherView></TeacherView>}></Route>

            <Route
              path="/admin/addlanguage"
              element={<AddLanguage></AddLanguage>}
            ></Route>
            <Route path="/admin/addjob" element={<AddJob></AddJob>}></Route>
            <Route
              path="/admin/addadmission"
              element={<AddAdmission></AddAdmission>}
            ></Route>
            <Route path="/admin/live" element={<Live></Live>}></Route>
            <Route path="/admin/blogs" element={<AddBlogs></AddBlogs>}></Route>
            <Route path="/admin/post" element={<Post></Post>}></Route>
            <Route path="/admin/chat" element={<Chat></Chat>}></Route>
            <Route path="/admin/users" element={<Users></Users>}></Route>
            <Route
              path="/admin/payments"
              element={<Payments></Payments>}
            ></Route>
            <Route path="/admin/message" element={<Message></Message>}></Route>

          </Route>
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
        <Route path="/mycourse" element={<MyCourses></MyCourses>}></Route>
        <Route path="/mybooks" element={<MyBooks></MyBooks>}></Route>
        <Route path="/ebooks" element={<MyEbooks></MyEbooks>}></Route>
        <Route path="/addteacher" element={<AddTeacher></AddTeacher>}></Route>
        <Route path="/editteacher" element={<EditTeacher></EditTeacher>}></Route>
        <Route path="/showteacher" element={<TeacherView></TeacherView>}></Route>
        <Route path="/audiobooks" element={<MyAudioBooks></MyAudioBooks>}></Route>
        <Route
          path="/liveclasses"
          element={<MyLiveClass></MyLiveClass>}
        ></Route>
        <Route path="/SignUp" element={<SignUp></SignUp>}></Route>
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
