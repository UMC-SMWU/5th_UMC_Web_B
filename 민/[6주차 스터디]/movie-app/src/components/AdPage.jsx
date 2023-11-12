import React, { useState } from "react";
import Ad from "./Ad";

function AdPage() {
  const [showAd, setShowAd] = useState(true);

  return (
    <>
      <Ad showAd={showAd} />
      <button type="button" onClick={() => setShowAd((prev) => !prev)}>
        {showAd ? "Hide" : "Show"}
      </button>
    </>
  );
}

export default AdPage;
