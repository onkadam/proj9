import React from "react";
import { D } from "./D";

function C(props) {

  return (
    <>
    <h2>
      This is Function Component C-{props.nameB} {props.surnameB} {props.stateB}
    </h2>
    <D nameC={props.nameB} surnameC={props.surnameB} stateC={props.stateB}></D>
    </>
  );
}
export default C;
