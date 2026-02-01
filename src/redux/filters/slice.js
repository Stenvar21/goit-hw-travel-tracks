import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    form: "",
    equipment: [],
  },
  reducers: {
    changeLocation(state, action) {
      state.location = action.payload;
    },
    changeForm(state, action) {
      state.form = action.payload;
    },
    toggleEquipment(state, action) {
      const equipment = action.payload;
      const index = state.equipment.indexOf(equipment);
      if (index === -1) {
        state.equipment.push(equipment);
      } else {
        state.equipment.splice(index, 1);
      }
    },
  },
});

export const { changeLocation, changeForm, toggleEquipment } =
  filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

export const selectLocation = (state) => state.filters.location;
export const selectForm = (state) => state.filters.form;
export const selectEquipment = (state) => state.filters.equipment;
