import React from "react";
import ReactDOM from "react-dom/client";
import  { B } from "./components/B"

//1.import { someNamedImport } from somelocation

//2.import someDfaultImport from someLocation

let A = (props) => {
  
  return (
    <>
      <h2>This is function component A-{props.name} {props.surname} {props.children}</h2>
      <B nameA={props.name} surnameA={props.surname}stateA={props.children}></B>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<A name="Onkar" surname="Kadam"> Maharashtra</A>);
