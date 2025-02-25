import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/features/counter/counterSlice"; // Import the reducer, not the slice

export default configureStore({
  reducer: {
    counterR: counterReducer, // Correct usage
  },
});

