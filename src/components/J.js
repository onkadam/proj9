import React from "react"
import K from "./K"

export class J extends React.Component{


    render(){
        return(
            <>
            <h2>This is Class Component J - {this.props.nameI} {this.props.surnameI} {this.props.stateI}</h2>
            <K nameJ={this.props.nameI} surnameJ={this.props.surnameI} stateJ={this.props.stateI}></K>
            </>
        )
    }
}