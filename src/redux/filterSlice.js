import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState={ value: '' };

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setContactsFilter(state, action) {
       state.value=action.payload;
    },
  },
});
// Експортуємо генератори екшенів та редюсер
export const { setContactsFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

