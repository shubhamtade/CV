import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
    updateProject: (state, action) => {
      const { index, project } = action.payload;
      state.projects[index] = project;
    },
  },
});

export const { addProject, updateProject } = projectSlice.actions;

export default projectSlice.reducer;
