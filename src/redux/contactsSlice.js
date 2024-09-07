import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const contactsSlice = createSlice({
  name: 'contacts', // Виправлено помилку в імені слайсу
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
  },
});

// Експортуємо екшени для використання в dispatch
export const { addContact, deleteContact } = contactsSlice.actions;

// Селектор для доступу до списку контактів
export const selectContacts = state => state.contacts.items;

// Правильний експорт редюсера
export const contactsReducer = contactsSlice.reducer;

export default contactsReducer;