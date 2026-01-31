import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Resume() {
  const navigate = useNavigate();

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
