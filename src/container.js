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
    <div className="body">
      <ListenMouseover>
        <Container1 />
      </ListenMouseover>
      <ListenMouseover listen={false}>
        <Container2 />
      </ListenMouseover>
    </div>
  );
};

export default Container;
