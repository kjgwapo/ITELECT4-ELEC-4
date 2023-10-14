import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Dashboard from '../Dashboard';
import Home from '../Home';

import './custom-styles.css'; // Use your own CSS file

class Main extends Component {
  state = { activePage: '' };

  componentDidMount() {
    this.setState({
      activePage: 'home',
    });
  }

  handleNavigationClick = (page) => {
    this.setState({
      activePage: page,
    });
  }

  handleSearch = () => {
    // Handle movie search using a movie API
    // You can make an API request to search for movies based on user input
  }

  render() {
    const navLinkStyle = {
      color: 'white',
      fontSize: '18px',
      textDecoration: 'none',
    };

    const backgroundStyle = {
      backgroundImage: `url('your-background-image-url-here')`,
      backgroundSize: 'cover',
      minHeight: '100vh',
      backgroundRepeat: 'no-repeat',
    };

    return (
      <div style={backgroundStyle}>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container">
            <Link to="/" className="navbar-brand" onClick={() => this.handleNavigationClick('home')}>
              MovieHub
            </Link>
            <Link to="/home" className={this.state.activePage === 'home' ? "nav-link active" : "nav-link"} style={{ ...navLinkStyle, marginRight: '10px' }} onClick={() => this.handleNavigationClick('home')}>
              Home
            </Link>
            <Link to="/dashboard" className={this.state.activePage === 'dashboard' ? "nav-link active" : "nav-link"} style={{ ...navLinkStyle, marginRight: '10px' }} onClick={() => this.handleNavigationClick('dashboard')}>
              Dashboard
            </Link>
          </div>
        </nav>

        <div className="search-bar">
          <input type="text" placeholder="Search for movies..." />
          <button onClick={this.handleSearch}>Search</button>
        </div>

        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/home" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default Main;
