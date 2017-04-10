import React, { Component } from "react";
import "./board.scss";
import Square from "./Square/Square";

class Board extends Component {
    constructor(props) {
        super(props);
        const { gridSize } = props;
        this.state = {
            squares: Array(gridSize * gridSize),
            nextPlayer: 1,
            winner: undefined,
        };
    }

    render() {
        const { gridSize } = this.props;
        const { squares, nextPlayer, winner } = this.state;
        const rows = [];
        let status = "Next: Player " + nextPlayer;

        if (winner) status = "Player " + winner.player + " wins!";
        else if (!squares.includes(undefined)) status = "Draw!";

        for (let i = 0; i < gridSize; i++) {
            rows.push(this.renderRow(i));
        }

        return (
            <div>
                <p className="status">{status}</p>
                <ul className="board">{rows}</ul>
            </div>
        );
    }

    renderRow(rowIndex) {
        const { gridSize } = this.props;
        const squares = [];

        for (let i = 0; i < gridSize; i++) {
            squares.push(this.renderSquare(rowIndex * gridSize + i));
        }

        return <li key={rowIndex}><ul className="board-row">{squares}</ul></li>;
    }

    renderSquare(i) {
        return <Square key={i} winner={false} value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
    }

    handleClick(i) {
        const { nextPlayer, squares, winner } = this.state;
        const { players } = this.props;

        if (winner || squares[i]) return;

        const newSquares = [...squares];
        newSquares[i] = nextPlayer;
        const winnerStreak = this.getWinner(newSquares);

        this.setState({
            squares: newSquares,
            nextPlayer: nextPlayer >= players ? 1 : nextPlayer + 1,
            winner: winnerStreak ? { player: nextPlayer, winnerStreak: winnerStreak } : undefined,
        });
    }

    getWinner(squares) {
        const { gridSize } = this.props;
        const possibilities = [];

        let diagValues = [];
        // Get all possible row combinations
        for (let row = 0; row < gridSize; row++) {
            const rowValues = [];
            for (let col = 0; col < gridSize; col++) {
                if (row == col) diagValues.push(gridSize * row + col);
                rowValues.push(gridSize * row + col);
            }
            possibilities.push(rowValues);
        }

        possibilities.push(diagValues);
        diagValues = [];

        // Get all possible column combinations
        for (let col = 0; col < gridSize; col++) {
            const colValues = [];
            for (let row = 0; row < gridSize; row++) {
                if ((gridSize * row + col) % (gridSize - 1) === 0
                    && (row !== 0 || col !== 0)
                    && (row !== gridSize - 1 || col !== gridSize - 1)) {
                    diagValues.push(gridSize * row + col);
                }
                colValues.push(gridSize * row + col);
            }
            possibilities.push(colValues);
        }

        possibilities.push(diagValues);
        return possibilities.find(positions => positions.filter(position => squares[position] && squares[position] == squares[positions[0]]).length == positions.length);
    }

}

Board.propTypes = {
    gridSize: React.PropTypes.number,
    players: React.PropTypes.number,
};

export default Board;
