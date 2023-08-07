import React from "react";
import Loader from "react-spinners/RotateLoader";

function Loading() {
  return (
    <div class="contentWrap">
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Loader color="#C63DEE" height={15} width={5} radius={2} margin={2} />
      </div>
    </div>
  );
}

export default Loading;
