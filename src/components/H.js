import React from "react"
import I from "./I"

export class H extends React.Component{


    render(){
        return(
            <>
            <h2>This is Class Component H - {this.props.nameG} {this.props.surnameG} {this.props.stateG}</h2>
            <I nameH={this.props.nameG} surnameH={this.props.surnameG} stateH={this.props.stateG}></I>
            </>
        )
    }
}