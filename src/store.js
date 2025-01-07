import { configureStore } from "@reduxjs/toolkit";
import profileUpdateReducer from "./features/profileUpdate/profileUpdateSlice.js";
import skillsReducer from "./features/skills/skillsSlice.js";
import projectReducer from "./features/projects/projectSlice.js";
import jobReducer from "./features/job/jobSlice.js";
import userReducer from "./features/user/userSlice.js";
import authReducer from "./features/auth/authSlice.js";

const store = configureStore({
  reducer: {
    profile: profileUpdateReducer,
    skills: skillsReducer,
    projects: projectReducer,
    jobs: jobReducer,
    user: userReducer,
    auth: authReducer,
  },
});

export default store;
