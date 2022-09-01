import { configureStore } from "@reduxjs/toolkit"
import teachersReducer from "../Components/Admin/Teachers/TeacherSlice"
const store = configureStore({
    reducer: {
        teachersReducer: teachersReducer,
    },
});
export default store;
