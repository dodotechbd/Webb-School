import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import RequireAdmin from "./Authentication/RequireAdmin";
import RequireAuth from "./Authentication/RequireAuth";
import AcademicBookss from "./Pages/Admin/AcademicBookss";
import AddBlogs from "./Pages/Admin/AddBlogs";
import Admin from "./Pages/Admin/Admin";
import Admins from "./Pages/Admin/Admins";
import ManageBooks from "./Pages/Admin/Books/ManageBooks";
import AddAdmission from "./Pages/Admin/Courses/AddAdmission";
import AddCourse from "./Pages/Admin/Courses/AddCourse";
import AddJob from "./Pages/Admin/Courses/AddJob";
import AddLanguage from "./Pages/Admin/Courses/AddLanguage";
import Admission from "./Pages/Admin/Courses/Admission";
import AllCourse from "./Pages/Admin/Courses/AllCourse";
import Job from "./Pages/Admin/Courses/Job";
import Language from "./Pages/Admin/Courses/Language";
import Manage from "./Pages/Admin/Courses/Manage";
import Special from "./Pages/Admin/Courses/Special";
import Live from "./Pages/Admin/LivePost/Live";
import AllReviews from "./Pages/Admin/ManageReview/AllReviews";
import BookReview from "./Pages/Admin/ManageReview/BookReview";
import CourseReview from "./Pages/Admin/ManageReview/CourseReview";
import ManageReview from "./Pages/Admin/ManageReview/ManageReview";
import Message from "./Pages/Admin/Message";
import Payments from "./Pages/Admin/Payments";
import SkillBookss from "./Pages/Admin/SkillBookss";
import UserDetails from "./Pages/Admin/UserDetails";
import Users from "./Pages/Admin/Users";
import AllAdmission from "./Pages/AllAdmission/AllAdmission";
import AllCourseView from "./Pages/AllCourses/AllCourseView";
import AllCourses from "./Pages/AllCourses/AllCourses";
import Checkout from "./Pages/AllCourses/Checkout";
import CoursePlay from "./Pages/AllCourses/CoursePlay";
import CourseVideo from "./Pages/AllCourses/CourseVideo";
import Summary from "./Pages/AllCourses/Summary";
import AllJobCourse from "./Pages/AllJobCourses/AllJobCourse";
import AudioBookDetails from "./Pages/AudioBook/AudioBookDetails";
import AudioBooks from "./Pages/AudioBook/AudioBooks";
import BlogDetails from "./Pages/Blogs/BlogDetails";
import Blogs from "./Pages/Blogs/Blogs";
import BookCheckout from "./Pages/BookStore/BookCheckout";
import BookDetail from "./Pages/BookStore/BookDetail";
import BookStore from "./Pages/BookStore/BookStore";
import Developer from "./Pages/Developer";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Reset from "./Pages/Login/Reset";
import SignUp from "./Pages/Login/SingUp";
import Bkash from "./Pages/Payments/Bkash";
import Stripe from "./Pages/Payments/Stripe";
import Dashboard from "./Pages/User/Dashboard";
import MyLiveClass from "./Pages/User/LiveClass";
import MyAudioBooks from "./Pages/User/MyAudioBooks";
import MyBooks from "./Pages/User/MyBooks";
import MyCourses from "./Pages/User/MyCourses";
import MyEbooks from "./Pages/User/MyEbooks";
import Order from "./Pages/User/Order";
import PaidCourse from "./Pages/User/PaidCourse";
import Profile from "./Pages/User/Profile";
import UpdateProfile from "./Pages/User/UpdateProfile";
import NoteFound from "./Pages/WrongRoute/NoteFound";
import UnderConstruction from "./Pages/WrongRoute/UnderConstruction";
import UserSite from "./UserSite";

function App() {
  const [theme, setTheme] = useState(false);
  useEffect(() => {
    setTheme(
      JSON.parse(window.localStorage?.getItem("webb-school-theme")) || theme
    );
  }, []);
  const handleThemeChange = () => {
    setTheme(!theme);
    window.localStorage.setItem("webb-school-theme", !theme);
  };
  return (
    <div data-theme={theme && "my_dark"} className="font-header min-h-screen">
      <Routes>
        <Route
          element={
            <UserSite handleThemeChange={handleThemeChange} theme={theme} />
          }
        >
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
            <Route path="/checkout/stripe" element={<Stripe></Stripe>}></Route>
            <Route
              path="/checkout/bkash/:uname"
              element={<Bkash></Bkash>}
            ></Route>
            <Route path="/orders" element={<Order></Order>}></Route>
            <Route path="/profile" element={<Profile></Profile>}>
              <Route
                path="/profile"
                element={<PaidCourse></PaidCourse>}
              ></Route>
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
            <Route
              path="/course/:uname/:list"
              element={<CoursePlay></CoursePlay>}
            >
              <Route
                path="/course/:uname/:list/:fileName"
                element={<CourseVideo></CourseVideo>}
              ></Route>
            </Route>
          </Route>
          <Route
            path="/course/summary/:uname"
            element={<Summary></Summary>}
          ></Route>

          <Route
            path="/blogdetails/:detailsId"
            element={<BlogDetails></BlogDetails>}
          ></Route>
          {/* courses  */}
          <Route
            path="/course/:uname"
            element={<AllCourseView></AllCourseView>}
          ></Route>
          <Route path="/mycourse" element={<MyCourses></MyCourses>}></Route>
          <Route path="/mybooks" element={<MyBooks></MyBooks>}></Route>
          <Route path="/ebooks" element={<MyEbooks></MyEbooks>}></Route>
          <Route
            path="/audiobooks"
            element={<MyAudioBooks></MyAudioBooks>}
          ></Route>
          <Route
            path="/audiobooks"
            element={<MyAudioBooks></MyAudioBooks>}
          ></Route>
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
        </Route>
        <Route element={<RequireAuth />}>
          <Route element={<RequireAdmin></RequireAdmin>}>
            <Route
              path="/admin"
              element={
                <Admin handleThemeChange={handleThemeChange} theme={theme} />
              }
            >
              <Route path="/admin" element={<Admins></Admins>}></Route>
              <Route path="/admin/courses/manage" element={<Manage></Manage>}>
                <Route
                  path="/admin/courses/manage"
                  element={<AllCourse />}
                ></Route>
                <Route
                  path="/admin/courses/manage/special"
                  element={<Special></Special>}
                ></Route>
                <Route
                  path="/admin/courses/manage/language"
                  element={<Language></Language>}
                ></Route>
                <Route
                  path="/admin/courses/manage/job"
                  element={<Job></Job>}
                ></Route>
                <Route
                  path="/admin/courses/manage/admission"
                  element={<Admission></Admission>}
                ></Route>
              </Route>
              <Route element={<ManageBooks />}>
                <Route
                  path="/admin/books/academicbooks"
                  element={<SkillBookss></SkillBookss>}
                ></Route>
                <Route
                  path="/admin/books/skillbooks"
                  element={<AcademicBookss></AcademicBookss>}
                ></Route>
              </Route>
              <Route
                path="/admin/reviews"
                element={<ManageReview></ManageReview>}
              >
                <Route
                  path="/admin/reviews"
                  element={<AllReviews></AllReviews>}
                ></Route>
                <Route
                  path="/admin/reviews/course"
                  element={<CourseReview></CourseReview>}
                ></Route>
                <Route
                  path="/admin/reviews/book"
                  element={<BookReview></BookReview>}
                ></Route>
              </Route>
              <Route
                path="/admin/livePost/live"
                element={<Live></Live>}
              ></Route>
              <Route path="/admin/addcourse" element={<AddCourse />}></Route>
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
              <Route
                path="/admin/blogs"
                element={<AddBlogs></AddBlogs>}
              ></Route>
              <Route path="/admin/users" element={<Users></Users>}></Route>
              <Route
                path="/admin/payments"
                element={<Payments></Payments>}
              ></Route>
              <Route
                path="/admin/message"
                element={<Message></Message>}
              ></Route>
              <Route
                path="/admin/users/:email"
                element={<UserDetails></UserDetails>}
              ></Route>
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<NoteFound></NoteFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
