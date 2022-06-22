
import React  from 'react';
import {
  Input
} from "mdbreact";

import "./flags.min.css";
import countriesList from "./countries.json";

export class FilterSearch extends React.Component {
  constructor(props) {
    super(props);
  };
    
  state = {
    search: ""
  };


    renderCountryElement = country => {
      return (
        <div>
            {country.name}
        </div>
      );
    };

    onchange = e => {
      this.setState({ search: e.target.value });
    };

    render() {
      const { search } = this.state;
      const filteredCountries = countriesList.filter(country => {
        return country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      })

      return (
        <div>
          <p> for now do this with classes</p>
          <p> then do this with function and useStat here <a href="https://levelup.gitconnected.com/how-to-search-filter-through-data-in-react-26f1545fe3a1">link</a></p>
            <div className="container">
              <div className="input">
                <Input
                  label="Search Country"
                  icon="search"
                  onChange={this.onchange}
                />
              </div>
              <div class="list-wrap">
                {filteredCountries.map(country => {
                  return this.renderCountryElement(country)
                })}
              </div>
            </div>
            <p>
              &copy; {new Date().getFullYear()} Copyright
            </p>
        </div>
      );
    }
  }

  export default FilterSearch;
