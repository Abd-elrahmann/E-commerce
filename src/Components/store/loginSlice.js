import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
import bcrypt from 'bcryptjs'; // Import bcryptjs

const loadUserFromLocalStorage = () => {
  const user = localStorage.getItem('user');
  if (user && user !== 'undefined') { 
    try {
      return JSON.parse(user);  // Try to parse the stored user data
    } catch (e) {
      console.error("Error parsing user data from localStorage:", e);
      return null;
    }
  }
  return null; 
};

const saveUserToLocalStorage = (user) => {
  if (user) {
    localStorage.setItem('user', JSON.stringify(user));
  } else {
    localStorage.removeItem('user');
  }
};

// Thunks
export const login = createAsyncThunk('login', async ({ username, password }, { rejectWithValue }) => {
  try {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username);

    if (user) {
      // Compare the provided password with the hashed password
      const isPasswordValid = bcrypt.compareSync(password, user.password);

      if (isPasswordValid) {
        saveUserToLocalStorage(user);
        return user;
      } else {
        throw new Error('Incorrect password.');
      }
    } else {
      throw new Error('User does not exist. Please sign up first.');
    }
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk('logout', async () => {
  return;
});

// Slice
const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isAuthenticated: !!loadUserFromLocalStorage(),
    user: loadUserFromLocalStorage(),
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: `Welcome, ${action.payload.username}!`,
          confirmButtonText: 'OK',
        });
      })
      .addCase(login.rejected, (state, action) => {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: action.payload,
          confirmButtonText: 'OK',
        });
      })
      .addCase(logout.fulfilled, (state) => {
        state.isAuthenticated = false; 
        Swal.fire({
          icon: 'success',
          title: 'Logout Successful',
          text: 'You have successfully logged out!',
          confirmButtonText: 'OK',
        });
      })
      .addCase(logout.rejected, (state, action) => {
        Swal.fire({
          icon: 'error',
          title: 'Logout Failed',
          text: action.payload,
          confirmButtonText: 'OK',
        });
      });
  },
});

export default loginSlice.reducer;
