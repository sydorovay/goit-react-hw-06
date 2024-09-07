import { createSlice } from "@reduxjs/toolkit";

// Початковий стан для фільтрів
const initialState = {
  name: "",
};

// Створення слайсу для фільтрів
const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    // Екшен для зміни фільтра
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

// Експортуємо екшени для використання в dispatch
export const { changeFilter } = filtersSlice.actions;

// Селектор для доступу до фільтра за іменем
export const selectNameFilter = (state) => state.filters.name;

// Правильний експорт редюсера
export const filtersReducer = filtersSlice.reducer;

export default filtersReducer;