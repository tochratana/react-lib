import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeMenus: {}, // Stores which menus are expanded
};

export const counterSlice = createSlice({
  // Name for the reducer
  name: "counter",
  initialState: {
    countValue: 0, // Fixed the typo
  },

  reducers: {
    // State is equal to initialState
    increase: (state) => {
      state.countValue += 1; // Fixed the typo
    },
  },
  reducers: {
    toggleMenu: (state, action) => {
      const id = action.payload;
      state.activeMenus[id] = !state.activeMenus[id]; // Toggle specific menu
    },
  },
});

// Export actions
export const { increase } = counterSlice.actions;

// Export reducer
export const { toggleMenu } = counterSlice.actions;
export default counterSlice.reducer;
