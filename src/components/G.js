import { H } from "./H"

export function G (props){


    return(
       <>
       <h2>This is Function Component G - {props.nameF} {props.surnameF}
          {props.stateF}</h2>
          <H nameG={props.nameF} surnameG={props.surnameF} stateG={props.stateF}></H>
       </>
    )
}