import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Resume() {
  const navigate = useNavigate();

  function handleResume() {
    if (window.location.pathname === "/resume") {
      window.open("https://drive.google.com/file/d/1JJG1Qtet02jifRM2rtrqczS_jVIFhlcz/view?usp=sharing", "_self")
    }
  }

  useEffect(() => {
    handleResume();
  }, []);

  return <></>;
}
