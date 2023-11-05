import React from "react";
import { ChairList } from "./ChairList";
import { Result } from "./Result";
import data from "./dataChairList.json";

export const BookMovieTickets = () => {
  const divBackGround = {
    backgroundImage: `url("../public/image/13.jpg")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  // console.log({ data });
  return (
    <div style={divBackGround}>
      <div className="container">
        <h1 className="text-center fw-bold fst-italic text-danger">
          Book Movie Tickets{" "}
        </h1>
        <div className="row">
          <div className="col-8">
            <div
              className="p-3 text-white text-center bg-dark fw-bold mb-5 screen"
              style={{
                maxWidth: 730,
              }}
            >
              SCREEN
            </div>
            <ChairList data={data} />
          </div>
          <div className="col-4">
            <Result />
          </div>
        </div>
      </div>
    </div>
  );
};
