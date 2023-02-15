import React from "react"
import M from "./M"


export class L extends React.Component{


    render(){
        return(
            <>
            <h2>This is Class Component L - {this.props.nameK} {this.props.surnameK} {this.props.stateK}</h2>
            <M nameL={this.props.nameK} surnameL={this.props.surnameK} stateL={this.props.stateK}></M>
            </>
        )
    }
}