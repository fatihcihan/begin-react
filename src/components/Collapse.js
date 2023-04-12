import React from "react";

class Collapse extends React.Component {

    state = { showContent: false }

    showMore = () => {
        this.setState({ showContent: !this.state.showContent });
    }

    /*  componentDidMount() {
         console.log("Component created");
     }
 
     componentDidUpdate() {
         console.log("Component update");
     } */

    render() {
        return (
            <div>
                <button onClick={this.showMore} className="btn btn-primary w-100" >
                    {/* {this.props.children.props.cardTitle} */}
                    {React.Children.map(this.props.children, children => children.props.cardTitle)}
                </button>
                {
                    this.state.showContent ? (
                        <div className="collapse show">
                            {/* {this.props.children} */}
                            {React.Children.map(this.props.children, children => children)}
                        </div>
                    ) : null
                }
            </div>
        );
    }
};

export default Collapse;

