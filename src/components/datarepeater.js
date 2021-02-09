
import React from 'react';
import ReactDOM from 'react-dom';


export class DataRepeater extends React.Component {
    


    render() {
        const a =  [1, 10, 100, 1000, 10000];
        const ShowA = () => <div>{a}</div>;
        const Repeater = () => {
            return (
                <ul>
                    {React.Children.map(a, i => {
                        return <li key={i}>{i}</li>
                    })}
                </ul>
            );
        }
        return (
            <div>
                <p className="project-section__text">Show single constant</p> 
                <ShowA />
                <br/>
                <p className="project-section__text">Show list content using .map function</p> 
                <Repeater />
            </div>
            
      );
    }
  }

  export default DataRepeater;