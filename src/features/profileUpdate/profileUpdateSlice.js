import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "shubham",
  email: "",
  password: "",
  socialLinks: {
    facebook: "",
    twitter: "",
    linkedin: "",
    instagram: "",
  },
};

const profileUpdateSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      const { name, email, password, socialLinks } = action.payload;
      state.name = name;
      state.email = email;
      state.password = password;
      state.socialLinks = socialLinks;
    },
  },
});

export const { updateProfile } = profileUpdateSlice.actions;

export default profileUpdateSlice.reducer;
