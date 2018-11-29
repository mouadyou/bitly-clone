import React, { Component } from 'react';
import HomeView from './pages/HomeView'
import LoginView from './pages/LoginView'
import { Router } from '@reach/router'
import Navigation from './components/navigation'
import SideBar, { Shader, Spacer } from './components/sidebar'

import './App.css';
import RegisterView from './pages/RegisterView';

class App extends Component {
  state = {
    navigationLinks: [
      {
        url: '/about',
        label: 'About'
      }, {
        url: '/contact',
        label: 'Contact'
      }, {
        url: '/login',
        label: 'Login'
      }, {
        url: '/register',
        label: 'Register'
      },
    ],
    sidebar: {
      links: [],
      isOpen: false
    }
  }
  openSidebar = () => {
    this.setState({
      sidebar: {
        links: [],
        isOpen: true
      }
    })
  }
  closeSidebar = () => {
    console.log('close sidebar')
    this.setState(state => {
      return { sidebar: { ...state.sidebar, isOpen: false } }
    })
  }
  render() {
    return (
      <div className="app">
        <Navigation links={this.state.navigationLinks} />
        <SideBar
          links={this.state.sidebar.links}
          isOpen={this.state.sidebar.isOpen}
        />
        <div>

          <Spacer isShowing={this.state.sidebar.isOpen} dispose={this.closeSidebar} />
          <Router>
            <HomeView path="/" onClick={this.openSidebar} />
            <LoginView path="/login" />
            <RegisterView path="/register" />
          </Router>
        </div>
        <Shader
          isShowing={this.state.sidebar.isOpen}
          dispose={this.closeSidebar} />
      </div>
    );
  }
}

export default App;
