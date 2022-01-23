import React from "react";
import "./styles.css";
import { ListenMouseover } from "./index";
const Container1 = () => {
  return <div className="container1"></div>;
};
const Container2 = () => {
  return <div className="container2"></div>;
};
const Container = () => {
  return (
    <>
      <ListenMouseover>
        <div className="body">
          <Container1 />
          <Container2 />
        </div>
      </ListenMouseover>
    </>
  );
};

export default Container;
