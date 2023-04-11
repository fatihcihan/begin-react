import React from "react";
import ReactDOM from "react-dom";
import Card from './components/Card';
import Collapse from "./components/Collapse";

const App = () => {
    return (
        <div className="container mt-2">
            <div className="row">
                <div className="card-group w-100">
                    <div className="col">
                        <Collapse href="collapseExample1">
                            <Card
                                // cardTitle="Card 1"
                                cardText="Lorem ipsum dolor 1"
                                updatedTime="Last updated 1 min ago"
                                image="https://picsum.photos/id/1/200/300"
                            />
                        </Collapse>
                    </div>
                    <div className="col">
                        <Collapse href="collapseExample2">
                            <Card cardTitle="Card 2"
                                cardText="Lorem ipsum dolor 2"
                                updatedTime="Last updated 2 min ago"
                                image="https://picsum.photos/id/2/200/300"
                            />
                        </Collapse>
                    </div>
                    <div className="col">
                        <Collapse href="collapseExample3">
                            <Card cardTitle="Card 3"
                                cardText="Lorem ipsum dolor 3"
                                updatedTime="Last updated 3 min ago"
                                image="https://picsum.photos/id/3/200/300"
                            />
                        </Collapse>
                    </div>
                </div>
            </div>
        </div>
    )
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
);
