import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  skills: [
    {
      name: "HTTP",
      icon: "https://cdn.iconscout.com/icon/premium/png-512-thumb/http-5372110-4489074.png?f=webp&w=256",
    },
    {
      name: "HTML",
      icon: "https://cdn.iconscout.com/icon/free/png-512/html5-10-569380.png",
    },
    // Add more initial skills here...
  ],
};

const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    addSkill: (state, action) => {
      state.skills.push(action.payload);
    },
    updateSkill: (state, action) => {
      const { index, skill } = action.payload;
      state.skills[index] = skill;
    },
  },
});

export const { addSkill, updateSkill } = skillsSlice.actions;

export default skillsSlice.reducer;
