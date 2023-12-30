import React from 'react';

// Class component
class Collapse extends React.Component {

    constructor() {
        super();
        this.state = {
            showContent: 'test content'
        }
    };

    render() {
        return (
            <div>
                <a className="btn btn-primary w-100" data-bs-toggle="collapse" href={"#".concat(this.props.href)} role="button" aria-expanded="false" aria-controls="collapseExample">
                    Link with href
                </a>
                <div className="collapse show" id={this.props.href}>
                    {this.props.children}
                    {this.state.showContent}
                </div>
            </div>
        );
    }
};

export default Collapse;

