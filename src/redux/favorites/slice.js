import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: JSON.parse(localStorage.getItem("favorites")) || [],
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const camperId = action.payload;
      const index = state.items.indexOf(camperId);

      if (index === -1) {
        state.items.push(camperId);
      } else {
        state.items.splice(index, 1);
      }
      localStorage.setItem("favorites", JSON.stringify(state.items));
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;

export const selectFavorites = (state) => state.favorites.items;
