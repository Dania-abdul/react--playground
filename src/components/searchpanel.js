import React from 'react';
import PropTypes from 'prop-types'

import {data} from '../data';


export class SearchPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activities: data
        };
    }

    handleSearch(val) {
    // resets the data if the search value is empty
    if (val === "") {
        this.setState({
        activities: data
        });
    } else {
            const { activities } = this.state;
            const filtered = activities.filter(
            a => a.actor && a.actor.login.match(val)
            );
            this.setState({
            activities: filtered
            });
        }
    }
    
    render() {
        const { activities } = this.state; // ES6 destructuring
        return (
          <div  className="notificationsFrame">
            <div className="panel" >
              <Header
                title="Github activity"
                onSearch={this.handleSearch.bind(this)}
              />
              <div className="content">
                <div className="line" />
                {/* Timeline item */}
                {activities.map(activity => (
                  <ActivityItem key={activity.id} activity={activity} />
                ))}
              </div>
            </div>
          </div>
        );
      }
    }

export default SearchPanel;

class SearchForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        searchText: ""
      };
    }

    submitForm(event) {
      event.preventDefault();
      // prevent the form from reloading the entire page
      event.preventDefault();
      // call the callback with the search value
      this.props.onSubmit(this.state.searchText);
    }

    updateSearchInput(e) {
      const val = e.target.value;
      this.setState({
        searchText: val
      });
    }

    render() {
      const { searchVisible } = this.props;
      let searchClasses = ["searchInput"];
      if (searchVisible) {
        searchClasses.push("active");
      }

      return (
        <form onSubmit={this.submitForm.bind(this)}>
          <input
            type="search"
            className={searchClasses.join(" ")}
            onChange={this.updateSearchInput.bind(this)}
            placeholder="Search ..."
          />
        </form>
      );
    }
  }

SearchForm.propTypes = {
    searchVisible: PropTypes.bool,
    onSubmit: PropTypes.func.isRequired
};

SearchForm.defaultProps = {
    searchVisible: false,
    onSubmit: () => {}
};



class Header extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        searchVisible: false
      };
    }

    // toggle visibility when run on the state
    showSearch() {
      this.setState({
        searchVisible: !this.state.searchVisible
      });
    }

    render() {
      return (
        <div className="header">
          <div className="menuIcon">
            <div className="dashTop"></div>
            <div className="dashBottom"></div>
            <div className="circle"></div>
          </div>

          <span className="title">{this.props.title}</span>

          <SearchForm
            searchVisible={this.state.searchVisible}
            onSubmit={this.props.onSearch}
          />

          {/* Adding an onClick handler to call the showSearch button */}
          <div
            onClick={this.showSearch.bind(this)}
            className="fa fa-search searchIcon"
          ></div>
        </div>
      );
    }
  }

  Header.propTypes = {
    onSearch: PropTypes.func
  };

  class ActivityItem extends React.Component {
    render() {
      const { activity } = this.props; // ES6 destructuring

      return (
        <div className="item">
          <div className={"avatar"}>
            <img alt="avatar" src={activity.actor.avatar_url} />
          </div>

          <span className={"time"}>
          </span>

          <p>
            {activity.actor.display_login} {activity.payload.action}
          </p>
          <div className={"right"}>{activity.repo.name}</div>
        </div>
      );
    }
  }