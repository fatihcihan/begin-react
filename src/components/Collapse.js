import React from 'react';

// Class component
class Collapse extends React.Component {

    constructor() {
        super();
        this.state = {
            showContent: false
        }
        // console.log(this);  // Collapse objects

        this.showMore = () => {
            console.log(this);
        }
    };

    /* showMore() {
        // this.setState({ showContent: true });
        console.log(this);  // undefined
    } */

    render() {
        // console.log(this);   // Collapse objects
        return (
            <div>
                <button className="btn btn-primary w-100" onClick={this.showMore}>
                    Link with href
                </button>
                {
                    this.state.showContent ? (
                        <div className="collapse show">
                            {this.props.children}
                        </div>
                    ) : null
                }
            </div>
        );
    }
};

export default Collapse;

