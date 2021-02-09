import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'


import Layout from '../Layout';
import {data} from '../data';

import Clock from './clock';

export class TimeLine extends React.Component {

    constructor(props) {
        super(props);
        this.state = { refreshing : false};
    } 

    // Bound to the refresh button
    refresh() {
        this.setState({ refreshing: true });
    }

    // Callback from the `Content` component
    onComponentRefresh() {
        this.setState({ refreshing: false });
    }

    render(){
        const { refreshing } = this.state;
        return (
            
            <div className="notificationsFrame">
                <div className="panel">
                        <Header  title="Timeline"  />
                        {/* refreshing is the component's state */}
                        <Content 
                            onComponentRefresh={this.onComponentRefresh.bind(this)}
                            requestRefresh={refreshing}
                        />
                        <Footer>
                            <button onClick={this.refresh.bind(this)}> <i className="fa fa-refresh" />Refresh</button>
                        </Footer>
                </div>
            </div>
        );
    }
}

export default TimeLine;

class Footer extends React.Component {
    render() {
        return ( <div className="footer">{this.props.children} </div>) 
    }
}

  class Header extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        searchVisible: false
      }
    }

    // toggle visibility when run on the state
    showSearch(){
      this.setState({
        searchVisible: !this.state.searchVisible
      })
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
          <Clock />
          <SearchForm searchVisible={this.state.searchVisible} onSubmit={this.props.onSearch}/>
  
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
  }

  class SearchForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        searchText: ""
      };
    }

    updateSearchInput(e) {
      //The value is held on the event object's target as event.target.value
      const val = e.target.value;
      this.setState({
        searchText : val
      });
    }
    //the default function when a browser submits a form
    submitForm(event) {
      event.preventDefault();
      // call the callback with the search value
      this.props.onSubmit(this.state.searchText);
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
            value={this.state.searchText}
            placeholder="Search ..."
          />
        </form>
      );
    }
  }
  
  SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    searchVisible: PropTypes.bool
  }

  SearchForm.defaultProps = {
    onSubmit: () => {},
    searchVisible: false
  };
  
  class Content extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
            activities:[],
            loading: false // <~ set loading to false
        };
    }

    componentWillMount() {
        this.updateData();
      }

    componentWillReceiveProps(nextProps) {
        // Check to see if the requestRefresh prop has changed
        if (nextProps.requestRefresh === true) {
            this.setState({ loading: true }, this.updateData);
        }
    }

    // Call out to  data and refresh directory
    updateData() {
        this.setState(
          {
            loading: false,
            activities: data.sort(() => 0.5 - Math.random()).slice(0, 4)
          },
          this.props.onComponentRefresh
        );
    }
    
    render() {
      const { loading, activities } = this.state;
      
      return (
          <div className="content">
            <div className="line"></div>
            {/* Timeline it em */}
            {activities.map(activity => (
              <ActivityItem activity={activity} />
              ))}
          </div>
      )
    }
  }

  class ActivityItem extends React.Component {
    render() {
      const { activity } = this.props;
   
      return (
        <div className='item'>
          <div className='avatar'>
            <img
              alt='avatar'
              src={activity.actor.avatar_url} />
          </div>
  
          <span className='time'>
          </span>
          
          <p>{activity.actor.display_login} {activity.payload.action}</p>
          <div className='right'>
            {activity.repo.name}
          </div>
        </div>
      )
    }
  }
    
    const activities = [
      {
        timestamp: new Date().getTime(),
        text: "Ate lunch",
        user: {
          id: 1, name: 'Nate',
          avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
        },
        comments: [{ from: 'Ari', text: 'Me too!' }]
      },
      {
        timestamp: new Date().getTime(),
        text: "Woke up early for a beautiful run",
        user: {
          id: 2, name: 'Ari',
          avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
        },
        comments: [{ from: 'Nate', text: 'I am so jealous' }]
      },
    ]