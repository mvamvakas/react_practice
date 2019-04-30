import React from 'react';
import './App.css';

const App = (props) => {
    return(
        <div>
            <h1>Magic Decks</h1>
            {props.decks.map((deck) =>
                <p class="title" key={deck.id}>
                    Deck: {deck.name}

                    <p class="body">
                        Commander: {deck.commander}
                        <br />
                        Colors: {deck.colors.map((color) =>
                            color + " "
                        )}
                        <br />
                        <a href={deck.link}>Decklist</a>
                    </p>
                    <br />
                </p>

            )}
        </div>
    )
}

export default App;
