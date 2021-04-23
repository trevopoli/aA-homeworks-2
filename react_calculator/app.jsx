import React from 'react';
import ReactDOM from 'react-dom';

const Congrats = () => <h1>I did it!</h1>;

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<Congrats />, root);
});