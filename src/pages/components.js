import React from 'react';

import TimeLine from '../components/timeline';
import SearchPanel from '../components/searchpanel';
import ClickCounter from '../components/clickcounter';
import MouseMover from '../components/mousemover';
import ObjectCollaps from '../components/collapse';
import DataRepeater from '../components/datarepeater';
import PromiseTime from '../promises/promisetime';
import MobXModel from '../components/mobxmodel';
import FilterSearch from '../components/FilterSearch';

export class Components extends React.Component {
    constructor() {
        super();
        this.state = {
            activeCollapse: 'compo9'
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
        <div>
            <h3>Search Components</h3>
            {[
            (index) => <div key="{section1}" className="project-section ">
                <button className="project-section__header" onClick={() => this.handleExpandCollaps(`compo${index}`)}  data-id={`compo${index}`}>{index} - Click Counter</button>
                <div className={`project-section__content ${this.state.activeCollapse === `compo${index}` ? 'item-active' : ''}`}  >
                    <ClickCounter />
                </div>
            </div>,
            (index) => <div key="{section2}" className="project-section ">
                <button className="project-section__header" onClick={() => this.handleExpandCollaps(`compo${index}`)}  data-id={`compo${index}`}>{index} - Time Line</button>
                <div className={`project-section__content ${this.state.activeCollapse === `compo${index}` ? 'item-active' : ''}`}  >
                    <p className="project-section__text">Panel - passing list data object + refresh data + limit display + clock</p>
                    <TimeLine />  
                </div>
            </div>,
            (index) => <div key="{section3}" className="project-section ">
                <button className="project-section__header" onClick={() => this.handleExpandCollaps(`compo${index}`)}  data-id={`compo${index}`}>{index} - search panel</button>
                <div className={`project-section__content ${this.state.activeCollapse === `compo${index}` ? 'item-active' : ''}`}  >
                    <p className="project-section__text">Panel - search panel </p>
                    <SearchPanel />  
                </div>
            </div>,
            (index) => <div key='{section4}' className="project-section ">
                <button className="project-section__header" onClick={() => this.handleExpandCollaps(`compo${index}`)}  data-id={`compo${index}`}>{index} - Mouse Mover</button>
                <div className={`project-section__content ${this.state.activeCollapse === `compo${index}` ? 'item-active' : ''}`}  >
                    <MouseMover />  
                </div>
            </div>,
            (index) => <div key="{section5}" className="project-section ">
                <button className="project-section__header" onClick={() => this.handleExpandCollaps(`compo${index}`)}  data-id={`compo${index}`}>{index} - Object Collaps</button>
                <div className={`project-section__content ${this.state.activeCollapse === `compo${index}` ? 'item-active' : ''}`}  >
                    <ObjectCollaps />  
                </div>
            </div>,
            (index) => <div key="{section6}" className="project-section ">
                <button className="project-section__header" onClick={() => this.handleExpandCollaps(`compo${index}`)}  data-id={`compo${index}`}>{index} - Data Repeater </button>
                <div className={`project-section__content ${this.state.activeCollapse === `compo${index}` ? 'item-active' : ''}`}  >
                    <DataRepeater />
                </div>
            </div>,
            (index) => <div key="{section7}" className="project-section ">
                <button className="project-section__header" onClick={() => this.handleExpandCollaps(`compo${index}`)}  data-id={`compo${index}`}>{index} - Promise Time</button>
                <div className={`project-section__content ${this.state.activeCollapse === `compo${index}` ? 'item-active' : ''}`}  >
                    <PromiseTime />
                </div>
            </div>,
            (index) => <div key="{section8}"  className="project-section ">
                <button className="project-section__header" onClick={() => this.handleExpandCollaps(`compo${index}`)}  data-id={`compo${index}`}>{index} - MobX Model</button>
                <div className={`project-section__content ${this.state.activeCollapse === `compo${index}` ? 'item-active' : ''}`}  >
                    <MobXModel />
                </div>
            </div>,
            (index) => <div key="{section9}"  className="project-section ">
                <button className="project-section__header" onClick={() => this.handleExpandCollaps(`compo${index}`)}  data-id={`compo${index}`}>{index} - Search Filter eith Class</button>
                <div className={`project-section__content ${this.state.activeCollapse === `compo${index}` ? 'item-active' : ''}`}  >
                    <FilterSearch />
                </div>
            </div>
            ].map((comp, index) =>{
                return comp(index + 1)
            })}
        </div> 
      )
    }
}
export default Components;

  

  