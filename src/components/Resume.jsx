import React, { useLayoutEffect } from "react";

export default function Resume() {
  function handleResume() {
    if (window.location.pathname === "/resume") {
      document.body.style.overflow = "hidden";
      window.open("https://drive.google.com/file/d/15CUK0FjRl1HLqExISN_VZZR_QZbFYJ3Y/view?usp=sharing", "_self", );
    }
  }

  useLayoutEffect(() => {
    handleResume();
  }, []);

  if (window.location.pathname === "/resume") {
    return (
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "black",
        zIndex: 9999
      }}></div>
    );
  }
}
