import React from "react";
import ReactDOM from "react-dom";
import Square from "./components/Square/Square";

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
        React.createElement(Square), document.getElementById("mount")
    );
});