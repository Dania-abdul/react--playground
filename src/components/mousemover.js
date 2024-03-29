import React from 'react';


export class MouseMover extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mounted: false };
    }

    state = {
        x: 0,
        y: 0
    };

    handleMouseMove = e => {
        this.setState({
            x: e.clientX,
            y: e.clientY
        });
    };

    render() {

        return (
            <div onMouseMove={this.handleMouseMove}>
              {this.state.x || this.state.y
                ? "The mouse is at x: " + this.state.x + ", y: " + this.state.y
                : "Move the mouse over this box"}
            </div>
          );
    }
}

export default MouseMover;