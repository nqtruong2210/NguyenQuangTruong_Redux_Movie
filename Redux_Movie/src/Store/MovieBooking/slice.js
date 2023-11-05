import { createSlice } from "@reduxjs/toolkit";

const initialState = { number: 100, chairsBooking: [], chairsBooked: [] };

export const MovieBookingSlice = createSlice({
  name: "MovieBooking",
  initialState,
  // reducer = actions
  reducers: {
    // demo: (state, action) => {},
    // inCreaseNumber: (state, action) => {
    //   console.log("action: ", action);
    //   state.number += action.payload;
    // },
    setChairBooking: (state, { payload }) => {
      //Ghế có tồn tại trong số ghế hay không
      const index = state.chairsBooking.findIndex(
        (value) => value.soGhe == payload.soGhe
      );
      if (index != -1) {
        // state.chairsBooking = state.chairsBooking.filter(
        //   (value) => value.soGhe != payload.soGhe
        // );
        state.chairsBooking.splice(index, 1);
      } else {
        state.chairsBooking.push(payload);
      }
    },
    setChairBooked: (state, { payload }) => {
      state.chairsBooked = [...state.chairsBooked, ...state.chairsBooking];
      state.chairsBooking = [];
    },
    deleteChair: (state, { payload }) => {
      // const index = state.chairsBooking.filter((value)=>
      // return value.)
    },
  },
});

export const {
  // reducer chính là initialState
  reducer: excerciseMovieBookingReducer,
  actions: exerciseMovieBookingActions,
} = MovieBookingSlice;
