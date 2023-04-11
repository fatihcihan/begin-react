import React from "react";
import ReactDOM from "react-dom";
import Card from './components/Card';


const App = () => {
    return (
        <div>
            <div className="card-group">
                <Card cardTitle="Card 1" />
                <Card cardTitle="Card 2" />
                <Card cardTitle="Card 3" />
            </div>
        </div>
    )
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
);