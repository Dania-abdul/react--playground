import React from 'react';
import './index.css';

import TimeLine from './components/timeline';
import SearchPanel from './components/searchpanel';
import ClickCounter from './components/clickcounter';
import MouseMover from './components/mousemover';
import ObjectCollaps from './components/collapse';
import DataRepeater from './components/datarepeater';
import PromiseTime from './promises/promisetime';
import MobXModel from './components/mobxmodel';

export class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            activeCollapse: 'compo8'
        };
    }

    handleExpandCollaps = (name) => {
        if (this.state.activeCollapse === name) {
          //If collapsiable is already visible and clicked/opened on this name then this will hide it 
            this.setState({ activeCollapse: '' })
        } else {
            //To assign new collapsiable
            this.setState({ activeCollapse: name })
        }
      }

    render() {
      return (
          
       <div className="main--page">
        <div className="main__header">
            <h1>React Components</h1>
        </div>
        <div className="main__container">
            {[
            (index) => <div key="{section1}" className="project-section ">
                <button className="project-section__header" onClick={() => this.handleExpandCollaps(`compo${index}`)}  data-id={`compo${index}`}>React Component {index}</button>
                <div className={`project-section__content ${this.state.activeCollapse === `compo${index}` ? 'item-active' : ''}`}  >
                    <ClickCounter />
                </div>
            </div>,
            (index) => <div key="{section2}" className="project-section ">
                <button className="project-section__header" onClick={() => this.handleExpandCollaps(`compo${index}`)}  data-id={`compo${index}`}>React Component {index}</button>
                <div className={`project-section__content ${this.state.activeCollapse === `compo${index}` ? 'item-active' : ''}`}  >
                    <p className="project-section__text">Panel - passing list data object + refresh data + limit display + clock</p>
                    <TimeLine />  
                </div>
            </div>,
            (index) => <div key="{section3}" className="project-section ">
                <button className="project-section__header" onClick={() => this.handleExpandCollaps(`compo${index}`)}  data-id={`compo${index}`}>React Component {index}</button>
                <div className={`project-section__content ${this.state.activeCollapse === `compo${index}` ? 'item-active' : ''}`}  >
                    <p className="project-section__text">Panel - search panel </p>
                    <SearchPanel />  
                </div>
            </div>,
            (index) => <div key='{section4}' className="project-section ">
                <button className="project-section__header" onClick={() => this.handleExpandCollaps(`compo${index}`)}  data-id={`compo${index}`}>React Component {index}</button>
                <div className={`project-section__content ${this.state.activeCollapse === `compo${index}` ? 'item-active' : ''}`}  >
                    <MouseMover />  
                </div>
            </div>,
            (index) => <div key="{section5}" className="project-section ">
                <button className="project-section__header" onClick={() => this.handleExpandCollaps(`compo${index}`)}  data-id={`compo${index}`}>React Component {index}</button>
                <div className={`project-section__content ${this.state.activeCollapse === `compo${index}` ? 'item-active' : ''}`}  >
                    <ObjectCollaps />  
                </div>
            </div>,
            (index) => <div key="{section6}" className="project-section ">
                <button className="project-section__header" onClick={() => this.handleExpandCollaps(`compo${index}`)}  data-id={`compo${index}`}>React Component {index}</button>
                <div className={`project-section__content ${this.state.activeCollapse === `compo${index}` ? 'item-active' : ''}`}  >
                    <DataRepeater />
                </div>
            </div>,
            (index) => <div key="{section7}" className="project-section ">
                <button className="project-section__header" onClick={() => this.handleExpandCollaps(`compo${index}`)}  data-id={`compo${index}`}>React Component {index}</button>
                <div className={`project-section__content ${this.state.activeCollapse === `compo${index}` ? 'item-active' : ''}`}  >
                    <PromiseTime />
                </div>
            </div>,
            (index) => <div key="{section8}"  className="project-section ">
                <button className="project-section__header" onClick={() => this.handleExpandCollaps(`compo${index}`)}  data-id={`compo${index}`}>React Component {index}</button>
                <div className={`project-section__content ${this.state.activeCollapse === `compo${index}` ? 'item-active' : ''}`}  >
                    <MobXModel />
                </div>
            </div>
            ].map((comp, index) =>{
                return comp(index + 1)
            })}
        </div>
     </div>  
      )
    }
  }
  export default Layout;

  

  