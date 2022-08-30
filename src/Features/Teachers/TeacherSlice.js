import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
    teachers: [
        { id: 1, name: "BADSHA", email: "badsha@gmail.com", job: "Developer" },
        { id: 2, name: "BADSHA", email: "badsha@gmail.com", job: "Developer" },
        { id: 3, name: "BADSHA", email: "badsha@gmail.com", job: "Developer" },
        { id: 4, name: "BADSHA", email: "badsha@gmail.com", job: "Developer" },
        { id: 5, name: "BADSHA", email: "badsha@gmail.com", job: "Developer" },
    ],
};
export const teacherSlice = createSlice({
    name: "teacher",
    initialState: initialBooks,
    reducers: {
        TeacherView: (state) => state,
        addTeacher: (state, action) => {
            state.teachers.push(action.payload)
        },
        editTeacher: (state, action) => {
            const { id, name, email, job } = action.payload;
            const isTeacherExist = state.teachers.filter((teacher) => teacher.id === id)
            if (isTeacherExist) {
                isTeacherExist[0].name = name;
                isTeacherExist[0].email = email;
                isTeacherExist[0].job = job;
            }
        },
        deleteTeacher: (state, action) => {
            const id = action.payload;
            state.teachers = state.teachers.filter(teacher => teacher.id !== id)
        },
    },
})
export const { TeacherView, addTeacher, deleteTeacher, editTeacher } = teacherSlice.actions;
export default teacherSlice.reducer;