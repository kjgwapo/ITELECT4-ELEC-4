import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Dashboard from '../Dashboard';
import Home from '../Home';

import './styles.css'; 

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
          <div className="search-bar">
          <input type="text" placeholder="Search for movies..." />
          <button onClick={this.handleSearch}>Search</button>
        </div>
        <nav className="navbar navbar-dark bg-success">
          <div className="container">
            <Link to="/" className="navbar-brand" onClick={() => this.handleNavigationClick('home')}>
              Animelist
            </Link>
            <Link to="/home" className={this.state.activePage === 'home' ? "nav-link active" : "nav-link"} style={{ ...navLinkStyle, marginRight: '10px' }} onClick={() => this.handleNavigationClick('home')}>
              Home
            </Link>
            <Link to="/dashboard" className={this.state.activePage === 'dashboard' ? "nav-link active" : "nav-link"} style={{ ...navLinkStyle, marginRight: '10px' }} onClick={() => this.handleNavigationClick('dashboard')}>
              Dashboard
            </Link>
            
          </div>
        </nav>

      

        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/home" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default Main;
