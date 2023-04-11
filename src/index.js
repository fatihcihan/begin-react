import React from "react";
import ReactDOM from "react-dom";
import Card from './components/Card';
import Collapse from "./components/Collapse";

const App = () => {
    return (
        <div>
            <div className="card-group">

                <Collapse href="collapseExample1">
                    <Card cardTitle="Card 1"
                        cardText="Lorem ipsum dolor 1"
                        updatedTime="Last updated 1 min ago"
                        image="https://picsum.photos/id/1/200/300"
                    />
                </Collapse>

                <Collapse href="collapseExample2">
                    <Card cardTitle="Card 2"
                        cardText="Lorem ipsum dolor 2"
                        updatedTime="Last updated 2 min ago"
                        image="https://picsum.photos/id/10/200/300"
                    />
                </Collapse>

                <Collapse href="collapseExample3">
                    <Card cardTitle="Card 3"
                        cardText="Lorem ipsum dolor 3"
                        updatedTime="Last updated 3 min ago"
                        image="https://picsum.photos/id/100/200/300"
                    />
                </Collapse>

            </div>
        </div>
    )
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
);
