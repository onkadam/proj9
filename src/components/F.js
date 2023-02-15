import { Component } from "react";
import { G } from "./G";

export class F extends Component {
  render() {
    return (
      <>
        <h2>
          This is Class Component F - {this.props.nameE} {this.props.surnameE}
          {this.props.stateE}
        </h2>
        <G nameF={this.props.nameE} surnameF={this.props.surnameE} stateF={this.props.stateE}></G>
      </>
    );
  }
}
