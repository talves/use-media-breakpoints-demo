import React from "react";
import useMediaBreakpoints from "./use-media-breakpoints";

export default () => {
  const value = useMediaBreakpoints(
    [
      "(min-width: 1440px)",
      "(min-width: 1024px)",
      "(min-width: 768px)",
      "(min-width: 480px)"
    ],
    ["desktop-xl-large", "desktop-large", "desktop", "tablet"],
    "mobile"
  );

  return (
    <div className="breakpoint">
      <h2>{value}</h2>
    </div>
  );
};
