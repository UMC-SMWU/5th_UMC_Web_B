import React from "react";
import umcAD from "../images/adImg.svg";

function Ad({ showAd }) {
  return showAd && <img src={umcAD} alt="ad" style={{ width: "100%" }} />;
}

export default Ad;
