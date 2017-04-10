import React, { Component } from "react";
import "./square.scss";

class Square extends Component {

    render() {
        const { onClick, value, winner } = this.props;
        return (
            <button className={"square" + (value ? " player" + value : "") + (winner ? " winner" : "")} onClick={onClick} />
        );
    }

}

Square.propTypes = {
    onClick: React.PropTypes.func,
    value: React.PropTypes.number,
    winner: React.PropTypes.bool,
};

export default Square;
