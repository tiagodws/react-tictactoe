import React, { Component } from "react";
import Board from "./Board/Board";
import "./game.scss";

class Game extends Component {

    render() {
        return (
            <div>
                <div className="game">
                    <Board gridSize={3} players={2} />
                </div>
                <div className="history">
                    <p>History</p>
                    <ul></ul>
                </div>
            </div>
        );
    }

}

export default Game;