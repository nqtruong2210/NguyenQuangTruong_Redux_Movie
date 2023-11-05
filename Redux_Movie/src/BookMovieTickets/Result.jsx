import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { exerciseMovieBookingActions } from "../Store/MovieBooking/slice";

export const Result = () => {
  const { number, chairsBooking } = useSelector((state) => state.MovieBooking);
  console.log("chairsBooking: ", chairsBooking);
  // console.log("number: ", number);

  const dispatch = useDispatch();
  return (
    <div>
      <h2 className="text-center text-danger">Danh sách đặt ghế</h2>
      <div>
        <div className="d-flex gap-3 mt-3">
          <div className="Chair gray"></div>
          <span className="fw-bold text-dark">Ghế đã đặt</span>
        </div>
        <div className="d-flex gap-3 mt-3">
          <div className="Chair red"></div>
          <span className="fw-bold text-dark">Ghế đang đặt</span>
        </div>
        <div className="d-flex gap-3 mt-3">
          <div className="Chair"></div>
          <span className="fw-bold text-dark">Ghế chưa đặt</span>
        </div>
      </div>
      <table className="table mt-3">
        <thead>
          <tr>
            <th className="bg-dark text-white">Số ghế</th>
            <th className="bg-dark text-white">Giá</th>
            <th className="bg-dark text-white">Huỷ</th>
          </tr>
        </thead>
        <tbody>
          {/* map danh sách ghế đang chọn */}
          {chairsBooking.map((ghe) => {
            return (
              <tr>
                <td>{ghe.soGhe}</td>
                <td>{ghe.gia}</td>
                <td
                  className="text-danger"
                  onClick={() => {}}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  Xoá vé
                </td>
              </tr>
            );
          })}
          <tr>
            <td>Tổng tiền:</td>
            <td>
              {chairsBooking.reduce((total, value) => {
                return (total += value.gia);
              }, 0)}
            </td>
          </tr>
        </tbody>
      </table>
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch(exerciseMovieBookingActions.setChairBooked());
        }}
      >
        Thanh toán
      </button>
      {/* <button
        className="btn btn-success"
        onClick={() => {
          dispatch(exerciseMovieBookingActions.inCreaseNumber(2));
        }}
      >
        +
      </button> */}
    </div>
  );
};
