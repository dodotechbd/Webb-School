import { configureStore } from "@reduxjs/toolkit"
import teachersReducer from "../Features/Teachers/TeacherSlice"
const store = configureStore({
    reducer: {
        teachersReducer: teachersReducer,
    },
});
export default store;
