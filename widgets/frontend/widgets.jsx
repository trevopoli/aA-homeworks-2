import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';
import Autocomplete from './autocomplete';

const panes = [
    { title: 'one', content: 'I am first' },
    { title: 'two', content: 'I am second' },
    { title: 'three', content: 'I am third' }
];

const names = [
    "Adison",
    "Alex",
    "Brent",
    "Chewy",
    "Nicholas",
    "Paul",
    "Roxanne",
    "Taylor"
];

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("main");

    const Root = () => (
        <div className="widgets">
            <h1>Clock</h1>
            <Clock />
            <h1>Panes</h1>
            <Tabs panes={panes} />
            <h1>Weather</h1>
            <Weather />
            <h1>Autocomplete</h1>
            <Autocomplete names={names} />
        </div>
    );
    
    ReactDOM.render(<Root />, main);
});