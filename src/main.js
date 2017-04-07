import React from "react";
import ReactDOM from "react-dom";
import Board from "./components/Board/Board";

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
        React.createElement(Board), document.getElementById("mount")
    );
});