import { createSlice } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
import bcrypt from 'bcryptjs'; 

const signupSlice = createSlice({
  name: 'signup',
  initialState: {
    users: [],
  },
  reducers: {
    signup(state, action) {
      const { username, password, firstName, lastName, email } = action.payload;
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const existingUser = users.find(user => user.username === username);

      if (existingUser) {
        Swal.fire({
          icon: 'error',
          title: 'Sign Up Failed',
          text: 'Username already exists. Please choose a different username.',
          confirmButtonText: 'OK'
        });
      } else {
        // Hash the password before saving
        const hashedPassword = bcrypt.hashSync(password, 10); // Hashing the password
        users.push({ username, password: hashedPassword, firstName, lastName, email });
        localStorage.setItem('users', JSON.stringify(users));
        state.users = users;

        Swal.fire({
          icon: 'success',
          title: 'Sign Up Successful',
          text: 'You have successfully signed up!',
          confirmButtonText: 'OK'
        });
      }
    },
  },
});

export const { signup } = signupSlice.actions;
export default signupSlice.reducer;
