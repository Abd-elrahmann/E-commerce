import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchTerm: '',
  filteredProducts: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
    filterProductsByCategory: (state, action) => {
      const { products, category } = action.payload;
      if (state.searchTerm) {
        state.filteredProducts = products.filter(product =>
          product.category === category && product.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        );
      } else {
        state.filteredProducts = products.filter(product => product.category === category);
      }
    },
  },
});

export const { setSearchTerm, setFilteredProducts, filterProductsByCategory } = searchSlice.actions;

export default searchSlice.reducer;
