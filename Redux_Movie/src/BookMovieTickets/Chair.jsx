import React from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { exerciseMovieBookingActions } from "../Store/MovieBooking/slice";
import cn from "classnames";

export const Chair = ({ ghe }) => {
  const { chairsBooking, chairsBooked } = useSelector(
    (state) => state.MovieBooking
  );
  console.log("chairBooking: ", chairsBooking);
  const dispatch = useDispatch();
  return (
    <div
      className={cn("Chair", {
        booking: chairsBooking.find((e) => e.soGhe == ghe.soGhe),
        booked: chairsBooked.find((e) => e.soGhe == ghe.soGhe),
      })}
      style={{
        color: "yellow",
      }}
      onClick={() => {
        dispatch(exerciseMovieBookingActions.setChairBooking(ghe));
      }}
    >
      {ghe.soGhe}
    </div>
  );
};
