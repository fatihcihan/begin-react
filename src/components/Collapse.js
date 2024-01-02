import React from 'react';

// Class component
class Collapse extends React.Component {

    state = { showContent: false }

    // console.log(this);  // Collapse objects

    /* this.showMore = () => {
        console.log(this);
    } */

    // this.showMore = this.showMore.bind(this);   // connect this to this in showMore (will reference the collapse object)


    showMore = () => {
        // console.log(this);
        this.setState({ showContent: !this.state.showContent });

        /*  this.state = {       // Do not mutate state directly. Use setState()
             showContent: true
         } */
    }

    /*  componentDidMount() {
         console.log('component created');
     }
 
     componentDidUpdate() {
         console.log('component updated');
     } */

    /* showMore() {
        this.setState({ showContent: true });
        // console.log(this);  // undefined
    } */

    render() {
        // console.log(this);   // Collapse objects
        // console.log('render worked');
        return (
            <div>
                <button className="btn btn-primary w-100" onClick={this.showMore}>
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

