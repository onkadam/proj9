import { J } from "./J";

function I (props){


    return(
        <>
        <h2>This is Function Component I - {props.nameH} {props.surnameH}
          {props.stateH}</h2>
          <J nameI={props.nameH} surnameI={props.surnameH} stateI={props.stateH}></J>
        </>
    )
}
export default I;