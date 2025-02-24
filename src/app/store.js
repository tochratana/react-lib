import { counterSlice } from "@/features/counter/counterSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    counterR: counterSlice,
  },
});
