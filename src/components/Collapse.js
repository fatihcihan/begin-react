import React from "react";

class Collapse extends React.Component {
    constructor() {
        super();

        this.state = {
            showContent: false
        }

        // this.showMore = this.showMore.bind(this);
    }


    showMore = () => {
        // console.log(this);
        this.setState({ showContent: !this.state.showContent })
   
    }

    // showMore() {
    //     // console.log(this);       undefined
    // }  

    render() {
        return (
            <div>
                <button onClick={this.showMore} className="btn btn-primary w-100" >
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

