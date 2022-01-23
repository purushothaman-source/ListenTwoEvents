import { useEffect, useState } from "react";
import Container from "./container";
import React from "react";
import ReactDOM from "react-dom";

const ListenKeyDown = ({ children }) => {
  const handleKeyDown = e => {
    console.log(e.key);
    alert(e.key);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  return <>{children}</>;
};
export const ListenMouseover = ({ children, ...props }) => {
  const [mouseOvered, setMouseOvered] = useState(false);
  return (
    <div
      onMouseOver={() => {
        setMouseOvered(true);
      }}
      onMouseLeave={() => {
        setMouseOvered(false);
      }}
    >
      {mouseOvered ? <ListenKeyDown>{children}</ListenKeyDown> : children}
    </div>
  );
};

ReactDOM.render(<Container />, document.getElementById("root"));
