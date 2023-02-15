import { L } from "./L";

function K (props){

    return(
        <>
        <h2>This is Function Component K - {props.nameJ} {props.surnameJ}
          {props.stateJ}</h2>
          <L nameK={props.nameJ} surnameK={props.surnameJ} stateK={props.stateJ}></L>
        </>
    )
}
export default K;