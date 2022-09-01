import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
  teachers: [
    {
      id: 1,
      name: "Oliver Aguilerra",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260",
      email: "oliveraguilerra23@gmail.com",
      job: "Product Manager",
    },
    {
      id: 2,
      name: "Marta Clermont",
      image:
        "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
      email: "martiamont78@gmail.com",
      job: "Graphic Designer",
    },
    {
      id: 3,
      name: "Anthony Geek",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
      email: "anthonygeek33@gmail.com",
      job: "English Teacher",
    },
    {
      id: 4,
      name: "Alice Melbourne",
      image:
        "https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
      email: "alicemelbourne@gmail.com",
      job: "Freelancer Expert",
    },
    {
      id: 5,
      name: "Amit Sharma",
      image:
        "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500",
      email: "amitsharma87@gmail.com",
      job: "Senior Web Instractor",
    },
    {
      id: 6,
      name: "Andrew Larkin",
      image:
        "https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
      email: "andrewlarkin582@gmail.com",
      job: "University Admission Trainer",
    },
    {
      id: 7,
      name: "Sophie Dene",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260",
      email: "sophiedone76@gmail.com",
      job: "Designer UI/UX Instructor",
    },
    {
      id: 8,
      name: "Benedict Caro",
      image:
        "https://images.pexels.com/photos/3931553/pexels-photo-3931553.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
      email: "benedictcaro143@gmail.com",
      job: "Web Development Instructor",
    },
  ],
};

export const teacherSlice = createSlice({
  name: "teacher",
  initialState: initialBooks,
  reducers: {
    TeacherView: (state) => state,
    addTeacher: (state, action) => {
      state.teachers.push(action.payload);
    },
    editTeacher: (state, action) => {
      const { id, name, email, job } = action.payload;
      const isTeacherExist = state.teachers.filter(
        (teacher) => teacher.id === id
      );
      if (isTeacherExist) {
        isTeacherExist[0].name = name;
        isTeacherExist[0].email = email;
        isTeacherExist[0].job = job;
      }
    },
    deleteTeacher: (state, action) => {
      const id = action.payload;
      state.teachers = state.teachers.filter((teacher) => teacher.id !== id);
    },
  },
});
export const { TeacherView, addTeacher, deleteTeacher, editTeacher } =
  teacherSlice.actions;
export default teacherSlice.reducer;
