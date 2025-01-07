import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobExperiences: [],
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    addJob: (state, action) => {
      state.jobExperiences.push(action.payload);
    },
    updateJob: (state, action) => {
      const { index, job } = action.payload;
      state.jobExperiences[index] = job;
    },
  },
});

export const { addJob, updateJob } = jobSlice.actions;

export default jobSlice.reducer;
