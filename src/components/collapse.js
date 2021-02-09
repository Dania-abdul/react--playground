

import React from 'react';
import ReactDOM from 'react-dom';

import Layout from '../Layout';


export class ObjectCollaps extends React.Component {
  render() {
      return (
          <div>
              <SingleCollaps />
              <MultipeCollaps />
          </div>
          );
  }
}
export default ObjectCollaps;


class SingleCollaps extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          open : false
      }
      this.togglePanel = this.togglePanel.bind(this);
  }
  togglePanel(e){
      this.setState({open: !this.state.open})
  }
  render() {
    return(
        <div className="collaps-single">
            <p className="collapse__desc">this is handle one object expand (show/hide)  similer to the search input</p>
            <button onClick={(e)=>this.togglePanel(e)} className='collaps-single__header'>
                click to expand
            </button >
            {this.state.open ? ( 
                <div className='collaps-single__content'>
                    content
                </div>
            ) : null}
      </div>);
  }
}

class MultipeCollaps extends React.Component {
  moreInfoClick = (e) => {
    e.stopPropagation();
    console.log("clicked");
  }
  
  render() {
    return (
      <div className="collapse-multi">
        <p className="collapse__desc"> expant list </p>
        <CollapseList />
      </div>
    );
  }
}

export class CollapseList extends React.Component {
  constructor() {
    super();
    this.state = {
        activeCollapse: 'circulars'
    };
  }

  handleExpandCollaps = (name) => {
    if (this.state.activeCollapse === name) {
      //If collapsiable is already visible and clicked on same then this will hide it
        this.setState({ activeCollapse: '' })
    } else {
        //To show collapsiable
        this.setState({ activeCollapse: name })
    }
  }

  render() {
    return (
      <div className="col-multi__nav">
        <div className="col-multi__nav-menu">
          <div className={`col-multi__nav-menu-item ${this.state.activeCollapse === "circulars" ? 'item-active' : ''}`} onClick={() => this.handleExpandCollaps("circulars")} data-id="circulars" >
            <div className="col-multi__nav-menu-item-head">
              <span className="col-multi__nav-menu-item-head-title">Circulars</span>
              <span className="col-multi__nav-menu-item-head-help">
                <button type="button" className="btn-help" onClick={this.moreInfoClick}>View more info</button>
              </span>
            </div>
            <div className="col-multi__nav-menu-item-body">BODY CONTENT HERE</div>
          </div>

          <div className={`col-multi__nav-menu-item ${this.state.activeCollapse === "specifications" ? 'item-active' : ''}`} onClick={() => this.handleExpandCollaps("specifications")} data-id="specifications">
            <div className="col-multi__nav-menu-item-head">
              <span className="col-multi__nav-menu-item-head-title">Specifications</span>
              <span className="col-multi__nav-menu-item-head-help">
                <button type="button" className="btn-help" onClick={this.moreInfoClick}>View more info</button>
              </span>
            </div>
            <div className="col-multi__nav-menu-item-body">BODY CONTENT HERE</div>
          </div>


          <div className={`col-multi__nav-menu-item ${this.state.activeCollapse === "wo" ? 'item-active' : ''}`} onClick={() => this.handleExpandCollaps("wo")} data-id="wo">
            <div className="col-multi__nav-menu-item-head">
              <span className="col-multi__nav-menu-item-head-title">Work Orders</span>
              <span className="col-multi__nav-menu-item-head-help">
                <button type="button" className="btn-help" onClick={this.moreInfoClick}>View more info</button>
              </span>
            </div>
            <div className="col-multi__nav-menu-item-body">BODY CONTENT HERE</div>
          </div>

        </div>
      </div>
    )
  }

}