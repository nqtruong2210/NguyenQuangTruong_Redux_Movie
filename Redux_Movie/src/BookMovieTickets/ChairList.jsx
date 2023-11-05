import React from "react";
import { Chair } from "./Chair";

export const ChairList = ({ data }) => {
  return (
    <div>
      {data.map((hangGhe) => {
        if (hangGhe.hang === "") {
          return (
            <div className="disabled">
              <div className=" d-flex gap-3 mt-3">
                <p className="mgb">1</p>
                <p className="mgb">2</p>
                <p className="mgb">3</p>
                <p className="mgb">4</p>
                <p className="mgb">5</p>
                <p className="mgb">6</p>
                <p className="mgb">7</p>
                <p className="mgb">8</p>
                <p className="mgb">9</p>
                <p className="mgb">10</p>
                <p className="mgb">11</p>
                <p className="mgb">12</p>
              </div>
            </div>
          );
        }
        return (
          <div className="d-flex gap-3 mt-3" key={hangGhe.hang}>
            <div
              style={{
                width: 45,
                height: 45,
                display: "flex",
                alignItems: "center",
                fontWeight: "bold",
                color: "white",
              }}
            >
              {hangGhe.hang}
            </div>

            <div className="d-flex gap-3">
              {hangGhe.danhSachGhe.map((ghe) => {
                return <Chair ghe={ghe} key={ghe.soGhe} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
