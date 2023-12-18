import React from "react";
import { tv } from "../tvDummy.js";
import Tv from "../Components/Tv.jsx";
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
