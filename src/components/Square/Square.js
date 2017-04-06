import React from "react";
import "./square.scss";

class Square extends React.Component {
    constructor() {
        super();
        this.state = {
            value: undefined,
        };
    }

    render() {
        return (
            <button className="square" onClick={() => this.setState({value: "X"})}>{this.state.value}</button>
        );
    }
}

export default Square;
