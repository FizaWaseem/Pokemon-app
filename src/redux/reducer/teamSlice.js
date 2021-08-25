
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  SelectedItem: [] ,
  activeStatus: false,
};

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    add: (state, { payload }) => {
      const existingItem=state.SelectedItem.find(
        (item) => item.id === payload.id
      )
     existingItem=== undefined && state.SelectedItem.length < 6?
      state.SelectedItem=[...state.SelectedItem,payload] : state.SelectedItem=[...state.SelectedItem]
      console.log(existingItem,"es",payload,"======payload",state.SelectedItem,state.SelectedItem.length)
    },
    remove: (state, { payload }) => {
      state.SelectedItem = state.SelectedItem.filter(
        (item) => item.id !== payload.id
      );
    },
  
  },
});

export const {
  add,
  remove,
} = teamSlice.actions;

export default teamSlice.reducer;
