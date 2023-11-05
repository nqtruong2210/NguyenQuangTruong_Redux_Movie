import { combineReducers } from "@reduxjs/toolkit";
import { BookMovieTicketsReducer } from "../BookMovieTickets/reducer";
import { excerciseMovieBookingReducer } from "./MovieBooking/slice";

export const rootReducer = combineReducers({
  BookMovieTickets: BookMovieTicketsReducer,
  MovieBooking: excerciseMovieBookingReducer,
});
