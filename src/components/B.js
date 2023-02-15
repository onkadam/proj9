//import { Component } from "react"
import React from "react"
import C from "./C"

 export class B extends React.Component{
    //propertie
     name="Santosh"
     surname="Chaugule"

    //constructor


    //method

    render(){
        return <>
        <h2>This is Class Component B2 -{this.name} {this.surname} {this.props.stateA}</h2>
        <h2>This is Class Component B-{this.props.nameA} {this.props.surnameA} {this.props.stateA}</h2>
        <C nameB={this.props.nameA} surnameB={this.props.surnameA} stateB={this.props.stateA}></C>
        </>
    }
}