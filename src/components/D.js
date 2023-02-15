import React from "react"
import E from "./E"

export class D extends React.Component{


    render(){
        return(
            <>
            <h2>This is Class component D-{this.props.nameC} {this.props.surnameC} {this.props.stateC}</h2>
            <E nameD={this.props.nameC} surnameD={this.props.surnameC} stateD={this.props.stateC}></E>
            </>
        )
    }
}
