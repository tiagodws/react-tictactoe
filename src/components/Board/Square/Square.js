import React, {Component} from "react";
import "./square.scss";

class Square extends Component {

    render() {
        const {onClick} = this.props;
        return (
            <button className="square" onClick={onClick}>
                {this.props.value}
            </button>
        );
    }

}

export default Square;
