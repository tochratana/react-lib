import { createSlice } from "@reduxjs/toolkit";

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
		}
	}
});

// Export actions
export const { increase } = counterSlice.actions;

// Export reducer
export default counterSlice.reducer;


