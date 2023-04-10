import React from "react";
import ReactDOM from "react-dom";


// function component
/* function App() { 
    return <h1>Intro React.</h1>;
} */


// class component
class App2 extends React.Component{
    render(){
        return <h1>Intro React..</h1>
    }
}

ReactDOM.render(
    <App2 />,
    //  document.getElementById('root')
    document.querySelector('#root')
);