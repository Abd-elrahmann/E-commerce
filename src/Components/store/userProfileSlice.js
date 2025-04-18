// store/userProfileSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Load user profile from local storage
const loadUserProfileFromLocalStorage = () => {
  const profile = localStorage.getItem('userProfile');
  if (profile) {
    try {
      return JSON.parse(profile);
    } catch (e) {
      console.error("Error parsing user profile data from localStorage:", e);
      return null;
    }
  }
  return {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
  };
};

// Save user profile to local storage
const saveUserProfileToLocalStorage = (profile) => {
  if (profile) {
    localStorage.setItem('userProfile', JSON.stringify(profile));
  } else {
    localStorage.removeItem('userProfile');
  }
};

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState: loadUserProfileFromLocalStorage(),
  reducers: {
    setUserProfile: (state, action) => {
      const { username, firstName, lastName, email } = action.payload;
      state.username = username;
      state.firstName = firstName;
      state.lastName = lastName;
      state.email = email;
      saveUserProfileToLocalStorage(state); // Sync with local storage
    },
    updateUserProfile: (state, action) => {
      const { username, firstName, lastName, email } = action.payload;
      state.username = username;
      state.firstName = firstName;
      state.lastName = lastName;
      state.email = email;
      saveUserProfileToLocalStorage(state); // Sync with local storage
    },
  },
});

export const { setUserProfile, updateUserProfile } = userProfileSlice.actions;
export default userProfileSlice.reducer;
