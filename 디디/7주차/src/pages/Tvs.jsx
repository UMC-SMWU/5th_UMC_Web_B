import React from "react";
import { tv } from "../../../5th_UMC_Web_B/디디/7주차/src/tvDummy.js";
import Tv from "../../../5th_UMC_Web_B/디디/7주차/src/Components/Tv.jsx";
import "../MovieApp.css";

export default function Tvs() {
  return (
    <div className="app">
      {tv.results.map((tv) => {
        return (
          <div>
            <Tv tv={tv} key={tv.id} />
          </div>
        );
      })}
    </div>
  );
}
