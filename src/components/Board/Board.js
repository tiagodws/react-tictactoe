import React, { Component } from "react";
import "./board.scss";
import Square from "./Square/Square";

class Board extends Component {
	constructor() {
		super();
		this.GRID_SIZE = 3;
		this.state = {
			squares: Array(this.GRID_SIZE * this.GRID_SIZE)
		};
	}

	render() {

	}

	renderSquare(i) {
		return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />
	}

	handleClick(i) {
		const squares = this.state.squares.slice();
		squares[i] = "X";
		this.setState({ squares: squares });
	}

}

export default Board;
