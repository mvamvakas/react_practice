import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header';
import * as serviceWorker from './serviceWorker';

const deckLists = [
    {id: 1, name: "Eldrazi", colors: ["Blue", "Green"], commander: "Rashmi, Eternities Crafter", link: "https://www.mtggoldfish.com/deck/1467581#paper"},
    {id: 2, name: "Zombies", colors: ["Blue", "Black"], commander: "The Scarab God", link: "https://www.mtggoldfish.com/deck/1242196#paper"},
    {id: 3, name: "Ninjas", colors: ["Blue", "Black"], commander: "Yuriko, the Tiger's Shadow", link: "https://www.mtggoldfish.com/deck/1340152#paper"},
    {id: 3, name: "Warriors", colors: ["Blue", "Black", "Green", "White", "Red"], commander: "Najeela, the Blade-Blossom", link: "https://www.mtggoldfish.com/deck/1441222#paper"},
    {id: 3, name: "Odd Mana", colors: ["Blue", "Black", "White"], commander: "Yennett, Cryptic Sovereign", link: "https://www.mtggoldfish.com/deck/1768867#paper"}
];

ReactDOM.render(
    <Header />,
    document.getElementById("header")
);

ReactDOM.render(
    <App decks={deckLists} />,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
