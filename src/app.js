// src/app.js

import React from 'react'; // <== import React


const App = () => {
    return <div className="app">
        <div className="top-box">
            <div className="logo">
                <img src="./images/ironhack-logo.svg" alt="ironhack-logo" className="img-nav" />
                <img src="./images/menu-top.svg" alt="menu" className="img-menu" />
            </div>
            <div className="main">
                <h1>Say hello to ReactJS</h1>
                <h3>You will learn how to use the most popular frontend library, and become the super ninja developer.</h3>
                <button>Awesome!</button>
            </div>
        </div>
        <div className="secondary">
            <div>
                <img src="./images/icon1.png" className="boxes"/>
                <h3>Declarative</h3>
                <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div>
                <img src="./images/icon2.png" className="boxes"/>
                <h3>Components</h3>
                <p>Build encapsulated components that manage their state.</p>
            </div>
            <div>
                <img src="./images/icon3.png" className="boxes"/>
                <h3>Single-way</h3>
                <p>A set of immutable values are passed to the component's.</p>
            </div>
            <div>
                <img src="./images/icon4.png" className="boxes"/>
                <h3>JSX</h3>
                <p>Statically-typed designed to run on modern browsers.</p>
            </div>

        </div>
    </div>;
};

export default App;
