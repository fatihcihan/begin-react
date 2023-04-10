import React from "react";
import ReactDOM from "react-dom";


// JSX

// <button type="button" style="padding: 10px; color: white; background-color: red; border:2px solid yellow;">Html Button</button>

function App() {
    // const buttonValue = "Click me";
    const str1 = "Click Click ";
    const str2 = "Bang Bang";
    return (
        <div>
            <button className="jsxClass" type="button" style={{ padding: '10px', color: 'white', backgroundColor: 'blue', border: '2 px solid yellow' }}>{str1.concat(str2)}</button>

        </div>
    );
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
);