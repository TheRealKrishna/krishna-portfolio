import React, { useEffect } from "react";

export default function Resume() {

  function handleResume() {
    if (window.location.pathname === "/resume") {
      window.open("https://drive.google.com/file/d/15CUK0FjRl1HLqExISN_VZZR_QZbFYJ3Y/view?usp=sharing", "_self")
    }
  }

  useEffect(() => {
    handleResume();
  }, []);

  return <></>;
}
