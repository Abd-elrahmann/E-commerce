// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import cartReducer from './cartSlice';
import categoryReducer from './categorySlice';
import searchReducer from './searchSlice';
import signupReducer from './signUpSlice';
import loginReducer from './loginSlice';
import userProfileReducer from './userProfileSlice';
const store = configureStore({
  reducer: {
    products: productsReducer,
    shoppingCart: cartReducer,
    category: categoryReducer,
    search: searchReducer,
    signup: signupReducer,
    login: loginReducer,
    userProfile: userProfileReducer, 
  },
});

export default store;
