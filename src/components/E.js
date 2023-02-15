import React from "react";
import { F } from "./F";

function E (props){



    return(<>
        <h2>This is Function Component E - {props.nameD} {props.surnameD} {props.stateD}</h2>
        <F nameE={props.nameD} surnameE={props.surnameD} stateE={props.stateD}></F>
        </>
    )
}
export default E;