import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamperById } from "./operations";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    total: 0,
    loading: false,
    error: null,
    selectedCamper: null,
  },
  reducers: {
    resetCampers: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;

        const newItems = action.payload.items;
        state.total = action.payload.total;
        const page = action.meta.arg?.page || 1;
        if (page === 1) {
          state.items = newItems;
        } else {
          state.items = [...state.items, ...newItems];
        }
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchCamperById.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.selectedCamper = null;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCamper = action.payload;
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetCampers } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
