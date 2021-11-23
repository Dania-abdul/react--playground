import React from 'react';

export class ClickCounter extends React.Component {
    constructor(props) {
        super(props);
        //here i am binding the function updated value to this value 
        this.handleClick = this.handleClick.bind(this);
        this.resetClick = this.resetClick.bind(this);
        //here i am giving the state a value
        this.state = {
            clicks: 0
        }
    };

    resetClick() {
        this.setState({
            clicks: 0
        })
    }

    //(in component)handleClick function 
    handleClick() {
        //clicks: clicks + 1 + seting the value as a state 
        this.setState({
            clicks: this.state.clicks + 1
        });
    }

    handleStopstopPropagation(event) {
        event.stopPropagation();
    }
    
    render(){
        return(
            <div onClick={this.handleStopstopPropagation} className="counter"> 
                <p>Click to counter</p>
                <button onClick={this.handleClick}>{this.state.clicks}</button>
                <button onClick={this.resetClick}> reset</button>
            </div>
        );
    }
}

export default ClickCounter;